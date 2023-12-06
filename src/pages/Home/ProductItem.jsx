import { useCallback } from 'react';
import checkIcon from '../../../app/assets/check.png';
import { useDispatch, useSelector } from 'react-redux';
import { addProductCart } from '../../redux/Cart/cartAction';

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart.products);
    
    let isAddedCart= products?.some((e)=>e._id === product._id)
 
    const handleAddCart = useCallback(() => {
        const data= {...product,quantity:1};
     
        dispatch(addProductCart(data))
    }, [product]);

    return (
        <div className="flex flex-col space-y-4">
            <div
                className="rounded-default h-66 w-full flex items-center justify-center"
                style={{ backgroundColor: product.color || '' }}
            >
                <img src={product.image} alt={product.name} className="w-full h-full -rotate-30 -mt-4 -ml-10 " />
            </div>
            <p className="font-bold text-black text-sm">{product.name}</p>
            <span className="text-xs text-gray">{product.description}</span>
            <div className="flex items-center justify-between">
                <div className="font-bold text-black">{`$${product.price}`}</div>
                {!isAddedCart ? (
                    <button className="rounded-default px-4 py-2 bg-yellow text-sm font-bold" onClick={handleAddCart}>
                        ADD TO CART
                    </button>
                ) : (
                    <div className="rounded-full w-9 h-9 bg-yellow flex items-center justify-center p-2">
                        <img src={checkIcon} alt="check" className="" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductItem;
