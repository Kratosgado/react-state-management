import React, {useRef} from 'react'
import { AppState } from './store/AppState'
import { useSelector } from 'react-redux'


export const PostDisplay = React.memo(() => {
   const renderCount = useRef(0);
   console.log("renders PostDisplay", renderCount.current++);
   const post = useSelector((state: AppState) => state.post);

   if (!post) return null;
   return (
      <React.Fragment>
         <div>
            <label>Post Title: </label>
            &nbsp;{post.title}
         </div>
         <div>
            <label>Post Body: </label>
            &nbsp;{post.body}
         </div>
      </React.Fragment>
   )
})
