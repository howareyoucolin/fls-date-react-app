import React from 'react';

export function unEscapeLineBreak(content){
	return content.split('<br />').map(function(segment){
	  return <>{segment}<br /></>;
	});
}