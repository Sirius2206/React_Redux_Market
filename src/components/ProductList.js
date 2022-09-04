import React from "react";
import { useSelector } from "react-redux";

export default function ProductList() {
  const itemsList = useSelector((state) => state.productList);
  return (
    <ul className="product-container">
      {itemsList.map((o) => (
        <li key={o.id}>
          {Number(o.discount) !== 0 ? (
            <div className="product-discount">{o.discount}%</div>
          ) : null}

          <div className="product-image">
            <img src={o.img} alt={o.description} />
          </div>

          <div className="product-info">
            <div>
              <span className="product-price">
                {o.finalPrice} <span className="currency">₽</span>
              </span>

              {o.price != o.finalPrice ? (
                <span className="product-fullprice">{o.price} ₽</span>
              ) : null}
            </div>

            <div>
              <a className="product-name" href={o.src}>
                {o.name}
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
