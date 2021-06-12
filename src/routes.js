import Home from '../src/component/Home'
import About from '../src/component/About'
import Contact from '../src/component/Contact'
import NotFound from '../src/component/NotFound'
import Products from './component/Products'
import Login from './component/Login'
import Product from './component/Product'

const routes = [
    {
        path: '/',
        exact: true,
        main : () => {
            return (<Home/>)
        }
    },
    {
        path: '/about',
        exact: false,
        main : () => {
            return (<About/>)
        }
    },
    {
        path: '/contact',
        exact: false,
        main : () => {
            return (<Contact/>)
        }
    },
    {
        path: '/products',
        exact: false,
        main : ({match, location}) => {
            return (<Products match={match} location={location}/>)
        }
    },
    {
        path: '/login',
        exact: false,
        main : ({location}) => {
            return (<Login location={location}/>)
        }
    },
    {
        path: '/products/3',
        exact: false,
        main : () => {
            return (<Product/>)
        }
    },
    {
        path: '',
        exact: false,
        main : () => {
            return (<NotFound/>)
        }
    }
]
export default routes;