import React, { Component } from 'react'
import {  Menu} from 'antd';
import { Row, Col, Layout,Carousel } from "antd";
import { FacebookFilled , GoogleCircleFilled,GithubOutlined} from '@ant-design/icons';

const { Header, Footer, Content } = Layout;

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.carousel = React.createRef();
  }
  next() {
    this.carousel.next();
  }
  previous() {
    this.carousel.prev();
  }

  handleClick = () => {
    
  }

    render() {
      const props = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
        // const { current } = this.state;
        return (
          <Layout>
            <Header style={{height: "15vh",background:''}}>
              <Menu onClick={this.handleClick}  mode="horizontal" style = {{background:'#484CA5',padding:15,paddingRight:'15%',paddingLeft:'15%'}}>
                <Menu.Item key="home"  style={{}}>
                  <div style = {{fontSize:25,color:'#D60000',fontWeight:'bold',fontFamily:'monospace'}}>Home</div>
                </Menu.Item>
                <Menu.Item key="blog"  >
                <div style = {{fontSize:25,color:'white',fontWeight:'bold',fontFamily:'monospace'}}>Blog</div>
                </Menu.Item>
                <Menu.Item key="contact"  >
                <div style = {{fontSize:25,color:'white',fontWeight:'bold',fontFamily:'monospace'}}>Contact</div>
                </Menu.Item>
                <Menu.Item key="donate"  >
                <div style = {{fontSize:25,color:'white',fontWeight:'bold',fontFamily:'monospace'}}>Donate</div>
                </Menu.Item>
                <Menu.Item key="logo" style={{float:'right',display:'flex',flexDirection: 'row'}} >
                  <div style = {{flex:1,fontSize:50,color:'red',fontWeight:'bold',marginTop:5,marginRight:10,fontFamily:'monospace'}}>AT Hackintosh</div>
                  <img style={{flex:1,marginLeft:10,transform:'unset'}} alt= "logo"
                    width={50}
                    src={require('../../image/logo.png')}
                  />
                 
                </Menu.Item>
              </Menu>
            </Header>
            <Content>
              <div style={{ height: "calc(100vh - 55px)"}}>
                <Row   style={{background:'',padding:10}}>
                  <Col span={12} style={{background:''}}>
                    <a style={{color:'#484CA5',fontWeight:'bold'}}>Bạn cần hỗ trợ gấp? Gọi ngay cho chúng tôi theo số 0961205153</a>
                  </Col>
                  <Col span={12}  style={{background:''}}>
                    <a style={{color:'#484CA5',fontWeight:'bold'}}>Hoặc bạn có thể liên lạc qua các kênh sau:</a>
                    <span style={{marginRight:10,marginLeft:10}}>
                      <FacebookFilled/>
                    </span>
                    <span style={{marginRight:10}}>
                      <GoogleCircleFilled/>
                    </span>
                    <span style={{marginRight:10}}>
                      <GithubOutlined/>
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col style={{background:''}}>
                    <Carousel ref={node => (this.carousel = node)} {...props}  style={{height:'40vh',background:'white'}}>
                    <div style={{height:'35vh'}}>
                      <Row style={{background:''}} >
                        <Col style={{background:'',marginLeft:'20vh',alignSelf:'center',padding:5}} span={10}>
                          <div style={{textAlign:'right',fontSize:18,fontWeight:'bold',marginBottom:10,lineHeight:'1rem'}}>ĐẾN VỚI DỊCH VỤ CỦA CHÚNG TÔI, BẠN SẼ ĐƯỢC:</div>
                          <div style={{textAlign:'right',fontSize:18,fontWeight:'bold',marginBottom:10}}> 
                            {/* <div style={{width:'50%'}}> */}
                              CÀI ĐẶT NHANH CHÓNG NHẤT FIX HẾT CÁC LỖI CÓ THỂ HỖ TRỢ SAU CÀI ĐẶT 
                            {/* </div> */}
                          </div>
                          <div style={{textAlign:'right',fontSize:18,fontWeight:'bold',marginBottom:10}}>TƯ VẤN, TRAO ĐỔI VỀ CÁC VẤN ĐỀ CÔNG NGHỆ & HACKINTOSH </div>
                          <div style={{textAlign:'right',fontSize:18,fontWeight:'bold',marginBottom:10}}>CÓ NHIỀU HÌNH THỨC CÀI ĐẶT PHÙ HỢP VỚI NHU CẦU CỦA MỖI NGƯỜI: CÀI TRỰC TIẾP, TỪ XA, CÀI TẬN NHÀ </div>
                          <div style={{textAlign:'right',fontSize:18,fontWeight:'bold',marginBottom:10}}>GIÁ CẢ HỢP LÍ</div>
                        </Col>
                        <Col style={{flex:1}} span={12}>
                          <img style={{height:'300px',width:'600px',display:''}}  src={require('../../image/slide/slide1.png')}/>
                        </Col>
                      </Row>
                    </div>
                    <div>
                      <img style={{height:'40vh',width:'50vh',display:'unset'}} src={"https://nld.mediacdn.vn/thumb_w/540/2020/5/29/doi-hoa-tim-8-15907313395592061395682.png"}/>
                    </div>
                      <div>
                        <h3>3</h3>
                      </div>
                      <div>
                        <h3>4</h3>
                      </div>
                    </Carousel>
                  </Col>
                </Row>
               

              </div>
            </Content>
            <Footer style={{background:'red'}}>
              <div>ashdgasf</div>
            </Footer>
          </Layout>
            
        )
    }
}


