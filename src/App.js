import NavBar from "./components/NavBar/NavBar";
import "./App.css";

import ProductsContext from "./contexts/ProductsContext";

import ProductsSection from "./components/ProductsSection/ProductsSection";

import products from "./datas/products";

import { useState } from "react";
import Toast from "./components/Toast/Toast";
import Cart from "./components/cart/Cart";

const App = () => {
    const [allProducts, setAllProducts] = useState(products);

    const [userCart, setUserCart] = useState([]);

    const [isShowToast, setIsShowToast] = useState(true);

    const [isShowCart, setIsShowCart] = useState(false);

    return (
        <div>
            <ProductsContext.Provider
                value={{
                    allProducts,
                    userCart,
                    setUserCart,
                    isShowToast,
                    setIsShowToast,
                    isShowCart,
                    setIsShowCart
                }}
            >
                <NavBar />

                <main className="pb-5 main">
                    <div className="container">
                        <h1 className="text-center main-title">All Products</h1>
                            <ProductsSection />
                    </div>
                </main>
                <Toast />
                <Cart />
            </ProductsContext.Provider>
        </div>
    );
};

export default App;
