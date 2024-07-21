import React, { useEffect, useState } from 'react'
import Product from '../component/Product';

import ClockLoader from "react-spinners/ClockLoader"

const Home = () => {

    const API_URL = "https://fakestoreapi.com/products"

    const[loading, setLoading] = useState(false);
    const[posts, setPosts] = useState([]);
     async function getData(){
        setLoading(true);

        try {
            let res = await fetch(API_URL)
            let data = await res.json();

            setPosts(data);
        } catch (error) {

            console.log("Errrrrrrrror");
            setPosts([]);
            
        }
        setLoading(false);
     }

     useEffect(() => {
        getData();
     }, [])

     console.log(posts)


  return (
    <div>
        {
            loading ? (
                <ClockLoader
                size = {200}
                color = 'black'
                />
            ) : (
                posts.length === 0? (<p>No data Found</p>) : (
                   posts.map((post) => {
                    return <Product key={post.id} post={post}/>
                   })
                )
            )
        }
    </div>
  )
}

export default Home