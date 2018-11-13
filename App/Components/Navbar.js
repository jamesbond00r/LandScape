var React = require('react');

class Navbar extends React.Component {
	render(){

	return(
		<div className="navbar">
		<ul>
		<li>Home</li>
		<li>About</li>
		<li>Contact</li>
		<li>Gallery</li>
		</ul>
		</div>

	)
  }
}

module.exports = Navbar;