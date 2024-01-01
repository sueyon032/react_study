import React, { useState, useEffect, useRef } from "react";
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import "./App.css";

// const dummyList = [
//   {
//     id: 1,
//     author: "김수연",
//     content: "하이 1",
//     emotion: 1,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "나수연",
//     content: "하이 2",
//     emotion: 2,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "다수연",
//     content: "하이 3",
//     emotion: 3,
//     created_date: new Date().getTime(),
//   },
// ]

function App() {

  const [data, setData]= useState([]);

  const dataId= useRef(0);

  const onCreate= (author, content, emotion)=> {
    const created_date= new Date().getTime();
    const newItem= {
      author,
      content, 
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current+=1;
    setData([newItem, ...data]);
  };

  const onDelete= (targetId)=> {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList= data.filter((it)=> it.id!==targetId);
    setData(newDiaryList);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onDelete={onDelete} diaryList={data}/>
    </div>
  );
};

export default App;
