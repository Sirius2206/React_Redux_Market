import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, changeProductField } from "../actions/actions.js";

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
            required
          />
        </label>
        <label>
          <span>Описание товара</span>
          <input
            name="description"
            onChange={handleChange}
            value={item.description}
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
          />
        </label>
        <label>
          <span>Ссылка на изображение</span>
          <input name="img" onChange={handleChange} value={item.img} />
        </label>
        <label>
          <span>Ссылка на страницу товара</span>
          <input name="src" onChange={handleChange} value={item.src} />
        </label>
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default ProductAdd;
