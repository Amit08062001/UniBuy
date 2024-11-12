import React , {useContext}from 'react'
import { userContext } from './Context';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [product] = useContext(userContext);
  let category_filter = product && product.reduce((acc,cv)=>[...acc,cv.category],[])
   category_filter = [...new Set(category_filter)]
  
   function capitalizeFirstLetterOfWords(str) {
    return str
        .split(' ') 
        .map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() 
        )
        .join(' '); 
}
 const color = () => {
   return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},1)`
 }
 


  return (
    
        <nav className='w-[15%] h-screen bg-zinc-100 flex flex-col fixed'>
           <a className='bg-blue-200 m-3 p-1 text-center w-[80%] text-white-200 ' href='/create'> Add New Product</a>
           <hr className='border-red-500'></hr>
           <h1 className='m-1 text-xl'>Category</h1>
             {category_filter.map((c,i)=>(
              <Link key={i} to={`/?category=${c}`} className='mx-4 my-2'> 
              <span style={{backgroundColor:color()}} className=' mx-2 inline-block w-[10px] h-[10px] rounded-full bg-red-400'></span>{capitalizeFirstLetterOfWords(c)}
         </Link>
             ))}
                
            
        </nav>
        
  
  )
}

export default Navbar