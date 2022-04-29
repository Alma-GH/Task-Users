import React from 'react';
import ErrorMessage from "./UI/Notifications/ErrorMessage";
import gridCls from "./../style/Grid.module.css"
import Row from "./Row";
import {completePostsWithKeys} from "../tools/utils";
import Loader from "./UI/Notifications/Loader";

const GridBody = ({posts, isPostLoading, errPost}) => {


  let completePosts = completePostsWithKeys(10, posts)

  return (
    <div className={gridCls.gridBody}>
      {isPostLoading
        ?<Loader prtClass={gridCls.gridLoader}/>
        : completePosts.map(post=>(
          <Row key={post.id}>
            <div className={gridCls.id}>{post.title || post.body ? post?.id : ""}</div>
            <div className={gridCls.title}>{post?.title}</div>
            <div className={gridCls.body}>{post?.body}</div>
          </Row>
        ))}
      {errPost && <ErrorMessage/>}
    </div>
  );
};

export default GridBody;