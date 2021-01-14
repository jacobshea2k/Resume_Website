import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Background from "./background-image.jpg";
import Arsenal from "./arsenal-image.png";
import './Home.css';

class Home extends Component {
    render() {
        return( 
            <div className="home">
                <img className="home-background" src={ Background }/>
                <Footer/>
            </div>
        );
    }
}

export default Home; 