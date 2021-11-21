//Components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./styles/colors.css";

function AboutMe() {
  return (
    <Row>
      <Col></Col>
      <Col className="col-8">
        <h1 className="display-4 VT323 retrowave-blue">{">"}whoami</h1>
        <p className="retrowave-magenta">
          Hello visitor! My name is Lorenzo Galante.
          I am a Computer Scientist and Engineer.
          This site is <em>soon to be</em> a portfolio of my work.
          It is currently under construction.
        </p>
      </Col>
      <Col></Col>
    </Row>
  );
}

export default AboutMe;
