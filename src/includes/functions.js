import React from 'react'

export function unEscapeLineBreak(content){
	return content.split('<br />').map((segment, key) =>
	  <React.Fragment key={key}>{segment}<br /></React.Fragment>
	)
}

export function stripTags(content){
	return content.replace(/(<([^>]+)>)/gi, '');
}

export function getExcerpt(content, limit=250){
	return stripTags(content).substring(0, limit);
}