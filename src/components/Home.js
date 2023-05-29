import { BrowserRouter } from 'react-router-dom';
import {  Container, Row} from 'react-bootstrap';
import Banner from "./Banner";
import LoginForm from "./LoginForm";
function Home() {

  return (
    <Container fluid>
      <BrowserRouter>
        <h1 className="font-link">
          El aroma magico
        </h1> 
        <hr/>
          <Row className="justify-content-center">          
              <Banner/>
        </Row>
        <hr/>
        <br/>
        <hr/>
          <Row className="justify-content-center">          
              <LoginForm/>
        </Row>
        <hr/>
        <footer className='d-flex justify-content-center'>
          ContactInfo
        </footer>
      </BrowserRouter>
    </Container>
)
}

export default Home;