import React from "react";
import shoes from "../assets/shoe.jpg";
import { FaStar } from "react-icons/fa";
import { useOrder } from "../hooks/useOrder";
import { toast } from "react-toastify";
import { useAuth } from "../hooks/useAuth";
const ProductCard = ({
  id,
  photo = shoes,
  name = "Shoese",
  desc = "The best one",
  price = 23,
  ratings = 3,
}) => {
  const renderRatingStars = () => {
    const starArray = Array.from({ length: ratings }, (_, index) => index);
    return starArray.map((index) => (
      <FaStar key={index} className="text-yellow-400 inline-block" />
    ));
  };
  const { user } = useAuth();
    const { placeOrder } = useOrder();
   const handleOrder = () => {
     if (user) {
      placeOrder(productId=id , user,price)
     }
     else{
      toast.warn("Login to place an order!")
     }
   };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{name}</h2>
          <div className="">{renderRatingStars()}</div>
        </div>
        <p>{desc}</p>
        <div className="card-actions justify-between">
          <div className="items-center">${price}</div>
          <button className="btn btn-primary" onClick={handleOrder}>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
