import React from 'react';
import './ImgDisplay.css';
import { Link } from 'react-router-dom'


class ImgDisplay extends React.Component {
  render() {
    return (

      <>
        <header>
          <h1>Image API</h1>

          <label for="countries" className="label">Choose a country: </label>
          <select defaultValue={this.props.country} name="countries" id="countries" onChange={this.props.handleOption}>
            <option value="gh">Ghana</option>
            <option value="ng">Nigeria</option>
          </select>
          <div className="inputBox">
            <label htmlfor="search" >Search: </label>
            <input type="text" onChange={this.props.handleSearch} />
          </div>
        </header>
        {this.props.cars.map(car => {
          return (
            <div className="container">

              <div className="grid-item">
                <figure>
                  <Link to={`/car/${car.id}`}> <img src={car.imageUrl}
                    alt="car is loading.."
                    onLoad={this.props.onImageLoaded}
                  /></Link>
                  <figcaption>
                    Title: {car.title}
                  </figcaption>
                  <figcaption>
                    Year: {car.year}
                  </figcaption>
                  <figcaption>
                    Market Price: {this.props.country==='ng' ? '₦' + car.marketplacePrice.toLocaleString() : 'GH¢' + car.marketplacePrice.toLocaleString()} 
                  </figcaption>
                  <figcaption>
                    Selling Condition:  {car.sellingCondition}
                  </figcaption>
                </figure>
              </div>

            </div>
          )

        })}
      </>
    )
  }
}

export default ImgDisplay;