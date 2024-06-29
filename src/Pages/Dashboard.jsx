import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {

    const [products, setProducts] = useState([])


    useEffect(() => {
        axios.get('https://6666db46a2f8516ff7a54492.mockapi.io/Categories').then((res) => {
            setProducts(res.data);
        }).catch((err) => {
            console.log(err)
        }).finally(() => {

        })
    })

    const handleDelete = (id)=>{
        axios.delete(`https://6666db46a2f8516ff7a54492.mockapi.io/Categories/${id}`)
        .then(()=>{

        })
    }


    return (
        <>

            <section className='dashboard'>
                <h1 className="categoriesHeading text-center py-5">Dashboard</h1>

                <div className="container">
                    <table className="table table-warning text-center">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Category</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index) => {
                                    return (
                                        <>

                                            <tr key={index}>
                                                <td>{product.id}</td>
                                                <td><img src={product.image} style={{height:60}} alt="" /></td>
                                                <td>{product.title}</td>
                                                <td>{product.price}</td>
                                                <td>{product.category}</td>
                                                <td>
                                                    <Link to={`/edit/${product.id}`} className='btn btn-info mx-1'>Edit</Link>
                                                    <button onClick={()=> {handleDelete(product.id)}} className='btn btn-danger mx-1'>Delete</button>
                                                </td>
                                            </tr>

                                        </>

                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

                


            </section>

        </>
    )
}

export default Dashboard