import React, {useMemo, useState} from "react";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'b ', body: 'c'},
    {id: 2, title: 'c', body: 'a'},
    {id: 3, title: 'a', body: 'b'}
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const sortedPosts = useMemo(() => {
    console.log('Func is worked')
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])

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

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />
        <MySelect
          defaultValue="Sorting by..."
          value={selectedSort}
          onChange={sortPosts}
          options={[
            {value: 'title', name: 'By name'},
            {value: 'body', name: 'By content'},
          ]}
        />
      </div>
      {sortedAndSearchedPosts.length !== 0
        ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постів 1"/>
        : <h2>posts not found!</h2>
      }
    </div>
  );
}

export default App;
