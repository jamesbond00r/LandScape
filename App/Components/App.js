var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Navbar = require('./Navbar');

class App extends React.Component{
	render(){
		return(

			<div>
			<Navbar />
			</div>
		)
	}
}

module.exports = App;