import './style/App.css';
import {useEffect, useState} from "react";
import JSONphAPI from "./tools/JSONphAPI";
import {useFetching} from "./hooks/useFetching";
import InputSearch from "./components/UI/InputSearch";
import Pagination from "./components/UI/Pagination";
import {getTotalPages} from "./tools/utils";
import {useDispatch, useSelector} from "react-redux";
import {getAction_setTotalPage} from "./store/pageReducer";
import {useNavigate} from "react-router-dom";
import {getAction_filterPosts, getAction_setPosts} from "./store/postReducer";
import Grid from "./components/Grid";

function App() {

  const dispatch = useDispatch()

  const nav = useNavigate()

  const totalPages = useSelector(state=>state.page.all)
  const page = useSelector(state=>state.page.current)
  const limit = 10


  const [search, setSearch] = useState("")



  const [fetchPosts, isPostLoading, errPost] = useFetching(async (page,limit)=>{
    const res = await JSONphAPI.getPosts(page, limit)
    const posts = await res.json()


    let totalPosts = res.headers.get("x-total-count")
    dispatch(getAction_setTotalPage(getTotalPages(totalPosts, limit)))
    dispatch(getAction_setPosts(posts))
  })

  useEffect(()=>{
    fetchPosts(page, limit)
    nav("/page:" + page)
  }, [page])

  function searchBtn(){
    dispatch(getAction_filterPosts(search))
  }



  return (
    <div className="App">

      <div className="block">
        <InputSearch
          prtClass={"search"}
          inputAtt={{type:"text", placeholder: "Поиск"}}
          value={search}
          setVal={e=>setSearch(e.target.value)}
          cb={searchBtn}
        />
      </div>

      <div className="block">
        <Grid isPostLoading={isPostLoading} errPost={errPost}/>
        <Pagination prtClass="pagination" view={5} countPages={totalPages} current={page}/>
      </div>

    </div>
  );
}

export default App;
