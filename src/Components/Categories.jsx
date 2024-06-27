import axios from "axios"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"





const Categories = () => {

    const [getCategories, setGetCategories] = useState([])

    useEffect(() => {

        axios.get('https://6666db46a2f8516ff7a54492.mockapi.io/CategoriesRestoran').then((res) => {
            setGetCategories(res.data);
        }).catch((err) => {
            console.log(err);
        }).finally(() => {

        })

    }, [])


    return (
        <>

            <section className="categories_section">

                <div className="container">
                    <h1 className="categoriesHeading text-center pb-5">Categories</h1>

                    <div className="row">
                        {
                            getCategories.map((product, index) => {
                                return (
                                    <>
                                        <div className="col-md-3" key={index}>


                                            <a href="#" className="text-decoration-none">
                                                <div className="card border-0" data-aos="flip-up" data-aos-duration="1000">
                                                    <Link to={`/CategoriesRestoran/${product.id}`} />
                                                    <img src={product.image} className="card-img-top FourCardImg p-5" style={{ height: 250 }} alt="..." />
                                                    <div className="card-body FourCardBody">
                                                        <h5 className="card-title FourCardTitle text-white">{product.title}</h5>
                                                        <p className="card-text text-white">
                                                            {product.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>



                                        </div>
                                    </>
                                )

                            })
                        }
                    </div>
                </div>

            </section>

        </>
    )
}

export default Categories