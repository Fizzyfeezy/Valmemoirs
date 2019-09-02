import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import ImgList from './ImgList';
import SearchForm from './SearchForm';
import APP_KEY from '../lock.js';

class UnSplash extends Component {
	constructor() {
		super();
		this.state = {
			imgs: [],
			loadingState: true
		};
	}

	componentDidMount() {
		this.performSearch();
	}

	performSearch = (query = 'sun') => {
		axios
			.get(
				`https://api.unsplash.com/search/photos/?page=1&per_page=5&query=${query}&client_id=${APP_KEY}`
			)
			.then(data => {
				console.log(data.data.results)
				this.setState({ imgs: data.data.results, loadingState: false });
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
	};

	render() {
		return (
			<div>
				<div className="main-header">
					<div className="inner">
						<h5 className="main-title">Image Search</h5>
						<SearchForm onSearch={this.performSearch} />
					</div>
				</div>
				<div className="main-content">
					{this.state.loadingState
						? <p>Loading</p>
						: <ImgList data={this.state.imgs} />}
				</div>
			</div>
		);
	}
}

export default UnSplash
