import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { AppRouter } from "./routers";

function App() {
  return (
    <MantineProvider withNormalizeCSS>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </MantineProvider>
  );
}

export default App;
