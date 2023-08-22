import React from "react";
import { ProductCard } from "../components";
import shoes from "../assets/shoe.jpg";

import {useProduct} from "../hooks/useProduct"
const Home = () => {
  const { products } = useProduct()
  return (
    <div>
      <div className="flex gap-3 flex-wrap justify-center">
        {products.map(({id, name, desc, photo, price, ratings }) => (
          <ProductCard id={id} name={name} desc={desc} photo={shoes} price={price} key={id}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
