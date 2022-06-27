import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

// auto card creater take in props
// Work in progress
const ProjectCard = (props) => {
  // const [] = useState([])

  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                1 This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}


export const Projects = () => (
  <section className="m-2 p-2 d-flex flex-column min-vh-100">
    <h3>Projects</h3>

    <Row>
      <Col className="m-2">
        <Card>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body className="text-center">
            <Card.Title>Note Taker App</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary" className="buttonPrimary">
              <a 
                className="noDec" 
                href="https://warm-dusk-77651.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer">
                  Go to App!
              </a>
            </Button>
          </Card.Body>
        </Card>
      </Col>

      <Col className="m-2">
        <Card>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body className="text-center">
            <Card.Title>Budget Tracker</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary" className="buttonPrimary">
              <a 
                className="noDec"
                href="https://arcane-sands-29881.herokuapp.com/" 
                target="_blank"
                rel="noopener noreferrer">
                Go to App!
              </a>
            </Button>
          </Card.Body>
        </Card>
      </Col>

      <Col className="m-2">
        <Card>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body className="text-center">
            <Card.Title>Budget Tracker</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary" className="buttonPrimary">
              <a 
                className="noDec"
                href="https://arcane-sands-29881.herokuapp.com/" 
                target="_blank"
                rel="noopener noreferrer">
                Go to App!
              </a>
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row>

      <Col className="m-2">
        <Card>
          <Card.Img variant="top" src="logo512.png" />
          <Card.Body className="text-center">
            <Card.Title>NoSQL Backend</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary" className="buttonPrimary">
              <a 
                className="noDec" 
                href="https://github.com/KKWChao/NoSQL-Backend" 
                target="_blank"
                rel="noopener noreferrer">
                Go to App!
              </a>
            </Button>
          </Card.Body>
        </Card>
      </Col>

      <Col className="m-2">
        <Card>
          <Card.Img variant="top" src="logo512.png" />
          <Card.Body className="text-center">
            <Card.Title>Ecommerce Backend</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary" className="buttonPrimary">
              <a 
                className="noDec" 
                href="https://github.com/KKWChao/eCommerce-Backend" 
                target="_blank"
                rel="noopener noreferrer">
                Go to App!
              </a>
            </Button>
          </Card.Body>
        </Card>
      </Col>
      
      <Col className="m-2">
        <Card>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body className="text-center">
            <Card.Title>Budget Tracker</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary" className="buttonPrimary">
              <a 
                className="noDec"
                href="https://arcane-sands-29881.herokuapp.com/" 
                target="_blank"
                rel="noopener noreferrer">
                Go to App!
              </a>
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>



  </section>
)