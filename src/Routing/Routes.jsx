import { createBrowserRouter } from "react-router-dom";

import Wallet from "./Wallet";
import App from "../App";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/wallet", element: <Wallet /> },
]);

export default router;
