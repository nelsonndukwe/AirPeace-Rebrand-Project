import "../Pages/Pages.css"
import crew3 from '../../src/assets/Images/crew3.jpg'
import firstclass from '../../src/assets/Images/firstclass-air.jpg'
import plane14 from '../../src/assets/Images/plane14.jpg'
import plane5 from '../../src/assets/Images/plane5.jpg'
import televive from '../../src/assets/Images/televive.jpg'




const Planning = () => {
    return (
        <div className='planning__container container'>
            <h3>Start Planning Your Next Trip With Airpeace</h3>
            <p>Are You finally Ready To Take A Much deserved Rest ? Plan And Travel To your Dream Destinations Using Airpeace </p>

            <div className='container__body'>

                <div className="box-1">
                    <span><img src={televive} alt='' className='plannnin__images' />
                        <p>Visit and Explore the ancient city of Tel Aviv, its culture and wonderful cosmopolitan lifestyle. </p>
                        </span>

                    <h2 className="think-fly">Think Fly - Think Airpeace. </h2> 
                 </div>


                <div >

                    <div className="box-2">
                        <img src={crew3} alt='' className='plannnin__images' />
                        <p>Fly with our hospitable crew who ensure you enjoy your flight. Create a flying Experince that your will never forget</p>
                    </div>

                    <div className="box-3">
                        <img src={plane5} alt='' className='plannnin__images' />
                        <p>Seemless Boarding and Punctual Depature and Arrival Experince</p>
                    </div>



                </div>

                <div className='animals'>
                    <span className="box-4">
                        <img src={firstclass} alt='' className='plannnin__images' />
                        <p>Fly with Airpeace Firstclass and elevate your buiness class experince to peace class experince. </p>

                    </span>

                    <span className="box-5">
                        <img src={plane14} alt='' className='plannnin__images aa' />
                        <p>Tour the world and any destination of your choice on our fleet 5th genration aircrafts.</p>
                    </span>
                </div>


            </div>


        </div>
    )
}

export default Planning