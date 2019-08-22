import React from 'react';
import { 
    Card,
    CardBody,
    CardTitle,
    CardSubtitle, 
    CardText, 
    CardLink
    } from 'reactstrap';

class Projects extends React.Component {
    render() {
        return(
            <>
                <Card>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                    </CardBody>
                    <a href="https://nextagram-done.herokuapp.com" target="_blank"><img src="https://is1-ssl.mzstatic.com/image/thumb/Purple127/v4/c5/25/8c/c5258ce9-90dc-b62a-c9af-9d6fd5f9b59d/source/512x512bb.jpg" alt="Card image cap" max-width='33%' height='300px'/></a>
                    <CardBody>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <CardLink href="#">Card Link</CardLink>
                        <CardLink href="#">Another Link</CardLink>
                    </CardBody>
                </Card>
            </>
        )
    }
}

export default Projects; 