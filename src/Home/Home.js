import React from 'react';
import './Home.css';
import ImgDisplay from '../ImgDisplay/ImgDisplay';
import axios from 'axios';
import logo from "../App/spinner.gif"
import ReactPaginate from 'react-paginate';



class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cars: [],
            country: 'ng',
            loaded: false,
            perPage: 24,
            pageNumber: 1,
            pagination: {},
            search: ""
        }
        this.handleOption = this.handleOption.bind(this);
        this.handlepageClick = this.handlePageClick.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    };

    handleSearch(e) {
        const search = e.target.value;
        console.log(search)
        this.setState({
            search,
        })
        const url = ''
        axios
            .get(url)
            .then(res => {
                const page = res.data.pagination;
                const cars = res.data.result;
                this.setState({
                    cars,
                    loaded: true,
                    pagination: page
                });
            })
    }

    handlePageClick = (e) => {
        const selected = e.selected;
        this.setState({
            pageNumber: selected,
            laoded: false,
        })
        const url = ''
        axios
            .get(url)
            .then(res => {
                const page = res.data.pagination;
                const cars = res.data.result;
                this.setState({
                    cars,
                    loaded: true,
                    pagination: page
                });
            })
    }

    handleOption(e) {
        const country = e.target.value;
        this.setState({
            loaded: false,
            country
        })
        const url = ''
        axios
            .get(url)
            .then(res => {
                const page = res.data.pagination;
                const cars = res.data.result;
                this.setState({
                    cars,
                    loaded: true,
                    pagination: page
                });
            })
    }


    componentDidMount() {
        const url = ""

        axios.get(url)
            .then(res => {
                const page = res.data.pagination;
                const cars = res.data.result;
                this.setState({
                    cars,
                    loaded: true,
                    pagination: page
                });
            })
    }



    render() {
        return (
            <div>
                {
                    this.state.loaded === false && <div>
                        <img
                            className="spinner"
                            id="spin"
                            src={logo}
                            alt="loading.."
                        />
                    </div>
                }
                {
                    this.state.loaded && <ImgDisplay
                        cars={this.state.cars}
                        handleOption={this.handleOption}
                        country={this.state.country}
                        handleSearch={this.handleSearch}
                    />
                }
                <div className="page">
                    <ReactPaginate
                        previousLabel={"prev"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={this.state.pagination.total / this.state.perPage}
                        marginPagesDisplayed={1}
                        initialPage={1}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"} />
                </div>
            </div>
        );
    }
}

export default Home;