
import Home from "./pages/Home";
import { BrowserRouter,  Link,  Route, Routes } from "react-router-dom";
import MovieDetail from "./MovieDetail";
import Search from "./pages/Search";
const App = () => {
  
  
  return (
    <div className=" grid gap-10 bg-black">
      
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search />} />


          <Route path="/Home/:id" element={<MovieDetail />} />
          <Route path="/Search/:id" element={<MovieDetail />} />

        </Routes>
      </BrowserRouter>
      <center className="text-white font-bole py-5"> 
        &copy; 2024 all right reserved
      </center>
    </div>
  );
};

export default App;
