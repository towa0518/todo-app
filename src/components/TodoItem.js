export const TodoItem = ({ todo, toggleTodoListItemStatus, deleteTodoListItem }) => {
  // TODOの状態(完了/未完了)を反転させる toggleTodoListItemStatus 関数を
  // 実行させる handleToggleTodoListItemStatus 関数を宣言
  const handleToggleTodoListItemStatus = () =>
    toggleTodoListItemStatus(todo.id, todo.done);

  // TODOを削除する deleteTodoListItem 関数を実行させる
  // handleDeleteTodoListItem 関数を宣言
  const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);

  return (
    <li>
      {/* TODOの内容 */}
      {todo.content}

      {/* ボタンクリックで handleToggleTodoListItemStatus 関数を実行 */}
      {/* ボタンクリックでTODOの状態(完了/未完了)が反転 */}
      <button onClick={handleToggleTodoListItemStatus}>
        {todo.done ? "未完了リストへ" : "完了リストへ"}
      </button>

      {/* ボタンクリックで handleDeleteTodoListItem 関数を実行 */}
      {/* ボタンクリックでTODOを削除 */}
      <button onClick={handleDeleteTodoListItem}>削除</button>
    </li>
  );
};
