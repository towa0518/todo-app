// useRef を利用できるようにする(TODO入力フォームで利用)
import React, { useRef } from "react";

// useTodo() カスタムフックを import
import { useTodo } from "../hooks/useTodo";

// TodoTitle コンポーネントを作成
// 見出しタグが h1、h2 の場合の条件分岐を作成しておく
// 親コンポーネントから title、as を props として受け取る
const TodoTitle = ({ title, as }) => {
  // as が h1 ならばタイトルは h1 はタグ
  if (as === "h1") {
    return <h1>{title}</h1>;
  }
  // as が h2 ならばタイトルは h2 はタグ
  if (as === "h2") {
    return <h2>{title}</h2>;
  }
  // どちらでもなければ p タグ
  return <p>{title}</p>;
};

// TodoItem コンポーネントを作成
// 親コンポーネントから todo を props として受け取る
const TodoItem = ({ todo }) => {
  return (
    <li>
      {/* TODOの内容 */}
      {todo.content}

      {/* TODOが完了の場合は「未完了リストへ」、未完了の場合は
          「完了リストへ」と表示するボタンを設置する */}
      <button>{todo.done ? "未完了リストへ" : "完了リストへ"}</button>

      {/* TODOの「削除」ボタンを設置しておく */}
      {/* 現時点で「削除」ボタンは機能していない */}
      <button>削除</button>
    </li>
  );
};

// TodoList コンポーネントを作成
// 親コンポーネントから todoList を props として受け取る
const TodoList = ({ todoList }) => {
  return (
    <ul>
      {/* map() を利用して todoList の要素を1つひとつ取り出す */}
      {todoList.map((todo) => (
        // TodoItem に一意なIDを key 属性の値として付与
        // todoList から取り出した todo を子コンポーネントへ props で渡す
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

// TodoAdd コンポーネントを作成
// 親コンポーネントから inputEl、handleAddTodoListItem を
// props として受け取る
const TodoAdd = ({ inputEl, handleAddTodoListItem }) => {
  return (
    <>
      {/* useRef() で作成した refオブジェクトを ref属性に指定してDOMを参照する */}
      <textarea ref={inputEl} />

      {/* 「+ TODOを追加」ボタンをクリックで handleAddListItem 関数を
          実行 */}
      <button onClick={handleAddTodoListItem}>+ TODOを追加</button>
    </>
  );
}

function App() {
  // useTodo() カスタムフックで作成した todoList addTodoListItem を利用する
  // todoList は現在のTODOの状態
  const {
    todoList,
    addTodoListItem
  } = useTodo();

  // useRef で refオブジェクトを作成(TODO入力フォームで利用)
  const inputEl = useRef(null);

  // TODO入力フォームで入力された文字列を新しいTODOに登録するための
  // handleAddTodoListItem 関数を宣言
  const handleAddTodoListItem = () => {
    // 何も入力されていない場合にクリックしても何も返さない
    if (inputEl.current.value === "") return;

    // テキストエリアに入力されたテキストを新規TODOとして追加
    // 追加したら、テキストエリアを空の文字列にする
    // 新規TODOを追加する addTodoListItem 関数を
    // 「+ TODOを追加」ボタンクリックで実行
    addTodoListItem(inputEl.current.value);
    inputEl.current.value = "";
  }

  // console.log でコンソールに取得した TODO リストの情報を表示してみる
  console.log("TODOリスト", todoList);

  // filter() を利用して「TODOの状態が未完了」の要素を持つ新しい配列を作成
  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  });

  // filter() を利用して「TODOの状態が完了」の要素を持つ新しい配列を作成
  const completedList = todoList.filter((todo) => {
    return todo.done;
  });

  return (
    <>
      {/* h1見出しタグを TodoTitle コンポーネントに */}
      {/* 見出しに表示させたいテキストを title に代入して
          子コンポーネントへ props で渡す */}
      {/* h1 を as に代入して子コンポーネントへ props で渡す */}
      <TodoTitle title="TODO進捗管理" as="h1" />

      {/* TODO追加フォーム TodoAdd コンポーネントを作成 */}
      {/* useTodo() カスタムフックで作成した handleAddTodoListItem 関数を
          子コンポーネントへ props で渡す */}
      {/* useTodo()カスタムフックで作成した inputEl を
          子コンポーネントへ props で渡す */}
      {/* 「+ TODOを追加」ボタンをクリックで handleAddTodoListItem 関数を実行 */}
      <TodoAdd inputEl={inputEl} handleAddTodoListItem={handleAddTodoListItem} />

      {/* h2見出しタグを TodoTitle コンポーネントに */}
      {/* 見出しに表示させたいテキストを title に代入して
          子コンポーネントへ props で渡す */}
      {/* h2 を as に代入して子コンポーネントへ props で渡す */}
      <TodoTitle title="未完了TODOリスト" as="h2" />

      {/* TodoList コンポーネント */}
      {/* 未完了TODOリスト inCompletedList を todoList に代入して
          子コンポーネントへ props で渡す */}
      <TodoList todoList={inCompletedList} />

      {/* h2見出しタグを TodoTitle コンポーネントに */}
      {/* 見出しに表示させたいテキストを title に代入して
          子コンポーネントへ props で渡す */}
      {/* h2 を as に代入して子コンポーネントへ props で渡す */}
      <TodoTitle title="完了TODOリスト" as="h2" />

      {/* TodoList コンポーネント */}
      {/* 未完了TODOリスト completedList を todoList に代入して
          子コンポーネントへ props で渡す */}
      <TodoList todoList={completedList} />
    </>
  );
}

export default App;
