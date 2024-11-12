import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from './Context'
import axios from './utils/Axios'
import {useEffect,useState  } from "react";
import {useParams} from 'react-router-dom' 

const Details = () => {
  const navigate = useNavigate()
  const [products, setProducts]=useState(null)
 const  [product,setProduct] = useContext(userContext)
  const {id} =useParams()
  
  useEffect(() => {
    if(!products){
      setProducts(product.filter((p)=> p.id==id)[0])
    }
  
     } , [id,product])
    
     const deleteProduct = (id)=>{
        const copyProduct = product.filter((p)=> p.id !== id)
        setProduct(copyProduct);
        localStorage.setItem('product',JSON.stringify(copyProduct))
        navigate('/');
        
     }

  return products ? (
    <>
    <div className=' w-[70%] h-screen m-auto'>
      <div className='flex m-10 p-[10%] box-content items-center gap-10'>
      <img  className=' h-[40%] w-[40%]  ' src={products.image}></img>
      <div>
      <h1 className='text-4xl'>{products.title}</h1>
      <p className='text-xl text-red-200 my-2'>{products.category}</p>
      <p className='text-xl text-blue-200 my-2'>{`${products.price}$`}</p>
      <p className='text-xl'>{products.description}</p>
      <Link className = 'inline-block py-1 px-3 my-2 rounded-md border border-green-400 text-green-400 hover:bg-green-400 hover:text-zinc-50 '>Edit</Link>
      <Link onClick={()=> deleteProduct(products.id)} className = 'inline-block py-1 rounded-md px-3 m-4 border border-red-400 text-red-400 hover:bg-red-400 hover:text-zinc-50' >Delete</Link>
      <br/>
      <Link to={'/'} className=' py-1 rounded-md px-3  my-4 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-zinc-50'>Go Back</Link>
      </div>
      
     </div>    
    </div> 
    </>
  ): <h1>Loading</h1>
}

export default Details