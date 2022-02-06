import React from 'react'
import './Website.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Carousel, Container, Form, FormControl, Nav,Button, Navbar, Row, Col, Card, CardGroup, Image} from 'react-bootstrap';
import img from './img.png'
import img1  from './img1.png'
import img2  from './img2.png'
import img3 from './img3.png'
import img4  from './img4.png'
import img6  from './img6.png'
import img7  from './img7.png'
import img9  from './img8.png'





function Noon() {
    return (
        <div>
<Navbar bg="light"  expand="lg">
  <Container>
    <Navbar.Brand >  ALL CATEGORIES</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav >
      <Nav.Link href="#link">ELECTRONICS</Nav.Link>
        <Nav.Link href="#home">MEN</Nav.Link>
        <Nav.Link href="#home">WOMEN</Nav.Link>
        <Nav.Link href="#home">HOME</Nav.Link>
        <Nav.Link href="#link">GROCERY</Nav.Link>
        <Nav.Link href="#link">SPORTS</Nav.Link>
      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>







             <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"  height='350px'
      src="https://k.nooncdn.com/cms/pages/20210527/0da03bfc7525d9ad84cad37c268b181c/en_PDP-02-nonVIP.gif"
      alt="First slide"
    />
 
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100" height='350px'
      src="https://k.nooncdn.com/cms/pages/20211108/15a08a921e207b1977019b75ba0c44a2/en_mb_uae-hero-02.gif"
      alt="Second slide"
    />


  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100" height='350px'
      src="https://k.nooncdn.com/mpcms/EN0001/assets/03f326dc-00aa-4272-a9dd-44b546f689e1.gif"
      alt="Third slide"
    />

  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100" height='350px'
      src="https://www.cawui.ma/wp-content/uploads/2021/03/en_mb-banner-01.gif"
      alt="FOURth slide"
    />

  
  </Carousel.Item>
</Carousel>












<CardGroup>
  <div className='maindiv'>


      <div className='div2'  xs={12} md={8}>

          <img width = "105px"   height = "100px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe8fg__FT3kEACFVsz0jlvlEy1Jzw1A0Ur7wYqiW2-BzR_E4gODvkwiuv0NLrYr-tsKvY&usqp=CAU'/>
<h2>Women's <br/> Fashion</h2>
      </div>
      {/* </Card> */}
      {/* <Card> */}

      <div className='div2'  xs={12} md={8}>
          <img width = "105px"   height = "100px" src='https://assets.ajio.com/medias/sys_master/root/20210403/EMkD/60686e1f7cdb8c1f14759903/-288Wx360H-461125276-blue-MODEL.jpg'/>
<h2>Men's <br/> Fashion</h2>
      </div>
      {/* </Card> */}
      {/* <Card> */}

      <div className='div2'  xs={12} md={8}>
          <img width = "105px"   height = "100px" src='https://www.techadvisor.com/cmsdata/features/3797796/xiaomi_mi_mix_fold_open_back_press_image_thumb1200_4-3.jpg'/>
<h2>Mobiles</h2>   
      </div>
  
        {/* </Card> */}
      {/* <Card> */}
      <div className='div2'  xs={12} md={8}>
          <img width = "105px"   height = "100px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo4i4BvEgDEw9cGrTRerbDeiVk2KUJCZ2IKFOh0Z_sBlg-C7UYdPE_6UsxICmgTLL3Vqw&usqp=CAU'/>
<h2>Electronics</h2>
      </div>
      {/* </Card> */}
      {/* <Card> */}
      <div className='div2'  xs={12} md={8}>
          <img width = "105px"   height = "100px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7GpOI0fHjplTSa2gXesVjWlMViUV7xeAcmw&usqp=CAU'/>
<h2>Beauty</h2>
      </div>
      {/* </Card> */}
      {/* <Card> */}
      <div className='div2'  xs={12} md={8}>
          <img width = "105px"   height = "100px" src='https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/cosmetics/cosmeticsdesign-europe.com/headlines/business-financial/what-current-challenges-face-the-fragrance-industry-disruptive-innovation-and-collaboration-needed-says-expert/9232630-1-eng-GB/What-current-challenges-face-the-fragrance-industry-Disruptive-innovation-and-collaboration-needed-says-expert_wrbm_large.jpg'/>
<h2>Fragrances</h2>
      </div>
      {/* </Card> */}
      {/* <Card> */}
      <div className='div2'  xs={12} md={8}>
          <img width = "105px"   height = "100px" src='https://media.istockphoto.com/photos/set-of-contemporary-house-appliances-isolated-on-white-picture-id1174598609?k=20&m=1174598609&s=170667a&w=0&h=GjyEf55NuVl4kYBVl79X4p2BqElp8-BkHcetSKAOS_c='/>
<h2>Appliances</h2>
      </div>
      {/* </Card> */}
      {/* <Card> */}
      <div className='div2'  xs={12} md={8}>
          <img width = "105px"   height = "100px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDpYit70RikVuX_v1_YG5vvowAtqNQ0mMyMcK5MXdRDkvGVs_sWy0zqqbTsdubCfXy5Qs&usqp=CAU'/>
<h2>Home & <br/> Kitchen</h2>
      </div>
      {/* </Card> */}
      {/* <Card> */}
      <div className='div2'  xs={12} md={8}>
          <img width = "105px"   height = "100px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0pu0o1z14stvySgob_zxsVctciqwbh2DCJJTffncnWWsJM4pRfmT05bSkDRqBm6mBBgc&usqp=CAU'/>
<h2>Sports</h2>
      </div>
      {/* </Card> */}
     
     
  </div>

  </CardGroup>

  <CardGroup className='cardgroup'>
  <Card className='card'>
    <Card.Img variant="top" src={img} />
   
  </Card>
  <Card className='card'>
  <Card.Img variant="top" src={img1} />

  </Card>
  <br/>  <br/> <br/>
</CardGroup>
<br/>


<CardGroup>
<div className='card1'>  
{/* <Card> */}
 <Card.Img variant="top" src={img2} />
    
    
  {/* </Card> */}
  </div>
  <div className='card1'>  
{/* <Card> */}
 <Card.Img variant="top" src={img3} />
    
    
  {/* </Card> */}
  </div>
  <div className='card1'>  
{/* <Card> */}
 <Card.Img variant="top" src={img4} />
    
    
  {/* </Card> */}
  </div>
  <div className='card1'>  
{/* <Card> */}
 <Card.Img variant="top" src={img6} />
    
    
  {/* </Card> */}
  </div>

</CardGroup>







<div className='img'>
<Image width='100%' src="https://k.nooncdn.com/cms/pages/20201201/7011036617142f6f53f1f5c3a6e31367/en_mb-thin-hp-Sharjah.gif" fluid />
</div>


<CardGroup >
  <Card >
    <Card.Img variant="top"src="https://www.technopolis.bg/medias/sys_master/h2e/he6/13467501690910.jpg" />
    <Card.Body>
   
      <Card.Text>
      AirPods (3rd Generation) Price in Pakistan – AppleKid.Pk
      <br/>
      AED 109.00

      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Arrives  Sat,, Nov 13</small>
    </Card.Footer>
  </Card>
  <Card >
    <Card.Img variant="top"src="https://www.telstra.com.au/content/dam/tcom/devices/mobile/mhdwtab-im65/purple/ipad-mini-purple-angle-2up-900x1200.png" />
    <Card.Body>
   
      <Card.Text>
      Apple iPad mini (6th gen)
      <br/>
      AED 189.00

      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Arrives  Mon,, dec 1</small>
    </Card.Footer>
  </Card>
  <Card >
    <Card.Img variant="top"src="https://www.theioutlet.com/wp-content/uploads/2019/05/iphone-xs-silver-select-2018.png" />
    <Card.Body>
   
      <Card.Text>
      iPhone XS – 64GB – Silver – Grade A
      <br/>
      AED 49.00

      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Arrives  Sun,,Appril 13</small>
    </Card.Footer>
  </Card>
  <Card >
    <Card.Img variant="top"src="https://atreboot.com/wp-content/uploads/2020/11/619BkvKW35L._SL1500_.jpg" />
    <Card.Body>
   
      <Card.Text>
      Sony PS5 – PlayStation 5 Console Disc Edition In Pakistan
      <br/>
      AED 209.0343

      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Arrives  Thurs,, Nov 23</small>
    </Card.Footer>
  </Card>
  <Card >
    <Card.Img variant="top"src="data:image/png;base64,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" />
    <Card.Body>
   
      <Card.Text>
     
Capsule Case With Strap Set For Apple Airpods 
      <br/>
      AED 309.012

      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Arrives  Wed,, Nov 3</small>
    </Card.Footer>
  </Card>
  <Card >
    <Card.Img variant="top"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqoRifOwWOy2KIJI9zx9r4j59zvc0DCnyaGQ&usqp=CAU" />
    <Card.Body>
   
      <Card.Text>
      Apple MacBook Air 2020 M1 13.3" 256GB MGND3 Gold
      <br/>
      AED 92.123

      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Arrives  Sat,, JAN 13</small>
    </Card.Footer>
  </Card>
  <Card >
    <Card.Img variant="top"src="data:image/jpeg;base64,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" />
    <Card.Body>
   
      <Card.Text>
      XIAOMI HAYLOU LS02 WATERPROOF SMARTWATCH WITH HEART RATE
      <br/>
      AED 229.00

      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Arrives Fri,, March 13</small>
    </Card.Footer>
  </Card>
</CardGroup>
<br/>
<>
  <Card>
    <Card.Img variant="top" src="https://cdn.static-zoutons.com/images/originals/blog/BANNER1_1597850728.png" />
   
  </Card>

</>
<>
  <Card>
    <Card.Img variant="top"  src={img7} />
   
  </Card>


</>

  <Image src={img9} fluid />
    </div>




    )
}

export default Noon
