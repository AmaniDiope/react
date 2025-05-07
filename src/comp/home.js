import React, { useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Homeproduct from './home_product'
import { AiFillEye, AiFillHeart } from 'react-icons/ai';
const Home = () => {
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct);
  return (
    <>
      <div className='home'>
        <div className='top_banner'>
          <div className='contant'>
            <h3>silver aluminum</h3>
            <h2>Apple Watch</h2>
            <p>30% off at your first order</p>
            <Link to='/shop' className='link'>Shop Now</Link>
          </div>
        </div>
        <div className='trending'>
          <div className='container'>
            <div className='left_box'>
              <div className='header'>
                <div className='heading'>
                  <h2>trending product</h2>
                </div>
                <div className='cate'>
                  <h3>New</h3>
                  <h3>Featured</h3>
                  <h3>top selling</h3>
                </div>
              </div>
              <div className='prooducts'>
                <div className='container'>
                {
                    trendingProduct.map((createRoutersFromElements) =>
                      {
                        return(
                          <>
                          <div className='box'>
                            <div className='img_box'>
                              <img src={createRoutersFromElements.image} alt='createRoutersFromElements.imge'></img>
                              <div className='icon'>
                                <div className='icon_box'>
                                  <AiFillEye />
                                </div>
                                <div className='icon_box'>
                                  <AiFillHeart />
                                </div>
                              </div>
                            </div>
                            <div className='info'>
                              <h3>{createRoutersFromElements.Name}</h3>
                              <p>${createRoutersFromElements.price}</p>
                              <button className='btn'>Add To Cart</button>
                            </div>
                          </div>
                          </>
                         )
                      })
                   }
                </div>
              </div>
            </div>
            <div className='right_box'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
