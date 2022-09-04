import { CHANGE_PRODUCT_FIELD } from "../actions/actions";

const initialState = {
    img: '',
    price: '',
    discount: '',
    name: '',
    src: '',
    description: ''
}

export default function productAddReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_PRODUCT_FIELD:
            const {name, value} = action.payload;
            return {...state, [name]: value};
        default:
            return state;
    }
}