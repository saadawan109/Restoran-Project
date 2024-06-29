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
                            getCategories.map((category, index) => {
                                return (
                                    <>
                                        <div className="col-md-3" key={index}>


                                            <Link to={`/all-products/${category.id}`} className="text-decoration-none">
                                                <div className="card border-0" data-aos="fade-up" data-aos-duration="1000">
                                                    <Link to={`/CategoriesRestoran/${category.id}`} />
                                                    <img src={category.image} className="card-img-top FourCardImg p-5" style={{ height: 250 }} alt="..." />
                                                    <div className="card-body FourCardBody">
                                                        <h5 className="card-title FourCardTitle text-white">{category.title}</h5>
                                                        <p className="card-text text-white">
                                                            {category.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>



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