import * as views from "../../views";
import paths from "../paths";
const routes = [
  {
    path: paths.HOME,
    component: views.Landing,
  },
  {
    path: paths.CHAT,
    component: views.Chat,
  },
  {
    path: paths.NOT_FOUND,
    component: null,
  },
];

export default routes;
