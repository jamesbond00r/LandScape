var React = require('react');
var NavLink = require('react-router-dom').NavLink;

class Navbar extends React.Component {
	render(){

	return(
		<div className="phone">
<i className="fas fa-phone"> 785-342-9420</i>

		<div className="navbar">
		
		<ul>
		
		<li>
		<NavLink exact activeClassName='active' to='/'>
		Home
		</NavLink>
			</li>

		<li>
		<NavLink activeClassName='active' to='/About'>
		About
		</NavLink>
		</li>

		<li>
		<NavLink activeClassName='active' to='/Contact'>
		Contact
		</NavLink>
		</li>


		<li>
		<NavLink activeClassName='active' to='/Gallery'>
		Gallery
		</NavLink>
		</li>

		</ul>
		</div>
		</div>

	)
  }
}

module.exports = Navbar;