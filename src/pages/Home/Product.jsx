import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../../components/Card';
import ProductItem from './ProductItem';
import LoadingSkeleton from '../../components/Loading/LoadingSkeleton'
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getListProduct } from '../../redux/Product/productAction';
const Product = () => {
    const products = useSelector((state) => state.product.products);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch()
    useEffect(() => {
        
        setIsLoading(true);

        try {
            dispatch(getListProduct());
            
            setIsLoading(false);
        } catch (error) {
            toast.error('Đã xảy ra vấn đề trong quá trình xử lý. Vui lòng thử lại sau.');
        }
    
    }, []);
    return (
        <Card title="Our Products" className="flex flex-col space-y-20 pb-7">
          
                 {products.map((product) => (
                    <ProductItem key={product._id} product={product} />
                ))}
            
            
        </Card>
    );
};

export default Product;
