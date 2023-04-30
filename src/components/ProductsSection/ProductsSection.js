import React, { useContext } from "react";

import "./ProductsSection.css";
import ProductsContext from "../../contexts/ProductsContext";

const ProductsSection = () => {
    const contextData = useContext(ProductsContext);

    const addToCart = (product) => {
        contextData.setIsShowToast(true);

        setTimeout(() => {
            contextData.setIsShowToast(false);
        }, 3000);

        let isInUserCart = contextData.userCart.some(
            (bagProduct) => bagProduct.title === product.title
        );

        if (!isInUserCart) {
            let newUserCartProduct = {
                id: contextData.userCart.length + 1,
                img: product.img,
                title: product.title,
                price: product.price,
                count: 1,
            };

            contextData.setUserCart((prevProducts) => [
                ...prevProducts,
                newUserCartProduct,
            ]);
        } else {
            let userCart = [...contextData.userCart];

            userCart.some((bagProduct) => {
                if (bagProduct.title === product.title) {
                    bagProduct.count += 1;
                    return true;
                }
            });

            contextData.setUserCart(userCart);
        }
    };

    return (
        <>
            {contextData.allProducts.map((product) => (
                <div className="row justify-content-center mt-5 ">
                    <h3 className="text-center">{product.title}</h3>

                    {product.infos.map((product) => (
                        <div className="col-xl-4 col-md-5 col-sm-10 mt-5 ">
                            <div className="card py-3 px-3">
                                <div className="col-12 text-center">
                                    <img
                                        src={product.img}
                                        alt="Product pic"
                                        className="card-img-top w-75"
                                    />
                                </div>

                                <div className="card-body text-center">
                                    <p className="card-text">{product.title}</p>
                                    <p className="price">{product.price} $</p>
                                    <br />
                                    <a
                                        href="jajascript:void(0)"
                                        className="btn btn-danger w-75"
                                        onClick={() => addToCart(product)}
                                    >
                                        Add To Card
                                    </a>
                                    <a
                                        href="javascrip:void(0)"
                                        className="btn btn-outline-danger w-75 mt-3 text-capitalize"
                                    >
                                        More Information
                                    </a>
                                    <p className="number w-75">
                                        Number: {product.count}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
};

export default ProductsSection;
