import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let blog = 'ReactBlog';
  let [title, setTitle] = useState(['에티오피아', '케냐', '브라질']);
  let [like, setLike] = useState(0);

  return (
    <div className="App">

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
