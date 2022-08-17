import React, { Fragment } from 'react'
import Banner from '../components/Banner'
import Blogs from '../components/Blogs'
import Categories from '../components/Categories'
import Featured from '../components/Featured'
import MyBanner from '../components/MyBanner'

function HomeScreen() {
  return (
    <Fragment>
      <Banner />
      <Categories />
      <Featured />
      <Blogs />
    </Fragment>
  )
}

export default HomeScreen