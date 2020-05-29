import React,{useState} from 'react';
import {Carousel} from 'react-bootstrap';

import { BASE_URL } from '../environment'

// console.log(BASE_URL);

export class Home extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleSelect = this.handleSelect.bind(this);

		this.state = {
			index: 0
		};
	}

	handleSelect(selectedIndex, e) {
		this.setState({
			index: selectedIndex
		});
	}

    render() {
        const { index } = this.state;
        return (
            <div>
                <h3>Home Page</h3>
                {BASE_URL}

                <Carousel
				activeIndex={index}
				onSelect={this.handleSelect}
			>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://picsum.photos/800/400?text=First slide&bg=373940"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://picsum.photos/800/400?text=Second slide&bg=282c34"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Second slide label</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://picsum.photos/800/400?text=Third slide&bg=20232a"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
                
            </div>
        );
    }
};

// export default Home;