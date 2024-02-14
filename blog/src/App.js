import './App.css';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input";
import MultipleInput from "./pages/MultipleInput";
import UserList from "./pages/List";

function App() {

  let blog = 'ReactBlog';
  let [title, setTitle] = useState(['에티오피아', '케냐', '브라질']);
  let [like, setLike] = useState(0);

  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link> |
        <Link to='/about'>About</Link> |
        <Link to='/counter'>Counter</Link> |
        <Link to='/input'>Input</Link> |
        <Link to='/multipleInput'>MultipleInput</Link> |
        <Link to='/userList'>UserList</Link> |
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/counter' element={<Counter/>} />
        <Route path='/input' element={<Input/>} />
        <Route path='/multipleInput' element={<MultipleInput/>} />
        <Route path='/userList' element={<UserList/>} />
      </Routes>

      <div className="black-nav">
        <h4 style={{color : 'red', fontSize : '20px'}}>{blog}</h4>
      </div>

      <div className='button'>
        <button onClick={()=> {
          let copy = [...title];
          copy[0] = '대만';
          setTitle(copy);
        }}>
          커피 바꾸기
        </button>
      </div>

      <div className='button'>
        <button onClick={()=> {
          let copy = [...title];
          copy.sort();
          setTitle(copy);
        }}>
          가나다 정렬 하기
        </button>
      </div>

      <div className='list'>
        <h4>{title[0]} <span onClick={() => {setLike(like + 1)}}>👍</span> {like} </h4>
        <p>2월 13일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>2월 14일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[2]}</h4>
        <p>2월 15일 발행</p>
      </div>

      <CreateModal></CreateModal>
      
    </div>
  );
}

function CreateModal()
{
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
