import React, { useMemo } from "react";
import foodItems, { categories, restaurants } from "../mockData";
import "./MainContent.css";

const StarRating = ({ rating }) => (
  <span className="mc-stars">
    {"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))}
    <span className="mc-rating-num">{rating}</span>
  </span>
);

const MainContent = ({ activeNav, searchQuery, setSearchQuery, activeCategory, setActiveCategory, onAddToCart, liveOrders }) => {
  // Shuffle items once on mount so they appear randomly but stay in place during a session
  const shuffledItems = useMemo(() => {
    return [...foodItems].sort(() => Math.random() - 0.5);
  }, []);

  // Filter logic based on search OR category
  const filtered = shuffledItems.filter((f) => {
    const matchesSearch = f.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          f.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || f.category.toLowerCase() === activeCategory.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  const OrderTable = () => (
    <div className="mc__table-wrap">
      <table className="mc__table">
        <thead>
          <tr>
            <th>Profile</th>
            <th>Order number</th>
            <th>Address</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {liveOrders.map((order) => (
            <tr key={order.id}>
              <td>
                <div className="mc__customer">
                  <div className="mc__avatar">
                    {order.avatar.startsWith("http") ? (
                      <img src={order.avatar} alt="Avatar" className="mc__avatar-img" />
                    ) : (
                      order.avatar
                    )}
                  </div>
                  <span>{order.customer}</span>
                </div>
              </td>
              <td className="mc__order-id">{order.id}</td>
              <td>{order.address}</td>
              <td className="mc__amount">{order.amount}</td>
              <td>
                <span className={`mc__status mc__status--${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </td>
              <td className="mc__time">{order.time || "Today"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  if (activeNav === "orders") {
    return (
      <div className="mc">
        <h2 className="mc__section-title">Order History</h2>
        <p className="mc__section-sub">Detailed report of all your past orders</p>
        <OrderTable />
      </div>
    );
  }

  if (activeNav === "restaurants") {
    return (
      <div className="mc">
        <h2 className="mc__section-title">Nearby Restaurants</h2>
        <div className="mc__dishes" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
          {restaurants.map(r => (
            <div key={r.id} className="mc__dish-card" style={{ padding: "65px 10px 20px" }}>
              <div className="mc__dish-emoji-top">
                {r.img.startsWith("http") ? (
                  <img src={r.img} alt={r.name} className={`mc__restaurant-logo ${r.scaledDown ? "mc__restaurant-logo--small" : ""}`} />
                ) : (
                  r.img
                )}
              </div>
              <h3 className="mc__dish-name">{r.name}</h3>
              <p className="mc__dish-starting">{r.type}</p>
              <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                <StarRating rating={r.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (activeNav === "finance") {
    const totalExpenditure = liveOrders.reduce((sum, order) => {
      const numericAmount = parseFloat(order.amount.replace("₹", "").replace(",", ""));
      return sum + numericAmount;
    }, 0);
    const averageOrderValue = liveOrders.length > 0 ? (totalExpenditure / liveOrders.length) : 0;

    return (
      <div className="mc">
        <h2 className="mc__section-title">Finance & Analytics</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
          <div className="mc__dish-card" style={{ padding: "24px" }}>
            <p className="mc__section-sub">Total Expenditure</p>
            <h2 style={{ fontSize: "2rem", margin: "10px 0" }}>₹ {totalExpenditure.toLocaleString("en-IN")}</h2>
            <p style={{ color: "#10b981", fontSize: "0.8rem" }}>↑ 12% from last month</p>
          </div>
          <div className="mc__dish-card" style={{ padding: "24px" }}>
            <p className="mc__section-sub">Average Order Value</p>
            <h2 style={{ fontSize: "2rem", margin: "10px 0" }}>₹ {Math.round(averageOrderValue).toLocaleString("en-IN")}</h2>
            <p style={{ color: "#10b981", fontSize: "0.8rem" }}>↑ 5% increase</p>
          </div>
          <div className="mc__dish-card" style={{ padding: "24px" }}>
            <p className="mc__section-sub">Rewards Earned</p>
            <h2 style={{ fontSize: "2rem", margin: "10px 0" }}>₹ 1,200</h2>
            <p style={{ color: "#f59e0b", fontSize: "0.8rem" }}>Ready to redeem</p>
          </div>
        </div>
        <h3 className="mc__section-title" style={{ marginTop: "30px" }}>Recent Transactions</h3>
        <OrderTable />
      </div>
    );
  }

  // Dashboard View (Default)
  return (
    <div className="mc">
      {/* Search Bar */}
      <div className="mc__search">
        <svg className="mc__search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          className="mc__search-input"
          type="text"
          placeholder="Search Restaurant, Food, Cuisine or a Dish"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Categories */}
      <section className="mc__section">
        <div className="mc__section-header">
          <div>
            <h2 className="mc__section-title">Categories</h2>
            <p className="mc__section-sub">10+ New Categories added this week</p>
          </div>
        </div>
        <div className="mc__categories">
          {/* Show All Button */}
          <div 
            className={`mc__category ${activeCategory === "All" ? "active" : ""}`}
            onClick={() => setActiveCategory("All")}
          >
            <div className="mc__category-icon">🍽️</div>
            <span className="mc__category-name">Show All</span>
          </div>

          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className={`mc__category ${activeCategory === cat.name ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.name)}
            >
              <div className="mc__category-icon">{cat.emoji}</div>
              <span className="mc__category-name">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Dishes Slider */}
      <section className="mc__section">
        <div className="mc__section-header">
          <div>
            <h2 className="mc__section-title">Dishes</h2>
            <p className="mc__section-sub">Pick your favorite meal</p>
          </div>
        </div>
        <div className="mc__dishes">
          {filtered.length === 0 ? (
            <p className="mc__empty-msg">No dishes found in this category 😕</p>
          ) : (
            filtered.map((dish) => (
              <div key={dish.id} className="mc__dish-card">
                <div className="mc__dish-emoji-top">
                  {dish.transparentImg && dish.transparentImg.startsWith("http") ? (
                    <img src={dish.transparentImg} alt={dish.name} className="mc__dish-img" />
                  ) : (
                    dish.transparentImg || "🍽️"
                  )}
                </div>
                
                <div className="mc__dish-body">
                  <h3 className="mc__dish-name">{dish.name}</h3>
                  <p className="mc__dish-starting">Starting from</p>
                  <p className="mc__dish-price">₹ {dish.startingFrom.toFixed(2)}</p>
                  <div className="mc__dish-meta">
                    <StarRating rating={dish.rating} />
                    <span className="mc__dish-sales">{dish.totalSale.toLocaleString()} <span className="mc__dish-sales-label">Total Sale</span></span>
                  </div>
                  <button className="mc__dish-btn" onClick={() => onAddToCart(dish)}>
                    + Add to Cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Order Reports */}
      <section className="mc__section">
        <div className="mc__section-header">
          <div>
            <h2 className="mc__section-title">My Orders</h2>
            <p className="mc__section-sub mc__section-sub--red">Track Every Order, Make Every Decision Count</p>
          </div>
        </div>
        <OrderTable />
      </section>
    </div>
  );
};

export default MainContent;
