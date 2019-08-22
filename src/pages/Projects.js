import React from 'react';
import { 
    Card,
    CardBody,
    CardTitle,
    CardSubtitle, 
    CardText, 
    CardLink, 
    CardImg, 
    Button, 
    CardGroup
    } from 'reactstrap';

class Projects extends React.Component {
    render() {
        return(
            <>
                <h1 className="text-center"><strong><em>My Projects</em></strong></h1>
                
                <CardGroup className="projects" style={{width:'550px'}}>
                    <a href="https://sugar-combat.herokuapp.com/" style={{textDecoration:'none',color:'black'}}>
                        <Card>
                            <img src="https://nextagram-flask.s3.amazonaws.com/Sugar+combat-pic.png" alt="sugar combat" width='550px' height='300px'/>
                            <CardBody>
                                <CardTitle><strong>Sugar Combat</strong></CardTitle>
                                <CardText className="flex-wrap">This "Sugar Combat" app was built using Python and Flask. This is my first final project which challenged me to learn Python, Flask, Javascript, HTML and SQL. </CardText>
                            </CardBody>
                        </Card>
                    </a>

                    <br />

                    <a href="https://nextagram-done.herokuapp.com" style={{textDecoration:'none',color:'black'}}>
                        <Card>
                            <img src="https://nextagram-flask.s3.amazonaws.com/Nextagram-pic.png" alt="nextagram" width='550px' height='300px'/>
                            <CardBody>
                                <CardTitle><strong>Nextagram</strong></CardTitle>
                                <CardText className="flex-wrap">This "Nextagram" app was built using Python and Flask. This is my first full stack project which challenged me to learn Python, Flask and SQL. </CardText>
                            </CardBody>
                        </Card>
                    </a>

                    <br />

                    <a href="https://awesome-davinci-55503e.netlify.com/" style={{textDecoration:'none',color:'black'}}>
                        <Card>
                            <CardImg top width="100%" src="https://nextagram-flask.s3.amazonaws.com/Tic+Tac+Toe-pic.png" alt="tic tac toe" width='300px' height='300px' />
                            <CardBody>
                                <CardTitle><strong>Tic Tac Toe</strong></CardTitle>
                                <CardText>This project uses HTML, CSS and JavaScript. Players click on letters to try guessing the hidden word.</CardText>
                            </CardBody>
                        </Card>
                    </a>

                </CardGroup>
                
            </>
        )
    }
}

export default Projects; 