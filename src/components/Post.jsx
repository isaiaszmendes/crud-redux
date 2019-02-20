import React, { Component } from 'react'
import { connect } from 'react-redux'

class Post extends Component {

   render() {

      const { id ,title, message } = this.props.post
      return (
         <div>
            <h3>{title}</h3>
            <p>{message}</p>
            <button 
               onClick={() => this.props.dispatch({type: 'EDIT_POST', id})}>
               Editar</button>
            <button
               onClick={() => this.props.dispatch({type: 'DELETE_POST', id})}>
               Excluir</button>
         </div>
      )
   }
}
export default connect()(Post)


