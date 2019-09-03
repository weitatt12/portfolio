import React from 'react';
import { 
    Grid, 
    Cell 
} from 'react-mdl';

class Home extends React.Component {
    render() {
        return(
            <div style={{ width:'100%', margin: 'auto' }}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <img src="https://image.flaticon.com/icons/svg/1320/1320457.svg" alt='coder' className="coder-img" />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr />

                            <p> HTML / CSS | Bootstrap | JavaScript | React JS | Python | Flask | SQL </p>

                            <div className="social-links">

                                {/* Linked In */}
                                <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/weitatt12" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>


                                {/* Facebook */}
                                <a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true" />
                                </a>
                                
                            </div>
                        </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Home;