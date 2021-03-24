import React, { Component } from 'react';
import { Table, Spin, Image } from 'antd';
import { getRank250 } from '@/api/book.js';

const columns = [
    {
        title: '书名',
        dataIndex: 'title',
        
    },
    // {
    //     title: '封面',
    //     dataIndex: 'img',
    //     // render(text, record, index) {
    //     //     return <Image    
    //     //     width={200}
    //     //     src={text}
    //     //   />;
    //     // }
    // },
    {
        title: '销量',
        dataIndex: 'order_num',
        
    },
    {
        title: '评分',
        dataIndex: 'score',        
    },
    {
        title: '参与人数',
        dataIndex: 'people',
    },
    {
        title: '出版时间',
        dataIndex: 'time'
    },
];

class CommentContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            books: [],
            pagination: {
                page: 0,
                pageSize: 25,
                total: 250,
            },
        };
    }

    //当组件输出到 DOM 后会执行 componentDidMount()
    componentDidMount() {
        const {pagination} = this.state;
        this.fetch(pagination);
    }

    fetch = (params = {}) => {
        this.setState({ loading: true });

        getRank250({
            ...params
        }).then(res => {
            this.setState({
                loading: false,
                books: res.data.data.subject,
                pagination: {
                    ...params
                }
            })
        }).catch(err => {
            console.error(err)
        })
    }

    handleTableChange = (pagination) => {
        pagination.page = pagination.current - 1;
        this.fetch({
          ...pagination
        });
      };

    render() {
        const { books, pagination, loading } = this.state;
        if (this.state.loading) {
            return <Spin />
        } else {
            return (
                <div>
                    <Table columns={columns} dataSource={books} pagination={pagination} loading={loading} onChange={this.handleTableChange} />
                </div>
            );
        }
    }
}

export default CommentContent;