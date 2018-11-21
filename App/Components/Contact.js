var React = require('react');
var Well = require('react-bootstrap').Well


class Contact extends React.Component{
	render(){
		return(
			<div>
			<div className="wrapper">

			<div className="Contact">
		<h1>Contact us today for an estimate!</h1>
		

	<p>Email: rrlawnlandscaping@yahoo.com</p>
	<p>Call or even text: 785-342-9420</p>

			</div>
			
			</div>

			<Well className="Deep">
<div className="feet"><p>Contact: 785-342-9420 </p></div>
			<div className="feet"><i className="far fa-envelope"></i><a href="mailto:rrlawnlandscaping@yahoo.com">__Email: rrlawnlandscaping@yahoo.com</a></div>
			<div className="feet"><a href="https://www.facebook.com/rrlawnlandscaping/"><i className="fab fa-facebook"></i>__Follow us on Facebook</a></div>
		
</Well>
	
			</div>
		)
	}
}

module.exports = Contact;