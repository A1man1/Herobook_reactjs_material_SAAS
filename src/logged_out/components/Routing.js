import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import PropsRoute from "../../shared/components/PropsRoute";
import Home from "./home/Home";
import Blog from "./blog/Blog";
import BlogPost from "./blog/BlogPost";
import MultiBlog from "./MultiBlog/MultiBlog";
import PersistentDrawerLeft from "./Chat/Chat";

function Routing(props){

  const { blogPosts, selectBlog, selectHome,selectChatter}=props ;
  return (
    <Switch>
      {blogPosts.map(post => (
         <PropsRoute
           /* We cannot use the url here as it contains the get params */
           path={post.url}
           component={BlogPost}
           title={post.title}
           date={post.date}
           key={post.title}
           src={post.imageSrc}
           content={post.content}
           otherArticles={blogPosts.filter(blogPost => blogPost.id !== post.id)}
         />
       ))}
         <PropsRoute exact path="/"  component={MultiBlog} selectBlog={selectBlog} blogPosts={blogPosts} />
         )
      )

    </Switch>
  );
  }

Routing.propTypes = {
  blogposts: PropTypes.arrayOf(PropTypes.object),
  selectHome: PropTypes.func.isRequired,
  selectBlog: PropTypes.func.isRequired
};

export default memo(Routing);
