import React, { Component } from 'react';
import { Avatar, List } from 'antd'
import { UserOutlined } from '@ant-design/icons';

class CommentList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<List
				itemLayout="horizontal"
				dataSource={this.props.list}
				renderItem={item => (
					<List.Item>
						<List.Item.Meta
							avatar={<Avatar size={32} icon={<UserOutlined />} />}
							title={<a href="https://ant.design">{item.username}</a>}
							description={item.content}
						/>
					</List.Item>
				)}
			/>
		);
	}
}

export default CommentList;