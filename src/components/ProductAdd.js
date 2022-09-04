import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, changeProductField } from "../store/actions/actions.js";

function ProductAdd() {
  const item = useSelector((state) => state.productAdd);
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    dispatch(changeProductField(name, value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addProduct(item));
  }

  return (
    <>
      <form className="form-add" onSubmit={handleSubmit}>
        <label>
          <span>Название</span>
          <input
            name="name"
            onChange={handleChange}
            value={item.name}
            placeholder="Название товара"
            required
          />
        </label>
        <label>
          <span>Описание товара</span>
          <input
            name="description"
            onChange={handleChange}
            value={item.description}
            placeholder="Краткое описание товара"
            required
          />
        </label>
        <label>
          <span>Цена</span>
          <input
            name="price"
            type="number"
            min="0"
            onChange={handleChange}
            value={item.price}
            placeholder="Цена товара"
          />
        </label>
        <label>
          <span>Скидка</span>
          <input
            name="discount"
            type="number"
            min="0"
            max="100"
            onChange={handleChange}
            value={item.discount}
            placeholder="Скидка (0-100)"
          />
        </label>
        <label>
          <span>Ссылка на изображение</span>
          <input
            name="img"
            onChange={handleChange}
            value={item.img}
            placeholder="Ссылка на изображение товара"
          />
        </label>
        <label>
          <span>Ссылка на страницу товара</span>
          <input name="src" onChange={handleChange} value={item.src} placeholder="Ссылка на страницу с товаром"/>
        </label>
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default ProductAdd;
