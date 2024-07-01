import React from 'react'

const Footer = () => {
    return (
        <>

            <section className='footer mt-5'>
                <div className="container">

                    <div className="row py-5">

                        <div className="col-md-3">
                            <h2 className='footer-heading text-white'>Contact Us</h2>
                            <div className='text-white d-flex pt-4'>
                                <i class="ri-map-pin-fill me-2"></i>
                                <p>Location</p>
                            </div>
                            <div className='text-white d-flex'>
                                <i class="ri-phone-fill me-2"></i>
                                <p>+123 456 789</p>
                            </div>
                            <div className='text-white d-flex'>
                                <i class="ri-mail-fill me-2"></i>
                                <p>abc@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='d-flex align-items-center flex-column'>
                                <h2 className='footer-heading text-white'>Feane</h2>
                                <p className='pt-4 text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eum ullam quod enim dignissimos nobis, repellendus minima minus, et rem tenetur! Cupiditate nemo earum sit alias, ipsum magnam aliquam. Veniam.</p>
                                <span className='pt-3'>
                                    <a className='text-decoration-none social-link me-2' href="#"><i class="ri-facebook-fill footer-social"></i></a>
                                    <a className='text-decoration-none social-link me-2' href="#"><i class="ri-instagram-fill footer-social"></i></a>
                                    <a className='text-decoration-none social-link me-2' href="#"><i class="ri-twitter-fill footer-social"></i></a>
                                    <a className='text-decoration-none social-link me-2' href="#"><i class="ri-linkedin-fill footer-social"></i></a>
                                </span>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <h2 className='footer-heading text-white'>Opening Hours</h2>
                            <div className='d-flex align-items-center flex-column pt-4'>
                                <p className='text-white'>EveryDay</p>
                                <p className='text-white'>10:00 AM - 10:00 PM</p>
                            </div>
                        </div>


                    </div>
                </div>


            </section >

        </>
    )
}

export default Footer