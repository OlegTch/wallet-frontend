(this['webpackJsonpwallet-frontend'] =
    this['webpackJsonpwallet-frontend'] || []).push([
    [0],
    {
        100: function (e, t, n) {},
        101: function (e, t, n) {},
        102: function (e, t, n) {},
        103: function (e, t, n) {},
        107: function (e, t, n) {
            'use strict';
            n.r(t);
            var c = n(1),
                a = n.n(c),
                r = n(17),
                s = n.n(r),
                i = n(5),
                o = n(41),
                l = (n(56), n(3)),
                j = n(15),
                u = function (e) {
                    return e.user.isAuth;
                },
                d = function (e) {
                    return !!e.user.token;
                },
                b = function (e) {
                    return e.user.isLoading;
                },
                m = function (e) {
                    return e.user.error;
                },
                O = function (e) {
                    return e.user.isModalLogout;
                },
                h = function (e) {
                    return e.user.user.name;
                },
                x = function (e) {
                    return e.user.user.balance;
                },
                p = n.p + 'static/media/sprite.632e7fa7.svg',
                f = (n(60), n(0)),
                g = function () {
                    return Object(f.jsx)('div', {
                        className: 'logo',
                        children: Object(f.jsxs)('a', {
                            href: '/',
                            className: 'logo_link',
                            children: [
                                Object(f.jsx)('svg', {
                                    className: 'logo_icon',
                                    children: Object(f.jsx)('use', {
                                        href: ''.concat(p, '#wallet'),
                                    }),
                                }),
                                Object(f.jsx)('p', {
                                    className: 'logo_text',
                                    children: 'Wallet',
                                }),
                            ],
                        }),
                    });
                },
                v = (n(62), n(2)),
                _ = n(6),
                N = n(8),
                y = n(4),
                w = n.n(y),
                k = n(43);
            n.n(k).a.defaults.baseURL = 'https://';
            var L,
                T = {
                    categories: [
                        {
                            id: 1,
                            income: !0,
                            name: '\u041e\u0441\u043d\u043e\u0432\u043d\u0438\u0439 \u0434\u043e\u0445\u0456\u0434',
                        },
                        {
                            id: 2,
                            income: !0,
                            name: '\u0414\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u043e',
                        },
                        { id: 3, income: !1, name: '\u0410\u0432\u0442\u043e' },
                        { id: 4, income: !1, name: '\u0407\u0436\u0430' },
                    ],
                    transaction: [
                        {
                            id: 1,
                            categoryId: 1,
                            income: !0,
                            sum: 2500,
                            comment: 'my comment',
                            balance: 2500,
                            datetime: Date.now(),
                            month: 5,
                            year: 2022,
                        },
                    ],
                    user: {
                        name: 'Guest',
                        email: 'test@gmail.com',
                        password: 'qwerty',
                        balance: 2500,
                        token: 'qwetyyuuiioopppkkcjhcggfufufj',
                    },
                    statistic: [
                        { category: 1, sum: 3e3 },
                        { category: 2, sum: 1e3 },
                        { category: 3, sum: 500 },
                        { category: 4, sum: 1e3 },
                    ],
                    operations: [
                        {
                            id: 1,
                            category:
                                '\u0420\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u0438\u0439 \u0434\u043e\u0445\u0456\u0434',
                            income: !0,
                            sum: 1e4,
                            comment: '\u0420\u043e\u0431\u043e\u0442\u0430',
                            balance: 1e4,
                            date: Date.now(),
                            month: 5,
                            year: 2022,
                        },
                        {
                            id: 2,
                            category: '\u0420\u0456\u0437\u043d\u0435',
                            income: !1,
                            sum: 1e3,
                            comment:
                                '\u041f\u043e\u0434\u0430\u0440\u043e\u043a \u0434\u0440\u0443\u0436\u0438\u043d\u0456',
                            balance: 9e3,
                            date: Date.now(),
                            month: 5,
                            year: 2022,
                        },
                        {
                            id: 3,
                            category:
                                '\u041d\u0435 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u0438\u0439 \u0434\u043e\u0445\u0456\u0434',
                            income: !0,
                            sum: 2e3,
                            comment:
                                '\u041f\u043e\u0434\u0430\u0440\u043e\u043a',
                            balance: 11e3,
                            date: Date.now(),
                            month: 5,
                            year: 2022,
                        },
                        {
                            id: 4,
                            category: '\u041c\u0430\u0448\u0438\u043d\u0430',
                            income: !1,
                            sum: 3e3,
                            comment: '\u0420\u0435\u043c\u043e\u043d\u0442',
                            balance: 8e3,
                            date: Date.now(),
                            month: 5,
                            year: 2022,
                        },
                        {
                            id: 5,
                            category:
                                '\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u0438',
                            income: !1,
                            sum: 500,
                            comment:
                                '\u041d\u0430 \u0442\u0438\u0436\u0434\u0435\u043d\u044c',
                            balance: 7500,
                            date: Date.now(),
                            month: 5,
                            year: 2022,
                        },
                    ],
                },
                C = function (e) {
                    if (
                        e.email === T.user.email &&
                        e.password === T.user.password
                    )
                        return T.user;
                    throw new Error('Wrong email or password');
                },
                S = Object(_.b)(
                    'login',
                    (function () {
                        var e = Object(N.a)(
                            w.a.mark(function e(t) {
                                var n;
                                return w.a.wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (e.next = 2), C(t);
                                            case 2:
                                                return (
                                                    (n = e.sent),
                                                    e.abrupt('return', n)
                                                );
                                            case 4:
                                            case 'end':
                                                return e.stop();
                                        }
                                }, e);
                            }),
                        );
                        return function (t) {
                            return e.apply(this, arguments);
                        };
                    })(),
                ),
                I = Object(_.b)(
                    'register',
                    (function () {
                        var e = Object(N.a)(
                            w.a.mark(function e(t) {
                                var n;
                                return w.a.wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (e.next = 2), T.user;
                                            case 2:
                                                return (
                                                    (n = e.sent),
                                                    e.abrupt('return', n)
                                                );
                                            case 4:
                                            case 'end':
                                                return e.stop();
                                        }
                                }, e);
                            }),
                        );
                        return function (t) {
                            return e.apply(this, arguments);
                        };
                    })(),
                ),
                F = {
                    login: S,
                    register: I,
                    logout: Object(_.b)(
                        'logout',
                        Object(N.a)(
                            w.a.mark(function e() {
                                var t;
                                return w.a.wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (e.next = 2),
                                                    { status: 'ok', code: 200 }
                                                );
                                            case 2:
                                                return (
                                                    (t = e.sent),
                                                    e.abrupt('return', t)
                                                );
                                            case 4:
                                            case 'end':
                                                return e.stop();
                                        }
                                }, e);
                            }),
                        ),
                    ),
                    currentUser: Object(_.b)(
                        'current',
                        Object(N.a)(
                            w.a.mark(function e() {
                                var t;
                                return w.a.wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (e.next = 2), T.user;
                                            case 2:
                                                return (
                                                    (t = e.sent),
                                                    e.abrupt('return', t)
                                                );
                                            case 4:
                                            case 'end':
                                                return e.stop();
                                        }
                                }, e);
                            }),
                        ),
                    ),
                },
                M = Object(_.c)({
                    name: 'user',
                    initialState: {
                        user: {},
                        token: null,
                        isAuth: !1,
                        isModalLogout: !1,
                        isLoading: !1,
                        error: null,
                    },
                    reducers: {
                        openModalLogout: function (e) {
                            e.isModalLogout = !0;
                        },
                        closeModalLogout: function (e) {
                            e.isModalLogout = !1;
                        },
                    },
                    extraReducers:
                        ((L = {}),
                        Object(v.a)(L, F.register.pending, function (e) {
                            (e.isLoading = !0),
                                (e.error = null),
                                (e.isAuth = !1);
                        }),
                        Object(v.a)(L, F.register.fulfilled, function (e, t) {
                            var n = t.payload;
                            (e.user.name = n.name),
                                (e.user.email = n.email),
                                (e.token = n.token),
                                (e.isAuth = !0),
                                (e.isLoading = !1);
                        }),
                        Object(v.a)(L, F.register.rejected, function (e, t) {
                            var n = t.error;
                            (e.isLoading = !1), (e.error = n.message);
                        }),
                        Object(v.a)(L, F.login.pending, function (e) {
                            (e.isLoading = !0),
                                (e.error = null),
                                (e.isAuth = !1);
                        }),
                        Object(v.a)(L, F.login.fulfilled, function (e, t) {
                            var n = t.payload;
                            (e.user.name = n.name),
                                (e.user.email = n.email),
                                (e.token = n.token),
                                (e.isAuth = !0),
                                (e.isLoading = !1);
                        }),
                        Object(v.a)(L, F.login.rejected, function (e, t) {
                            var n = t.error;
                            (e.isLoading = !1), (e.error = n.message);
                        }),
                        Object(v.a)(L, F.logout.pending, function (e) {
                            (e.isLoading = !0), (e.error = null);
                        }),
                        Object(v.a)(L, F.logout.fulfilled, function (e, t) {
                            t.payload;
                            (e.user = []),
                                (e.token = null),
                                (e.isAuth = !1),
                                (e.isLoading = !1);
                        }),
                        Object(v.a)(L, F.logout.rejected, function (e, t) {
                            var n = t.error;
                            (e.isLoading = !1), (e.error = n.message);
                        }),
                        Object(v.a)(L, F.currentUser.pending, function (e) {
                            (e.isLoading = !0), (e.error = null);
                        }),
                        Object(v.a)(
                            L,
                            F.currentUser.fulfilled,
                            function (e, t) {
                                var n = t.payload;
                                (e.user.name = n.name),
                                    (e.user.email = n.email),
                                    (e.user.balance = n.balance),
                                    (e.isAuth = !0),
                                    (e.isLoading = !1);
                            },
                        ),
                        Object(v.a)(L, F.currentUser.rejected, function (e, t) {
                            var n = t.error;
                            (e.isLoading = !1), (e.error = n.message);
                        }),
                        L),
                }),
                D = M.actions,
                A = D.openModalLogout,
                B = (D.closeModalLogout, M),
                R = {
                    small: '(max-width: 767px)',
                    medium: '(min-width: 768px)',
                    mediumOnly: '(min-width: 768px) and (max-width: 1199px)',
                    large: '(min-width: 1200px)',
                },
                E = [
                    {
                        icon: 'home',
                        text: '\u0413\u043e\u043b\u043e\u0432\u043d\u0430',
                        linkTo: '/home',
                    },
                    {
                        icon: 'statistic',
                        text: '\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430',
                        linkTo: '/diagram',
                    },
                    { icon: 'currency', text: '', linkTo: '/currency' },
                ],
                q = function () {
                    var e = Object(i.b)();
                    return Object(f.jsxs)('button', {
                        className: 'button_exit',
                        onClick: function () {
                            e(A());
                        },
                        children: [
                            Object(f.jsx)('div', {
                                className: 'button_exit__block',
                                children: Object(f.jsx)('svg', {
                                    className: 'button_exit__icon',
                                    children: Object(f.jsx)('use', {
                                        href: ''.concat(p, '#exit'),
                                    }),
                                }),
                            }),
                            Object(f.jsx)(j.a, {
                                queries: R,
                                children: function (e) {
                                    return Object(f.jsx)(f.Fragment, {
                                        children:
                                            e.medium &&
                                            Object(f.jsx)('p', {
                                                className: 'button_exit__text',
                                                children:
                                                    '\u0412\u0438\u0439\u0442\u0438',
                                            }),
                                    });
                                },
                            }),
                        ],
                    });
                },
                U = n(18),
                J =
                    (n(87),
                    function (e) {
                        var t = e.icon,
                            n = e.text,
                            c = e.linkTo;
                        return Object(f.jsxs)(U.b, {
                            className: function (e) {
                                return e.isActive
                                    ? 'nav_item active'
                                    : 'nav_item';
                            },
                            to: c,
                            children: [
                                Object(f.jsx)('svg', {
                                    className: 'nav_item__icon',
                                    children: Object(f.jsx)('use', {
                                        href: ''.concat(p, '#').concat(t),
                                    }),
                                }),
                                Object(f.jsx)(j.a, {
                                    queries: R,
                                    children: function (e) {
                                        return Object(f.jsx)(f.Fragment, {
                                            children:
                                                e.medium &&
                                                Object(f.jsx)('p', {
                                                    className: 'nav_item__text',
                                                    children: n,
                                                }),
                                        });
                                    },
                                }),
                            ],
                        });
                    }),
                Y =
                    (n(88),
                    function () {
                        var e = Object(i.c)(h);
                        return Object(f.jsxs)('ul', {
                            className: 'header_nav__list',
                            children: [
                                Object(f.jsx)('li', {
                                    className: 'header_nav__item',
                                    children: Object(f.jsx)('span', {
                                        className: 'header_nav__text',
                                        children: e,
                                    }),
                                }),
                                Object(f.jsx)('li', {
                                    className: 'header_nav__item',
                                    children: Object(f.jsx)(q, {}),
                                }),
                            ],
                        });
                    }),
                P =
                    (n(89),
                    function () {
                        return Object(f.jsx)('ul', {
                            className: 'nav_list',
                            children: E.map(function (e, t) {
                                return Object(f.jsx)(
                                    j.a,
                                    {
                                        queries: R,
                                        children: function (n) {
                                            return Object(f.jsx)(f.Fragment, {
                                                children:
                                                    n.medium && '' === e.text
                                                        ? null
                                                        : Object(f.jsx)(
                                                              'li',
                                                              {
                                                                  className:
                                                                      'nav_list__item',
                                                                  children:
                                                                      Object(
                                                                          f.jsx,
                                                                      )(J, {
                                                                          icon: e.icon,
                                                                          text: e.text,
                                                                          linkTo: e.linkTo,
                                                                      }),
                                                              },
                                                              t,
                                                          ),
                                            });
                                        },
                                    },
                                    t,
                                );
                            }),
                        });
                    }),
                W =
                    (n(90),
                    function () {
                        var e,
                            t = Object(i.c)(x);
                        return Object(f.jsxs)('div', {
                            className: 'balans',
                            children: [
                                Object(f.jsx)('p', {
                                    className: 'balans__title',
                                    children:
                                        '\u0412\u0430\u0448 \u0431\u0430\u043b\u0430\u043d\u0441',
                                }),
                                Object(f.jsxs)('p', {
                                    className: 'balans__order',
                                    children: [
                                        '\u20b4 ',
                                        ((e = t),
                                        parseFloat(e)
                                            .toFixed(2)
                                            .replace(
                                                /(\d)(?=(\d{3})+\.)/g,
                                                '$1 ',
                                            )),
                                    ],
                                }),
                            ],
                        });
                    }),
                z =
                    (n(91),
                    function () {
                        return Object(f.jsx)(f.Fragment, {
                            children: Object(f.jsx)('div', {
                                className: 'header',
                                children: Object(f.jsxs)('div', {
                                    className: 'container container__header',
                                    children: [
                                        Object(f.jsx)(g, {}),
                                        Object(f.jsx)(Y, {}),
                                    ],
                                }),
                            }),
                        });
                    }),
                G = n(7),
                V = n(44),
                $ = n.n(V),
                H =
                    (n(93),
                    n(94),
                    function () {
                        var e = Object(c.useState)('income'),
                            t = Object(G.a)(e, 2),
                            n = t[0],
                            a = t[1],
                            r = Object(c.useState)(new Date()),
                            s = Object(G.a)(r, 2),
                            i = s[0],
                            o = s[1],
                            l = Object(c.useState)(
                                '\u0420\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u044b\u0439 \u0434\u043e\u0445\u043e\u0434',
                            ),
                            j = Object(G.a)(l, 2),
                            u = j[0],
                            d = j[1],
                            b = Object(c.useState)(!1),
                            m = Object(G.a)(b, 2),
                            O = m[0],
                            h = m[1];
                        function x(e) {
                            d(e.target.textContent), h(!O);
                        }
                        function g() {
                            return (g = Object(N.a)(
                                w.a.mark(function e(t) {
                                    return w.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    t.preventDefault();
                                                case 1:
                                                case 'end':
                                                    return e.stop();
                                            }
                                    }, e);
                                }),
                            )).apply(this, arguments);
                        }
                        var v = Object(f.jsxs)('div', {
                            className: 'dropContainer',
                            children: [
                                Object(f.jsx)('div', {
                                    className: (function () {
                                        if (
                                            '\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e' !==
                                            u
                                        ) {
                                            return ''
                                                .concat('dropField', ' ')
                                                .concat('dropFieldActive');
                                        }
                                        return 'dropField';
                                    })(),
                                    onClick: function () {
                                        h(!O);
                                    },
                                    children: Object(f.jsx)('span', {
                                        className: 'categoryDrop',
                                        children: u,
                                    }),
                                }),
                                O &&
                                    Object(f.jsxs)('ul', {
                                        className: 'dropList',
                                        children: [
                                            'income' === n &&
                                                Object(f.jsx)('li', {
                                                    onClick: x,
                                                    className: 'dropListItem',
                                                    children:
                                                        '\u0420\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u044b\u0439 \u0434\u043e\u0445\u043e\u0434',
                                                }),
                                            'income' === n &&
                                                Object(f.jsx)('li', {
                                                    onClick: x,
                                                    className: 'dropListItem',
                                                    children:
                                                        '\u041d\u0435\u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u044b\u0439 \u0434\u043e\u0445\u043e\u0434',
                                                }),
                                            'spending' === n &&
                                                Object(f.jsx)('li', {
                                                    onClick: x,
                                                    className: 'dropListItem',
                                                    children:
                                                        '\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439',
                                                }),
                                            'spending' === n &&
                                                Object(f.jsx)('li', {
                                                    onClick: x,
                                                    className: 'dropListItem',
                                                    children:
                                                        '\u0415\u0434\u0430',
                                                }),
                                            'spending' === n &&
                                                Object(f.jsx)('li', {
                                                    onClick: x,
                                                    className: 'dropListItem',
                                                    children:
                                                        '\u0410\u0432\u0442\u043e',
                                                }),
                                            'spending' === n &&
                                                Object(f.jsx)('li', {
                                                    onClick: x,
                                                    className: 'dropListItem',
                                                    children:
                                                        '\u0420\u0430\u0437\u0432\u0438\u0442\u0438\u0435',
                                                }),
                                            'spending' === n &&
                                                Object(f.jsx)('li', {
                                                    onClick: x,
                                                    className: 'dropListItem',
                                                    children:
                                                        '\u0414\u0435\u0442\u0438',
                                                }),
                                            'spending' === n &&
                                                Object(f.jsx)('li', {
                                                    onClick: x,
                                                    className: 'dropListItem',
                                                    children:
                                                        '\u0414\u043e\u043c',
                                                }),
                                            'spending' === n &&
                                                Object(f.jsx)('li', {
                                                    onClick: x,
                                                    className: 'dropListItem',
                                                    children:
                                                        '\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435',
                                                }),
                                            'spending' === n &&
                                                Object(f.jsx)('li', {
                                                    onClick: x,
                                                    className: 'dropListItem',
                                                    children:
                                                        '\u041e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0435',
                                                }),
                                        ],
                                    }),
                                Object(f.jsx)('span', {
                                    className: 'dropIconModal',
                                    children: Object(f.jsx)('svg', {
                                        className: 'dropIcon',
                                        children: Object(f.jsx)('use', {
                                            href: ''.concat(
                                                p,
                                                '#dropItemModal',
                                            ),
                                        }),
                                    }),
                                }),
                            ],
                        });
                        return Object(f.jsxs)('div', {
                            className: 'modalContainer',
                            children: [
                                Object(f.jsx)('div', {
                                    className: 'containerClose',
                                    children: Object(f.jsx)('span', {
                                        className: 'itemCloseModal',
                                        children: Object(f.jsx)('svg', {
                                            className: 'iconCloseBtn',
                                            children: Object(f.jsx)('use', {
                                                href: ''.concat(
                                                    p,
                                                    '#closeModal',
                                                ),
                                            }),
                                        }),
                                    }),
                                }),
                                Object(f.jsx)('h2', {
                                    className: 'titleText',
                                    children:
                                        '\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0422\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044e',
                                }),
                                Object(f.jsxs)('form', {
                                    onSubmit: function (e) {
                                        return g.apply(this, arguments);
                                    },
                                    id: 'modalTransaction',
                                    className: 'modalForm',
                                    children: [
                                        Object(f.jsxs)('div', {
                                            className: 'switchTypeBalance',
                                            children: [
                                                Object(f.jsx)('span', {
                                                    className: (function () {
                                                        if ('income' === n) {
                                                            return ''
                                                                .concat(
                                                                    'switchTypeBalance__text',
                                                                    ' ',
                                                                )
                                                                .concat(
                                                                    'switchTypeBalance__text__active',
                                                                );
                                                        }
                                                        return 'switchTypeBalance__text';
                                                    })(),
                                                    children:
                                                        '\u0414\u043e\u0445\u043e\u0434',
                                                }),
                                                Object(f.jsxs)('div', {
                                                    className:
                                                        'toggleContainerType',
                                                    children: [
                                                        Object(f.jsx)('label', {
                                                            className:
                                                                'toggleTypeBody',
                                                            htmlFor:
                                                                'switchType',
                                                        }),
                                                        Object(f.jsx)('span', {
                                                            className:
                                                                'income' === n
                                                                    ? 'toggleIncome'
                                                                    : 'toggleIncomeSwitch',
                                                            id: 'toggle',
                                                            children: Object(
                                                                f.jsx,
                                                            )('svg', {
                                                                className:
                                                                    'modalBtnPlus',
                                                                children:
                                                                    Object(
                                                                        f.jsx,
                                                                    )('use', {
                                                                        href: ''.concat(
                                                                            p,
                                                                            'income' ===
                                                                                n
                                                                                ? '#plusSvg'
                                                                                : '#modalMinus',
                                                                        ),
                                                                    }),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                                Object(f.jsx)('input', {
                                                    className:
                                                        'switchToggleInput',
                                                    onChange: function (e) {
                                                        if (!e.target.checked)
                                                            return (
                                                                a('spending'),
                                                                void d(
                                                                    '\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e',
                                                                )
                                                            );
                                                        a('income'),
                                                            d(
                                                                '\u0420\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u044b\u0439 \u0434\u043e\u0445\u043e\u0434',
                                                            );
                                                    },
                                                    name: 'modalTypeTransaction',
                                                    type: 'checkbox',
                                                    id: 'switchType',
                                                    defaultChecked: !0,
                                                }),
                                                Object(f.jsx)('span', {
                                                    className: (function () {
                                                        if ('spending' === n) {
                                                            return ''
                                                                .concat(
                                                                    'switchTypeBalance__text',
                                                                    ' ',
                                                                )
                                                                .concat(
                                                                    'switchTypeBalance__text__active',
                                                                );
                                                        }
                                                        return 'switchTypeBalance__text';
                                                    })(),
                                                    children:
                                                        '\u0420\u0430\u0441\u0445\u043e\u0434',
                                                }),
                                            ],
                                        }),
                                        v,
                                        Object(f.jsx)('div', {
                                            className: 'sumContainer',
                                            children: Object(f.jsx)('input', {
                                                className: 'sumField',
                                                required: !0,
                                                min: '0.00',
                                                step: '0.01',
                                                type: 'number',
                                                placeholder: '0.00',
                                            }),
                                        }),
                                        Object(f.jsxs)('div', {
                                            className: 'calendarContainer',
                                            children: [
                                                Object(f.jsx)($.a, {
                                                    onChange: function (e) {
                                                        console.log(e._d),
                                                            o(e._d);
                                                    },
                                                    inputProps: {
                                                        className:
                                                            'calendarField',
                                                    },
                                                    initialValue: i,
                                                    closeOnSelect: !0,
                                                    timeFormat: !1,
                                                }),
                                                Object(f.jsx)('svg', {
                                                    className: 'calendarIcon',
                                                    children: Object(f.jsx)(
                                                        'use',
                                                        {
                                                            href: ''.concat(
                                                                p,
                                                                '#calendarSvg',
                                                            ),
                                                        },
                                                    ),
                                                }),
                                            ],
                                        }),
                                        Object(f.jsx)('div', {
                                            className: 'commentContainer',
                                            children: Object(f.jsx)(
                                                'textarea',
                                                {
                                                    className: 'commentField',
                                                    placeholder:
                                                        '\u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439',
                                                },
                                            ),
                                        }),
                                    ],
                                }),
                                Object(f.jsxs)('div', {
                                    className: 'buttonContainer',
                                    children: [
                                        Object(f.jsx)('button', {
                                            className: 'submitButton',
                                            type: 'submit',
                                            children:
                                                '\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c',
                                        }),
                                        Object(f.jsx)('button', {
                                            className: 'cancelButton',
                                            children:
                                                '\u041e\u0442\u043c\u0435\u043d\u0430',
                                        }),
                                    ],
                                }),
                            ],
                        });
                    }),
                K =
                    (n(95),
                    function (e) {
                        var t = e.children,
                            n = document.querySelector('#modalroot');
                        return Object(r.createPortal)(
                            Object(f.jsx)('div', {
                                id: 'backdrop',
                                className: 'backdrop',
                                children: t,
                            }),
                            n,
                        );
                    });
            function Q() {
                return (Q = Object(N.a)(
                    w.a.mark(function e() {
                        var t, n;
                        return w.a.wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (
                                            (e.next = 2),
                                            fetch(
                                                'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11',
                                            )
                                        );
                                    case 2:
                                        return (
                                            (t = e.sent), (e.next = 5), t.json()
                                        );
                                    case 5:
                                        return (
                                            (n = e.sent), e.abrupt('return', n)
                                        );
                                    case 7:
                                    case 'end':
                                        return e.stop();
                                }
                        }, e);
                    }),
                )).apply(this, arguments);
            }
            var X = {
                    fetchCurrency: function () {
                        return Q.apply(this, arguments);
                    },
                },
                Z = ['USD', 'EUR', 'RUR'];
            n(96);
            function ee() {
                var e = Object(c.useState)([]),
                    t = Object(G.a)(e, 2),
                    n = t[0],
                    a = t[1];
                return (
                    Object(c.useEffect)(function () {
                        var e = (function () {
                                var e = Object(N.a)(
                                    w.a.mark(function e() {
                                        var t, n;
                                        return w.a.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            (e.next = 2),
                                                            X.fetchCurrency()
                                                        );
                                                    case 2:
                                                        (t = e.sent),
                                                            (n = []),
                                                            Z.forEach(function (
                                                                e,
                                                            ) {
                                                                t.forEach(
                                                                    function (
                                                                        t,
                                                                    ) {
                                                                        parseInt(
                                                                            t.buy,
                                                                        ).toFixed(
                                                                            2,
                                                                        ),
                                                                            t.ccy ===
                                                                                e &&
                                                                                n.push(
                                                                                    {
                                                                                        ccy: t.ccy,
                                                                                        buy: Number(
                                                                                            t.buy,
                                                                                        ).toFixed(
                                                                                            2,
                                                                                        ),
                                                                                        sale: Number(
                                                                                            t.sale,
                                                                                        ).toFixed(
                                                                                            2,
                                                                                        ),
                                                                                    },
                                                                                );
                                                                    },
                                                                );
                                                            }),
                                                            a(n),
                                                            localStorage.setItem(
                                                                'currency',
                                                                JSON.stringify(
                                                                    n,
                                                                ),
                                                            ),
                                                            localStorage.setItem(
                                                                'currencyTime',
                                                                Date.now(),
                                                            );
                                                    case 8:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        }, e);
                                    }),
                                );
                                return function () {
                                    return e.apply(this, arguments);
                                };
                            })(),
                            t = JSON.parse(localStorage.getItem('currency')),
                            n = JSON.parse(
                                localStorage.getItem('currencyTime'),
                            );
                        t || e(), Date.now() - n > 36e5 ? e() : a(t);
                    }, []),
                    Object(f.jsx)('div', {
                        className: 'currency',
                        children: Object(f.jsxs)('table', {
                            children: [
                                Object(f.jsx)('thead', {
                                    children: Object(f.jsxs)('tr', {
                                        children: [
                                            Object(f.jsx)('td', {
                                                children:
                                                    '\u0412\u0430\u043b\u044e\u0442\u0430',
                                            }),
                                            Object(f.jsx)('td', {
                                                children:
                                                    '\u041f\u043e\u043a\u0443\u043f\u043a\u0430',
                                            }),
                                            Object(f.jsx)('td', {
                                                children:
                                                    '\u041f\u0440\u043e\u0434\u0430\u0436\u0430',
                                            }),
                                        ],
                                    }),
                                }),
                                Object(f.jsx)('tbody', {
                                    children: n.map(function (e) {
                                        return Object(f.jsxs)(
                                            'tr',
                                            {
                                                children: [
                                                    Object(f.jsx)('td', {
                                                        children: e.ccy,
                                                    }),
                                                    Object(f.jsx)('td', {
                                                        children: e.buy,
                                                    }),
                                                    Object(f.jsx)('td', {
                                                        children: e.sale,
                                                    }),
                                                ],
                                            },
                                            e.ccy,
                                        );
                                    }),
                                }),
                            ],
                        }),
                    })
                );
            }
            n(97);
            var te,
                ne = Object(_.b)(
                    'getOperations',
                    (function () {
                        var e = Object(N.a)(
                            w.a.mark(function e(t) {
                                var n;
                                return w.a.wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (e.next = 2), T.operations
                                                );
                                            case 2:
                                                return (
                                                    (n = e.sent),
                                                    e.abrupt('return', n)
                                                );
                                            case 4:
                                            case 'end':
                                                return e.stop();
                                        }
                                }, e);
                            }),
                        );
                        return function (t) {
                            return e.apply(this, arguments);
                        };
                    })(),
                ),
                ce = {
                    getOperations: ne,
                    addOperation: Object(_.b)(
                        'addOperation',
                        Object(N.a)(
                            w.a.mark(function e() {
                                var t;
                                return w.a.wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return void (e.next = 2);
                                            case 2:
                                                return (
                                                    (t = e.sent),
                                                    e.abrupt('return', t)
                                                );
                                            case 4:
                                            case 'end':
                                                return e.stop();
                                        }
                                }, e);
                            }),
                        ),
                    ),
                },
                ae = function (e) {
                    return e.finance.data;
                },
                re = function (e) {
                    return e.finance.isModalAddTransaction;
                },
                se = (n(98), n(99), n(20)),
                ie = n.n(se),
                oe = function (e) {
                    var t = e.operation,
                        n = t.category,
                        c = t.income,
                        a = t.sum,
                        r = t.balance,
                        s = t.comment,
                        i = t.date;
                    return Object(f.jsxs)('li', {
                        className: c
                            ? 'homeTabItem homeTabItem--green'
                            : 'homeTabItem homeTabItem--red',
                        children: [
                            Object(f.jsxs)('p', {
                                children: [
                                    '\u0414\u0430\u0442\u0430:',
                                    Object(f.jsx)('span', {
                                        children: ie()(i).format('DD.MM.YY'),
                                    }),
                                ],
                            }),
                            Object(f.jsxs)('p', {
                                children: [
                                    '\u0422\u0438\u043f:',
                                    Object(f.jsx)('span', {
                                        children: c ? '+' : '-',
                                    }),
                                ],
                            }),
                            Object(f.jsxs)('p', {
                                children: [
                                    '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f:',
                                    Object(f.jsx)('span', { children: n }),
                                ],
                            }),
                            Object(f.jsxs)('p', {
                                children: [
                                    '\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439:',
                                    Object(f.jsx)('span', { children: s }),
                                ],
                            }),
                            Object(f.jsxs)('p', {
                                children: [
                                    '\u0421\u0443\u043c\u043c\u0430:',
                                    Object(f.jsx)('span', {
                                        className: 'homeTabItemResult',
                                        children: a,
                                    }),
                                ],
                            }),
                            Object(f.jsxs)('p', {
                                children: [
                                    '\u0411\u0430\u043b\u0430\u043d\u0441:',
                                    Object(f.jsx)('span', { children: r }),
                                ],
                            }),
                        ],
                    });
                },
                le =
                    (n(100),
                    function (e) {
                        var t = e.operation,
                            n = t.category,
                            c = t.income,
                            a = t.sum,
                            r = t.balance,
                            s = t.comment,
                            i = t.date;
                        e.index;
                        return Object(f.jsxs)('li', {
                            className: 'homeTabItemTabletAndDesktop',
                            children: [
                                Object(f.jsx)('p', {
                                    children: ie()(i).format('DD.MM.YY'),
                                }),
                                Object(f.jsx)('p', { children: c ? '+' : '-' }),
                                Object(f.jsx)('p', { children: n }),
                                Object(f.jsx)('p', { children: s }),
                                Object(f.jsx)('p', {
                                    className: c
                                        ? 'homeTabItemAndDesktopResult homeTabItemAndDesktopResult--green'
                                        : 'homeTabItemAndDesktopResult homeTabItemAndDesktopResult--red',
                                    children: a,
                                }),
                                Object(f.jsx)('p', { children: r }),
                            ],
                        });
                    }),
                je = function (e) {
                    var t = e.operations;
                    return Object(f.jsx)('ul', {
                        className: 'homeTabList',
                        children: Object(f.jsx)(j.a, {
                            queries: {
                                small: '(min-width: 320px) and (max-width: 767px)',
                                medium: '(min-width: 768px)',
                            },
                            children: function (e) {
                                switch (!0) {
                                    case e.small:
                                        return t.map(function (e) {
                                            return Object(f.jsx)(
                                                oe,
                                                { operation: e },
                                                e.id,
                                            );
                                        });
                                    case e.medium:
                                        return Object(f.jsxs)(f.Fragment, {
                                            children: [
                                                Object(f.jsxs)(
                                                    'li',
                                                    {
                                                        className:
                                                            'homeTabTabletAndDesktop',
                                                        children: [
                                                            Object(f.jsx)(
                                                                'h3',
                                                                {
                                                                    children:
                                                                        '\u0414\u0430\u0442\u0430',
                                                                },
                                                            ),
                                                            Object(f.jsx)(
                                                                'h3',
                                                                {
                                                                    children:
                                                                        '\u0422\u0438\u043f',
                                                                },
                                                            ),
                                                            Object(f.jsx)(
                                                                'h3',
                                                                {
                                                                    children:
                                                                        '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f',
                                                                },
                                                            ),
                                                            Object(f.jsx)(
                                                                'h3',
                                                                {
                                                                    children:
                                                                        '\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440',
                                                                },
                                                            ),
                                                            Object(f.jsx)(
                                                                'h3',
                                                                {
                                                                    children:
                                                                        '\u0421\u0443\u043c\u0430',
                                                                },
                                                            ),
                                                            Object(f.jsx)(
                                                                'h3',
                                                                {
                                                                    children:
                                                                        '\u0411\u0430\u043b\u0430\u043d\u0441',
                                                                },
                                                            ),
                                                        ],
                                                    },
                                                    0,
                                                ),
                                                t.map(function (e, t) {
                                                    return Object(f.jsx)(
                                                        f.Fragment,
                                                        {
                                                            children: Object(
                                                                f.jsx,
                                                            )(
                                                                le,
                                                                {
                                                                    operation:
                                                                        e,
                                                                    index: !0,
                                                                },
                                                                e.id,
                                                            ),
                                                        },
                                                    );
                                                }),
                                            ],
                                        });
                                    default:
                                        return (
                                            console.log(
                                                'Error in switch handleTabList',
                                            ),
                                            Object(f.jsx)('h1', {
                                                children:
                                                    '\u0423\u0443\u0443\u043f\u0441... \u0421\u0442\u0430\u043b\u0430\u0441\u044c \u043f\u043e\u043c\u0438\u043b\u043a\u0430',
                                            })
                                        );
                                }
                            },
                        }),
                    });
                },
                ue = function () {
                    var e = Object(i.b)(),
                        t = Object(i.c)(ae);
                    return (
                        Object(c.useEffect)(function () {
                            0 === t.length && e(ce.getOperations());
                        }, []),
                        0 !== t.length
                            ? Object(f.jsx)('section', {
                                  className: 'homeTab-section',
                                  children: Object(f.jsx)(je, {
                                      operations: t,
                                  }),
                              })
                            : Object(f.jsx)('h1', {
                                  children:
                                      '\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...',
                              })
                    );
                },
                de =
                    (n(101),
                    function (e) {
                        var t = e.onClick;
                        return Object(f.jsxs)('button', {
                            className: 'button',
                            onClick: t,
                            children: [
                                Object(f.jsx)('span', {
                                    className: 'button_vectotA',
                                }),
                                Object(f.jsx)('span', {
                                    className: 'button_vectotB',
                                }),
                            ],
                        });
                    }),
                be = {
                    getCategories: Object(_.b)(
                        'getCategories',
                        Object(N.a)(
                            w.a.mark(function e() {
                                var t;
                                return w.a.wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (e.next = 2), T.categories
                                                );
                                            case 2:
                                                return (
                                                    (t = e.sent),
                                                    e.abrupt('return', t)
                                                );
                                            case 4:
                                            case 'end':
                                                return e.stop();
                                        }
                                }, e);
                            }),
                        ),
                    ),
                },
                me = Object(_.b)(
                    'getStatistic',
                    (function () {
                        var e = Object(N.a)(
                            w.a.mark(function e(t) {
                                var n;
                                return w.a.wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (e.next = 2), T.statistic
                                                );
                                            case 2:
                                                return (
                                                    (n = e.sent),
                                                    e.abrupt('return', n)
                                                );
                                            case 4:
                                            case 'end':
                                                return e.stop();
                                        }
                                }, e);
                            }),
                        );
                        return function (t) {
                            return e.apply(this, arguments);
                        };
                    })(),
                ),
                Oe = { getStatistic: me },
                he = n(14),
                xe = Object(_.c)({
                    name: 'finance',
                    initialState: {
                        data: [],
                        isLoading: !1,
                        error: null,
                        isModalAddTransaction: !1,
                    },
                    reducers: {
                        openModalTransaction: function (e) {
                            e.isModalAddTransaction = !0;
                        },
                        closeModalTransaction: function (e) {
                            e.isModalAddTransaction = !1;
                        },
                    },
                    extraReducers:
                        ((te = {}),
                        Object(v.a)(te, ce.getOperations.pending, function (e) {
                            (e.isLoading = !0), (e.error = null);
                        }),
                        Object(v.a)(
                            te,
                            ce.getOperations.fulfilled,
                            function (e, t) {
                                var n = t.payload;
                                (e.data = Object(he.a)(n)), (e.isLoading = !1);
                            },
                        ),
                        Object(v.a)(
                            te,
                            ce.getOperations.rejected,
                            function (e, t) {
                                var n = t.error;
                                (e.isLoading = !1), (e.error = n.message);
                            },
                        ),
                        Object(v.a)(te, ce.addOperation.pending, function (e) {
                            (e.isLoading = !0), (e.error = null);
                        }),
                        Object(v.a)(
                            te,
                            ce.addOperation.fulfilled,
                            function (e, t) {
                                var n = t.payload;
                                (e.data = Object(he.a)(n)), (e.isLoading = !1);
                            },
                        ),
                        Object(v.a)(
                            te,
                            ce.addOperation.rejected,
                            function (e, t) {
                                var n = t.error;
                                (e.isLoading = !1), (e.error = n.message);
                            },
                        ),
                        te),
                }),
                pe = xe.actions,
                fe = pe.openModalTransaction,
                ge = (pe.closeModalTransaction, xe),
                ve = function (e) {
                    return e.categories.data.length > 0;
                },
                _e = function () {
                    var e = Object(i.b)(),
                        t = Object(i.c)(ve),
                        n = Object(i.c)(re),
                        a = Object(i.c)(O),
                        r = function () {
                            e(fe());
                        };
                    return (
                        Object(c.useEffect)(function () {
                            t || e(be.getCategories()), e(Oe.getStatistic());
                        }, []),
                        Object(f.jsxs)(f.Fragment, {
                            children: [
                                Object(f.jsx)(z, {}),
                                Object(f.jsx)('main', {
                                    children: Object(f.jsxs)('div', {
                                        className: 'container container__main',
                                        children: [
                                            Object(f.jsx)('div', {
                                                className: 'main dashboardMain',
                                                children: Object(f.jsx)(j.a, {
                                                    queries: R,
                                                    children: function (e) {
                                                        return Object(f.jsxs)(
                                                            f.Fragment,
                                                            {
                                                                children: [
                                                                    e.small &&
                                                                        Object(
                                                                            f.jsxs,
                                                                        )(
                                                                            f.Fragment,
                                                                            {
                                                                                children:
                                                                                    [
                                                                                        Object(
                                                                                            f.jsx,
                                                                                        )(
                                                                                            P,
                                                                                            {},
                                                                                        ),
                                                                                        Object(
                                                                                            f.jsxs,
                                                                                        )(
                                                                                            l.d,
                                                                                            {
                                                                                                children:
                                                                                                    [
                                                                                                        Object(
                                                                                                            f.jsx,
                                                                                                        )(
                                                                                                            l.b,
                                                                                                            {
                                                                                                                path: 'home',
                                                                                                                element:
                                                                                                                    Object(
                                                                                                                        f.jsx,
                                                                                                                    )(
                                                                                                                        W,
                                                                                                                        {},
                                                                                                                    ),
                                                                                                            },
                                                                                                        ),
                                                                                                        Object(
                                                                                                            f.jsx,
                                                                                                        )(
                                                                                                            l.b,
                                                                                                            {
                                                                                                                path: 'diagram',
                                                                                                            },
                                                                                                        ),
                                                                                                        Object(
                                                                                                            f.jsx,
                                                                                                        )(
                                                                                                            l.b,
                                                                                                            {
                                                                                                                path: 'currency',
                                                                                                                element:
                                                                                                                    Object(
                                                                                                                        f.jsx,
                                                                                                                    )(
                                                                                                                        ee,
                                                                                                                        {},
                                                                                                                    ),
                                                                                                            },
                                                                                                        ),
                                                                                                        Object(
                                                                                                            f.jsx,
                                                                                                        )(
                                                                                                            l.b,
                                                                                                            {
                                                                                                                path: '*',
                                                                                                                element:
                                                                                                                    Object(
                                                                                                                        f.jsx,
                                                                                                                    )(
                                                                                                                        'h1',
                                                                                                                        {
                                                                                                                            children:
                                                                                                                                'Not Found',
                                                                                                                        },
                                                                                                                    ),
                                                                                                            },
                                                                                                        ),
                                                                                                    ],
                                                                                            },
                                                                                        ),
                                                                                    ],
                                                                            },
                                                                        ),
                                                                    e.medium &&
                                                                        Object(
                                                                            f.jsxs,
                                                                        )(
                                                                            'div',
                                                                            {
                                                                                className:
                                                                                    'main_block',
                                                                                children:
                                                                                    [
                                                                                        Object(
                                                                                            f.jsxs,
                                                                                        )(
                                                                                            'div',
                                                                                            {
                                                                                                children:
                                                                                                    [
                                                                                                        Object(
                                                                                                            f.jsx,
                                                                                                        )(
                                                                                                            P,
                                                                                                            {},
                                                                                                        ),
                                                                                                        Object(
                                                                                                            f.jsx,
                                                                                                        )(
                                                                                                            W,
                                                                                                            {},
                                                                                                        ),
                                                                                                    ],
                                                                                            },
                                                                                        ),
                                                                                        Object(
                                                                                            f.jsx,
                                                                                        )(
                                                                                            ee,
                                                                                            {},
                                                                                        ),
                                                                                    ],
                                                                            },
                                                                        ),
                                                                ],
                                                            },
                                                        );
                                                    },
                                                }),
                                            }),
                                            Object(f.jsxs)(l.d, {
                                                children: [
                                                    Object(f.jsx)(l.b, {
                                                        path: '/home',
                                                        element: Object(f.jsxs)(
                                                            f.Fragment,
                                                            {
                                                                children: [
                                                                    Object(
                                                                        f.jsx,
                                                                    )(ue, {}),
                                                                    Object(
                                                                        f.jsx,
                                                                    )(de, {
                                                                        onClick:
                                                                            r,
                                                                    }),
                                                                ],
                                                            },
                                                        ),
                                                    }),
                                                    Object(f.jsx)(l.b, {
                                                        path: '/currency',
                                                        element: Object(f.jsx)(
                                                            j.a,
                                                            {
                                                                queries: R,
                                                                children:
                                                                    function (
                                                                        e,
                                                                    ) {
                                                                        return Object(
                                                                            f.jsx,
                                                                        )(
                                                                            f.Fragment,
                                                                            {
                                                                                children:
                                                                                    e.medium &&
                                                                                    Object(
                                                                                        f.jsxs,
                                                                                    )(
                                                                                        f.Fragment,
                                                                                        {
                                                                                            children:
                                                                                                [
                                                                                                    Object(
                                                                                                        f.jsx,
                                                                                                    )(
                                                                                                        ue,
                                                                                                        {},
                                                                                                    ),
                                                                                                    Object(
                                                                                                        f.jsx,
                                                                                                    )(
                                                                                                        de,
                                                                                                        {
                                                                                                            onClick:
                                                                                                                r,
                                                                                                        },
                                                                                                    ),
                                                                                                ],
                                                                                        },
                                                                                    ),
                                                                            },
                                                                        );
                                                                    },
                                                            },
                                                        ),
                                                    }),
                                                    Object(f.jsx)(l.b, {
                                                        path: '/diagram',
                                                        element: Object(f.jsx)(
                                                            'h1',
                                                            {
                                                                children:
                                                                    'Diagram',
                                                            },
                                                        ),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                                n &&
                                    Object(f.jsx)(f.Fragment, {
                                        children: Object(f.jsx)(K, {
                                            children: Object(f.jsx)(H, {}),
                                        }),
                                    }),
                                a &&
                                    Object(f.jsx)(f.Fragment, {
                                        children: Object(f.jsx)(K, {}),
                                    }),
                            ],
                        })
                    );
                };
            n(102);
            function Ne() {
                var e = Object(c.useState)(''),
                    t = Object(G.a)(e, 2),
                    n = t[0],
                    a = t[1],
                    r = Object(c.useState)(''),
                    s = Object(G.a)(r, 2),
                    o = s[0],
                    l = s[1],
                    j = Object(i.b)(),
                    u = function (e) {
                        var t = e.target,
                            n = t.name,
                            c = t.value;
                        switch (n) {
                            case 'email':
                                return a(c);
                            case 'password':
                                return l(c);
                            default:
                                return;
                        }
                    };
                return Object(f.jsx)('div', {
                    children: Object(f.jsxs)('form', {
                        onSubmit: function (e) {
                            e.preventDefault(),
                                console.log(e),
                                j(F.login({ email: n, password: o })),
                                a(''),
                                l('');
                        },
                        autoComplete: 'off',
                        className: 'login_form',
                        children: [
                            Object(f.jsx)('div', {
                                className: 'login_form__logo',
                                children: Object(f.jsx)(g, {}),
                            }),
                            Object(f.jsxs)('label', {
                                className: 'login_form__label',
                                children: [
                                    Object(f.jsx)('svg', {
                                        className: 'login_form__icon',
                                        children: Object(f.jsx)('use', {
                                            href: ''.concat(p, '#email'),
                                        }),
                                    }),
                                    Object(f.jsx)('input', {
                                        className: 'login_form__input',
                                        placeholder: 'E-mail',
                                        type: 'email',
                                        name: 'email',
                                        value: n,
                                        onChange: u,
                                    }),
                                ],
                            }),
                            Object(f.jsxs)('label', {
                                className: 'login_form__label',
                                children: [
                                    Object(f.jsx)('svg', {
                                        className: 'login_form__icon',
                                        children: Object(f.jsx)('use', {
                                            href: ''.concat(p, '#password'),
                                        }),
                                    }),
                                    Object(f.jsx)('input', {
                                        className: 'login_form__input',
                                        placeholder:
                                            '\u041f\u0430\u0440\u043e\u043b\u044c',
                                        type: 'password',
                                        name: 'password',
                                        value: o,
                                        onChange: u,
                                    }),
                                ],
                            }),
                            Object(f.jsx)('button', {
                                className:
                                    'login_form__btn login_form__btn--current  ',
                                type: 'submit',
                                children: Object(f.jsx)('span', {
                                    children: '\u0412\u0445\u043e\u0434',
                                }),
                            }),
                            Object(f.jsx)('button', {
                                className:
                                    'login_form__btn login_form__btn_color',
                                type: 'button',
                                children: Object(f.jsx)('span', {
                                    children:
                                        '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f',
                                }),
                            }),
                        ],
                    }),
                });
            }
            var ye = function () {
                var e = Object(i.c)(b);
                return (
                    console.log(e),
                    Object(f.jsx)('div', { children: Object(f.jsx)(Ne, {}) })
                );
            };
            n(103);
            var we = function () {
                    return Object(f.jsx)('div', {
                        className: 'loader',
                        children: 'Loading...',
                    });
                },
                ke = function (e, t) {
                    return e
                        ? t || Object(f.jsx)(l.a, { to: '/home' })
                        : Object(f.jsx)(l.a, { to: '/login' });
                };
            var Le,
                Te,
                Ce,
                Se = function () {
                    var e = Object(i.c)(d),
                        t = Object(i.c)(u),
                        n = Object(i.c)(b),
                        a = Object(i.c)(m),
                        r = Object(i.b)();
                    return (
                        Object(c.useEffect)(function () {
                            r(
                                e && !t
                                    ? F.currentUser()
                                    : F.login({
                                          email: 'test@gmail.com',
                                          password: 'qwerty',
                                      }),
                            );
                        }, []),
                        Object(f.jsxs)(f.Fragment, {
                            children: [
                                n && Object(f.jsx)(we, {}),
                                a &&
                                    Object(f.jsxs)('h1', {
                                        children: ['Error: ', a],
                                    }),
                                !n &&
                                    !a &&
                                    t === e &&
                                    Object(f.jsxs)(l.d, {
                                        children: [
                                            Object(f.jsx)(l.b, {
                                                path: 'login',
                                                element: Object(f.jsx)(ye, {}),
                                            }),
                                            Object(f.jsx)(l.b, {
                                                path: 'register',
                                                element: Object(f.jsx)('h1', {
                                                    children: 'Registration',
                                                }),
                                            }),
                                            Object(f.jsx)(l.b, {
                                                path: '/',
                                                element: ke(t),
                                            }),
                                            Object(f.jsx)(l.b, {
                                                path: '/*',
                                                element: ke(
                                                    t,
                                                    Object(f.jsx)(_e, {}),
                                                ),
                                            }),
                                        ],
                                    }),
                            ],
                        })
                    );
                },
                Ie = n(16),
                Fe = n(45),
                Me = n.n(Fe),
                De = n(46),
                Ae = n.n(De),
                Be = Object(_.c)({
                    name: 'categories',
                    initialState: { data: [], isLoading: !1, error: null },
                    extraReducers:
                        ((Le = {}),
                        Object(v.a)(Le, be.getCategories.pending, function (e) {
                            (e.isLoading = !0), (e.error = null);
                        }),
                        Object(v.a)(
                            Le,
                            be.getCategories.fulfilled,
                            function (e, t) {
                                var n = t.payload;
                                (e.data = Object(he.a)(n)), (e.isLoading = !1);
                            },
                        ),
                        Object(v.a)(
                            Le,
                            be.getCategories.rejected,
                            function (e, t) {
                                var n = t.error;
                                (e.isLoading = !1), (e.error = n.message);
                            },
                        ),
                        Le),
                }),
                Re = Be,
                Ee = Object(_.c)({
                    name: 'statistic',
                    initialState: { data: [], isLoading: !1, error: null },
                    extraReducers:
                        ((Te = {}),
                        Object(v.a)(Te, Oe.getStatistic.pending, function (e) {
                            (e.isLoading = !0), (e.error = null);
                        }),
                        Object(v.a)(
                            Te,
                            Oe.getStatistic.fulfilled,
                            function (e, t) {
                                var n = t.payload;
                                (e.data = Object(he.a)(n)), (e.isLoading = !1);
                            },
                        ),
                        Object(v.a)(
                            Te,
                            Oe.getStatistic.rejected,
                            function (e, t) {
                                var n = t.error;
                                (e.isLoading = !1), (e.error = n.message);
                            },
                        ),
                        Te),
                }),
                qe = Ee,
                Ue = { key: 'user', storage: Ae.a, whitelist: ['token'] },
                Je = Object(Ie.g)(Ue, B.reducer),
                Ye = Object(_.a)({
                    reducer:
                        ((Ce = {}),
                        Object(v.a)(Ce, B.name, Je),
                        Object(v.a)(Ce, Re.name, Re.reducer),
                        Object(v.a)(Ce, qe.name, qe.reducer),
                        Object(v.a)(Ce, ge.name, ge.reducer),
                        Ce),
                    middleware: function (e) {
                        return [].concat(
                            Object(he.a)(
                                e({
                                    serializableCheck: {
                                        ignoredActions: [
                                            Ie.a,
                                            Ie.f,
                                            Ie.b,
                                            Ie.c,
                                            Ie.d,
                                            Ie.e,
                                        ],
                                    },
                                }),
                            ),
                            [Me.a],
                        );
                    },
                    devTools: !1,
                }),
                Pe = { store: Ye, persistedStore: Object(Ie.h)(Ye) };
            n(106);
            s.a.render(
                Object(f.jsx)(a.a.StrictMode, {
                    children: Object(f.jsx)(i.a, {
                        store: Pe.store,
                        children: Object(f.jsx)(o.a, {
                            loader: null,
                            persistor: Pe.persistedStore,
                            children: Object(f.jsx)(U.a, {
                                children: Object(f.jsx)(Se, {}),
                            }),
                        }),
                    }),
                }),
                document.getElementById('root'),
            );
        },
        56: function (e, t, n) {},
        60: function (e, t, n) {},
        62: function (e, t, n) {},
        87: function (e, t, n) {},
        88: function (e, t, n) {},
        89: function (e, t, n) {},
        90: function (e, t, n) {},
        91: function (e, t, n) {},
        94: function (e, t, n) {},
        95: function (e, t, n) {},
        96: function (e, t, n) {},
        97: function (e, t, n) {},
        98: function (e, t, n) {},
        99: function (e, t, n) {},
    },
    [[107, 1, 2]],
]);
//# sourceMappingURL=main.51c2f09e.chunk.js.map