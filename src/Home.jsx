import { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import { userContext } from './Context';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [product] = useContext(userContext); // Get products from context
  const { search, pathname } = useLocation();
  const category = decodeURIComponent(search.split('=')[1]);
  const [filtered, setFiltered] = useState([]); // Initialize as an empty array
  
  console.log(search, pathname);

  useEffect(() => {
    if (!category || category === 'undefined') {
      setFiltered(product || []); // Make sure product is not null or undefined
    } else {
      // Filter products by category
      setFiltered(product.filter((p) => p.category === category));
    }
  }, [product, category]); // Run when product or category changes

  return (
    <div className="w-full h-screen flex">
      <Navbar />
      <div className="w-[85%] flex flex-wrap gap-5 ml-[18%] m-8 overflow-auto">
        {pathname !== '/' || search.length > 0 ? (
          <Link className="text-red-300 absolute m-[-1%]" to={"/"}>
            Home
          </Link>
        ) : null}

        {filtered && filtered.length > 0 ? (
          filtered.map((p, i) => (
            <Link to={`/details/${p.id}`} key={i} className="m-4 p-2 h-[250px] w-[250px] border shadow rounded flex flex-col">
              <div
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
                className="w-full h-[70%] bg-contain bg-no-repeat bg-center hover:scale-105"
              ></div>
              <h1 className="my-1 p-1 bottom-0 left-0 text-center">{p.title}</h1>
            </Link>
          ))
        ) : (
          <p>No products found.</p> // Show a message when no products match the filter
        )}
      </div>
    </div>
  );
};

export default Home;
