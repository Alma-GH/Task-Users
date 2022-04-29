

export const getTotalPages = (totalCount, limit) => {
  return Math.ceil(totalCount/limit)
}


export const completePostsWithKeys = (num, posts) =>{
  let arr = [...posts]
  let emptyN = num - arr.length
  if(emptyN) while (emptyN--) arr.push({id:Date.now()+emptyN})
  return arr
}