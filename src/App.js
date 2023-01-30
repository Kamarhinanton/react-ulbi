import React, {useState} from "react";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description'},
    {id: 3, title: 'JavaScript 3', body: 'Description'}
  ])
  const [post, setPost] = useState({title: '', body: ''})
  // const [title, setTitle] = useState('')
  // const [body, setBody] = useState('')


  // const bodyInputRef = useRef();
  // const addNewPost = (e) => {
  //   e.preventDefault()
  //   console.log(bodyInputRef.current.value)
  // }
  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', body: ''})
  }

  return (
    <div className="App">
      <form>
        {/*Керований компонент*/}
        <MyInput
          value = {post.title}
          onChange = {e => setPost({...post, title: e.target.value})}
          type="text"
          placeholder="назва посту"/>
        {/*Некерований компонент, через Ref*/}
        {/*<MyInput*/}
        {/*  ref={bodyInputRef}*/}
        {/*  type="text"*/}
        {/*  placeholder="опис посту"/>*/}
        <MyInput
          value={post.body}
          onChange = {e => setPost({...post, body: e.target.value})}
          type="text"
          placeholder="опис посту"/>
        <MyButton onClick={addNewPost}>Додати пост</MyButton>
      </form>
      <PostList posts = {posts} title="Список постів 1"/>
    </div>
  );
}

export default App;
