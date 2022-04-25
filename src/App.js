import React from 'react'
import Post from './components/posts/Post'
import axios from "axios"
import NavBar from './components/NavBar'
import Form from './components/Form'

function App() {
    const [posts ,setPosts] = React.useState([])

    React.useEffect(()=>{
        axios.get('http://localhost:5000/posts')
        .then(result => {
            const postsArray = result.data
            console.log(postsArray)
            setPosts(postsArray)});} 
        
       ,[])
   const postElements = posts.map(element => <Post key={element._id} title={element.title} content={element.content} />)
  return (
    <div className='app'>
        <NavBar/>
        <section className='main'>
        <div className='posts'>{postElements}</div>
        <Form/>
        </section>
    </div>
  )
}

export default App