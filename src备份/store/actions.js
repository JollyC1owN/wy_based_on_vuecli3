import { reqGetKeyword, reqSearchByKeyword, reqGetCategoryL1List } from '../api/index'
import { GET_KEYWORD, SEARCH_BYKEYWORD, GET_CATEGORYL1LIST } from './mutation-types'
export default {
	// 初始化显示搜索界面的数据
	async getKeyword ({ commit }) {
		try {
			const result = await reqGetKeyword()
			const data = result.data
			commit(GET_KEYWORD, data)
		} catch (error) {
			console.log(error)
		}
	},
	// 根据输入的内容搜索
	async searchByKeyword ({ commit }, searchText) {
		try {
			const result = await reqSearchByKeyword(searchText)
			const data = result.data
			commit(SEARCH_BYKEYWORD, data)
		} catch (error) {
			console.log(error)
		}
	},
	// 获取分类列表
	async getCategoryL1List ({ commit }) {
		try {
			const result = await reqGetCategoryL1List()
			const data = result.data.categoryL1List
			commit(GET_CATEGORYL1LIST, data)
		} catch (error) {
			console.log(error)
		}
	}
}
