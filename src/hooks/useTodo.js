import { useState, useEffect } from "react";

// 一意な id を生成する ulid を import
import { ulid } from "ulid";

// src/apis/todo.js 内で宣言して export しておいた関数を
// import することにより useTodo.js 内で利用できるようにする
// getAllTodosData, addTodoData, deleteTodoData, updateTodoData を
// todoData オブジェクトとしてまとめて import
import * as todoData from "../apis/todos";

// useTodo() カスタムフックを外部ファイルで利用できるようにするため
// export しておく
export const useTodo = () => {
  // todoList は現在のTODOの状態
  // setTodoList は現在の todoList の状態を更新するための関数
  // todoList の初期値に空の配列をセット
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    // useEffect() を利用することによりコンポーネントのマウント後
    // またはアンマウント後に処理を実行する
    // モックサーバーからTODOデータを取得する getAllTodosData() を実行
    todoData.getAllTodosData().then((todo) => {
      // モックサーバーからTODOデータを取得後、取得したTODOのデータを反転
      // させておくことで、TODOを追加した順に上から表示させることができる
      // Array.reverse()と、スプレッド構文を組み合わせて
      // 並び替えを行うことで、もとの配列要素の並び順に影響することなく
      // 新しい配列を作成する
      setTodoList([...todo].reverse());
    });
  }, []);

  // todoListItem の done(完了/未完了)の真偽値を反転させて
  // 更新する toggleTodoListItemStatus 関数を宣言
  const toggleTodoListItemStatus = (id, done) => {
    // find() は配列から条件に合う値を見つけて、最初に true になった
    // 要素の値を返し、要素を見つけた時点で処理を停止する
    // done(完了/未完了)の状態を反転させた todoListItem の id を見つけ、
    // 条件に一致する todoItem を流す
    const todoItem = todoList.find((item) => item.id === id);

    // 現在の todoList の中から、条件に一致した要素である todoItem の
    // done(完了/未完了)を反転させる
    const newTodoItem = { ...todoItem, done: !done };

    // updateTodoData() を利用して指定された id のTODOを更新したら、
    // 続いて todoList の状態を更新する
    todoData.updateTodoData(id, newTodoItem).then((updatedTodo) => {
      const newTodoList = todoList.map((item) =>
        // id が異なる場合、todoList から取り出した item から取り出した item をそのまま返し
        // 同じ場合は done(完了/未完了)の状態を反転させた updatedTodo を
        // 返して新しい配列 newTodoList を作成
        item.id !== updatedTodo.id ? item : updatedTodo
      );

      // todoList の現在の状態(state)を newTodoList の内容に更新
      setTodoList(newTodoList);
    });
  };

  // 新規TODOを追加する addTodoListItem 関数を宣言
  const addTodoListItem = (todoContent) => {
    const newTodoItem = {
      // content は追加するTODOの内容
      content: todoContent,

      // id に ulid で生成された一意な値をセット
      id: ulid(),

      // 追加されたTODOはデフォルトで未完了状態にセット
      done: false,
    };

    // addTodoData() を利用してTODOを更新したら、
    // 続いて todoList の状態も更新
    // addTodoData() は新規TODOを追加する関数
    return todoData.addTodoData(newTodoItem).then((addTodo) => {
      // todoList の状態(state) を newTodoItem が追加された状態に更新
      setTodoList([addTodo, ...todoList]);
    });
  };

  // TODOを削除する deleteTodoListItem 関数を宣言
  const deleteTodoListItem = (id) => {
    // todoData を更新したら todoList の状態も更新
    // deleteTodoData() を利用して指定された id のTODOを削除したら、
    // 続いて todoList の状態も更新する
    // deleteTodoData() は一致した id のTODOを削除する関数
    todoData.deleteTodoData(id).then((deleteListItemId) => {
      const newTodoList = todoList.filter(
        // 削除したTODOと id が一致しないTODOをフィルタリングして
        // 新しい配列を返す
        // id が一致したTODOは除外される
        (item) => item.id !== deleteListItemId
      );

      // todoList の状態(state) を更新
      // todoList の状態(state) を指定された id のTODOが削除された状態に
      // 更新
      setTodoList(newTodoList);
    });
  };

  return {
    todoList,
    toggleTodoListItemStatus,
    addTodoListItem,
    deleteTodoListItem,
  };
};
