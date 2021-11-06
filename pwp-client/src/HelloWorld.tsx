import './styles/fonts.css'
import './styles/colors.css';
import './styles/App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HelloWorld() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1 className="display-1 text-center VT323 monochrome-green">Hello, world!</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default HelloWorld;
