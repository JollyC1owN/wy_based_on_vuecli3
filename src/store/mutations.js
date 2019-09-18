import { GET_KEYWORD, SEARCH_BYKEYWORD } from './mutation-types'
export default {
	[GET_KEYWORD] (state, data) {
		state.hotKeywordList = data.hotKeywordVOList
		state.defaultKeyword = data.defaultKeyword.keyword
	},
	[SEARCH_BYKEYWORD] (state, data) {
		state.seachResult = data
	}
}
