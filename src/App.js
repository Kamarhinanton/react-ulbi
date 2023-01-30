import React, {useMemo, useState} from "react";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'b ', body: 'c'},
    {id: 2, title: 'c', body: 'a'},
    {id: 3, title: 'a', body: 'b'}
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})

  const sortedPosts = useMemo(() => {
    console.log('Func is worked')
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  // const [title, setTitle] = useState('')
  // const [body, setBody] = useState('')


  // const bodyInputRef = useRef();
  // const addNewPost = (e) => {
  //   e.preventDefault()
  //   console.log(bodyInputRef.current.value)
  // }

  return (
    <div className="App">
      <PostForm create={createPost}/>
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
