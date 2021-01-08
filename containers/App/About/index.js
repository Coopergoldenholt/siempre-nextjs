import React from 'react';
import {ProductsSection,ProductsInner,ProductsSubHeading,
    ProductsCol2,ProductsCol1,ProductsHeading,ProductsPara,
    ProductsBtn,ProductsRightImg
} from './About.style';
import { Products } from '../../../pagedata/App';

const ProductsPage  = () => {
    return (
        <ProductsSection id="productContainer">
            <ProductsInner>
                <ProductsCol1>
                        <ProductsRightImg 
                            src={require("../../../assets/"+Products.ProductsRightImg)} 
                            alt=""
                        />
                </ProductsCol1>
                <ProductsCol2>
                        <ProductsHeading>
                        {Products.ProductsCol2.ProductsHeading}
                        </ProductsHeading>
                        <ProductsSubHeading>
                        {Products.ProductsCol2.ProductsSubHeading}
                        </ProductsSubHeading>
                        <ProductsPara>
                        {Products.ProductsCol2.ProductsPara}
                        </ProductsPara>
                        <ProductsBtn href="#">
                        {Products.ProductsCol2.ProductsBtn}
                        </ProductsBtn>
                </ProductsCol2>
            </ProductsInner>
        </ProductsSection>
    );
}
export default ProductsPage;