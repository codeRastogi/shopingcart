import React, { useEffect, useState } from 'react'
import Product from '../component/Product';
import ClockLoader from "react-spinners/ClockLoader"

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products"

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function getData() {
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

    return (
        <div>
            {loading ? (
                <div className='h-[90vh] flex flex-col items-center justify-center'>
                    <ClockLoader size={200} />
                </div>
            ) : (
                posts.length === 0 ? (
                    <div className='flex justify-center items-center h-[90vh]'>
                        <p>No data Found</p>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto gap-5 min-h-[80vh]'>
                        {posts.map((post) => (
                            <Product key={post.id} post={post} />
                        ))}
                    </div>
                )
            )}
        </div>
    )
}

export default Home
