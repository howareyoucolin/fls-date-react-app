import React from 'react'

export default function Text(props){
	
	return ( 
		<div style={{textAlign: 'justify'}}>
			{props.children}
		</div>
	)
	
}