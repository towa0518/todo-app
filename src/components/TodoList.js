import { TodoTitle } from "./TodoTitle";

import { TodoItem } from "./TodoItem";

export const TodoList = ({
  todoList,
  toggleTodoListItemStatus,
  deleteTodoListItem,
  title,
  as,
}) => {
  return (
    <>
      {/* todoList の配列の中身が空の場合は、見出しとTODOリストの両方を
          表示させない */}
      {todoList.length !== 0 && (
        <>
          <TodoTitle title={title} as={as} />
          <ul>
            {/* map() を利用して todoList の要素を1つひとつ取り出す */}
            {todoList.map((todo) => (
              // TodoItem に一意なIDを key 属性の値として付与
              // todoList から取り出した todo を子コンポーネントへ props で渡す
              <TodoItem
                todo={todo}
                key={todo.id}
                toggleTodoListItemStatus={toggleTodoListItemStatus}
                deleteTodoListItem={deleteTodoListItem}
              />
            ))}
          </ul>
        </>
      )}
    </>
  );
};
