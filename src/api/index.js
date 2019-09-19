import ajax from './ajax'
// const prefix = process.env.NODE_ENV === 'development' ? '/api' : 'http://m.you.163.com';
const prefix = '/api'
export const reqGetKeyword = () => ajax.post(`${prefix}/xhr/search/init.json`)

export const reqSearchByKeyword = (keywordPrefix) => ajax.get(`${prefix}/xhr/search/searchAutoComplete.json`, {
	params: {
		keywordPrefix
	}
})


export const reqGetCategoryL1List = () => ajax('/sort')
