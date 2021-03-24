import request from '@/utils/request.js'

console.log(request)

export const getRank250 = (params) => {
    return request({
        methods: 'GET',
        url: 'book/top250',
        params
    })
}