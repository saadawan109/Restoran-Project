import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditProduct = () => {

    const [title, setTitle] = useState("")
    const [img, setImg] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [desc, setDesc] = useState("")
    const navigate = useNavigate()
    const params = useParams()
    
    

    const handleSubmmit = ()=>{


        axios.put(`https://6666db46a2f8516ff7a54492.mockapi.io/Categories/${params.id}`, {
     
		"title": title ,
		"price":price,
		"image": img,
		"description":desc ,
		"category": category

        }).then(()=>{
            navigate("/dashboard")
    }).catch(()=>{

    }).finally(()=>{

    })
}


    useEffect(()=>{
        axios.get(`https://6666db46a2f8516ff7a54492.mockapi.io/Categories/${params.id}`).then((res)=>{

            setTitle(res.data.title);
            setPrice(res.data.price);
            setImg(res.data.image);
            setDesc(res.data.description);
            setCategory(res.data.category);

        })
    },[])




    return (
        <>

            <section className='addProduct'>
                <h1 className="categoriesHeading text-center py-5">Edit Product</h1>

                <div className="container">
                    <div className="row">
                        <>
                            <div className="col-md-6">

                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Enter Product Title"
                                        onChange={(e)=>{setTitle(e.target.value)}}
                                        value={title}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">
                                        Image
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Enter Product Img URL"
                                        onChange={(e)=>{setImg(e.target.value)}}
                                        value={img}
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">

                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">
                                        Price
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Enter Product Price"
                                        onChange={(e)=>{setPrice(e.target.value)}}
                                        value={price}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">
                                        Select Category
                                    </label>
                                    <select name="" id="" className='form-control' onChange={(e)=>{setCategory(e.target.value)}}
                                        value={category}>
                                        
                                        <option value="">Choose Category</option>
                                        <option value="1">Burger</option>
                                        <option value="2">Pizza</option>
                                        <option value="3">Pasta</option>
                                        <option value="4">Fries</option>
                                    </select>
                                </div>
                            </div>





                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                    Description
                                </label>
                                <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    placeholder="Enter Product Description"
                                    rows={3}
                                    defaultValue={""}
                                    onChange={(e)=>{setDesc(e.target.value)}}
                                    value={desc}
                                />
                            </div>
                            
                        </>
                    </div>
                    <button onClick={handleSubmmit} className='btn btn-warning text-white'>Update</button>


                </div>

            </section>


        </>
    )
}

export default EditProduct;