import request from '@/utils/request.js'

// 获取图书TOP250排行榜
export const getRank250 = (params) => {
    return request({
        methods: 'GET',
        url: 'book/top250',
        params
    })
}