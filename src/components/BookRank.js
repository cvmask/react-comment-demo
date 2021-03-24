import React, {Component} from 'react';

class CommentContent extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

    //当组件输出到 DOM 后会执行 componentDidMount()
	componentDidMount() {
		const _this = this;
		getRank250({
			page: 0
		}).then(res => {
			_this.setState({
				loading: false
			})
			console.log(res)
		}).catch(err => {
			console.error(err)
		})
	}

	render() {
		return (
			<div>
				<h4>this.props.content.username</h4>
				<p>this.props.content.content</p>
			</div>
		);
	}
}

export default CommentContent;