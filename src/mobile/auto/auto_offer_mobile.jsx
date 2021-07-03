import React , {useState} from 'react';
import { InputItem, List, Picker, Button} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
// import {failure, respond, uri_add_assignment} from '../routing'
// import request from 'umi-request';
// import '../../../App.css'
import {type, year_value} from './commons'



export default function OfferMobile () {
  const value = {}
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [transmission, setTransmission] = useState('')
  const [year, setYear] = useState('')
  const [price, setPrice] = useState('')
  const [seller, setSeller] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState("")

  const onSubmit = () => {
    value['brand'] = brand
    value['model'] = model
    value['transmission'] = transmission[0]
    value['year'] = year[0]
    value['price'] = price
    value['seller'] = seller
    value['phone'] = phone
    value['email'] = email
    console.log(value)
    // request(uri_add_assignment, {method: 'post', data: {value},}).then(respond).catch(failure); 
    };

    return (
      <><h3 style={{color: '#FBB040', margin: '8px 0'}}>Submit Offer</h3>
      <List title="Place Order" className="date-picker-list" style={{ padding: '4px' }}>
        <List.Item>{<h3>Vehicle Information</h3>}</List.Item>
        <InputItem clear value={brand} onChange={value => setBrand(value)}>Brand</InputItem>
        <InputItem clear value={model} onChange={value => setModel(value)} >Model</InputItem>
        <Picker value={transmission} onChange={value => setTransmission(value)} data={type} cols={1} title="Type" extra=" ">
          <List.Item arrow="horizontal" style={{marginLeft: '15px'}}>Transmission</List.Item>
        </Picker>
        <Picker value={year} onChange={value => setYear(value)} data={year_value} cols={1} title="Link" extra=" ">
          <List.Item arrow="horizontal" style={{marginLeft: '15px'}}>Year</List.Item>
        </Picker>
        <InputItem clear value={price} onChange={value => setPrice(value)}>Price</InputItem>
        <br/>
        <h3 style={{marginLeft: '15px'}}>Seller Information</h3>
        <InputItem clear value={seller} onChange={value => setSeller(value)}>Seller</InputItem>
        <InputItem clear value={phone} onChange={value => setPhone(value)}>Phone No.</InputItem>
        <InputItem clear value={email} onChange={value => setEmail(value)}>Email</InputItem>

        <List.Item>
          <Button type="primary" size="small" inline onClick={onSubmit}>Submit</Button>
        </List.Item>
      </List></>
    );
}

export {OfferMobile};