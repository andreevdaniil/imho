import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue'),
        meta: {
            layout: 'Empty'
        }
    },
    {
        path: '/admin',
        name: 'MainAdmin',
        component: () =>
            import ('../layouts/AdminLayout.vue'),
        children: [{
                path: 'employees',
                name: 'AdminEmployees',
                component: () =>
                    import ('../views/AdminPages/EmployeesPages/Main'),
                children: [{
                        path: 'list',
                        name: 'AdminEmployeesTable',
                        component: () =>
                            import ('../views/AdminPages/EmployeesPages/List'),
                    },
                    {
                        path: 'view/:id',
                        name: 'AdminEmployeesView',
                        component: () =>
                            import ('@/views/AdminPages/EmployeesPages/View'),
                    },
                    {
                        path: 'create',
                        name: 'AdminEmployeesCreateEmployeer',
                        component: () =>
                            import ('../views/AdminPages/EmployeesPages/CreateNew'),
                    },
                ]

            },
            {
                path: 'analytics',
                name: 'AdminAnalyticsMain',
                component: () =>
                    import ('../views/AdminPages/AnalyticsPages/Main'),
                children: [{
                        path: 'graph',
                        name: 'AdminAnalyticsPage',
                        component: () =>
                            import ('../views/AdminPages/AnalyticsPages/Graph'),
                    },
                    {
                        path: 'authors',
                        name: 'AdminAnalyticsAuthorsPage',
                        component: () =>
                            import ('../views/AdminPages/AnalyticsPages/Authors'),
                    },
                    {
                        path: 'publications',
                        name: 'AdminAnalyticsPublicationsPage',
                        component: () =>
                            import ('../views/AdminPages/AnalyticsPages/Publications'),
                    },
                    {
                        path: 'users',
                        name: 'AdminAnalyticsUsersPage',
                        component: () =>
                            import ('../views/AdminPages/AnalyticsPages/Users'),
                    },
                ]
            }
        ]
    },
    {
        path: '/moderator/',
        name: 'MainModer',
        component: () =>
            import ('../layouts/ModeratorLayout'),
        children: [{
                path: 'article/:id',
                name: 'ModeratorPublicationsArticle',
                component: () =>
                    import ('../views/ModeratorPages/PublicationsPages/View')
            },
            {
                path: 'publications/table',
                name: 'ModeratorPublicationsTable',
                component: () =>
                    import ('../views/ModeratorPages/PublicationsPages/Table/Main'),
                children: [{
                        path: 'new',
                        name: 'ModeratorPublicationsTableNew',
                        component: () =>
                            import ('../views/ModeratorPages/PublicationsPages/Table/New')
                    },
                    {
                        path: 'approved',
                        name: 'ModeratorPublicationsTableApproved',
                        component: () =>
                            import ('../views/ModeratorPages/PublicationsPages/Table/Approved')
                    },
                    {
                        path: 'rejected',
                        name: 'ModeratorPublicationsTableRejected',
                        component: () =>
                            import ('../views/ModeratorPages/PublicationsPages/Table/Rejected')
                    },
                    {
                        path: 'archive',
                        name: 'ModeratorPublicationsTableArchive',
                        component: () =>
                            import ('../views/ModeratorPages/PublicationsPages/Table/Archive')
                    },
                    {
                        path: 'editorial',
                        name: 'ModeratorPublicationsTableEditorial',
                        component: () =>
                            import ('../views/ModeratorPages/PublicationsPages/Table/Editorial')
                    },
                    {
                        path: 'hot',
                        name: 'ModeratorPublicationsTableHot',
                        component: () =>
                            import ('../views/ModeratorPages/PublicationsPages/Table/Hot')
                    },
                    {
                        path: 'all',
                        name: 'ModeratorPublicationsTableAll',
                        component: () =>
                            import ('../views/ModeratorPages/PublicationsPages/Table/All')
                    },
                ]
            },
            {
                path: 'publications/calendar',
                name: 'ModeratorPublicationsCalendar',
                component: () =>
                    import ('../views/ModeratorPages/PublicationsPages/Calendar/Main'),
                children: [{
                        path: 'new',
                        name: 'ModeratorPublicationsCalendarNew',
                        component: () =>
                            import ('../views/ModeratorPages/PublicationsPages/Calendar/New')
                    },
                    {
                        path: 'approved',
                        name: 'ModeratorPublicationsCalendarApproved',
                        component: () =>
                            import ('../views/ModeratorPages/PublicationsPages/Calendar/Approved')
                    },
                    {
                        path: 'rejected',
                        name: 'ModeratorPublicationsCalendarRejected',
                        component: () =>
                            import ('../views/ModeratorPages/PublicationsPages/Calendar/Rejected')
                    },
                    {
                        path: 'archive',
                        name: 'ModeratorPublicationsCalendarArchive',
                        component: () =>
                            import ('../views/ModeratorPages/PublicationsPages/Calendar/Archive')
                    },
                    {
                        path: 'editorial',
                        name: 'ModeratorPublicationsCalendarEditorial',
                        component: () =>
                            import ('../views/ModeratorPages/PublicationsPages/Calendar/Editorial')
                    },
                    {
                        path: 'hot',
                        name: 'ModeratorPublicationsCalendarHot',
                        component: () =>
                            import ('../views/ModeratorPages/PublicationsPages/Calendar/Hot')
                    },
                    {
                        path: 'all',
                        name: 'ModeratorPublicationsCalendarAll',
                        component: () =>
                            import ('../views/ModeratorPages/PublicationsPages/Calendar/All')
                    },
                ]
            },
            {
                path: 'user',
                name: 'ModeratorUser',
                component: () =>
                    import ('../views/ModeratorPages/UserPages/Main'),
                children: [{
                        path: 'settings',
                        name: 'ModeratorUserSettings',
                        component: () =>
                            import ('../views/ModeratorPages/UserPages/Settings')
                    },
                    {
                        path: 'kpi',
                        name: 'ModeratorUserKpi',
                        component: () =>
                            import ('../views/ModeratorPages/UserPages/Kpi')
                    }
                ]

            }
        ]
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
        currentRouteName = to.name ? to.name.toLowerCase() : ''
    if (user != null || to.name == 'Login') {
        next()

    } else if (user == null) {
        next({ name: 'Login' })
    }
    if (user != null && currentRouteName.includes('admin') && !user.roles.includes('администратор')) {
        next({ name: 'ModeratorPublicationsTableNew' })
        return
    } else if (user != null && currentRouteName.includes('moder') && !user.roles.includes('модератор')) {
        next({ name: 'AdminEmployeesTable' })
        return false
    }
})

export default router