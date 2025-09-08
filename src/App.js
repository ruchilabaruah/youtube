import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
{
  /**
  * Header
  * Body
  *   Sidebar
  *     MenuItems
  *   MainContainer
  *     ButtonsList
  *     VideoContainer
  *       VideoCard

  */
}
