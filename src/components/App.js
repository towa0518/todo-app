// useRef を利用できるようにする(TODO入力フォームで利用)
import React, { useRef } from "react";

// useTodo() カスタムフックを import
import { useTodo } from "../hooks/useTodo";

// TodoTitle コンポーネントを import
import { TodoTitle } from "./TodoTitle";

// TodoAdd コンポーネントを import
import { TodoAdd } from "./TodoAdd";

// TodoList コンポーネントを import
import { TodoList } from "./TodoList";

function App() {
  // useTodo() カスタムフックで作成した todoList addTodoListItem を利用する
  // todoList は現在のTODOの状態
  const {
    todoList,
    addTodoListItem,
    toggleTodoListItemStatus,
    deleteTodoListItem,
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
  };

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
      <TodoAdd
        buttonText="+ TODOを追加"
        inputEl={inputEl}
        handleAddTodoListItem={handleAddTodoListItem}
      />

      {/* TodoList コンポーネント */}
      {/* 未完了TODOリスト inCompletedList を todoList に代入して
          子コンポーネントへ props で渡す */}
      <TodoList
        todoList={inCompletedList}
        // useTodo() カスタムフックで作成した toggleTodoListItemStatus 関数を
        // 子コンポーネントへ props で渡す
        // toggleTodoListItemStatus 関数は todoListItem の done(完了/未完了)
        // を反転させて更新する
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        // useTodo() カスタムフックで作成した deleteTodoListItem 関数を
        // 子コンポーネントへ props で渡す
        // deleteTodoListItem 関数は各TODOに設置した「削除」ボタンを
        // クリックしたときに実行してTODOを削除する
        deleteTodoListItem={deleteTodoListItem}
        title="未完了TODOリスト"
        as="h2"
      />

      {/* TodoList コンポーネント */}
      {/* 未完了TODOリスト completedList を todoList に代入して
          子コンポーネントへ props で渡す */}
      <TodoList
        todoList={completedList}
        // useTodo() カスタムフックで作成した toggleTodoListItemStatus 関数を
        // 子コンポーネントへ props で渡す
        // toggleTodoListItemStatus 関数は todoListItem の done(完了/未完了)
        // を反転させて更新する
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        // useTodo() カスタムフックで作成した deleteTodoListItem 関数を
        // 子コンポーネントへ props で渡す
        // deleteTodoListItem 関数は各TODOに設置した「削除」ボタンを
        // クリックしたときに実行してTODOを削除する
        deleteTodoListItem={deleteTodoListItem}
        title="完了TODOリスト"
        as="h2"
      />
    </>
  );
}

export default App;
