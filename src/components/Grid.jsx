import React from 'react';
import GridHead from "./Grid.Head";
import GridBody from "./Grid.Body";
import {useDispatch, useSelector} from "react-redux";
import {getAction_sortPostsByBODY, getAction_sortPostsByID, getAction_sortPostsByTITLE} from "../store/postReducer";

const Grid = ({isPostLoading, errPost}) => {

  const dispatch = useDispatch()

  const actPosts = useSelector(state=>state.post.sortedAndFilterPosts)

  function sortID(){
    dispatch(getAction_sortPostsByID())
  }
  function sortTitle(){
    dispatch(getAction_sortPostsByTITLE())
  }
  function sortBody(){
    dispatch(getAction_sortPostsByBODY())
  }

  return (
    <div>
      <GridHead
        btn1={sortID}
        btn2={sortTitle}
        btn3={sortBody}
      />
      <GridBody
        posts={actPosts}
        isPostLoading={isPostLoading}
        errPost={errPost}
      />
    </div>
  );
};

export default Grid;