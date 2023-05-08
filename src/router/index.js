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
        path: '/admin/employees',
        name: 'AdminEmployees',
        component: () =>
            import ('../views/AdminPages/EmployeesPages/Main.vue'),
        meta: {
            layout: 'Default'
        }
    },
    {
        path: '/admin/analytics',
        name: 'AdminAnalyticsPage',
        component: () =>
            import ('../views/AdminPages/AnalyticsPages/Main'),
        meta: {
            layout: 'Default'
        }
    },
    {
        path: '/admin/analytics/authors',
        name: 'AdminAnalyticsAuthorsPage',
        component: () =>
            import ('../views/AdminPages/AnalyticsPages/Authors'),
        meta: {
            layout: 'Default'
        }
    },
    {
        path: '/admin/analytics/publications',
        name: 'AdminAnalyticsPublicationsPage',
        component: () =>
            import ('../views/AdminPages/AnalyticsPages/Publications'),
        meta: {
            layout: 'Default'
        }
    },
    {
        path: '/admin/analytics/users',
        name: 'AdminAnalyticsUsersPage',
        component: () =>
            import ('../views/AdminPages/AnalyticsPages/Users'),
        meta: {
            layout: 'Default'
        }
    },
    {
        path: '/admin/employees/list',
        name: 'AdminEmployeesTable',
        component: () =>
            import ('../views/AdminPages/EmployeesPages/Main'),
        meta: {
            layout: 'Default'
        }
    },
    {
        path: '/admin/employees/view/:id',
        name: 'AdminEmployeesView',
        component: () =>
            import ('../views/AdminPages/EmployeesPages/View'),
        meta: {
            layout: 'Default'
        }
    },
    {
        path: '/admin/employees/create',
        name: 'AdminEmployeesCreateEmployeer',
        component: () =>
            import ('../views/AdminPages/EmployeesPages/CreateNew'),
        meta: {
            layout: 'Default'
        }
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router