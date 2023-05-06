import React from 'react';

const Card=({id, name, email})=>{
	return(
		<div className = "tc dib grow bg-pink  br3 shadow-5 bw2 ma2 pa2">
			<img alt="There aint no pic for this" src={`http://robohash.org/${id}?200*200`} />
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	)
}

export default Card;