var React = require('react');

class About extends React.Component{
	render(){
		return(

			<div className="about">
			<div className="family">
			<h1>Meet Our Family</h1>
			<img className="familypic" src={"https://images.pexels.com/photos/1470172/pexels-photo-1470172.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"} />
			<h3>We Are The Rutherfords </h3>
			</div>
			<p>I have always had a love for the outdoors. Being the only boy with
			three sisters, and growing up on a ranch, outdoor maintenance was my responsibility.</p>
			<p>One of my first jobs out of high school was working for a lawn care company, where I did everything
			from mowing to complete new landscape construction. After 18 years of management, and a call from my neighbor asking
			me if I would consider mowing his lawn, R&R was born.</p>
			<p>I wanted a way to teach my three boys the value of hard work, and instill the principals that
			were taught to me by my grandfather. He taught me that life is not about what
			is handed to you, but what you make of it. If you work hard, have integrity, and do not compromise your values
			for the almighty dollar, you will accomplish what is truly important, and success will follow.</p>
				<p>As i watched the value of customer service go by the wayside, I knew that i wanted my children to experience those same built on those solid principals.
			As our customer base grows each year, I value each and every one of them, and their satisfaction is very important to me. Our family based business
			allows us to work together, teach valuable lessons, and maintain a level of professionalism
			that promotes success. I want to thank each person who has helped R&R become the thriving company that it is today, and especially my family.
			I look forward to many more years of making long lasting customer relationships.</p>
			<p className="sig">Trent Rutherfor</p>
			</div>
		)
	}
}

module.exports = About;