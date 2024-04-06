import { Routes, Route } from "react-router-dom"

import globalStyles from "./style"

import MainLayout from "./layout/main"
import ContentLayout from "./layout/content"

import Catalog from "./components/Catalog"
import Auth from "./components/Auth"
import { User } from "./components/User"
import { Upload } from "./components/Upload"
import { CreatePostModel } from "./components/PostModel/Create"

function App() {
  globalStyles()

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route path="/" element={<Catalog/>}/>
          <Route path="/auth/register" element={<Auth/>}/>
          <Route path="/auth/login" element={<Auth/>}/>
          <Route path="/create-model" element={<CreatePostModel/>}/>
          <Route path="/user/:id">
            <Route path="/user/:id" element={<User/>}/>
            <Route path="/user/:id/models" element={<CreatePostModel/>}/>
            <Route path="/user/:id/likes" element={<CreatePostModel/>}/>
            <Route path="/user/:id/3d-models" element={<CreatePostModel/>}/>
            <Route path="/user/:id/3d-models/:id" element={<CreatePostModel/>}/>
          </Route>
        </Route>
        <Route path="/" element={<ContentLayout/>}>
          <Route path="/upload" element={<Upload/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
