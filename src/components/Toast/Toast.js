import React, { useContext } from "react";
import ProductsContext from "../../contexts/ProductsContext";

const Toast = () => {

    const contextData = useContext(ProductsContext);


    return (
        <div className="toast-container position-fixed bottom-0 me-4 end-0 mb-4">
            <div className={`${contextData.isShowToast ? 'show' : ''} toast align-items-center text-white bg-primary`} >

                <div className="d-flex justify-content-start align-items-center">
                    <div className="toast-body">
                        The product added to cart successfuly
                    </div>
                    <button className="btn-close btn-close-white ms-5" onClick={() => contextData.setIsShowToast(false)}/>
                </div>
                
            </div>
        </div>
    );
};

export default Toast;
