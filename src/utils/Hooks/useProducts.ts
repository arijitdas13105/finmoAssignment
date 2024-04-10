import { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
  // include other fields as needed
}

const useProducts = (productId?: number) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Determine the URL based on whether a productId is provided
        const url = productId 
          ? `https://fakestoreapi.com/products/${productId}`
          : 'https://fakestoreapi.com/products';

        const response = await fetch(url);
        const data = await response.json();

        if (productId) {
          setProduct(data);
        } else {
          setProducts(data);
        }
      } catch (err) {
        setError("An error occurred while fetching data");
        console.error("Error fetching data: ", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  return { products, product, isLoading, error };
};

export default useProducts;


//-----------------------------------









// // useProducts.ts
// import { useState, useEffect } from "react";

// interface Product {
//   id: number;
//   title: string;
//   image: string;
//   price: number;
//   category: string;
// }

// const useProducts = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then(res => res.json())
//       .then((data: Product[]) => {
//         setProducts(data);
//         setIsLoading(false);
//       })
//       .catch(error => {
//         console.error("Error fetching data: ", error);
//         setIsLoading(false);
//       });
//   }, []);

//   return { products, isLoading };
// };

// export default useProducts;
