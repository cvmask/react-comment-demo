import React, { Component } from 'react';
import CommentInput from './components/CommentInput';
import CommentList from './components/CommentList'
import { Card } from 'antd';

class App extends Component {
	constructor() {
		super();
		this.state = {
			list: [
				{
					username: 'coliy',
					content: 'collage'
				},
				{
					username: 'vmask',
					content: 'work'
				}
			]
		}
		this.saveComment = this.saveComment.bind(this);
	}

	saveComment(commentObj) {
		console.log(commentObj);
		// this.state.list.push(commentObj);
		const list = this.state.list;
		list.push(commentObj);
		this.setState({
			list: list
		});
	}

	render() {
		return (
			<div className="app">
				<Card title="留言输入框">
					<CommentInput collect={this.saveComment} />
				</Card>
				<Card title="留言列表" >
					<CommentList list={this.state.list} />
				</Card>
			</div>
		);
	}
}

export default App;