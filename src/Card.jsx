import  { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from './Context';

const Card = () => {
  const [product] = useContext(userContext);

  return (
    <>
      {  product.map((p,i) => (
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
    </>
  );
};

export default Card;
