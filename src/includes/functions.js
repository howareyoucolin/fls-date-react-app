import React from 'react';

export function unEscapeLineBreak(content){
	return content.split('<br />').map((segment, key) =>
	  <React.Fragment key={key}>{segment}<br /></React.Fragment>
	);
}