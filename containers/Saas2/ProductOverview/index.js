import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ProductOverviewSection,
    ProductOverviewSectionHeading,
    ProductOverviewCol,
    ProductOverviewIcon,
    ProductOverviewHeading,
    ProductOverviewCustomContainer,
    ProductOverviewDesc} from './productoverview.style'
import { ProductOverview } from '../../../pagedata/Saas2';

const ProductOverviewPage = () => {
        return (
        <ProductOverviewSection id="featuresContainer">
            <Container>
                <Row>
                    <Col md="12">
                            <ProductOverviewSectionHeading>{ProductOverview.SectionHeading}</ProductOverviewSectionHeading>
                    </Col>
                </Row>
                <ProductOverviewCustomContainer>
                    <Row>
                    {
                        ProductOverview.ProductOverviewCustomContainer.map((item,idx) => {
                        return <Col md="6" sm="12" lg="4">
                                <ProductOverviewCol>
                                    <ProductOverviewIcon src={require("../../../assets/"+item.ProductOverviewIcon)} alt=""/>
                                    <ProductOverviewHeading>{item.ProductOverviewHeading}</ProductOverviewHeading>
                                    <ProductOverviewDesc>{item.ProductOverviewDesc}</ProductOverviewDesc>
                                </ProductOverviewCol>
                        </Col>
                        })
                    }
                    </Row>
                </ProductOverviewCustomContainer>
            </Container>
        </ProductOverviewSection>
    );
}

export default ProductOverviewPage;
