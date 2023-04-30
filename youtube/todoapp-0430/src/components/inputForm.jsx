import React, { useState } from 'react'

export const InputForm = ({ taskList, setTaskList }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === '') {
      return;
    }
    // タスクを追加する
    // ...とはスプレット構文と呼ばれるもの
    setTaskList([...taskList, { id: taskList.length, text: inputText, completed: false }]);
    setInputText('');
  }

  const handleChange = (e) => {
    setInputText(e.target.value);
  }



  return (
    <div className="inputForm">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputText}/>
        <button>
          <i className="fa-sharp fa-solid fa-plus"></i>
        </button>
      </form>
    </div>
  )
}
