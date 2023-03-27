import "../Pages/Pages.css"
import hotel from '../assets/Images/hotel.png'
import alliance from '../assets/Images/ALLIANCE.jpg'

const PeaceadvantageBanner = () => {
  return (
    <div className="peace__advnatge-banner container">
      <h2>Hot Offers From Airpeace </h2>


      <div className="peace__banner">
        <img src={hotel} alt='' className='' />
        <p>The features of the alliance program will include a “20% discount” whenever an Air Peace traveler reserves a room with Grand Pela Hotels.<br /><br />
          Whether you’re traveling for business or leisure, you can be rest assured that you will always get great value for money. Our hotel is designed to exceed expectations. <br /><br />We offer outstanding facilities, from world-class spas and fitness center to family-friendly activities and All Inclusive packages. Select the best room that matches your need and be prepared for an unmatched experience…
        </p>

      </div>

      <div className="peace__banner">
        <img src={hotel} alt='' className='' />
        <p>The features of the alliance program will include a “20% discount” whenever an Air Peace traveler reserves a room with Grand Pela Hotels.<br /><br />

          Whether you’re traveling for business or leisure, you can be rest assured that you will always get great value for money. Our hotel is designed to exceed expectations.<br /><br /> We offer outstanding facilities, from world-class spas and fitness center to family-friendly activities and All Inclusive packages. Select the best room that matches your need and be prepared for an unmatched experience…
        </p>

      </div>




    </div>
  )
}

export default PeaceadvantageBanner