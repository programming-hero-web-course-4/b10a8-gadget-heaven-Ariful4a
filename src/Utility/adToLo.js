import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const getStoredProductList = () => {
    const storedProductInt = localStorage.getItem('productList');
    if(storedProductInt){
        const storedProduct = JSON.parse(storedProductInt);
        return storedProduct;
    }else{
        return [];
    }
    
}


const adStoredProductList = (id) => {
    const storedProduct = getStoredProductList();
    if(storedProduct.includes(id)){
        console.log('already added');
        toast.error(`Already added`, {
            position: "top-center",
            autoClose: 3000, 
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true, 
            draggable: true, 
          });
    }else{
        storedProduct.push(id);
        localStorage.setItem('productList', JSON.stringify(storedProduct));
        toast.success(`Added to Cart!`, {
            position: "top-center",
            autoClose: 3000, 
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true, 
            draggable: true, 
          });
    }
};


const getStoredProductWishList = () => {
    const storedProductWishInt = localStorage.getItem('productWishList');
    if(storedProductWishInt){
        const storedProductWishList = JSON.parse(storedProductWishInt);
        return storedProductWishList;
    }else{
        return [];
    }
    
};


const addWishListProduct = (id) => {
    const storedProductWishList = getStoredProductWishList();
    if(storedProductWishList.includes(id)){
        console.log('all redy added');
        toast.error(`Already added in Wish List`, {
            position: "top-center",
            autoClose: 3000, 
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true, 
            draggable: true, 
          });
    }else{
        storedProductWishList.push(id);
        localStorage.setItem('productWishList' , JSON.stringify( storedProductWishList));
        toast.success(`Added to Cart!`, {
            position: "top-center",
            autoClose: 3000, 
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true, 
            draggable: true, 
          });
    }
}





export {adStoredProductList, getStoredProductList, addWishListProduct, getStoredProductWishList};