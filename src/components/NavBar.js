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
                    <NavbarBrand href="/"><em>Lin Wei Tatt</em></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <ul className="nav navbar">
                                <li>
                                    <a style={{ color: 'black', padding: '8px'}} className="nav navbar" href="/">Home</a>
                                </li>

                                <li>
                                    <a style={{ color: 'black', padding: '8px'}} className="nav navbar" href="/about_me">About Me</a>
                                </li>
                
                                <li>
                                    <a style={{ color: 'black', padding: '8px' }} className="nav navbar" href="/projects">Projects</a>
                                </li>
                
                                <li>
                                    <a style={{ color: 'black', padding: '8px' }} className="nav navbar" onClick={this.toggleContact}>Contact</a>
                                </li>
                            </ul>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggleContact}>Contact Options</ModalHeader>
                    <ModalBody className="d-flex justify-content-center flex-wrap">
                        <Button color="white">
                            <a href="https://github.com/weitatt12"><img src="https://image.flaticon.com/icons/svg/25/25231.svg" width='25px' height='25px' /> Github : https://github.com/weitatt12</a>
                        </Button>
                        <Button color="white">
                            <a><img src="https://image.flaticon.com/icons/png/512/131/131155.png" width="25px" height="25px"/> Email : linweitatt@gmail.com</a>
                        </Button>   
                        <Button color='white'>
                            <a><img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png" width='25px' height='25px'/> Number : +60 12 632 3931</a>
                        </Button>
                        <Button color='white'>
                            <a href="https://nextagram-flask.s3.amazonaws.com/Resume-LWT.pdf" download><img src="https://cdn2.iconfinder.com/data/icons/reports-and-analytics-7/49/30-512.png" width="25px" height="25px"/> Resume : Download Me</a>
                        </Button>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default NavBar;


{/* <div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header title={<span><span style={{ color: '#ddd' }}></span><strong>Lin Wei Tatt</strong></span>}>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about_me">About Me</Link>
                <Link to="/projects">Projects</Link>
                <a style={{ color: 'white', padding: '8px' }} onClick={this.toggleContact}>Contact</a>
            </Navigation>
        </Header>
        <Drawer title="Lin Wei Tatt">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about_me">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link style={{ color: 'white', padding: '8px' }}  onClick={this.toggleContact}>Contact</Link>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div> */}