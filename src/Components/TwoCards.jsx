import React from 'react'
import o1Img from '../assets/Images/o1.jpg'
import o2Img from '../assets/Images/o2.jpg'
import ButtonOrder from './ButtonOrder'



const TwoCards = () => {



    return (
        <>



            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">

                            <div className="Twocards d-flex flex-direction-row rounded-1" data-aos="fade-right" data-aos-duration="2000">

                                <div className="imgDiv">
                                    <img className='divImg rounded-circle p-4 mt-3' src={o1Img} alt="" style={{height:150}} />
                                </div>
                                <div className="textDiv ps-4 p-4">
                                    <h4 className='text-white text-div'>Tasty Thursday</h4>
                                    <h2 className='text-white text-div py-2'>20% Off</h2>
                                    <ButtonOrder />
                                </div>

                            </div>


                        </div>

                        <div className="col-md-6">

                            <div className="Twocards d-flex flex-direction-row rounded-1" data-aos="fade-left" data-aos-duration="2000">

                                <div className="imgDiv">
                                    <img className='divImg rounded-circle  p-4 mt-3' src={o2Img} alt="" style={{height:150}} />
                                </div>
                                <div className="textDiv ps-4 p-4">
                                    <h4 className='text-white text-div'>Tasty Thursday</h4>
                                    <h2 className='text-white text-div py-2'>20% Off</h2>
                                    <ButtonOrder />
                                </div>

                            </div>


                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default TwoCards