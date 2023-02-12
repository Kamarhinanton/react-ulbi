import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPages from "../pages/PostIdPages";
import Login from "../pages/Login";

export const privateRoutes = [
  {path: '/about', component: About},
  {path: '/posts', component: Posts},
  {path: '/posts/:id', component: PostIdPages},
  {path: '/*', component: Posts}
]

export const publicRoutes = [
  {path: '/login', component: Login},
  {path: '/*', component: Login}

]