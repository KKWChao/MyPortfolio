import React, { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

// auto card creater take in props
// Work in progress
// function Projects() {
//   const project = [
//     {
//       name: 'Note Taker App',
//       image: './my-portfolio/src/assets/images/ProjectImages/NoteTakerApp.png',
//       text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
//       link: 'https://warm-dusk-77651.herokuapp.com/',
//     },
//     {
//       name: 'Budget Tracker App',
//       image: './my-portfolio/src/assets/images/ProjectImages/BudgetApp.png',
//       text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
//       link: 'https://arcane-sands-29881.herokuapp.com/',
//     },
//     {
//       name: 'Weather Dashboard',
//       image: './my-portfolio/src/assets/images/ProjectImages/WeatherApp.png',
//       text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
//       link: 'https://kkwchao.github.io/Weather-Dashboard/',
//     },
//     {
//       name: 'Team Profile Generator',
//       image: './my-portfolio/src/assets/images/ProjectImages/TeamProfile.png',
//       text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
//       link: 'https://github.com/KKWChao/team-profile-generator',
//     },
//     {
//       name: 'Task Planner',
//       image: './my-portfolio/src/assets/images/ProjectImages/TaskPlanner.png',
//       text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
//       link: 'https://kkwchao.github.io/Task-Planner/',
//     },
//     {
//       name: 'Quiz App',
//       image: './my-portfolio/src/assets/images/ProjectImages/QuizApp.png',
//       text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
//       link: 'https://kkwchao.github.io/Quiz-App/',
//     },
//   ]

//   const renderCard = (card, index) => {
//     return (
//       <Col className="m-2">
//         <Card key={index}>
//         <Card.Img variant="top" src={card.image} />
//         <Card.Body className="text-center">
//           <Card.Title>{card.name}</Card.Title>
//           <Card.Text>
//             {card.text}
//           </Card.Text>
//           <Button variant="primary" className="buttonPrimary">
//             <a 
//               className="noDec" 
//               href={card.link}
//               target="_blank"
//               rel="noopener noreferrer">
//                 Go to App!
//             </a>
//           </Button>
//         </Card.Body>
//       </Card>
//     </Col>
// )
//   }

//   return (
//     <div className="projectCards">
//       <section className="m-2 p-2 d-flex flex-column min-vh-100">
//         <Row>
//           {project.map(renderCard)}
//         </Row>
//       </section>
//     </div>
//   )

// /*     <Row xs={1} md={2} className="g-4">
//     {Array.from({ length: 6 }).map((_, idx) => (
//       <Col>
//         <Card>
//           <Card.Img variant="top" src="holder.js/100px180" />
//           <Card.Body>
//             <Card.Title>Card title</Card.Title>
//             <Card.Text>
//               1 This is a longer card with supporting text below as a natural
//               lead-in to additional content. This content is a little bit
//               longer.
//             </Card.Text>
//           </Card.Body>
//         </Card>
//       </Col>
//     ))}
//   </Row> */
// }

// export default Projects()


// Temp setup for project. Converting with props 
export const Projects = () => (
  <section className="m-2 p-2 d-flex flex-column min-vh-100">
    <h3>Projects</h3>

    <Row>
      <Col className="m-2">
        <Card>
          <Card.Img variant="top" src="logo512.png"></Card.Img>
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
          <Card.Img variant="top" src="logo512.png" />
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
          <Card.Img variant="top" src="logo512.png" />
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
          <Card.Img variant="top" src="logo512.png" />
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