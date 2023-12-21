import React, { useState, useEffect } from "react";
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import "./App.css";

const dummyList = [
  {
    id: 1,
    author: "김수연",
    content: "하이 1",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "나수연",
    content: "하이 2",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "다수연",
    content: "하이 3",
    emotion: 3,
    created_date: new Date().getTime(),
  },
]

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList}/>
    </div>
  );
};

export default App;
