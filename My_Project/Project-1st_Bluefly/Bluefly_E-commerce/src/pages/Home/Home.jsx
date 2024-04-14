import React from 'react'
import Navbar from '../../Componants/Navbar/Navbar'
import './home.css'
import Footer from '../../Componants/Footer/Footer'

const Home = () => {
  return (
    <div>Home page here
        <Navbar/>
        <div id='banner'>
          <img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/TOP_BANNER_ASSET.jpg?v=1712872949" alt="" />
        </div>
        <div id='information'>
          <h3>214 Products</h3>
          <div>
            <select name="" id="">
              <option value="">BEST SELLING</option>
              <option value="">ALPHABETICALLY, A TO Z</option>
              <option value="">ALPHABETICALLY, A TO Z</option>
              <option value="">PRICE LOW TO HIGH</option>
              <option value="">PRICE HIGH TO LOW</option>
              <option value="">DATE, OLD TO NEW</option>
              <option value="">DATE, NEW TO OLD</option>
            </select>
          </div>
        </div>
        <br />
        <h1 className='heading'>FREE STANDARD SHIPPING & HANDLING ON ORDERS OVER $199</h1>
        <div id='banner'>
          <img src="https://cdn.shopify.com/s/files/1/0254/8878/5498/files/SHOP_PAY_BANNER_Top_1.jpg?v=1684348361" alt="" />
        </div>
        
        <Footer/>
    </div>
  )
}

export default Home