import React from 'react'
import "./Home.css"
import Product from './Product'
const Home = () => {
  return (
   <div className="home" >
     <div className="home__container">
      <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="homepage_bg"/>
    </div>

    <div className='home__row'>
        {/* Product */}
        <Product 
        id="12321341"
        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
        price={199.99}
        rating={5} 
        image="https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg" alt="lean-startup"/>

        <Product
        id="49538094"
        title="Kenwood KMX750RD/ KMix Stand Mixer 1000W (Red)"
        price={41990}
        rating={4}
        image="https://m.media-amazon.com/images/I/718Bxs69wUL._SX355_.jpg"
        />
    </div>
    <div className='home__row'>
        <Product
        id="4903850"
        title="Fitbit Versa 4 Fitness Watch (Black / Graphite Aluminium) with 6-Month Premium Membership"
        price={20499}
        rating={4}
        image="https://m.media-amazon.com/images/I/61jUiN1bCrL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
        id="23445930"
        title="Echo Dot (3rd Gen) - Smart speaker with Alexa (Black)"
        price={4499}
        rating={4}
        image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
        id="3254354345"
        title="Apple 2022 12.9-inch iPad Pro (Wi-Fi, 256GB) - Space Grey (6th Generation)"
        price={119900}
        rating={5}
        image="https://m.media-amazon.com/images/I/81c+9BOQNWL._AC_UY327_FMwebp_QL65_.jpg"
        />
    </div>
    <div className='home__row'>
        <Product
        id="90829332"
        title="Samsung 123.9cm (49) Gaming Monitor with 32:9 Aspect Ratio Display and 240Hz Refresh Rate - LC49G95TSSWXXL"
        price={135000}
        rating={4}
        image="https://m.media-amazon.com/images/I/71MlcO29QOL._SX450_.jpg"
        />
    </div>
   </div>
  )
}

export default Home
