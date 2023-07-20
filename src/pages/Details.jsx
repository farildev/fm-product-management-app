import React from 'react'
import {useParams,Link} from "react-router-dom";
import {useState, useEffect} from "react";
import "../assets/css/details.css";
function Details() {
    const {id} = useParams();
    const [details,setDetails] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:7000/products/${id}`)
        .then(res => res.json())
        .then(data => setDetails(data))
    },[id])
  return (
    <>
    <div className='container'>
      <div className="col-12">
        <Link className='btn btn-primary' to="/products">Go Back</Link>
      </div>
      <div className="details text-white">
        <div className="details__img col-xxl-6 col-xl-6 col-lg-6 col-md-4 col-sm-12">
          <img src={details?.image} alt={details?.title} />
        </div>
        <div className="col-xxl-6 mt-3 col-xl-6 col-lg-6 col-md-8 col-sm-12">
          <div className="details__category">
            <span className='text-white bg-primary'>{details?.category}</span>
          </div>
          <div className="details__title">
              <h1>{details?.title}</h1>
          </div>
          <div className="details__desc">
            <p>{details?.description}</p>
          </div>
          <div className="details__price">
            <span>${details?.price}</span>
          </div>
          <div className="details__btn">
            <button className='btn btn-primary'>Buy product</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Details