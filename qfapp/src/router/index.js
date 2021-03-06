import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const router = new Router({
	routes: [{
			path: '/',
			component: (resolve) => {
				require(['../pages/index/index.vue'], resolve);
			}
		}, {
			path: '/index',
			name: 'index',
			component: (resolve) => {
				require(['../pages/index/index.vue'], resolve);
			}
		}, {
			path: '/game',
			name: 'game',
			component: (resolve) => {
				require(['../pages/game/game.vue'], resolve);
			}
		}, {
			path: '/news',
			name: 'news',
			component: (resolve) => {
				require(['../pages/news/news.vue'], resolve);
			}
		}, {
			path: '/newsDetail',
			name: 'newsDetail',
			component: (resolve) => {
				require(['../pages/newsDetail/newsDetail.vue'], resolve);
			}
		}, {
			path: '/gameDetail',
			name: 'gameDetail',
			component: (resolve) => {
				require(['../pages/gameDetail/gameDetail.vue'], resolve);
			}
		}, {
			path: '/searchDetail',
			name: 'searchDetail',
			component: (resolve) => {
				require(['../pages/searchDetail/searchDetail.vue'], resolve);
			}
		},
		{
			path: '/moreNews',
			name: 'moreNews',
			component: (resolve) => {
				require(['../pages/moreNews/moreNews.vue'], resolve);
			}
		},
		{
			path: '/myGift',
			name: 'myGift',
			component: (resolve) => {
				require(['../pages/myGift/myGift.vue'], resolve);
			}
		},
		{
			path: '/update',
			name: 'update',
			component: (resolve) => {
				require(['../pages/update/update.vue'], resolve);
			}
		}, {
			path: '/mine',
			name: 'mine',
			// 需要登录才能进入的页面可以增加一个meta属性
			meta: {
				requireAuth: true
			},
			component: (resolve) => {
				require(['../pages/mine/mine.vue'], resolve);
			}
		},
		{
			path: '/myDutyCenter',
			name: 'myDutyCenter',
			component: (resolve) => {
				require(['../pages/myDutyCenter/myDutyCenter.vue'], resolve);
			}
		},
		{
			path: '/duty',
			name: 'duty',
			component: (resolve) => {
				require(['../pages/duty/duty.vue'], resolve);
			}
		},
		{
			path: '/serviceCenter',
			name: 'serviceCenter',
			component: (resolve) => {
				require(['../pages/serviceCenter/serviceCenter.vue'], resolve);
			}
		},
		{
			path: '/selfService',
			name: 'selfService',
			component: (resolve) => {
				require(['../pages/selfService/selfService.vue'], resolve);
			}
		},
		{
			path: '/vipService',
			name: 'vipService',
			component: (resolve) => {
				require(['../pages/vipService/vipService.vue'], resolve);
			}
		},
		{
			path: '/vipGrow',
			name: 'vipGrow',
			component: (resolve) => {
				require(['../pages/vipGrow/vipGrow.vue'], resolve);
			}
		},
		{
			path: '/integralShop',
			name: 'integralShop',
			component: (resolve) => {
				require(['../pages/integralShop/integralShop.vue'], resolve);
			}
		},
		{
			path: '/myWallet',
			name: 'myWallet',
			component: (resolve) => {
				require(['../pages/myWallet/myWallet.vue'], resolve);
			}
		},
		{
			path: '/MyVouchers',
			name: 'MyVouchers',
			component: (resolve) => {
				require(['../pages/MyVouchers/MyVouchers.vue'], resolve);
			}
		},
		{
			path: '/Recharge',
			name: 'Recharge',
			component: (resolve) => {
				require(['../pages/Recharge/Recharge.vue'], resolve);
			}
		},
		{
			path: '/vouchersHelp',
			name: 'vouchersHelp',
			component: (resolve) => {
				require(['../pages/vouchersHelp/vouchersHelp.vue'], resolve);
			}
		},
		{
			path: '/vouchersDesc',
			name: 'vouchersDesc',
			component: (resolve) => {
				require(['../pages/vouchersDesc/vouchersDesc.vue'], resolve);
			}
		},
		{
			path: '/changeVouchers',
			name: 'changeVouchers',
			component: (resolve) => {
				require(['../pages/changeVouchers/changeVouchers.vue'], resolve);
			}
		},
		{
			path: '/goodsDetail',
			name: 'goodsDetail',
			component: (resolve) => {
				require(['../pages/goodsDetail/goodsDetail.vue'], resolve);
			}
		},
		{
			path: '/check',
			name: 'check',
			component: (resolve) => {
				require(['../pages/check/check.vue'], resolve);
			}
		},
	]
});
// 判断是否需要登录权限 以及是否登录
// router.beforeEach((to, from, next) => {
//     if (to.matched.some(res => res.meta.requireAuth)) { // 判断是否需要登录权限
//         if (localStorage.getItem('username')) { // 判断是否登录
//             next();
//         } else { // 没登录则跳转到登录界面
//             next({
//                 path: '/Register',
//                 query: {
//                     redirect: to.fullPath
//                 }
//             });
//         }
//     } else {
//         next();
//     }
// });

export default router;