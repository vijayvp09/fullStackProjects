import Post from "../Post";
import {useEffect, useState} from 'react';

const [posts, setPosts] = useState([]);

export default function IndexPage() {
    useEffect(() => {
      fetch('http://localhost:4000/post').then((response)=> {
        response.json().then((posts) =>{ 
          console.log(posts)
          setPosts(posts)
        });
      });
    }, []);
    return(
    <>
        {posts.length > 0 && posts.map(post=> (
          <Post {...post} />
        ))}
    </>
    )
}