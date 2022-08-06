import React, { useState, useEffect } from "react";

// モックサーバーとの通信斗のため axios を import
import axios from "axios";

// ローカルに準備したモックサーバーの URL
const todoDataUrl = "http://localhost:3100/todos";

function App() {
  // todoList は現在の TODO の状態
  // setTodoList は現在の todoList の状態を更新するための関数
  // todoList の初期値に空の配列をセット
  const [todoList, setTodoList] = useState([]);

  // useEffect() を利用することでコンポーネントのマウント後に処理を実行
  // async/await で非同期処理
  useEffect(() => {
    const fetchData = async () => {
      // get は外部から情報を取得する基本メソッド
      // get の引数に URL を入れると、URL に対して GET リクエストを送信
      // リクエスト語に戻ってくる値はすべて response に保存される
      const response = await axios.get(todoDataUrl);

      // 戻された値について useState を利用して、
      // todoList の現在の値としてセットする
      setTodoList(response.data);
    };
    fetchData();
  }, []);

  // console.log でコンソールに取得した TODO リストの情報を表示してみる
  console.log("TODOリスト", todoList);

  return (
    <>
      <h1>TODO進捗管理</h1>

      {/* 現時点で textarea は機能していない */}
      <textarea />

      {/* 現時点で TODOを追加 button は機能していない */}
      <button>+ TODOを追加</button>

      <h2>TODOリスト</h2>
      <ul>
        {/* map() を利用して todoList の要素を1つずつ取り出す */}
        {todoList.map((todo) => (
          // li に一意なIDを key 属性の値として付与
          <li key={todo.id}>
            {/* todo.done が true の場合は「完了」、
                false の場合は「未完了」の文字列を表示 */}
            {todo.content}({todo.done ? "完了" : "未完了"})
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
