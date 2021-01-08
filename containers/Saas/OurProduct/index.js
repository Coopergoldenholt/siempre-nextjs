import React from 'react';
import {OurProductSection,ProductsHeadingWrapper,
    ProductsHeading,ProductsSubHeading,ProductsInner,ProductsRightImgSecond,ProductsLeftImgFirst,
    ProductsLeftImgSecond,
    ProductsLeft,ProductsRight,ProductsLeftHeading,ProductsLeftPara,ProductsRightImgFirst,
    ProductsBtn,ProductsRowReverse,ProductsRow
} from './OurProduct.style';
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Products } from '../../../pagedata/Saas';
const ProductsPage  = () => {
    return (
        <OurProductSection id="productsContainer">
            <Container>
                <Row>
                    <Col md="12">
                        <ProductsHeadingWrapper>
                            <ProductsHeading>{Products.ProductsHeading}</ProductsHeading>
                            <ProductsSubHeading>{Products.ProductsSubHeading}</ProductsSubHeading>
                        </ProductsHeadingWrapper>
                    </Col>
                </Row>

                <ProductsInner>

                    <ProductsRowReverse padddingBottom={"80px"}>
                        <Col md="7">
                            <ProductsRight>
                                <ProductsRightImgFirst src={require("../../../assets/"+Products.ProductsRow1.ProductsRightImgFirst)} alt=""/>
                                <ProductsRightImgSecond src={require("../../../assets/"+Products.ProductsRow1.ProductsRightImgSecond)} alt=""/>
                            </ProductsRight>
                        </Col>

                        <Col md="5">
                            <ProductsLeft>
                                <ProductsLeftHeading>
                                {Products.ProductsRow1.ProductsLeftHeading}
                                </ProductsLeftHeading>
                                <ProductsLeftPara>
                                {Products.ProductsRow1.ProductsLeftPara}
                                </ProductsLeftPara>
                                <ProductsBtn href="#">
                                {Products.ProductsRow1.ProductsBtn}
                                </ProductsBtn>
                            </ProductsLeft>
                        </Col>
                    </ProductsRowReverse>

                    <ProductsRow>
                        <Col md="7">
                            <ProductsRight style={{textAlign:"left"}}>
                                <ProductsLeftImgFirst src={require("../../../assets/"+Products.Row.ProductsLeftImgFirst)} alt=""/>
                                <ProductsLeftImgSecond src={require("../../../assets/"+Products.Row.ProductsLeftImgSecond)} alt=""/>
                            </ProductsRight>
                        </Col>
                        <Col md="5">
                            <ProductsLeft>
                                <ProductsLeftHeading>
                                {Products.Row.ProductsLeftHeading}
                                </ProductsLeftHeading>
                                <ProductsLeftPara>
                                {Products.Row.ProductsLeftPara}
                                </ProductsLeftPara>
                                <ProductsBtn href="#">
                                {Products.Row.ProductsBtn}
                                </ProductsBtn>
                            </ProductsLeft>
                        </Col>
                    </ProductsRow>

                    <ProductsRowReverse padddingBottom={"0px"}>
                        <Col md="7">
                            <ProductsRight>
                                <ProductsRightImgFirst src={require("../../../assets/"+Products.ProductsRow2.ProductsRightImgFirst)} alt=""/>
                                <ProductsRightImgSecond src={require("../../../assets/"+Products.ProductsRow2.ProductsRightImgSecond)} alt=""/>
                            </ProductsRight>
                        </Col>
                        <Col md="5">
                            <ProductsLeft>
                                <ProductsLeftHeading>
                                {Products.ProductsRow2.ProductsLeftHeading}
                                </ProductsLeftHeading>
                                <ProductsLeftPara>
                                {Products.ProductsRow2.ProductsLeftPara}
                                </ProductsLeftPara>
                                <ProductsBtn href="#">
                                {Products.ProductsRow2.ProductsBtn}
                                </ProductsBtn>
                            </ProductsLeft>
                        </Col>
                    </ProductsRowReverse>                
                </ProductsInner>
            </Container>
        </OurProductSection>
    );
}
export default ProductsPage;