// @chakra-ui/react の extendTheme を利用して
// グローバルに適用したいテーマを設定
import { extendTheme } from "@chakra-ui/react";

// extendTheme を利用して、アプリ全体に適用されるグローバルなテーマを定義
const theme = extendTheme({
  styles: {
    // グローバルスタイルを追加や上書きするには、
    // テーマの theme.styles.global を更新する
    global: {
      body: {
        // body に設定したい style を市営
        backgroudColor: "orange.50",
        color: "gray.800"
      },
      p: {
        // md を境にPC表示とSP表示を切り替える
        // SP表示で md = 1rem = 16px、PC表示で lg = 1.125rem = 18px
        fontSize: { base: "md", md: "lg"},
        lineHight: "tall" // tall = 1.5
      }
    }
  }
});

// 他のファイルで import できるようにするため、export default しておく
export default theme;
