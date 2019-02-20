const postReducer = (state = [], action) => {
   switch(action.type){
      case 'ADD_POST':
         return state.concat([action.data]) 
      case 'DELETE_POST':
         return state.filter( post => post.id !== action.id) // return all que for diff de action.id
      case 'EDIT_POST':
         return state.map( post => post.id === action.id ? {...post, editando: !post.editando } : post)
      case 'UPDATE_POST':
         return state.map( post => {
            if (post.id === action.id) { // selocalizar o elemento pelo id faço as atualizações e passao editando para

               const { newTitle, newMessage } = action.data
               return {
                  ...post,
                  title: newTitle,
                  message: newMessage,
                  editando: !post.editando
               }
            }else {
               return post
            }
         })
      default:
         return state
   }
}

export default postReducer

// action is a object 

/*

{
   type: 'EVENT_NAME' // type is required  
}


{ 
   type: 'ADD_PERSON', 
   name: 'Redux',
   age: '22'
}

*/

// Reducer é apenas uma função que recebe dois argumentos (state, action) e return um new state

