
import { NavLink, Redirect, Route } from 'react-router-dom'
import React from 'react'
import Product from './Product'
const products = [
  {
    id: 1,
    name: 'Iphone1',
    price: 15,
    status: true
  },
  {
    id: 2,
    name: 'Iphone2',
    price: 25,
    status: true
  },
  {
    id: 3,
    name: 'Iphone3',
    price: 35,
    status: true
  }
]


const showProducts = (products, match) => {
  console.log(match)
  var result = null;
  if (products.length > 0) {
    result = products.map((p, index) => {
      return (
        <NavLink to={`${match.url}/${p.id}`} key={p.id} >
          <li className={`list-group-item ${p.name}`} index={p.id}>{p.name} - {p.price}
          </li>
        </NavLink>
      )
    })
  }
  return result;
}

function Products(props) {
  let { match } = props
  return (
    <div className="container">
      <h2>Đây là Products</h2>
      <div className="row">
        <ul className="list-group">
          {showProducts(products, match)}

        </ul>
      </div>
    </div>

  );
}


export default Products;
