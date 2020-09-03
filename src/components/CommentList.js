import React, {Component} from 'react';
import CommentContent from './CommentContent.js';

class CommentList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
			{

				this.props.list.map((item, index) => {
					return (
						<CommentContent key={index} content={item} />
					)
				})
			}
			</div>
		);
	}
}

export default CommentList;