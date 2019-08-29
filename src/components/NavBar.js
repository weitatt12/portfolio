import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Modal,
    ModalHeader, 
    ModalBody,
    Button
} from 'reactstrap';


class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleContact = this.toggleContact.bind(this);
        this.state = {
            isOpen: false,
            modal: false

        };
    }

    toggle() {
        this.setState({
        isOpen: !this.state.isOpen
        });
    }

    toggleContact = () => {
        this.setState(prevstate => ({
            modal: !prevstate.modal
        }));
    }
    
    render() {
        return (
            <div>
                <Navbar className="header-color" light expand="md">
                    <NavbarBrand href="/"><strong><em className="my-name">Lin Wei Tatt</em></strong></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <ul className="nav navbar color">
                                <li>
                                    <a className="nav-item nav navbar" href="/">Home</a>
                                </li>

                                <li>
                                    <a className="nav-item nav navbar" href="/about_me">About Me</a>
                                </li>
                
                                <li>
                                    <a className="nav-item nav navbar" href="/projects">Projects</a>
                                </li>
                
                                <li>
                                    <a className="nav-item nav navbar" href="#" onClick={this.toggleContact}>Contact</a>
                                </li>
                            </ul>
                        </Nav>
                    </Collapse>
                </Navbar>

                <Modal isOpen={this.state.modal} toggle={this.toggleContact}>
                <ModalHeader toggle={this.toggleContact}>Contact Options</ModalHeader>

                    <ModalBody className="modal-body">

                        <Button block color="none" style={{cursor:'default'}}>
                            <a><img src="https://image.flaticon.com/icons/png/512/131/131155.png" width="25px" height="25px"/> Email : linweitatt@gmail.com</a>
                        </Button>  
                        
                        <Button block color="none" style={{cursor:'default'}}>
                            <a href="https://github.com/weitatt12"><img src="https://image.flaticon.com/icons/svg/25/25231.svg" width='25px' height='25px' /> Github : https://github.com/weitatt12</a>
                        </Button> 

                        <Button block color="none" style={{cursor:'default'}}>
                            <a><img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png" width='25px' height='25px'/> Number : +60 12 632 3931</a>
                        </Button>
                        
                        <Button block color="none" style={{cursor:'default'}}>
                            <a href="https://nextagram-flask.s3.amazonaws.com/Resume-LWT.pdf" download><img src="https://cdn2.iconfinder.com/data/icons/reports-and-analytics-7/49/30-512.png" width="25px" height="25px"/> Resume : Download Me</a>
                        </Button> 

                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default NavBar;
