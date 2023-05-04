import Header from "./Header";
import { GlobalStyles } from "./styles";

function App() {
  return (
    <>
      {/* css 리셋 */}
      <GlobalStyles />

      {/* 메뉴 */}
      <Header />
    </>
  );
}

export default App;
