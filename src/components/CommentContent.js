import React, {Component} from 'react';

class CommentContent extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<h4>{this.props.content.username}</h4>
				<p>{this.props.content.content}</p>
			</div>
		);
	}
}

export default CommentContent;