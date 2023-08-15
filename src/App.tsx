import React, {useState} from 'react'

import './App.css';
import { useDispatch } from 'react-redux';
import { USER_TYPE } from './store/UserReducer';
import UserDisplay from './UserDisplay';
import { PostDisplay } from './PostDisplay';

function App() {
   const [userid, setUserid] = useState(0);
   const [postid, setPostid] = useState(0);
   const dispatch = useDispatch();

   const onChangeUserId = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const useridFromInput = e.target.value ? Number(e.target.value) : 0;

      console.log("userid", useridFromInput);
      setUserid(useridFromInput);

      const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
      if (usersResponse.ok) {
         const users = await usersResponse.json();
         console.log("users", users);
         const usr = users.find((userItem: any) => {
            return userItem && userItem.id === useridFromInput
         });
         console.log("usr", usr);

         dispatch({
            type: USER_TYPE,
            payload: {
               id: usr.id,
               username: usr.username,
               email: usr.email,
               city: usr.address.city
            }
         })
      }
   }

   const onChangePostId = async (e: React.ChangeEvent<HTMLInputElement>) => { 
      const postidFromInput = e.target.value ? Number(e.target.value) : 0;

      console.log("postid", postidFromInput);
      setPostid(postidFromInput);

      const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts/'+postidFromInput);
      if (postsResponse.ok) {
         const posts = await postsResponse.json();
         console.log("posts", posts);

         dispatch({
            type: USER_TYPE,
            payload: {
               id: posts.id,
               title: posts.title,
               body: posts.body
            }
         })
      }
   }
   return (
      <React.Fragment>
         <div style={{width: "300px"}}>
            <div className='App'>
               <label>user id</label>
               <input value={userid} onChange={onChangeUserId} />
            </div>
            <UserDisplay />
         </div>
         <br />
         <div style={{ width: "300px" }}>
            <div className='App'>
               <label>post id</label>
               <input value={postid} onChange={onChangePostId} />
            </div>
            <PostDisplay />
         </div>

      </React.Fragment>
   );
};

export default App