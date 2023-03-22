import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OrderList from './components/OrderList';
import CreateOrder from './components/CreateOrder';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import ToastComponent from './components/ToastComponent';

function App() {
  return (    
    <Container fluid>
      {/* <ToastComponent bg="success" toastMsg="Order created successfully" /> */}
      <Row className="row-container">
        <Col xs={12} md={8}><OrderList /> </Col>
        <Col xs={12} md={4}><CreateOrder /> </Col>
      </Row>      
    </Container>
  );
}

export default App;
