import React, {Component} from 'react';

class CommentInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			content: ''
		};
		this.changeInputUsername = this.changeInputUsername.bind(this);
		this.changeInputContent = this.changeInputContent.bind(this);
		this.submitComment = this.submitComment.bind(this);
	}

	changeInputUsername(e) {
		this.setState({
			username: e.target.value
		});
	}

	changeInputContent(e) {
		this.setState({
			content: e.target.value
		});
	}

	submitComment() {
		if (!this.state.username) {
			alert('请输入用户名');
			return false;
		}

		if (!this.state.content) {
			alert('请输入留言');
			return false;
		}
		
		this.props.collect({
			username: this.state.username,
			content: this.state.content
		});
		
		this.setState({
			content: ''
		});
	}

	render() {
		return (
			<div>
				<div>
					<label>用户名：</label>
					<div>
						<input value={this.state.username} onChange={this.changeInputUsername} />
					</div>
				</div>
				<div>
					<label>留言：</label>
					<div>
						<textarea value={this.state.content} onChange={this.changeInputContent} />
					</div>
				</div>
				<div>
					<button onClick={this.submitComment}>提交</button>
				</div>
			</div>
		);
	}
}

export default CommentInput;
