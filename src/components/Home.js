import React from 'react';
import {Carousel} from 'react-bootstrap';

import { BASE_URL } from '../environment'

// console.log(BASE_URL);

export class Home extends React.Component {

    render() {
        return (
            <div>
                <h3>Home Page</h3>
                            {BASE_URL}
                
                <Carousel>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h3>Slide 1</h3>
                            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
};

// export default Home;