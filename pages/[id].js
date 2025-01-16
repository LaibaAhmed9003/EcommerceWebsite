import { useRouter } from 'next/router';  
import ProductDetails from '@/Components/ProductDetails/ProductDetails';  

const ProductDetailsPage = () => {  
  const router = useRouter();  
  const { id } = router.query; // Capture the ID from the URL  

  return <ProductDetails productId={id} />;  
};  

export default ProductDetailsPage;