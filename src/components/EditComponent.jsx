import React, { Component } from 'react'
import { connect } from 'react-redux'

class EditComponent extends Component {
   
   acaoEdit = (e) => {
      e.preventDefault()
      const newTitle = this.getTitle.value
      const newMessage = this.getMessage.value
      const data = {
         newTitle,
         newMessage
      }
      const { id } =  this.props.post

      this.props.dispatch({ type: 'UPDATE_POST', id, data })
   }

   render() {
      const { title, message } =  this.props.post

      return (
         <div>
            <form onSubmit={this.acaoEdit}>
               <input required type="text" ref={(inputTitle) => this.getTitle = inputTitle}
               defaultValue={title} placeholder="Enter Post Title" /><br /><br />
               <textarea required rows="5" ref={(inputMSG) => this.getMessage = inputMSG}
               defaultValue={message} cols="28" placeholder="Enter Post" /><br /><br />
               <button>Update</button>
            </form>
         </div>
      )
   }
}

export default connect()(EditComponent);
