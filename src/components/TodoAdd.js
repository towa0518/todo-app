export const TodoAdd = ({ buttonText, inputEl, handleAddTodoListItem }) => {
  return (
    <>
      {/* useRef() で作成した refオブジェクトを ref属性に指定してDOMを参照する */}
      <textarea ref={inputEl} />

      {/* 「+ TODOを追加」ボタンをクリックで handleAddListItem 関数を
          実行 */}
      <button onClick={handleAddTodoListItem}>{buttonText}</button>
    </>
  );
};
