import React from 'react';

const Scroll = (props)=>{
	return(
		<div style={{overflowY:'scroll', position: 'absolute', bottom: '0px', top:"195px", right:'0px', left:'0px'}}>
			{props.children}
		</div>
	)
}
export default Scroll;