import React, { useState } from 'react'
import './Pages.css'
import { RiFlightTakeoffLine } from 'react-icons/ri'
import { MdOutlineManageSearch, MdOutlineArrowRightAlt, MdOutlineCompareArrows } from 'react-icons/md'
import { BsCheck2Circle } from 'react-icons/bs'
import { AiOutlineLogin, AiOutlineSwap, AiOutlinePlus } from 'react-icons/ai'
import { GrFormSubtract } from 'react-icons/gr'
import { DatePicker, Space } from 'antd';


const Booking = () => {

    const { RangePicker } = DatePicker;
    const [passenger, setPassenger] = useState(false)
    const [economy, setEcononmy] = useState(true)
    const [count, SetCount] = useState(1)
    const [childCount, setChildCount] = useState(0)
    const [childInfant, setInfantCount] = useState(0)
    const [tripType, setTripType] = useState(false)


    return (
        <>
            <div className='booking__conatiner'>
                <div className='booking__header'>
                    <ul>
                        <li> <span><RiFlightTakeoffLine /></span> Book a Flight
                        </li>
                        <li><span><MdOutlineManageSearch /></span> Manage Booking</li>
                        <li><span><BsCheck2Circle /></span> Check In</li>
                        <li><span><AiOutlineLogin /></span> Agent Login</li>
                    </ul>
                    <div className='trip__type'>
                        <article onClick={() => setTripType(true)}><span><MdOutlineArrowRightAlt /></span> One Way</article>
                        <article onClick={() => setTripType(false)}><span><MdOutlineCompareArrows /></span> Round Trip</article>
                        <input type='checkbox' placeholder='Redeem Air Miles' />
                        <label>Redeem Miles</label>

                    </div>

                </div>

                <div className='flight__details'>

                    <input type='text' placeholder='Depature' />
                    <input type='text' placeholder='Arrival' />
                    <Space>
                        {!tripType && <RangePicker className='range__picker' />}
                        {tripType && <DatePicker className='range__picker'/>}

                    </Space>

                    <article className=''>
                        <span className="passenger__info" onClick={() => setPassenger(prevState => !prevState)}> {count + childCount + childInfant}/Passengers,{economy ? "Economy" : "Buiness"}</span>
                    </article>

                    <button className='btn flight-btn' >Take Flight</button>

                    <span className='swap'><AiOutlineSwap /></span>

                    <div className={passenger ? 'passenger__count' : "void"}>
                        <div >
                            <h3 className='passenger-h3-p'>Passengers</h3>
                            <div className='passengers' >
                                <p className='passenger-h3-p'>Adults (12+ years)</p>
                                <span className='count__section'>
                                    <GrFormSubtract onClick={() => SetCount(count - 1)} />
                                    <h3 className='passenger-h3-p'>{count}</h3>
                                    <AiOutlinePlus onClick={() => SetCount(count + 1)} />
                                </span>
                            </div>

                            <div className='passengers'>
                                <p className='passenger-h3-p'>Child (2-11 years)</p>
                                <span className='count__section'>
                                    <GrFormSubtract onClick={() => setChildCount(childCount - 1)} />
                                    <h3 className='passenger-h3-p'>{childCount}</h3>
                                    <AiOutlinePlus onClick={() => setChildCount(childCount + 1)} />
                                </span>
                            </div>

                            <div className='passengers'>
                                <p className='passenger-h3-p'>Infant (Under 2 years)</p>
                                <span className='count__section'>
                                    <GrFormSubtract onClick={() => setInfantCount(childInfant - 1)} />
                                    <h3 className='passenger-h3-p'>{childInfant}</h3>
                                    <AiOutlinePlus onClick={() => setInfantCount(childInfant + 1)} />
                                </span>
                            </div>
                        </div>

                        <div>
                            <h3 className='passenger-h3-p'>Class</h3>

                            <div className='economy__buiness'>
                                <p className='passenger-h3-p'>Economy</p>
                                <input type='checkbox' onChange={() => setEcononmy(setEco => !setEco)} />
                            </div>

                            <div className='economy__buiness'>
                                <p className='passenger-h3-p'>Bussiness/First Class</p>
                                <input type='checkbox' onChange={() => setEcononmy(setEco => !setEco)} />
                            </div>


                        </div>
                    </div>

                </div>


            </div>


        </>
    )
}

export default Booking

