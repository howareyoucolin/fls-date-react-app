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

export function seo(data = {}) {
  data.title = data.title || '纽约同城交友';
  data.description = data.description || '纽约同城交友';
	data.keywords = data.keywords || '纽约婚介交友, 法拉盛婚介找友, 纽约找男朋友';
  document.title = '纽约同城婚介交友 - ' + data.title;
  document.querySelector('meta[name="description"]').setAttribute('content', data.description);
	document.querySelector('meta[name="keywords"]').setAttribute('content', data.keywords);
}