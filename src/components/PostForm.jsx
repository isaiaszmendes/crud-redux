import React, { Component } from 'react'
import { connect } from  'react-redux'


class PostForm extends Component {

   acaoSubmit = (e) => {
      e.preventDefault() // impede o reload da pag
      const title  = this.getTitle.value
      const message = this.getMessage.value
      
      const data = {
         id: new Date(),
         title,
         message
      }

      this.props.dispatch({type: 'ADD_POST', data}) 

      // Limpa os inputs
      this.getTitle.value = ''
      this.getMessage.value = ''

   }

   render(){
      return (
         <div>
            <h1>Create Post</h1>
            <form onSubmit={this.acaoSubmit}>
               <input required type="text" ref={(inputTitle) => this.getTitle = inputTitle} placeholder="Title" /><br/>
               <textarea required ref={(inputMessage) => this.getMessage = inputMessage} cols="28" placeholder="Mensagem post " rows="6"></textarea><br/>
               <button>Post</button>
            </form>
         </div>
      )
   }
}


export default connect()(PostForm)

// conect() retorna uma função que recebe o component atual como argumento 
// o connect() traz uma função dispatch() que é recebida por prop  
// o connect() serve para fazer o elo de reducer à store