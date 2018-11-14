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
			<h1 className="ServicesHeader">Our Services</h1>
			</div>
			<div>
			
			
			
			</div>

<div className="centered">

			<div className="sections">

			

			<section className="sections">
			
			<img className="round" src={"https://images.pexels.com/photos/6083/garden-moss-stone-sett.jpg?auto=compress&cs=tinysrgb&h=650&w=940"}/>
			<h4 className="services">Hardscape</h4>
		</section>

			<section className="sections">
            <img className="round" src={"https://images.pexels.com/photos/413195/pexels-photo-413195.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"}/>
          	<h4 className="services">Yard Clean Up</h4>
         </section>

          <section className="sections">
          	<img className="round" src={"https://images.pexels.com/photos/269063/pexels-photo-269063.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}/>
          <h4 className="services">Wood Work</h4>
         </section>
		

			</div>
			</div>
			</div>
		)
	}
}

module.exports = Home;