import Mock from 'mockjs'
import category from './category.json'
Mock.mock('/sort', { code: 0, data: category })
