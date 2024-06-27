import React from 'react'
import ButtonOrder from './ButtonOrder'

const HeroText = () => {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-6">

                    <h1 className='heroHeading text-white'>Fast Food Restaurant</h1>
                    <p className='text-white py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, officia corporis! Repellendus nostrum ab vitae ullam nisi sunt officia veritatis eum, nesciunt ducimus repellat. Nisi nostrum ea cupiditate illum ipsum.</p>
                    <ButtonOrder />

                </div>
            </div>
        </div>
        
    
    </>
  )
}

export default HeroText