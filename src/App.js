import React, {Component} from 'react';
import CommentInput from './components/CommentInput';
import CommentList from './components/CommentList'

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
	          <CommentInput collect={this.saveComment} />
	          <CommentList list={this.state.list} />
	        </div>
	    );
	}
}

export default App;