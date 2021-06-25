import {Form, Input, Button, Select, Tooltip, Divider} from 'antd';
import React from 'react'
import { Container } from 'react-bootstrap'

function formatNumber(value) {
  value += '';
  const list = value.split('.');
  const prefix = list[0].charAt(0) === '-' ? '-' : '';
  let num = prefix ? list[0].slice(1) : list[0];
  let result = '';
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
}

class NumericInput extends React.Component {
  onChange = e => {
    const { value } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      this.props.onChange(value);
    }
  };

  // '.' at the end or only '-' in the input box.
  onBlur = () => {
    const { value, onBlur, onChange } = this.props;
    let valueTemp = value;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, '$1'));
    if (onBlur) {
      onBlur();
    }
  };

  render() {
    const { value } = this.props;
    const title = value ? (
      <span className="numeric-input-title">{value !== '-' ? formatNumber(value) : '-'}</span>
    ) : (
      ''
    );
    return (
      <Tooltip
        trigger={['focus']}
        title={title}
        placement="topLeft"
        overlayClassName="numeric-input"
      >
        <Input
          {...this.props}
          onChange={this.onChange}
          onBlur={this.onBlur}
          placeholder=""
          maxLength={25}
        />
      </Tooltip>
    );
  }
}

class NumericInputDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  onChange = value => {
    this.setState({ value });
  };

  render() {
    return (
      <NumericInput style={{ width: 120 }} value={this.state.value} onChange={this.onChange} />
    );
  }
}

const {Option} = Select;

const Offer = () => {
  return(<>
  <Container>
  <h3 style={{color: '#FBB040', margin: '15px 0'}}>Fill Quotation Form</h3>
  <Divider></Divider>
  <h4 style={{color: '#FBB040', margin: '15px 0'}}>Vehicle Information</h4>
  <Form name="user-info-form" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
    <Form.Item label="Brand" style={{ marginBottom: 0, color: '#2A4058' }} >
    <Form.Item name="brand" rules={[{required: true }]} 
              style={{ display: 'inline-block', width: 'calc(100% - 8px)', maxWidth:250, margin: '0 8px'}}>
        <Input placeholder="Brand"/>
    </Form.Item>
    </Form.Item>
    <Form.Item label="Model" style={{ marginBottom: 0, color: '#2A4058' }} >
      <Form.Item name="model" rules={[{required: true }]} 
                style={{ display: 'inline-block', width: 'calc(100% - 8px)', maxWidth:250, margin: '0 8px'}}>
        <Input placeholder="Model"/>
      </Form.Item>
    </Form.Item>
    <Form.Item label="Transmission Type" style={{ marginBottom: 0, color: '#2A4058' }} >
      <Form.Item name="year" rules={[{required: true }]} 
                style={{ display: 'inline-block', width: 'calc(70% - 8px)', maxWidth:250, margin: '0 8px'}}>
          <Select placeholder="Transmission Type">
            <Option>Automatic</Option>
            <Option>Manual</Option>
          </Select>
      </Form.Item>
      </Form.Item>
    <Form.Item label="Manufactured Year" style={{ marginBottom: 0, color: '#2A4058' }} >
      <Form.Item name="year" rules={[{required: true }]} 
                style={{ display: 'inline-block', width: 'calc(70% - 8px)', maxWidth:250, margin: '0 8px'}}>
          <Select placeholder="Manufactured Year">
            <Option>1990</Option>
            <Option>2021</Option>
          </Select>
      </Form.Item>
    </Form.Item>
    <Form.Item label="Price" style={{ marginBottom: 0, color: '#2A4058' }} >
      <Form.Item name="price" rules={[{required: true }]} 
                style={{ display: 'inline-block', width: 'calc(100% - 8px)', maxWidth:250, margin: '0 8px'}}>
          <NumericInputDemo/>
      </Form.Item>
    </Form.Item>
    <h4 style={{color: '#FBB040', margin: '15px 0'}}>Seller Information</h4>
    <Form.Item label="Name" style={{ marginBottom: 0, color: '#2A4058' }} >
        <Form.Item name="seller_name" rules={[{required: true }]} 
                  style={{ display: 'inline-block', width: 'calc(100% - 8px)', maxWidth:350, margin: '0 8px'}}>
            <Input placeholder="Seller Name"/>
        </Form.Item>
        </Form.Item>
        <Form.Item label="Phone Number" style={{ marginBottom: 0, color: '#2A4058' }} >
          <Form.Item name="phone" rules={[{required: true }]} 
                    style={{ display: 'inline-block', width: 'calc(100% - 8px)', maxWidth:250, margin: '0 8px'}}>
            <Input placeholder="Phone Number"/>
          </Form.Item>
        </Form.Item>
        <Form.Item label="Email" style={{ marginBottom: 0, color: '#2A4058' }} >
          <Form.Item name="email" rules={[{required: true }]} 
                    style={{ display: 'inline-block', width: 'calc(100% - 8px)', maxWidth:250, margin: '0 8px'}}>
              <Input placeholder="Email Address"/>
          </Form.Item>
        </Form.Item>
        <Form.Item label=" " colon={false}>
          <Button style={{color: '#FBB040', margin: '15px 0'}} htmlType="submit"> Submit </Button>
        </Form.Item>
    </Form>
    </Container>
    </>
  )
  }
 
export default Offer;