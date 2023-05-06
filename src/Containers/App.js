import React, {Component} from "react";
import {robots} from './robs'
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'
import ErrorBoundry from './ErrorBoundry'

import './App.css';
import 'tachyons';

class App extends Component {
	constructor(){
		super()
		this.state = {
			robocards: robots,
			searchfield: ''
		}
	}

	onSearchChange=(event)=>{
		this.setState({searchfield: event.target.value})
	}

	componentDidCatch(error, info){
		return <errorHandle />
	}

	render(){
		const {robocards, searchfield} = this.state;
		const fltrrobos=robots.filter(user=>user.name.toLowerCase().includes(searchfield.toLowerCase()))
		return !robocards.length ?
			<h1 className="head" >Wait While Loading</h1> :
		(
			<div className="tc">
				<p className="head pa2 ma1" >Robos</p>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots={fltrrobos}/>
					</ErrorBoundry>
				</Scroll>
			</div>
		)
	}
}

export default App;