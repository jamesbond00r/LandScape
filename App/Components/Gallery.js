var React = require('react');
var Well = require('react-bootstrap').Well

class Gallery extends React.Component{
	render(){
		return(

			<div>
			<div>
			<div >


<img className="Gallery" src={"https://images.pexels.com/photos/860564/pexels-photo-860564.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"}/>
<img className="Gallery" src={"https://images.pexels.com/photos/534171/pexels-photo-534171.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"}/>
<img className="Gallery" src={"https://images.pexels.com/photos/210531/pexels-photo-210531.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"}/>


<img className="Gallery" src={"https://images.pexels.com/photos/206673/pexels-photo-206673.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"}/>
<img className="Gallery" src={"https://images.pexels.com/photos/261410/pexels-photo-261410.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"}/>
<img className="Gallery" src={"https://images.pexels.com/photos/136097/pexels-photo-136097.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}/>


<img className="Gallery" src={"https://images.pexels.com/photos/449023/pexels-photo-449023.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}/>
<img className="Gallery" src={"http://c2.staticflickr.com/4/3888/14878097108_5997041006_b.jpg"}/>
<img className="Gallery" src={"http://c2.staticflickr.com/8/7579/15482110477_0b0e9e5421_b.jpg"}/>

	</div>


			</div>
			<Well>
<div className="feet"><p>Contact: 785-342-9420 </p></div>
			<div className="feet"><i className="far fa-envelope"></i><a href="mailto:rrlawnlandscaping@yahoo.com">__Email: rrlawnlandscaping@yahoo.com</a></div>
			<div className="feet"><a href="https://www.facebook.com/rrlawnlandscaping/"><i className="fab fa-facebook"></i>__Follow us on Facebook</a></div>
		
</Well>
</div>

		)
	}
}

module.exports = Gallery;