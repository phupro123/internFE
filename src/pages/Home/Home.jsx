import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getListProduct } from '../../redux/Product/productAction';
import Product from './Product';
import Cart from './Cart';
import { getCart } from '../../redux/Cart/cartAction';
import { LoadingSkeleton } from '../../components/Loading';

const Home = ({ title }) => {
 
    useEffect(() => {
        document.title = title;
    }, []);

    return (
        <div className="relative mx-auto py-6 flex flex-col md:flex-row items-center justify-center h-full md:h-screen gap-10 w-screen overflow-hidden">
            <Product />
            <Cart />
            <div className="absolute bottom-0 bg-yellow -z-10 h-0 w-full border-b-[160px] border-r-[60px] border-l-[60px] border-r-transparent border-l-transparent border-b-yellow" />
        </div>
    );
};

export default Home;
