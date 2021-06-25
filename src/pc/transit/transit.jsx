import {Row, Col, Card} from 'antd';


const { Meta } = Card;

const Transit = () => {

  return (
    <> 

    <Row justify="space-around" align="middle" gutter={[16, 16]}>
 
      <Col >
      <Card hoverable style={{ maxWidth: 380,  marginTop: 64 }}
            cover={<img alt="transit" src="/logistics_01.jpg" />}>
        <Meta title="Customs clearance" 
              description="Our clearance officers headed by our admin staff, with years of experience 
              in the field make it easier for us to cater to your needs. We specialize in working 
              with the diplomatic community, having partners with over 20 years experience with expats 
              residing in Ethiopia
              In addition to customs clearance we work to take care of your import and export needs 
              from loading to discharge and everything in between" />
      </Card>
      </Col>

      <Col >
      <Card hoverable style={{ maxWidth: 380,  marginTop: 64 }}
            cover={<img alt="transit" src="/logistics_01.jpg" />}>
        <Meta title="Freight Forwarding " 
              description="Tamar logistics provides professional expertise and connections in the industry 
              to provide quality freight forwarding services. Encompassing both import and export services 
              our representatives give technical advice and follow up on your shipment from origin to destination. 
              our experience in air and ocean cargo forwarding and working with various air and shipping lines allows 
              us to provide quality services. Our door to door service will satisfy your needs." />
      </Card>
      </Col>

      <Col >
      <Card hoverable style={{ maxWidth: 380,  marginTop: 64 }}
            cover={<img alt="transit" src="/logistics_02.jpg" />}>
        <Meta title="Packing and moving" 
              description="Our services extend to your domestic and international moving requirements. 
              Our professionals will be responsible for packing, loading, moving and unloading your 
              items to have you relocate  without lifting a finger" />
      </Card>
      </Col>
    </Row>
  </>
  );
};

export default Transit;