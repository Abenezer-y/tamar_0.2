import {Row, Col, Button, Carousel, Descriptions, Image} from 'antd';
import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import {catalog} from '../../commons'
import { Link } from 'react-router-dom';
import { InputItem, List,} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';


const AutoDetail = () => {
  const [customer_name, setCustomer] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState("")
  const car_address = window.location.href
  const car_key = car_address.charAt(car_address.length-1)
  const result = []
  const value = []
const onSubmit = () => {
  value['customer_name'] = customer_name
  value['phone'] = phone
  value['email'] = email
};
  for (var i=0 ; i < catalog.length ; i++)
    {
      if (catalog[i]['key'] === car_key) {result.push(catalog[i])}
    }
  return (
    <> 
    <Container>
     <Link to={'/auto/buy/'}><Button style={{marginTop:20, marginBottom: 15}} >Back to catalog</Button></Link>
     <br/>
      <Row justify="center" align="middle" gutter={[12,12]}>
      <Col >
      <Carousel autoplay style={{maxWidth: 355}}>
        <div> <Image  style={{maxWidth: 350, maxHeight: 300}} alt="Car" src={result[0].photo}/> </div>
        <div> <Image  style={{maxWidth: 350, maxHeight: 300}} alt="Car" src={result[0].photo_01}/> </div>
        <div> <Image  style={{maxWidth: 350, maxHeight: 300}} alt="Car" src={result[0].photo_02}/> </div>
      </Carousel>
      </Col>
      <Col flex='auto'>
      <Descriptions title="Vehicle Specification">
        <Descriptions.Item label="Model">{result[0].model}</Descriptions.Item>
        <Descriptions.Item label="Manufactured Year">{result[0].year}</Descriptions.Item> 
        <Descriptions.Item label="Transmission">{result[0].transmission}</Descriptions.Item> 
        <Descriptions.Item label="Engine Capacity">{result[0].capacity}</Descriptions.Item> 
      </Descriptions>
      </Col>
    </Row>
    <h4 style={{color: '#FBB040', margin: '15px 0'}}>Request Quotation</h4>
    <List>
        <InputItem clear value={customer_name} onChange={value => setCustomer(value)}>Name</InputItem>
        <InputItem clear value={phone} onChange={value => setPhone(value)}>Phone No.</InputItem>
        <InputItem clear value={email} onChange={value => setEmail(value)}>Email</InputItem>
        <br/>
        <List.Item>
          <Button type="primary" size="small" inline onClick={onSubmit}>Submit</Button>
        </List.Item>
    </List>
    </Container>
  </>
  );

}



export default AutoDetail;