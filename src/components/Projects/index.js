import React from "react";
import { Col, Card, Button, CardGroup } from "react-bootstrap";

function Projects() {
  const project = [
    {
      name: 'Note Taker App',
      image: './assets/images/ProjectImages/NoteTaker.png',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      link: 'https://warm-dusk-77651.herokuapp.com/',
    },
    {
      name: 'Budget Tracker App',
      image: './assets/images/ProjectImages/BudgetApp.png',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      link: 'https://arcane-sands-29881.herokuapp.com/',
    },
    {
      name: 'Weather Dashboard',
      image: './assets/images/ProjectImages/WeatherApp.png',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      link: 'https://kkwchao.github.io/Weather-Dashboard/',
    },
    {
      name: 'Team Profile Generator',
      image: './assets/images/ProjectImages/TeamProfile.png',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      link: 'https://github.com/KKWChao/team-profile-generator',
    },
    {
      name: 'Task Planner',
      image: './src/assets/images/ProjectImages/TaskPlanner.png',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      link: 'https://kkwchao.github.io/Task-Planner/',
    },
    {
      name: 'Quiz App',
      image: './src/assets/images/ProjectImages/QuizApp.png',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      link: 'https://kkwchao.github.io/Quiz-App/',
    },
  ]

  const renderCard = (card, index) => {
    return (
      <Col className="m-2">
        <Card key={index} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={card.image} />
        <Card.Body className="text-center">
          <Card.Title>{card.name}</Card.Title>
          <Card.Text>
            {card.text}
          </Card.Text>
          <Button variant="primary" className="buttonPrimary">
            <a 
              className="noDec" 
              href={card.link}
              target="_blank"
              rel="noopener noreferrer">
                Go to App!
            </a>
          </Button>
        </Card.Body>
      </Card>
    </Col>
    )
  }

  return (
    <section>
      <h3>Project</h3>
      <CardGroup>
        {project.map(renderCard)}
      </CardGroup>
    </section>
  )
}

export default Projects;