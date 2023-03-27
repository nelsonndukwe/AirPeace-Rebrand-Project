import React from 'react'
import "../Pages/Pages.css"
import Createdate from './Createdate'
import route1 from '../assets/Images/route1.jpg'
import route2 from '../assets/Images/route2.jpg'
import route3 from '../assets/Images/route3.jpg'
import route4 from '../assets/Images/turtle.jpg'
import route5 from '../assets/Images/dubai.jpg'
import route6 from '../assets/Images/route6.jpg'



const Destinations = () => {
    const date = Createdate()

    return (
        <div className='destination__container container'>
            <h3>Explore Top Destination for Competitive Fares</h3>

            <div className='top__destinations'>
                <div className='card__conatiner'>
                    <img src={route1} alt className='destination__Imag' />

                    <span className='dynamiccard'>
                        <p className='city'>Abuja</p>

                        <div className='dep'>
                            <h4>Depature Date</h4>
                            <h4>{date} </h4>
                        </div>


                        <div className='eco'>
                            <p>Economy</p>
                            <p>NGN 50,000</p>
                        </div>

                    </span>

                </div>

                <div className='card__conatiner'>
                    <img src={route2} alt className='destination__Imag' />

                    <span className='dynamiccard'>
                        <p className='city'>Lagos</p>
                        <div className='dep'>
                            <h4>Depature Date</h4>
                            <h4>{date} </h4>
                        </div>

                        <div className='eco'>
                            <p>Economy</p>
                            <p>NGN 324,000</p>
                        </div>

                    </span>


                </div>


                <div className='card__conatiner'>
                    <img src={route3} alt className='destination__Imag' />
                    <span className='dynamiccard'>
                        <p className='city'>Lagos</p>
                        <div className='dep'>
                            <h4>Depature Date</h4>
                            <h4>{date} </h4>
                        </div>


                        <div className='eco'>
                            <p>Economy</p>
                            <p>NGN 104,100</p>
                        </div>
                    </span>


                </div>


                <div className='card__conatiner'>
                    <img src={route4} alt className='destination__Imag' />
                    <span className='dynamiccard'>
                        <p className='city'>Lagos</p>

                        <div className='dep'>
                            <h4>Depature Date</h4>
                            <h4>{date} </h4>
                        </div>

                        <div className='eco'>
                            <p>Economy</p>
                            <p>NGN 270,700</p>
                        </div>

                    </span>


                </div>

                <div className='card__conatiner'>
                    <img src={route5} alt className='destination__Imag' />
                    <span className='dynamiccard'>
                        <p className='city'>Lagos</p>

                        <div className='dep'>
                            <h4>Depature Date</h4>
                            <h4>{date} </h4>
                        </div>

                        <div className='eco'>
                            <p>Economy</p>
                            <p>NGN 270,700</p>
                        </div>

                    </span>


                </div>


                <div className='card__conatiner'>
                    <img src={route6} alt className='destination__Imag' />
                    <span className='dynamiccard'>
                        <p className='city'>Lagos</p>

                        <div className='dep'>
                            <h4>Depature Date</h4>
                            <h4>{date} </h4>
                        </div>

                        <div className='eco'>
                            <p>Economy</p>
                            <p>NGN 270,700</p>
                        </div>

                    </span>


                </div>


            </div>
            <div className='explore '>
            <h4>
                Explore More
            </h4></div>




        </div>
    )
}

export default Destinations