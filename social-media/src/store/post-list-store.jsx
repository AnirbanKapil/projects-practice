import { createContext, useReducer } from "react"


export const PostList = createContext({
   postList : [],
   addPost : () => {},
   deletePost : () => {
      
   }
});

const postListReducer = (currPostList,action) => {
   return currPostList
}

const PostListProvider = ({children}) => {
   const [postList,dispatchPostList] = useReducer(postListReducer,DEFAULT_POST_LIST)
   const addPost = () => {}
   const deletePost = (postId) => {
      dispatchPostList({
         type : "DELETE_POST",
         payload : {
            postId,
         }
      })
   };

   

   return (<PostList.Provider value={{
      postList,
      addPost,
      deletePost
   }}>
    {children}
   </PostList.Provider>
   )
}

const DEFAULT_POST_LIST = [{
    id : "1",
    title : "Hiking",
    body : "Excited about my upcoming travels & hikes",
    reactions : 4,
    userId : "user001",
    tags : ["hike","travel"]
},
 {
   id : "2",
   title : "A new Car",
   body : "Bought a new car for myself (Range rover)",
   reactions : 6,
   userId : "user005",
   tags : ["car","rover"]
 }
]

export default PostListProvider