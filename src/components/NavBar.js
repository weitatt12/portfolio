import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
} from 'reactstrap';
//import AboutMe from '../pages/AboutMe';


class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
        isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="primary" light expand="md">
                    <NavbarBrand href="/"><em>Lin Wei Tatt</em></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <ul className="nav navbar">
                                <li>
                                    <a style={{ color: 'black', padding: '8px'}} className="nav navbar" href="/about_me">About Me</a>
                                </li>

                                <li>
                                    <a style={{ color: 'black', padding: '8px' }} className="nav navbar " href="/https://github.com/weitatt12">GitHub</a>
                                </li>

                                <li>
                                    <a style={{ color: 'black', padding: '8px' }} className="nav navbar" href="/projects">Projects</a>
                                </li>

                                <li>
                                    <a style={{ color: 'black', padding: '8px' }} className="nav navbar" href="/contact">Contact</a>
                                </li>
                            </ul>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;
