import { GET_KEYWORD, SEARCH_BYKEYWORD, GET_CATEGORYL1LIST } from './mutation-types'
export default {
	[GET_KEYWORD] (state, data) {
		state.hotKeywordList = data.hotKeywordVOList
		state.defaultKeyword = data.defaultKeyword.keyword
	},
	[SEARCH_BYKEYWORD] (state, data) {
		state.seachResult = data
	},
	[GET_CATEGORYL1LIST] (state, data) {
		state.categoryL1List = data
	}
}
