import { Provider } from "react-redux";
import { ChatView } from "./components/chat";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <ChatView />
    </Provider>
  );
}

export default App;
