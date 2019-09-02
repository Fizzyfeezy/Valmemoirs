import React from 'react';

const style = {
	textDecoration: 'none',
	color: 'black',
	fontSize: '20px'
}
const Img = props =>

	<li>
		<a href={props.link}>
			<img src={props.url} alt="Unsplash Image here" />
		</a>
		<p>
			Photo by - 
			<h5><a href={props.user} style = {style}> {props.name}</a></h5>
			<a href={props.link}> See on Unsplash</a>
		</p>
	</li>;

export default Img;
