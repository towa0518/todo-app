// useRef を利用できるようにする(TODO入力フォームで利用)
import React, { useRef } from "react";

// Chakra UI の Container コンポーネントを利用できるようにする
import { Container } from "@chakra-ui/react";

// Chakra UI の AddIcon コンポーネントを利用できるようにする
import { AddIcon } from "@chakra-ui/icons";

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
    // Container コンポーネントはデフォルトで div タグとして書き出される
    // centerContent で center 寄せのレイアウトになる
    // モバイル表示で padding は 4 = 1rem = 16px;
    // 最初の Breakpoint "md": = "48em" (=768px) を境界として
    // PC表示で padding は 6 = 1.5rem = 24px;
    // max-width は 3xl = 48rem = 768px
    <Container centerContent p={{ base: "4", md: "6"}} maxWidth="3xl">
      {/* h1見出しタグを TodoTitle コンポーネントに */}
      {/* 見出しに表示させたいテキストを title に代入して
          子コンポーネントへ props で渡す */}
      {/* h1 を as に代入して子コンポーネントへ props で渡す */}
      <TodoTitle
        title="TODO進捗管理"
        as="h1"

        // モバイル表示で font-size は 2xl = 1.5rem = 24px
        // 最初の Breakpoint "md"; = "48em" (=768px) を境界として
        // PC表示で font-size は 3xl = 1.8725rem = 30px;
        fontSize={{ base: "2xl", md: "3xl" }}
      />

      {/* TODO追加フォーム TodoAdd コンポーネントを作成 */}
      {/* useTodo() カスタムフックで作成した handleAddTodoListItem 関数を
          子コンポーネントへ props で渡す */}
      {/* useTodo()カスタムフックで作成した inputEl を
          子コンポーネントへ props で渡す */}
      {/* 「+ TODOを追加」ボタンをクリックで handleAddTodoListItem 関数を実行 */}
      <TodoAdd
        placeholder="ADD TODO"
        leftIcon={<AddIcon />}
        buttonText="TODOを追加"
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
        fontSize={{ base: "xl", md: "2xl" }}
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
        fontSize={{ base: "xl", md: "2xl" }}
      />
    </Container>
  );
}

export default App;
