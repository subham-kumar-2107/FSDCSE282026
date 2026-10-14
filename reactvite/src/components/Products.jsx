import React, { useEffect, useState } from 'react';

function Products() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const result = await response.json();
        console.log(result.products);
        setData(result.products); 
      } catch (e) {
        console.log(e);
      } finally {
        console.log("All done");
      }
    }
    getData();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Products;
