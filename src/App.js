import React, {useState} from "react";
import MyButton from "./components/UI/button/MyButton";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import "./styles/App.css";
import {usePosts} from "./hooks/usePosts";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'b ', body: 'c'},
    {id: 2, title: 'c', body: 'a'},
    {id: 3, title: 'a', body: 'b'}
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton  onClick={() => setModal(true)}>
        Create user
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter
        setFilter={setFilter}
        filter={filter}
      />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постів 1"/>
    </div>
  );
}

export default App;
