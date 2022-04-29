

const defaultState={
  posts:[],
  sortedAndFilterPosts:[]
}

const SET_POSTS = "SET_POSTS"

const SORT_ID_POSTS = "SORT_ID_POSTS"
const SORT_TITLE_POSTS = "SORT_TITLE_POSTS"
const SORT_BODY_POSTS = "SORT_BODY_POSTS"

const FILTER_POSTS = "FILTER_POSTS"

export const postReducer = (state=defaultState,action)=>{

  let pl = action.payload

  switch (action.type){
    case SET_POSTS:
      return {...state, posts: [...pl], sortedAndFilterPosts: [...pl]}

    case SORT_ID_POSTS:
      return {...state, sortedAndFilterPosts: [...state.sortedAndFilterPosts.sort((a,b)=>a.id-b.id)]}
    case SORT_TITLE_POSTS:
      return {...state, sortedAndFilterPosts: [...state.sortedAndFilterPosts.sort((a,b)=>a.title>b.title?1:-1)]}
    case SORT_BODY_POSTS:
      return {...state, sortedAndFilterPosts: [...state.sortedAndFilterPosts.sort((a,b)=>a.body>b.body?1:-1)]}

    case FILTER_POSTS:
      return {...state,
        sortedAndFilterPosts: [...state.posts.filter(a=>[a.id, a.title, a.body].some(el=>el.toString().includes(pl)))]}

    default:
      return state
  }
}

export const getAction_setPosts = (posts)=>{return {type:SET_POSTS, payload:posts}}

export const getAction_sortPostsByID = ()=>{return {type:SORT_ID_POSTS}}
export const getAction_sortPostsByBODY = ()=>{return {type:SORT_BODY_POSTS}}
export const getAction_sortPostsByTITLE = ()=>{return {type:SORT_TITLE_POSTS}}

export const getAction_filterPosts = (filter)=>{return {type:FILTER_POSTS, payload:filter}}

