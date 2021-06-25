import { Row, Col, Card, Carousel, Layout, Image} from 'antd';
import 'antd/dist/antd.css'
// import { Link } from 'react-router-dom';
import {card_style} from './styleSheet'
import {cards} from './commons'

const {Content, Footer} = Layout
const { Meta } = Card;

export default function Home () {
  return (
    <> 
    <Layout>
      <Content>
      <Carousel autoplay>
          <Image preview={false} style={{height: '100%'}} className="d-block w-100" alt="example" src="/slide_one.PNG"/>
          <Image preview={false} style={{height: '100%'}} className="d-block w-100" alt="example" src="/slide_two.PNG"/>
          <Image preview={false} style={{height: '100%'}} className="d-block w-100" alt="example" src="/slide_three.PNG"/>
          <Image preview={false} style={{height: '100%'}} className="d-block w-100" alt="example" src="/slide_four.PNG"/>
      </Carousel>
    <Row justify="space-around" align="middle" >
    {cards.map(function(card){
      return(
        <Col >
        <Card hoverable style={card_style} cover={<img alt="example" src={card.image} />}>
          <Meta title={card.title} />
        </Card></Col>
    )})}
    </Row>
      </Content>
      <Footer></Footer>
    </Layout>

  </>
  )
};


