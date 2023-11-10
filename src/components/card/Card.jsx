import React from 'react'
import './card.css'
import HeroImg from './../../images/illustration-hero.svg'
import IconMusic from './../../images/icon-music.svg'

export const Card = () => {
    return (
        <div className='container' role="main">
            <div className='card__container'>
                <div className='card__container_img_container'>
                    <img src={HeroImg} alt="Hero Img" />
                </div>
                <div className='card__container_info'>
                    <h1>Order Summary</h1>
                    <p className='card__container_infotext'>You can now listen to millions of songs, audiobooks, and podcasts on any
                        device anywhere you like!</p>
                    <div className='card__container_plan'>
                        <div className='card__container_plan_icon'>
                            <img src={IconMusic} alt="Music Icon" />
                        </div>
                        <div className='card__container_plan_price'>
                            <p className='card__container_plan_price_type_plan'>Annual Plan</p>
                            <p className='card__container_plan_price_type_price'>$59.99/year</p>
                        </div>
                        <div className='card__container_plan_btn'>
                            <a href="./">Change</a>
                        </div>
                    </div>
                    <button>Proceed to Payment</button>
                    <div className='card__container_cancel'>
                        <a href="./" className=''>Cancel Order</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
