
import { Route, Link } from 'react-router-dom'

const menus = [
  {
    to: '/',
    label: 'Home',
    exact: true
  },
  {
    to: '/about',
    label: 'About',
    exact: false
  },
  {
    to: '/contact',
    label: 'Contact',
    exact: false
  },
  {
    to: '/products',
    label: 'Products',
    exact: false
  },
  {
    to: '/login',
    label: 'Login',
    exact: false
  }
]

const MenuLink = ({ label, to, exact }) => {
  return (
    <Route path={to} exact={exact} children={({ match }) => {
      let active = match ? 'active abc' : ''
      return (
        <li className={`my-li ${active}`}>
          <Link to={to}>{label}</Link>
        </li>
      )
    }} />
  )
}

const getMenus = (menus) => {
  let result = null;
  if (menus.length > 0) {
    result = menus.map((menu, index) => {
      return (<MenuLink to={menu.to} exact={menu.exact} label={menu.label} />)
    })
  }
  return result;
}


function Menu() {
  return (
    <nav className="navbar navbar-default">
      <ul className="nav navbar-nav">
        {getMenus(menus)}

      </ul>
    </nav>

  );
}



export default Menu;
