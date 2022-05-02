import * as views from "../../views";
import paths from "../paths";
const routes = [
  {
    path: paths.HOME,
    component: views.LandingPageView,
  },
  {
    path: paths.CHAT,
    component: views.ChatView,
  },
  {
    path: paths.NOT_FOUND,
    component: null,
  },
];

export default routes;
