import { Routes, Route } from "react-router-dom"

import globalStyles from "./style"

import MainLayout from "./layout/main"
import ContentLayout from "./layout/content"

import Catalog from "./components/Catalog"
import Auth from "./components/Auth"
import { User } from "./components/User"
import { Upload } from "./components/Upload"
import { CreatePostModel } from "./components/PostModel/components/Create"
import { useEffect } from "react"

function App() {

  // логика кастомизации скролла
  useEffect(() => {
    const container = document.querySelector('[data-scrollbar-container]')
    const content = document.querySelector('[data-content]')
    const scroll = document.querySelector('[data-scrollbar]')
  
    console.log(container);
    console.log(content);
    console.log(scroll);
    
  content?.addEventListener('scroll', function () {
    (scroll as HTMLElement).style.height = (content!.clientHeight * content!.clientHeight) / content!.scrollHeight + 'px';
    console.log(content!.scrollTop);
    (scroll as HTMLElement).style.top = (content!.scrollTop * container!.clientHeight) / content!.scrollHeight + 'px';
  });
  var event = new Event('scroll');
  
  content !== null ? window.addEventListener('resize', content.dispatchEvent.bind(content, event)) : void 0;
  content?.dispatchEvent(event);
  
  // движение при зажатой кнопки мыши
  
  scroll?.addEventListener('mousedown', function (start) {
    start.preventDefault();
  
    var y = (scroll as HTMLElement).offsetTop;
  
    var onMove = function (end: MouseEvent) {
      var delta = end.pageY - (start as MouseEvent).pageY;
      (scroll as HTMLElement).style.top =
        Math.min(container!.clientHeight - scroll!.clientHeight, Math.max(0, y + delta)) + 'px';
      content!.scrollTop = (content!.scrollHeight * (scroll as HTMLElement).offsetTop) / container!.clientHeight;
    };
  
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', function () {
      document.removeEventListener('mousemove', onMove);
    });
  });
  }, [])

  // глобальные стили
  globalStyles()

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route path="/" element={<Catalog/>}/>
          <Route path="/auth/register" element={<Auth/>}/>
          <Route path="/auth/login" element={<Auth/>}/>
          <Route path="/user/:id" element={<User/>}/>
          <Route path="/user/:id/createModel" element={<CreatePostModel/>}/>
        </Route>
        <Route path="/user/:id/upload" element={<ContentLayout/>}>
          <Route path="/user/:id/upload" element={<Upload/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
