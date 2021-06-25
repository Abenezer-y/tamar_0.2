import {Row, Col, Card, Pagination} from 'antd';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import {catalog} from './catalog'



const { Meta } = Card;

const Catalog = () => {
  const perPage = 3
  const [max, setMax] = useState(perPage)
  const [min, setMin] = useState(0)
  
  const length = Object.keys(catalog).length
  const handleChange = value => {
     setMin((value - 1) * perPage)
     setMax(value * perPage)
    };
  
  console.log(length)
  return (
    <> 
    <Container>
    <h3 style={{color: '#FBB040', margin: '8px 0'}}>Catalog</h3>
    <div style={{ background: '#ECECEC', padding: '8px' }}>
    <Row justify="space-around" align="middle" gutter={[8]}>
          {
          catalog.slice(min, max).map(function(car){
              return(
                <Col > <Link to={`/auto/buy/detail/${car.key}`}>
                <Card hoverable style={{maxWidth: 280,  marginTop: 15}}  
                      cover={<img alt="Car" src={car.photo} />}>
                  <Meta title={car.model}/>
                </Card>
                </Link>
                </Col>
              );
          })
          }
    </Row>
    </div>
    <br/>
    <Row justify='center' align='middle' gutter={[16, 16]}>
      <Col>
      <Pagination pageSize={perPage} total={length} onChange={handleChange}/> 
      </Col>
    </Row>
         
    </Container>
  </>
  );
};

export default Catalog;