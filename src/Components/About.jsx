import React from 'react'
import aboutImg from '../assets/Images/about-img.png'


const About = () => {
    return (
        <>

            <section className='about'>

                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <img src={aboutImg} className='py-5' style={{ height: 660 }} alt="" />
                        </div>
                        <div className="col-md-6">
                            <div className='d-flex justify-content-center flex-column about-div'>

                                <div>
                                    <h2 className='about-heading text-white '>We Are Feane</h2>
                                </div>
                                <div>
                                    <p className='text-white py-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All</p>
                                </div>
                                <div className="">

                                    <button className="btn btn-warning py-2 px-5 rounded-pill text-white text-decoration-none">That's About Us...</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </section>

        </>
    )
}

export default About