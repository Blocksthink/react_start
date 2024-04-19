/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남우동맛집','파이썬독학']);
  let [따봉, 따봉변경 ] = useState(0);



  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
        </div>
        <div className="list">
          <h1>{ 글제목[0] } <span onClick={()=>{ 따봉변경(따봉+1)}}> 😍 </span> { 따봉 } </h1>
          <p>2/17 발행 
          <button onClick={()=> {
            let copy = [...글제목];
            copy.sort();
            글제목변경(copy)
            }}>정렬</button>
          </p>
        </div> 
        <div className="list">
          <h1>{ 글제목[1] }</h1>
          <p>2/17 발행</p>
        </div>
        <div className="list">
          <h1>{ 글제목[2] }</h1>
          <p>2/17 발행</p>
        </div>
    </div>
  );
}

export default App;
