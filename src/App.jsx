import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import CartPanel from "./components/CartPanel";
import foodItems, { categories, orders as initialOrders, defaultCartItems } from "./mockData";
import "./App.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [activeNav, setActiveNav] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [liveCart, setLiveCart] = useState([]);
  const [liveOrders, setLiveOrders] = useState(initialOrders);
  
  // Theme state: dark, light, device
  const [themeMode, setThemeMode] = useState("dark");
  const [showSettings, setShowSettings] = useState(false);

  // Parallax background
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!isReady) {
      const interval = setInterval(() => {
        setLoadingProgress(prev => {
          const next = prev + Math.random() * 8;
          if (next >= 100) {
            clearInterval(interval);
            setTimeout(() => setIsReady(true), 300);
            return 100;
          }
          return next;
        });
      }, 150);
      return () => clearInterval(interval);
    }
  }, [isReady]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Set data-theme attribute on body
  useEffect(() => {
    let effectiveTheme = themeMode;
    if (themeMode === "device") {
      effectiveTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    }
    document.body.setAttribute("data-theme", effectiveTheme);
  }, [themeMode]);

  // Cart operations
  const handleAddToCart = (item) => {
    setLiveCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...item, qty: 1, desc: item.category, emoji: item.transparentImg || "🍽️" }];
    });
  };

  const handleConfirmOrder = (address, total) => {
    if (liveCart.length === 0) return;
    const newOrder = {
      id: "0" + Math.floor(Math.random() * 10000000000).toString(),
      customer: "Yash Tambade",
      avatar: "https://ui-avatars.com/api/?name=Yash+Tambade&background=e53935&color=fff",
      address: address || "My Current Location",
      amount: `₹${total.toLocaleString(undefined, { minimumFractionDigits: 2 })}`,
      status: "Completed",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setLiveOrders(prev => [newOrder, ...prev]);
    setLiveCart([]);
    alert("Order successful! Ride safely."); // Added a confirmation alert for UX
  };

  const incrementQty = (id) => {
    setLiveCart(prev => prev.map(i => i.id === id ? { ...i, qty: i.qty + 1 } : i));
  };

  const decrementQty = (id) => {
    setLiveCart(prev => 
      prev.map(i => i.id === id ? { ...i, qty: Math.max(0, i.qty - 1) } : i)
      .filter(i => i.qty > 0)
    );
  };

  return (
    <>
      {/* Professional Animated Loading Screen */}
      <div className={`app-loader app-loader--pro ${isLoaded ? "app-loader--hidden" : ""}`}>
        
        {/* Speed Motion Environment */}
        <div className="loader-speed-lane">
          <div className="speed-line sl-1"></div>
          <div className="speed-line sl-2"></div>
          <div className="speed-line sl-3"></div>
          <div className="speed-line sl-4"></div>
          <div className="speed-line sl-5"></div>
        </div>

        {/* Action Center - Custom Illustration */}
        <div className="loader-pro-scooter-wrap">
          <img 
            src={`${import.meta.env.BASE_URL}delivery-boy.png`} 
            alt="Delivery Boy" 
            className="loader-pro-img" 
          />
          <div className="loader-pro-shadow"></div>
        </div>

        {/* Refined Content */}
        <div className="loader-content-pro">
          <h1 className="loader-title-pro">Delivering <span style={{ color: "var(--accent-red)" }}>Your Food...</span></h1>
          
          <div className="app-loader__action-area">
            {!isReady ? (
              <div className="app-loader-progress-container-pro">
                <div className="app-loader__progress-bar-pro">
                  <div className="app-loader__progress-fill-pro" style={{ width: `${loadingProgress}%` }}></div>
                </div>
                <div className="app-loader__status-text">
                  <span>PREPARING MEAL</span>
                  <span>{Math.round(loadingProgress)}%</span>
                </div>
              </div>
            ) : (
              <button 
                className="app-loader__enter-btn-pro"
                onClick={() => setIsLoaded(true)}
              >
                Let's Eat!
              </button>
            )}
          </div>
        </div>
      </div>

      <div 
        className="parallax-bg"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      ></div>
      <div className="layout">
        <div className="layout__inner">
          <Sidebar 
            activeNav={activeNav} 
            onNavChange={setActiveNav} 
            onToggleSettings={() => setShowSettings(!showSettings)}
          />
          <MainContent 
            activeNav={activeNav}
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            onAddToCart={handleAddToCart}
            liveOrders={liveOrders} 
          />
          <CartPanel 
            liveCart={liveCart} 
            onIncrement={incrementQty}
            onDecrement={decrementQty}
            onClearCart={() => setLiveCart([])}
            onConfirmOrder={handleConfirmOrder}
          />
        </div>

        {/* Settings Modal */}
        {showSettings && (
          <div className="settings-modal" onClick={() => setShowSettings(false)}>
            <div className="settings-content" onClick={e => e.stopPropagation()}>
              <h3>Settings</h3>
              
              <div className="settings-section">
                <h4>User Data</h4>
                <div className="user-profile">
                  <div className="user-avatar">
                    <img src="https://ui-avatars.com/api/?name=Yash+Tambade&background=e53935&color=fff" alt="User" />
                  </div>
                  <div>
                    <p>Yash Tambade</p>
                    <p className="user-email">yashtambade56@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="settings-section">
                <h4>Theme</h4>
                <div className="theme-buttons">
                  <button className={themeMode === "light" ? "active" : ""} onClick={() => setThemeMode("light")}>Light</button>
                  <button className={themeMode === "dark" ? "active" : ""} onClick={() => setThemeMode("dark")}>Dark</button>
                  <button className={themeMode === "device" ? "active" : ""} onClick={() => setThemeMode("device")}>Device</button>
                </div>
              </div>
              
              <button className="settings-close" onClick={() => setShowSettings(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
