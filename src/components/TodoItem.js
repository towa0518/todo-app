import { ListItem, Text, Flex, Button, IconButton } from "@chakra-ui/react";

import { DeleteIcon } from "@chakra-ui/icons";

export const TodoItem = ({
  todo,
  toggleTodoListItemStatus,
  deleteTodoListItem,
}) => {
  // TODOの状態(完了/未完了)を反転させる toggleTodoListItemStatus 関数を
  // 実行させる handleToggleTodoListItemStatus 関数を宣言
  const handleToggleTodoListItemStatus = () =>
    toggleTodoListItemStatus(todo.id, todo.done);

  // TODOを削除する deleteTodoListItem 関数を実行させる
  // handleDeleteTodoListItem 関数を宣言
  const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);

  const label = todo.done ? "未完了リストへ" : "完了リストへ";

  const setColorScheme = todo.done ? "pink" : "blue";

  return (
    <ListItem
      // ListItem コンポーネントは。liタグで利用できるスタイルを利用できる
      borderWidth="1px"
      // padding は 4 = 1rem = 16px
      p="4"
      // margin-top は 4 = 1rem = 16px
      mt="4"
      // background: white
      bg="white"
      // border-radius は md = 0.375rem = 6px
      borderRadius="md"
      // background-color は、デフォルトテーマの color で、gray.300
      borderColor="gray.300"
    >
      {/* TODOの内容 */}
      <Text mb="6">{todo.content}</Text>

      <Flex align="center" justify="flex-end">
        <Button
          // Button の色は colorScheme で設定できる
          // 完了なら pink 未完了なら blue
          colorScheme={setColorScheme}
          // variant(ボタンのスタイル)には "link"、"outline"、"solid"、"ghost"、"unstyled"がある
          // デフォルトは "solid"
          variant="outline"
          // Button の size には、"xs"、"sm"、"md"、"lg"がある
          size="sm"
          // ボタンクリックで handleToggleTodoListItemStatus 関数を実行
          // ボタンクリックでTODOの状態(完了/未完了)が反転
          onClick={handleToggleTodoListItemStatus}
        >
          {label}
        </Button>

        <IconButton
          // Chakra icon の DeleteIcon
          icon={<DeleteIcon />}
          variant="unstyled"
          aria-label="delete"
          // ボタンクリックで handleDeleteTodoListItem 関数を実行
          // ボタンクリックでTODOを削除
          onClick={handleDeleteTodoListItem}
        />
      </Flex>
    </ListItem>
  );
};
