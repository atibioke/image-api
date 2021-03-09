import React from 'react';
import './CarDisplay.css';
import { Link } from 'react-router-dom'
import axios from 'axios';




class CarDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                model: {},
                price: ''
            }
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        const url = `http://api-prod.autochek.africa/v1/inventory/car/${id}`
        axios.get(url)
            .then(res => {
                const data = res.data;
                this.setState({
                    data
                }, ()=>{
                    console.log(this.state.data.country, '09089')
                })
            })
    }
    render() {
 
        



        return (
            <div className="containers">
                <figure>
                    <Link to="/" className="carlink">Home</Link>
                    <div className="screen">
                        <img src={this.state.data.imageUrl} alt="image is loading..." />
                    </div>
                    <figcaption>
                        Name: {this.state.data.model.name}
                    </figcaption>
                    <figcaption>
                        Address: {this.state.data.address}
                    </figcaption>
                    <figcaption>
                        Vin: {this.state.data.vin}
                    </figcaption>
                    <figcaption>
                        Price: {this.state.data.country ==='NG' ? '₦' + this.state.data.price.toLocaleString() :  'GH¢' + this.state.data.price.toLocaleString()}
                    </figcaption>
                    <figcaption>
                        Year: {this.state.data.year}
                    </figcaption>
                </figure>

            </div>
        )
    }
}

export default CarDisplay;