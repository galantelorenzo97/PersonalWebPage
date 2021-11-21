//Components
import HelloWorld from "./HelloWorld";
import Container from 'react-bootstrap/Container';
import AboutMe from "./AboutMe";

function App() {
  return (
    <Container fluid>
      <HelloWorld />
      <AboutMe />
    </Container>
  );
}

export default App;
