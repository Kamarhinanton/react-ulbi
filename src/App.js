import React, {useEffect, useState} from "react";
import MyButton from "./components/UI/button/MyButton";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import "./styles/App.css";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostSerice";
import {useFetching} from "./hooks/useFetching";
import {getPageCount, getPagesArray} from "./utils/pages";
import Pagination from "./components/UI/pagination/pagination";

function App() {
  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isPostsLoading, postError] =  useFetching(async() => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  console.log(totalPages)

  useEffect(() => {
    fetchPosts()
  }, [page])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
  }

  return (
    <div className="App">
      <button onClick={fetchPosts}>get posts</button>
      <MyButton onClick={() => setModal(true)}>
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
      {postError &&
        <h1>Error{postError}</h1>
      }
      {
        isPostsLoading
          ? <h2>Loading...</h2>
          : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постів 1"/>
      }
      <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
    </div>
  );
}

export default App;
