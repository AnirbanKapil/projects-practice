import { createContext, useReducer } from "react"


export const PostList = createContext({
   postList : [],
   addPost : () => {},
   deletePost : () => {
      
   }
});

const postListReducer = (currPostList,action) => {
  
  let newPostList = currPostList; 

  if(action.type === "DELETE_POST"){
       newPostList = currPostList.filter((post)=> post.id !== action.payload.postId) 
  } else if(action.type === "ADD_POST"){
       newPostList = [action.payload,...currPostList] 
  }
  
   return newPostList
}

const PostListProvider = ({children}) => {
   
   const [postList,dispatchPostList] = useReducer(postListReducer,DEFAULT_POST_LIST)
   
   
   
   const addPost = (userId,postTitle,postBody,reaction,tags) => {
         dispatchPostList({
            type : "ADD_POST",
            payload : {
            id : Date.now(),
            title : postTitle,
            body : postBody,
            reactions : reaction,
            userId : userId,
            tags : tags
            }
         })   
   }
   
   
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