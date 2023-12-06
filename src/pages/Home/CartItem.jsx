import { useCallback, useEffect, useRef, useState } from 'react';
import minusIcon from '../../../app/assets/minus.png';
import plusIcon from '../../../app/assets/plus.png';
import trashIcon from '../../../app/assets/trash.png';
import { useDispatch } from 'react-redux';
import { editProductCart, removeProductCart } from '../../redux/Cart/cartAction';
import {motion, useAnimate} from "framer-motion"
const CartItem = ({ product }) => {
    
    const [quantity, setQuantity] = useState(product.quantity);
    const [scope, animate] = useAnimate()
    const dispatch = useDispatch();

    const handleDelete = useCallback(() => {
        const data = {
            _id:product._id
        }
        animate(scope.current, { scale:-1 }, { duration: 1 })
        dispatch(removeProductCart(data))
    }, []);

    const handleIncrease = useCallback(() => {
        setQuantity((prev) => prev + 1);
        const data = {
            _id:product._id,
            quantity:quantity+1
        }
        
        dispatch(editProductCart(data))
    }, [quantity]);

    const handleDecrease = useCallback(() => {
        if (quantity === 1) {
            handleDelete();
            return;
        }
        setQuantity((prev) => prev - 1);
        const data = {
            _id:product._id,
            quantity:quantity-1
        }
        dispatch(editProductCart(data))
    }, [quantity, handleDelete]);

    useEffect(() => {
        // set initial quantity from local
        
    }, []);

    return (
        
        <div ref={scope}className="flex items-cente space-x-6">
             <motion.div animate={{scale:1} } initial={{scale:0}} transition={{duration:0.5}}>
            <div
                className="relative rounded-full h-22.5 w-22.5 flex-none"
                style={{ backgroundColor: product.color || '' }}
            >
                <img src={product.image} alt={product.name} className="absolute h-30 w-30 -rotate-30 -top-6 -right-2" />
            </div>
             </motion.div>
            <div className="flex flex-col space-y-2 grow">
               <motion.div animate={{opacity:1,x:0} } initial={{x:20,opacity: 0}} transition={{duration:0.5,delay:0.5, name:"fade",ease: "linear" }}>
                <p className="font-bold text-black text-xs">{product.name}</p>
                </motion.div>
                <motion.div animate={{opacity:1,x:0} } initial={{x:20, opacity: 0}} transition={{duration:0.5,delay:0.5, name:"fade",ease: "linear" }}>
                <div className="font-bold text-black text">{`$${(product.price * quantity).toFixed(2)}`}</div>
                </motion.div>
                <motion.div animate={{scale:1} } initial={{scale:0}} transition={{duration:0.5,delay:1}}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <button
                            className="rounded-full w-7 h-7 bg-yellow flex items-center justify-center p-2"
                            onClick={handleDecrease}
                        >
                            <img src={minusIcon} alt="check" className="" />
                        </button>
                        <p>{quantity}</p>
                        <button
                            className="rounded-full w-7 h-7 bg-yellow flex items-center justify-center p-2"
                            onClick={handleIncrease}
                        >
                            <img src={plusIcon} alt="check" className="" />
                        </button>
                    </div>
                    <button
                        className="rounded-full w-7 h-7 bg-yellow flex items-center justify-center p-2"
                        onClick={handleDelete}
                    >
                        <img src={trashIcon} alt="check" className="" />
                    </button>
                </div>
                </motion.div>
            </div>
        </div>
     
    );
};

export default CartItem;
