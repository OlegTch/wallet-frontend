(this["webpackJsonpwallet-frontend"]=this["webpackJsonpwallet-frontend"]||[]).push([[3],{111:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(29),o=n.n(c),u=n(28),i=n(17),s=n(66),l=(n(80),n(22)),d=(n(81),n(2)),f=n(51),p=n(47),b=n(49),g=(n(69),n(5)),j=function(){var t=Object(i.c)(f.d),e=Object(i.c)(p.c),n=Object(i.c)(b.b);return Object(r.useEffect)((function(){t&&l.b.error(t),e&&l.b.error(e),n&&l.b.error(n)}),[t,e,n]),Object(g.jsx)(g.Fragment,{})},O=n(52),v=function(t,e){return t?e||Object(g.jsx)(d.a,{to:"/home"}):Object(g.jsx)(d.a,{to:"/login"})},m=n(30),h=n(12),x=n(18),L=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(6)]).then(n.bind(null,681))})),w=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(10)]).then(n.bind(null,683))})),k=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,684))}));var S,y,M,A=function(){var t=Object(i.b)(),e=Object(i.c)(m.f),n=Object(i.c)(m.c),a=Object(i.c)(m.b);return Object(r.useEffect)((function(){e&&!n&&t(h.a.currentUser(a))}),[]),Object(r.useEffect)((function(){console.log("Use effect in app",n),n||e||t(Object(x.a)())}),[n,e]),Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(r.Suspense,{fallback:Object(g.jsx)(O.a,{}),children:[n===e&&Object(g.jsxs)(d.d,{children:[Object(g.jsx)(d.b,{path:"login",element:Object(g.jsx)(k,{})}),Object(g.jsx)(d.b,{path:"register",element:Object(g.jsx)(w,{})}),Object(g.jsx)(d.b,{path:"/",element:v(n)}),Object(g.jsx)(d.b,{path:"/*",element:v(n,Object(g.jsx)(L,{}))})]}),Object(g.jsx)(j,{})]})})},E=n(1),I=n(11),P=n(6),T=n(19),D=n(67),U=n.n(D),B=n(68),C=n.n(B),z=n(33),N=Object(P.d)({name:"categories",initialState:{data:[],isLoading:!1,error:null},extraReducers:(S={},Object(E.a)(S,z.a.getCategories.pending,(function(t){t.isLoading=!0,t.error=null})),Object(E.a)(S,z.a.getCategories.fulfilled,(function(t,e){var n=e.payload;t.data=Object(I.a)(n),t.isLoading=!1})),Object(E.a)(S,z.a.getCategories.rejected,(function(t,e){var n=e.error;t.isLoading=!1,t.error=n.message})),Object(E.a)(S,x.a,(function(t){t.data=[],t.isLoading=!1,t.error=null})),S)}),R=n(34),q=Object(P.d)({name:"statistic",initialState:{dataExpense:[],dataIncome:[],totalExpense:0,totalIncome:0,isLoading:!1,error:null},extraReducers:(y={},Object(E.a)(y,R.a.getStatistic.pending,(function(t){t.isLoading=!0,t.error=null})),Object(E.a)(y,R.a.getStatistic.fulfilled,(function(t,e){var n=e.payload;t.totalExpense=n.allExpense,t.totalIncome=n.allIncome,t.dataExpense=n.transactionsExpense,t.dataIncome=n.transactionsIncome,t.isLoading=!1})),Object(E.a)(y,R.a.getStatistic.rejected,(function(t,e){var n=e.error;t.isLoading=!1,t.error=n.message})),Object(E.a)(y,x.a,(function(t){t.dataExpense=[],t.dataIncome=[],t.totalExpense=0,t.totalIncome=0,t.isLoading=!1,t.error=null})),y)}),_=n(39),F=n(40),J={key:"user",storage:C.a,whitelist:["token"]},G=Object(T.g)(J,_.b.reducer),H=Object(P.a)({reducer:(M={},Object(E.a)(M,_.b.name,G),Object(E.a)(M,N.name,N.reducer),Object(E.a)(M,q.name,q.reducer),Object(E.a)(M,F.c.name,F.c.reducer),M),middleware:function(t){return[].concat(Object(I.a)(t({serializableCheck:{ignoredActions:[T.a,T.f,T.b,T.c,T.d,T.e]}})),[U.a])},devTools:!1}),K={store:H,persistedStore:Object(T.h)(H)};n(110);o.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(i.a,{store:K.store,children:Object(g.jsx)(s.a,{loader:null,persistor:K.persistedStore,children:Object(g.jsxs)(u.a,{children:[Object(g.jsx)(A,{}),Object(g.jsx)(l.a,{})]})})})}),document.getElementById("root"))},12:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(8),a=n(4),c=n.n(a),o=n(6),u=n(16),i=Object(o.c)("login",function(){var t=Object(r.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.f)(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),s=Object(o.c)("register",function(){var t=Object(r.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.h)(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),l=Object(o.c)("logout",Object(r.a)(c.a.mark((function t(){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.g)();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))),d=Object(o.c)("current",function(){var t=Object(r.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.e)(e);case 2:return n=t.sent,console.dir(n),console.log(n),t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),f={login:i,register:s,logout:l,currentUser:d}},16:function(t,e,n){"use strict";n.d(e,"h",(function(){return O})),n.d(e,"f",(function(){return v})),n.d(e,"g",(function(){return m})),n.d(e,"e",(function(){return h})),n.d(e,"b",(function(){return x})),n.d(e,"d",(function(){return L})),n.d(e,"c",(function(){return w})),n.d(e,"a",(function(){return k}));var r=n(11),a=n(8),c=n(4),o=n.n(c),u=n(15),i=n.n(u),s=n(42),l=n(43),d=n(44),f=n(45),p=n(63),b=function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(t,r){var a;return Object(l.a)(this,n),(a=e.call(this,t)).status=r,a}return Object(s.a)(n)}(Object(p.a)(Error));i.a.defaults.baseURL="https://wallet-serv.herokuapp.com/api";var g=function(t){i.a.defaults.headers.common.Authorization=t?"Bearer ".concat(t):""},j=function(t){throw t.response?new b(t.response.data.message,t.response.status):t.request?new b(t.request.statusText,t.request.status):new b(t.message,500)},O=function(){var t=Object(a.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("auth/register",{userName:e.name,email:e.email,password:e.password});case 3:return n=t.sent,g(n.data.data.token),t.abrupt("return",n.data.data);case 8:t.prev=8,t.t0=t.catch(0),j(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(a.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("auth/login",e);case 3:return n=t.sent,g(n.data.data.token),t.abrupt("return",n.data.data);case 8:t.prev=8,t.t0=t.catch(0),console.dir(t.t0),j(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.get("auth/logout");case 3:return g(),t.abrupt("return",{status:"ok",code:204});case 7:t.prev=7,t.t0=t.catch(0),j(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(a.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,g(e),t.next=4,i.a.get("users/current");case 4:return n=t.sent,t.abrupt("return",n.data.data.user);case 8:t.prev=8,t.t0=t.catch(0),j(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(a.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.get("categories/income");case 3:return e=t.sent,t.next=6,i.a.get("categories/expense");case 6:return n=t.sent,t.abrupt("return",[].concat(Object(r.a)(n.data.categories),Object(r.a)(e.data.categories)));case 10:t.prev=10,t.t0=t.catch(0),j(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}(),L=function(){var t=Object(a.a)(o.a.mark((function t(e){var n,r,a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.month,r=e.year,t.prev=1,a="".concat(n||r?"?":null).concat(n?"month=".concat(n):null).concat(n&&r?"&":null).concat(r?"year=".concat(r):null),t.next=5,i.a.get("transactions/statistics".concat(a));case 5:return c=t.sent,console.log("------------------------------statistic api------------------------"),console.log(c),t.abrupt("return",c.data.transactions);case 11:t.prev=11,t.t0=t.catch(1),j(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}(),w=function(){var t=Object(a.a)(o.a.mark((function t(e){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="",n=e?"transactions?page=".concat(e.page,"&limit=").concat(e.limit):"transactions",t.next=5,i.a.get(n);case 5:return r=t.sent,t.abrupt("return",r.data.data);case 9:t.prev=9,t.t0=t.catch(0),j(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=Object(a.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("transactions",e);case 3:return n=t.sent,t.abrupt("return",n.data.data.transaction);case 7:t.prev=7,t.t0=t.catch(0),j(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},18:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(6),a=Object(r.b)("clear")},20:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(8),a=n(4),c=n.n(a),o=n(6),u=n(16),i=Object(o.c)("getOperations",function(){var t=Object(r.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.c)(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),s=Object(o.c)("addOperation",function(){var t=Object(r.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.a)(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),l={getOperations:i,addOperation:s}},30:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"f",(function(){return a})),n.d(e,"b",(function(){return c})),n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return u})),n.d(e,"a",(function(){return i}));var r=function(t){return t.user.isAuth},a=function(t){return!!t.user.token},c=function(t){return t.user.token},o=function(t){return t.user.error},u=function(t){return t.user.isModalLogout},i=function(t){return t.user.user.name}},33:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(8),a=n(4),c=n.n(a),o=n(6),u=n(16),i={getCategories:Object(o.c)("getCategories",Object(r.a)(c.a.mark((function t(){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.b)();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)}))))}},34:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(8),a=n(4),c=n.n(a),o=n(6),u=n(16),i=Object(o.c)("getStatistic",function(){var t=Object(r.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.d)(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),s={getStatistic:i}},39:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return d}));var r,a=n(1),c=n(6),o=n(12),u=n(18),i=Object(c.d)({name:"user",initialState:{user:{},token:null,isAuth:!1,isModalLogout:!1,isLoading:!1,error:null},reducers:{openModalLogout:function(t){t.isModalLogout=!0},closeModalLogout:function(t){t.isModalLogout=!1}},extraReducers:(r={},Object(a.a)(r,o.a.register.pending,(function(t){t.isLoading=!0,t.error=null,t.isAuth=!1})),Object(a.a)(r,o.a.register.fulfilled,(function(t,e){var n=e.payload;t.user.name=n.user.userName,t.user.email=n.user.email,t.token=n.token,t.isAuth=!0,t.isLoading=!1})),Object(a.a)(r,o.a.register.rejected,(function(t,e){var n=e.error;t.isLoading=!1,t.error=n.message})),Object(a.a)(r,o.a.login.pending,(function(t){t.isLoading=!0,t.error=null,t.isAuth=!1})),Object(a.a)(r,o.a.login.fulfilled,(function(t,e){var n=e.payload;console.log(n),t.user.name=n.user.userName,t.user.email=n.user.email,t.token=n.token,t.isAuth=!0,t.isLoading=!1})),Object(a.a)(r,o.a.login.rejected,(function(t,e){var n=e.error;t.isLoading=!1,t.error=n.message})),Object(a.a)(r,o.a.logout.pending,(function(t){t.isLoading=!0,t.error=null})),Object(a.a)(r,o.a.logout.fulfilled,(function(t,e){e.payload;t.user={},t.token=null,t.isAuth=!1,t.isLoading=!1,t.isModalLogout=!1})),Object(a.a)(r,o.a.logout.rejected,(function(t,e){var n=e.error;t.isLoading=!1,t.error=n.message})),Object(a.a)(r,o.a.currentUser.pending,(function(t){t.isLoading=!0,t.error=null})),Object(a.a)(r,o.a.currentUser.fulfilled,(function(t,e){var n=e.payload;t.user.name=n.userName,t.user.email=n.email,t.user.balance=n.balance,t.isAuth=!0,t.isLoading=!1})),Object(a.a)(r,o.a.currentUser.rejected,(function(t,e){var n=e.error;t.token=null,t.isAuth=!1,t.isLoading=!1,t.error=n.message})),Object(a.a)(r,u.a,(function(t){t.user={},t.token=null,t.isAuth=!1,t.isModalLogout=!1,t.isLoading=!1,t.error=null})),r)}),s=i.actions,l=s.openModalLogout,d=s.closeModalLogout;e.b=i},40:function(t,e,n){"use strict";n.d(e,"d",(function(){return d})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return p}));var r,a=n(1),c=n(11),o=n(6),u=n(20),i=n(18),s=Object(o.d)({name:"finance",initialState:{data:[],userBalance:0,isLoading:!1,error:null,isModalAddTransaction:!1,isSaveModalDateStatic:!1,total:0,currentPage:1,totalPage:1,limit:5},reducers:{openModalTransaction:function(t){t.isModalAddTransaction=!0},closeModalTransaction:function(t){t.isModalAddTransaction=!1},setSaveModalDateStatic:function(t){t.isSaveModalDateStatic=!0},clearSaveModalDateStatic:function(t){t.isSaveModalDateStatic=!1},setLimit:function(t,e){var n=e.payload;t.limit=n}},extraReducers:(r={},Object(a.a)(r,u.a.getOperations.pending,(function(t){t.isLoading=!0,t.error=null})),Object(a.a)(r,u.a.getOperations.fulfilled,(function(t,e){var n=e.payload;t.data=Object(c.a)(n.transactions),t.userBalance=n.user_balance,n.page&&(t.currentPage=n.page),n.totalPage&&(t.totalPage=n.totalPage),n.total&&(t.total=n.total),t.isLoading=!1})),Object(a.a)(r,u.a.getOperations.rejected,(function(t,e){var n=e.error;t.isLoading=!1,t.error=n.message})),Object(a.a)(r,u.a.addOperation.pending,(function(t){t.isLoading=!0,t.error=null})),Object(a.a)(r,u.a.addOperation.fulfilled,(function(t,e){var n=e.payload;t.data=[n].concat(Object(c.a)(t.data)),t.isLoading=!1,t.isSaveModalDateStatic=!0})),Object(a.a)(r,u.a.addOperation.rejected,(function(t,e){var n=e.error;t.isLoading=!1,t.error=n.message})),Object(a.a)(r,i.a,(function(t){t.data=[],t.userBalance=0,t.currentPage=1,t.total=0,t.totalPage=1,t.limit=5,t.isModalAddTransaction=!1,t.isSaveModalDateStatic=!1,t.isLoading=!1,t.error=null})),r)}),l=s.actions,d=l.openModalTransaction,f=l.closeModalTransaction,p=(l.setSaveModalDateStatic,l.clearSaveModalDateStatic);l.setLimit;e.c=s},47:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return u})),n.d(e,"c",(function(){return i}));var r=function(t){return t.finance.data},a=function(t){return t.finance.userBalance},c=function(t){return t.finance.isLoading},o=function(t){return t.finance.isModalAddTransaction},u=function(t){return t.finance.isSaveModalDateStatic},i=function(t){return t.finance.error}},49:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return c}));var r=function(t){var e={};return e.expense=0===t.statistic.dataExpense.length?[]:t.statistic.dataExpense.map((function(t){return{sum:t.totalSum,category:t._id[0].name}})),e.income=0===t.statistic.dataIncome.length?[]:t.statistic.dataIncome.map((function(t){return{sum:t.totalSum,category:t._id[0].name}})),e.totalExpense=t.statistic.totalExpense,e.totalIncome=t.statistic.totalIncome,console.log("Selector statistic = ",e),e},a=function(t){return t.statistic.isLoading},c=function(t){return t.statistic.error}},51:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return c})),n.d(e,"d",(function(){return o}));var r=function(t){return t.categories.data.length>0},a=function(t){return t.categories.data.filter((function(t){return t.income}))},c=function(t){return t.categories.data.filter((function(t){return!t.income}))},o=function(t){return t.categories.error}},52:function(t,e,n){"use strict";n(83);var r=n(5);e.a=function(){return Object(r.jsx)("div",{className:"loader",children:"Loading..."})}},80:function(t,e,n){},83:function(t,e,n){}},[[111,4,5]]]);
//# sourceMappingURL=main.3b314288.chunk.js.map