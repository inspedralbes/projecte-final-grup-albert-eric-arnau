import { Provider } from "react-redux";
import { ChatView } from "./components/chat";
import { store } from "./store/store";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
