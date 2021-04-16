import React from 'react'
import '../Style/banner.css'
import amazon from '../amazon.png'
import first from '../1st.png'
import third from '../3rd.png'
// import second from '../2nd.png'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
    return (
        <div className="banner">
               <Carousel showStatus={false} showThumbs={false}>
                <div>
                    <img src={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"} />
                </div>
                <div>
                    <img src={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"} />
                </div>
                <div>
                    <img src={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"} />
                </div>
           
            </Carousel>

        </div>
    )
}

export default Banner
