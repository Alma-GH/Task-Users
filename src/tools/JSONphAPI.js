

class JSONphAPI {

  async getPosts(page=1, limit=10){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`)
    return response
  }

}


export default new JSONphAPI()
