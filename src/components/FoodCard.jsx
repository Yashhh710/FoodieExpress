import { useState } from "react";
import "./FoodCard.css";

const StarRating = ({ rating }) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="stars">
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={
            i < full
              ? "star filled"
              : i === full && half
              ? "star half"
              : "star"
          }
        >
          ★
        </span>
      ))}
      <span className="rating-number">{rating}</span>
    </div>
  );
};

const FoodCard = ({ item, onAddToCart }) => {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="food-card">
      <div className="food-card__img-wrapper">
        <img src={item.image} alt={item.name} className="food-card__img" />
        <span className="food-card__badge">{item.category}</span>
      </div>
      <div className="food-card__body">
        <h3 className="food-card__name">{item.name}</h3>
        <StarRating rating={item.rating} />
        <div className="food-card__footer">
          <span className="food-card__price">${item.price.toFixed(2)}</span>
          <button
            className={`food-card__btn ${added ? "food-card__btn--added" : ""}`}
            onClick={handleAdd}
          >
            {added ? "✓ Added!" : "+ Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
