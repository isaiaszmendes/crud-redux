import React, { Component } from 'react'
import { connect } from 'react-redux'

// components
import Post from './Post'
import EditComponent from './EditComponent' 


class AllPost extends Component {
   render() {
      return (
         <div>
            <h1>All Posts</h1>
            {this.props.posts.map(post => 
               (
                  <div key={post.id}>
                     {post.editando ?  <EditComponent key={post.id} post={post}/> :
                     <Post key={post.id} post={post} />}
                  </div>
               )
            )}
         </div>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      posts: state
   }
}

export default connect(mapStateToProps)(AllPost)