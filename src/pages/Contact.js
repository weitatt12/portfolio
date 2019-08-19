import React from 'react';
import { Form, FormGroup, Button, Label, Input } from 'reactstrap';

class Contact extends React.Component{
    render() {
        return(
            <>
                <Form className="text-center" name="contact" method="POST" data-netlify="true" style={{ width: '50%', margin: 'auto'}}>
                    <FormGroup>
                        <Label>Name: </Label>
                        <Input type="text" name="name" />
                    </FormGroup>

                    <FormGroup>
                        <Label>Email: </Label>
                        <Input type="text" name="email" />  
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleText">Text Area: </Label>
                        <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>

                    <Button type="submit" outline color="secondary" size="lg" className="m-3" >Submit Button</Button>
                    <Button type="submit" outline color="danger" size="lg" className="m-3" >Cancel Button</Button>
                </Form>
            </>
        )
    }
}

export default Contact;
