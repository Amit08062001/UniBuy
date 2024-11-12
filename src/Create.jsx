import React, { useContext, useState } from 'react'
import { userContext } from './Context'
import { Link, useNavigate } from 'react-router-dom'
import{nanoid} from 'nanoid'

const Create = () => {
  const navigate = useNavigate()
  const [product,setProduct]=useContext(userContext)
    const [image,setImage]=useState("")
    const [title,setTitle]=useState("")
    const [category,setCategory]=useState("")
    const [price,setPrice]=useState("")
    const [description,setDescription]=useState("")

    const submitHandler = (e) =>{
      e.preventDefault()
      if(title.trim().length<5||image.trim().length<5||category.trim().length<5||price.trim().length<1||description.trim().length<5){
        alert('each should be fill')
        return;
      }
      const products={
        id:nanoid(),title,image,category,price,description
      }
      setProduct([...product, products])
      localStorage.setItem('product',JSON.stringify([...product, products]))
      navigate('/');
      
    }
  return (
    <>
      <Link className='text-red-300 absolute m-[1%]' to={'/'}>Home</Link>
    
    <form onSubmit={submitHandler} className=' w-screen h-screen flex flex-col items-center gap-4'>
        <h2 className=' mb-2 w-1/2 text-3xl mt-[100px]'>Add New Product</h2>
        <input 
        placeholder='Image Link'
        type='url'
        className='bg-zinc-100 w-1/2 p-2 rounded '
        onChange={(e)=> setImage(e.target.value)  }
        value={image}
        />
        <input 
        placeholder='Title'
        type='text'
        className='bg-zinc-100 w-1/2 p-2 rounded '
        onChange={(e)=> setTitle(e.target.value)  }
        value={title}
        />
        <div className='w-1/2 flex gap-2 '>
        <input 
            placeholder='Category'
            type='text'
            className='bg-zinc-100  px-4  rounded w-[50%] '
            value={category}
            onChange={(e)=> setCategory(e.target.value)  }
        />
        <input 
        placeholder='price'
        type='text'
        className='bg-zinc-100  p-2 rounded  w-[50%]'
        value={price}
        onChange={(e)=> setPrice(e.target.value)  }
        />
        </div>
        <textarea 
         className='bg-zinc-100 w-1/2 p-2 rounded ' rows='10'
         placeholder='Enter Product Description'
         value={description}
         onChange={(e)=> setDescription(e.target.value)  }
         > </textarea>
        <div className='w-1/2'>
           <button className=' border border-blue-400 p-1 text-center text-blue-400 '>Add Product</button> 
        </div> 
        
    </form>
    </>  
  )
}

export default Create