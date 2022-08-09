import { Textarea, Button } from "@chakra-ui/react";

export const TodoAdd = ({
  placeholer,
  leftIcon,
  buttonText,
  inputEl,
  handleAddTodoListItem
}) => {
  return (
    <>
      {/* useRef() で作成した refオブジェクトを ref属性に指定してDOMを参照する */}
      <Textarea
        placeholder={placeholer}
        bgColor="white"
        mt="8"
        borderColor="gray.400"
        ref={inputEl}
      />

      {/* 「+ TODOを追加」ボタンをクリックで handleAddListItem 関数を
          実行 */}
      <Button
        onClick={handleAddTodoListItem}
        colorScheme="blue"
        leftIcon={leftIcon}
        mt="8"
      >
        {buttonText}
      </Button>
    </>
  );
};
