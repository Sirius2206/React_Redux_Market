import { ADD_PRODUCT } from "../actions/actions";
import { nanoid } from "nanoid";

const initialState = [{
    id: nanoid(),
    name: "Пельмени",
    price: 300,
    finalPrice: 285,
    discount: 5,
    img: "https://www.gastronom.ru/binfiles/images/20160506/b27984f0.jpg",
    src: "https://www.gastronom.ru/recipe/18597/russkie-pelmeni",
    description: "Но если хотите получить качественный и вкусный продукт, то потрудитесь немного и налепите их самостоятельно.",
}];

export default function productListReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            const {name, price, discount, description, img, src} = action.payload;
            const id = nanoid();
            const finalPrice = Math.round(price * (1 - discount / 100));
            return [...state, { id, name, price, finalPrice, discount, description, img, src}];
        default:
            return state;
    }
}