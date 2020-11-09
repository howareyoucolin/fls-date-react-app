import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import Member from '../modules/member';

class MemberList extends React.Component {
	
	constructor(props) {
    super(props);
    this.state = {
			members: []
		};
  }
	
	componentDidMount() {
    axios.get('https://api.369usa.com/members')
      .then(res => {
        const members = res.data;
        this.setState({ members });
      })
  }
	
	render() {
		const membersList = this.state.members.map((member) =>
			<Member 
				key={member.id}
				id={member.id}
				name={member.name}
				age={member.age}
				gender={member.gender}
				superTitle={member.superTitle}
				intro={member.intro}
				imageUrl={member.imageUrl}
				wechat={member.wechat}
			/>
		);
		return (
			<div className="memberList">
				{membersList}
			</div>
		)
	}
};

export default MemberList;