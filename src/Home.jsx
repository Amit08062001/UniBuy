import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Card from './Card'
import { userContext } from './Context'
import { Link, useLocation } from 'react-router-dom'
import axios from './utils/Axios'
const Home = () => {
  const [product] = useContext(userContext)
  const {search,pathname} =useLocation()
  const category = decodeURIComponent(search.split('=')[1])
 const [filtered,setFiltered] = useState(null)
   
 
  console.log(search,pathname);
  
  const getCategory = async() =>{
     try {
     const  {data} = await axios.get(`/products/category/${category}`)
     setFiltered(data)
     
     } catch (error) {
       console.log(error);
       
     }
  }
  useEffect(() => {
    if (!category || category === 'undefined') {
      setFiltered(product)
    } else {
      setFiltered(product.filter((p)=> p.category== category))
    }
  }, [product, category])
  return ( 
    
     <div className=' w-full h-screen  flex '>
        <Navbar/>
        <div className=' w-[85%] flex flex-wrap gap-5 ml-[18%] m-8 overflow-auto'>
          {(pathname != '/' || search.length >0) && (
             <Link className='text-red-300 absolute m-[-1%]' to={'/'}>Home</Link>
          )}
        
        {  filtered && filtered.map((p,i) => (
          <Link to={`/details/${p.id}`} key={i} className='m-4 p-2 h-[250px] w-[250px] border shadow rounded flex flex-col  '>
            <div
              style={{
                backgroundImage: `url(${p.image})`, 
              }}
              className='w-full h-[70%] bg-contain bg-no-repeat bg-center hover:scale-105'
            ></div>
            <h1 className='my-1 p-1  bottom-0 left-0 text-center'>{p.title}</h1>
          </Link>
        ))
      }
        </div> 
    </div>
  )
}

export default Home