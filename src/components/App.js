import {HashRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./Menu";
import { HomePage } from "./HomePage";
import { BlogPage } from "./BlogPage";
import { ProfilePage } from "./ProfilePage"; 
import { BlogPost } from "./BlogPost";
import "../css/App.css";

function App() {
  return (
    <div className="container">
      <HashRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/mostfamous" element={<BlogPage/>}>
            <Route path=":slug" element={<BlogPost/>}/>
          </Route>
          <Route path="/pictures" element={<ProfilePage/>}/>
          <Route path="*" element={<p>Not found</p>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
