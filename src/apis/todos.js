// 作成したモックサーバーとの通信に axios を利用する
import axios from "axios";

// ローカルに準備したモックサーバーのURL
const todoDataUrl = "http://localhost:3100/todos";

// axios.get() でGETリクエストを送信
// サーバー上のすべてのTODO(todos)を取得する getAllTodosData 関数を宣言
// 他ファイルで getAllTodosData() を利用できるようにするため
// export しておく
export const getAllTodosData = async () => {
  // 戻される値はすべて response に保存される
  const response = await axios.get(todoDataUrl);

  // 通信後、response.data でレスポンスデータを返す
  return response.data;
};

// axios.post() で新規TODOを追加する
// TODO を追加する addTodoData 関数を宣言
// 他ファイルで addTodoData() を利用できるようにするため export しておく
export const addTodoData = async (todo) => {
  // 第2引数に、送信したいデータを指定してPOST送信
  // サーバーに転送することで新規のデータを追加
  const response = await axios.post(todoDataUrl, todo);

  // 通信後、response.data でレスポンスデータを返す
  return response.data;
};

// axios.delete() で一致した id のTODOを削除する
// TODO を削除する deleteTodoData 関数を宣言
// 他ファイルで deleteTodoData() を利用できるようにするため export しておく
export const deleteTodoData = async (id) => {
  await axios.delete(`${todoDataUrl}/${id}`);

  // 通信後、削除したTODOの id を返す
  return id;
};

// axios.put() で一致した id のTODOを更新する
// TODO を更新する updateTodoData 関数を宣言
// 他ファイルで updateTodoData() を利用するため export しておく
export const updateTodoData = async (id, todo) => {
  // 第2引数に更新したいデータを渡す
  const response = await axios.put(`${todoDataUrl}/${id}`, todo);

  // 通信後、response.data でレスポンスデータを返す
  return response.data;
};
