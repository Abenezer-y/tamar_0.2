// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import './App.css';
import Home from './home'
import Catalog from './pc/auto/catalog'
import AutoDetail from './pc/auto/details'
import OrderMobile from './mobile/auto/auto_order'
import Transit from './pc/transit/transit'

import {MailFilled, PhoneFilled , HomeFilled} from '@ant-design/icons'
import {Layout, Row, Col, Image, Descriptions} from 'antd';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import OfferMobile from './mobile/auto/auto_offer_mobile'

const footerStyle = {color: '#fbc040', textAlign: 'center', background: '#2A4058', marginTop: 30}

const {Content, Footer} = Layout

function App() {
  return (
    <Layout>
    <Router>
        <Navbar expand="lg" className='color-nav' variant="dark" sticky="top">
            <Navbar.Brand href="/" className="mr-auto">
            <Image preview={false} style={{marginLeft: 5, height: 50, width: 55}} src="/logo.png" alt="Tamar Logo"/>
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end"  style={{margin: 5}}>
                <Nav id="tamar-nav-bar" >
                <Nav.Link style={{color: '#2A4058'}} href="/">Home</Nav.Link>
                <NavDropdown className='color-nav-dropdown' title="Tamar Auto" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/auto/buy">Catalog</NavDropdown.Item>
                    <NavDropdown.Item href="/auto/buy/order">Place Order</NavDropdown.Item>
                    <NavDropdown.Item href="/auto/sell">Exchange</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/auto/accessories">Accessories and Parts</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link style={{ color: '#2A4058'}} href="/transit">Tamar Transit</Nav.Link>
                <Nav.Link style={{ color: '#2A4058'}} href="/about">About Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Content>
        <Switch style={{ margin: '0 50'}}>
            <Route exact path="/" component={Home} />
            <Route exact path="/auto/buy" component={Catalog} />
            <Route exact path="/auto/buy/order" component={OrderMobile} />
            <Route exact path="/transit" component={Transit} />
            <Route exact path="/auto/sell" component={OfferMobile} />
            <Route exact path={`/auto/buy/detail/:car_key`} component={AutoDetail}></Route>
        </Switch>
        </Content>
    </Router>
    <Footer style={footerStyle}>  
    <Row>
    <Col flex='auto'>
    <Descriptions title="Tamar Trading PLC">
        <Descriptions.Item label={<MailFilled/>}>tamartransitoffice@gmail.com</Descriptions.Item>
        <Descriptions.Item label={<PhoneFilled/>}>+251-964-323232</Descriptions.Item> 
        <Descriptions.Item label={<HomeFilled/>}>Bole Atlas, Addis Ababa, Ethiopia</Descriptions.Item> 
      </Descriptions>
    </Col>

    </Row>    
    </Footer>
</Layout> 
  );
}

export default App;
