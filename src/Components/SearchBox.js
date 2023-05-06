import React from 'react';

const SearchBox = ({searchChange}) => {
	return(
		<div>
			<input onChange={searchChange} className="pa3 ma2 br3 grow" type='search' placeholder='Search Robots' />
		</div>
	)
}
export default SearchBox;