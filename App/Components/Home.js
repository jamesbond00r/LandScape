var React = require('react');


class Home extends React.Component{
	render(){
		return(
			<div>
			<div className="container">
			<img className="bigPic" src={"https://images.pexels.com/photos/7174/summer-grass.jpg?auto=compress&cs=tinysrgb&h=750&w=1260"}/>
			<div className="title">
			<h1>Just Imagine...</h1>
			<h3>Let us show you the possibilities</h3>
			</div>
			</div>
			<div className="seeItFirst">
			<h1>Our Services</h1>
			</div>
			</div>
		)
	}
}

module.exports = Home;