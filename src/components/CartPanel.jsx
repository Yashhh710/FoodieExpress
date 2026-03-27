import { useState, useEffect } from "react";
import "./CartPanel.css";

const CartPanel = ({ liveCart, onIncrement, onDecrement, onClearCart, onConfirmOrder }) => {
  const [activeTab, setActiveTab] = useState("delivery");
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [userAddress, setUserAddress] = useState("Locating...");

  useEffect(() => {
    let watchId = null;

    if ("geolocation" in navigator) {
      const handleLocationUpdate = async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          
          // Concept: Smoothly pan the map to keep user centered
          // if (mapInstance) mapInstance.panTo({ lat: latitude, lng: longitude }, { animate: true });
          // if (userMarker) userMarker.setPosition({ lat: latitude, lng: longitude });

          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
          const data = await res.json();
          if (data.display_name) {
            setUserAddress(data.display_name);
          } else {
            setUserAddress("Unknown Location. Click to edit.");
          }
        } catch (e) {
          setUserAddress("Unable to fetch location name. Click to edit.");
        }
      };

      const startWatching = (highAccuracy = true) => {
        return navigator.geolocation.watchPosition(
          handleLocationUpdate,
          (err) => {
            if (err.code === err.PERMISSION_DENIED) {
              setUserAddress("Location access denied. Click to edit.");
            } else if (highAccuracy) {
              // Signal might be weak, fallback to Power Saving mode gracefully
              if (watchId !== null) navigator.geolocation.clearWatch(watchId);
              watchId = startWatching(false);
            } else {
              setUserAddress("Location unavailable. Click to edit.");
            }
          },
          {
            enableHighAccuracy: highAccuracy,
            timeout: 10000,
            maximumAge: 0
          }
        );
      };

      // Start by requesting High Accuracy mode
      watchId = startWatching(true);
    } else {
      setUserAddress("Geolocation not supported. Click to edit.");
    }

    return () => {
      // Clean up sequence
      if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, []);

  const subTotal = liveCart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const deliveryCharge = activeTab === "delivery" ? 50 : 0;
  const discount = promoApplied ? 50 : 0;
  const total = liveCart.length > 0 ? subTotal + deliveryCharge - discount : 0;

  const handlePromo = () => {
    if (promoCode.trim().toUpperCase() === "TRYNEW") setPromoApplied(true);
  };

  const handleConfirmOrder = () => {
    if (liveCart.length === 0) return;
    setIsConfirming(true);
    setTimeout(() => {
      setIsConfirming(false);
      alert("✅ Your order is confirmed! Thank you for using FoodieExpress.");
      onClearCart();
      setPromoApplied(false);
      setPromoCode("");
    }, 2500);
  };

  return (
    <aside className="cart">
      {/* Delivery Address */}
      <div className="cart__address">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
          <p className="cart__address-label">{activeTab === "delivery" ? "DELIVERY ADDRESS" : "PICKUP LOCATION"}</p>
          <span className="cart__live-badge">
            <span className="cart__pulse-dot"></span>
            Live Location
          </span>
        </div>
        <div className="cart__address-row">
          <span className="cart__icon">📍</span>
          <span 
            style={{ lineHeight: "1.4", flex: 1, cursor: "text", outline: "none", borderBottom: "1px dashed #555" }}
            contentEditable="true"
            suppressContentEditableWarning={true}
            onBlur={(e) => setUserAddress(e.currentTarget.textContent)}
            title="Click to edit your location"
          >
            {userAddress}
          </span>
        </div>
        <div className="cart__address-row">
          <span className="cart__icon">🕐</span>
          <span>{activeTab === "delivery" ? "35 min (Live)" : "Ready in 15 min"}</span>
        </div>
      </div>

      {/* Cart Header */}
      <div className="cart__header">
        <div className="cart__header-left">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
          </svg>
          <span>Cart</span>
        </div>
        <span className="cart__order-id">Order ID. #1099</span>
      </div>

      {/* Tabs */}
      <div className="cart__tabs">
        <div 
          className="cart__tab-indicator"
          style={{ transform: `translateX(${["delivery", "dine in", "takeaway"].indexOf(activeTab) * 100}%)` }}
        />
        {["delivery", "dine in", "takeaway"].map((tab) => (
          <button
            key={tab}
            className={`cart__tab ${activeTab === tab ? "cart__tab--active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Items */}
      <div className="cart__items">
        {liveCart.length === 0 ? (
          <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: "0.8rem", padding: "20px 0" }}>Cart is empty</p>
        ) : (
          liveCart.map((item) => (
            <div key={item.id} className="cart__item">
              <div className="cart__item-emoji">
                {item.emoji && item.emoji.startsWith("http") ? (
                  <img src={item.emoji} alt={item.name} className="cart__item-img" />
                ) : (
                  item.emoji
                )}
              </div>
              <div className="cart__item-info">
                <p className="cart__item-name">{item.name}</p>
                <p className="cart__item-desc">{item.desc}</p>
                <div className="cart__item-qty">
                  <button className="cart__qty-btn" onClick={() => onDecrement(item.id)}>−</button>
                  <span>{item.qty}</span>
                  <button className="cart__qty-btn" onClick={() => onIncrement(item.id)}>+</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Promo */}
      <div className="cart__promo">
        <input
          className="cart__promo-input"
          placeholder="Promotion Code"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        />
        <button
          className={`cart__promo-btn ${promoApplied ? "cart__promo-btn--applied" : ""}`}
          onClick={handlePromo}
        >
          {promoApplied ? "✓ Applied" : "TRYNEW"}
        </button>
      </div>

      {/* Totals */}
      <div className="cart__totals">
        <div className="cart__total-row">
          <span>Sub Total</span>
          <span>₹{subTotal.toFixed(2)}</span>
        </div>
        {promoApplied && (
          <div className="cart__total-row cart__total-row--discount">
            <span>Discount</span>
            <span>−₹50.00</span>
          </div>
        )}
        <div className="cart__total-row">
          <span>Delivery Charge</span>
          <span>₹{liveCart.length > 0 ? deliveryCharge.toFixed(2) : "0.00"}</span>
        </div>
        <div className="cart__total-row cart__total-row--total">
          <span>TOTAL</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </div>

      {/* Confirm */}
      <button 
        className="cart__confirm" 
        onClick={handleConfirmOrder} 
        disabled={liveCart.length === 0 || isConfirming}
      >
        {isConfirming ? "Processing..." : "Confirm Order"}
      </button>
    </aside>
  );
};

export default CartPanel;
