import React , {useState , useEffect} from 'react';
import Card from '../components/Card';
function Products() {
  const [products , setProducts] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:7000/products`)
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])
  return (
    <div className='products container'>
      {
        products.map((index,key)=>(
          <Card key={key} detail = {index} />
        ))
      }
   </div>
  )
}

export default Products