import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../../components/Card';
import CartItem from './CartItem';
import CartTitle from './CartTitle';
import { useCallback, useEffect, useState } from 'react';
import LoadingSkeleton from '../../components/Loading/LoadingSkeleton'
import { toast } from 'react-toastify';
import { getCart } from '../../redux/Cart/cartAction';
const Cart = () => {
    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch()
    const handleCalculateTotal = useCallback(
        (data) => data.reduce((total, item) => item.quantity * item.price + total, 0),
        [products],
    );

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        
        setIsLoading(true);

        try {
            dispatch(getCart())
            setIsLoading(false);
        } catch (error) {
            toast.error('Đã xảy ra vấn đề trong quá trình xử lý. Vui lòng thử lại sau.');
        }
    
    }, []);

    return (
        <Card title={<CartTitle totalPrice={handleCalculateTotal(products)} />} className="flex flex-col space-y-10 pb-7">
            {
                products.length !=0 ?
                <>
                    {products && products?.map((product) => (
                                    <CartItem key={product._id} product={product} />
                                ))}
                </> :
                <div className='m-auto'>Your card is empty</div>
            }
           
        </Card>
    );
};

export default Cart;
