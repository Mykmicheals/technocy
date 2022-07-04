import React,{useContext, useState} from 'react'
import { Icon } from '@iconify/react';
import CartContext from '../Store/CartContext';
import { Link } from 'react-router-dom';
import ProductContext from '../Store/ProductContext';

function Header() {
  
  const [serachQuery, setSearchQuery] = useState('')
  const [filteredName, setFilteredName] = useState([])
  const cartCtx = useContext(CartContext)
   const productCtx = useContext(ProductContext)
  
//   const numberOfItems = cartCtx.items.reduce((currentNumber, item) => {
//    return currentNumber + item.amount
//  }, 0)
  const handleSearch = (event) => {
    setSearchQuery(event.target.value)

    productCtx.product.filter((each) => {
      return each.name.toLowerCase().includes(event.target.value)
      // if (each.name.includes(serachQuery)) {
      //     setFilteredName(each.name)
      //   return (
      //     each.name
          
      //    )   
      // }
        
    })
    
  }

  const clickSearch = () => {
    console.log(filteredName)
  }
  // console.log(filteredName)
  const numberOfItems = cartCtx.items.length
  return (
    <div>
           <div className='menu'>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Blogs</li>
    </ul>
        </div>
        <nav className='header'>
            <div id='logo'>
           <i> <Icon icon="ion:logo-capacitor" /></i> <span>Technocy</span>
            </div>
            <div id='search-bar'>
          <span>   <input
            onChange={handleSearch}
            placeholder='Search Products...' />
            <i onClick={clickSearch}>
              <Icon icon="carbon:search" inline={true} />
            </i>
          </span>
         
            </div>
            <div id='cart'>
          <i>  <Icon icon="ant-design:user-outlined" inline={true} /></i>
          <Link to='/cart'>
            <i>  <Icon icon="bi:cart-plus" inline={true} />  </i>
          </Link>
          <span>{numberOfItems}</span> 
            </div>
        </nav>

    
    </div>
  )
}

export default Header