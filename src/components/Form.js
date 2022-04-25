import axios from 'axios'
import React from 'react'

function Form() {
    const [title ,setTitle] = React.useState("")
    const [content ,setContent] = React.useState("")

   
    function onTitleChange(event){
        setTitle(event.target.value)
    }
    function onContentChange(event){
        setContent(event.target.value)

    } 
    function post(){
        const post = {
            title : title
            ,content : content
        }
        axios.post("http://localhost:5000/posts" ,post)
        .then(console.log("performed"))
        .catch(err => console.log(err))
    }
  return (
    <div className='form'>
        <form>
            <h3>Title</h3>
            <input type='text' onChange={onTitleChange} />
            <h3>Content</h3>
            <input type='text' className='cont' onChange={onContentChange} />
        </form>
        <button onClick={post}>Post</button>
    </div>
  )
}

export default Form