import { reqGetKeyword, reqSearchByKeyword } from '../api/index'
import { GET_KEYWORD, SEARCH_BYKEYWORD } from './mutation-types'
export default {
	async getKeyword ({ commit }) {
		try {
			const result = await reqGetKeyword()
			const data = result.data
			commit(GET_KEYWORD, data)
		} catch (error) {
			console.log(error)
		}
	},
	async searchByKeyword ({ commit }, searchText) {
		try {
			const result = await reqSearchByKeyword(searchText)
			const data = result.data
			commit(SEARCH_BYKEYWORD, data)
		} catch (error) {
			console.log(error)
		}
	}
}
