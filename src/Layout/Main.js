import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Pages/Shared/RigthSideNav/RightSideNav';

const Main = () => {
    return (
       <div>
        <Header></Header>
             <Container>
            <Row>
                <Col lg='2'>
                    <LeftSideNav></LeftSideNav>
                </Col>
                    <Col lg='5'>
                        <Outlet></Outlet>
                    </Col>
                <Col lg='3'>
                    <RightSideNav></RightSideNav>
                </Col>
            </Row>
        </Container>
        <Footer></Footer>
       </div>
    );
};

export default Main;