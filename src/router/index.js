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
            import ('../layouts/ModerLayout'),
        children: [{
            path: 'publications',
            name: 'ModerPublications',
            component: () =>
                import ('../views/ModerPages/PublicationsPages/Main'),
                children: [
                    {
                        path: 'new',
                        name: 'ModerPublicationsNew',
                        component: () => import ('../views/ModerPages/PublicationsPages/New')
                    },
                    {
                        path: 'approved',
                        name: 'ModerPublicationsApproved',
                        component: () => import ('../views/ModerPages/PublicationsPages/Approved')
                    },
                ]
        }]
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
        next({ name: 'MainModer' })
        return
    } else if (user != null && currentRouteName.includes('moder') && !user.roles.includes('модератор')) {
        next({ name: 'AdminEmployeesTable' })
        return false
    }
})

export default router