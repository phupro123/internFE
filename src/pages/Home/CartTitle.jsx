import { useSelector } from 'react-redux';

const CartTitle = ({ totalPrice }) => {
    return (
        <div className="flex items-center justify-between space-x-4 w-full">
            <p>Your Cart</p>
            <p>${totalPrice.toFixed(2)}</p>
        </div>
    );
};

export default CartTitle;
