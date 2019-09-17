import Home from '../pages/Home/Home.vue'
import Sort from '../pages/Sort/Sort.vue'
import Something from '../pages/Something/Something.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
export default [
	{
		path: '/home',
		component: Home,
		meta: {
			showFooter: true
		}
	},
	{
		path: '/search',
		component: Search
	},
	{
		path: '/sort',
		component: Sort,
		meta: {
			showFooter: true
		}
	},
	{
		path: '/something',
		component: Something,
		meta: {
			showFooter: true
		}
	},
	{
		path: '/shopcart',
		component: ShopCart,
		meta: {
			showFooter: true
		}
	},
	{
		path: '/profile',
		component: Profile,
		meta: {
			showFooter: true
		}
	},
	{
		path: '/',
		redirect: '/home'
	}
]
