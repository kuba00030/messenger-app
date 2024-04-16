import { BrowserRouter as HashRouter } from "react-router-dom";
import { AnimatedRoutes } from "./AnimatedRoutes";

export const Router = () => {
  return (
    <HashRouter>
      <AnimatedRoutes />
    </HashRouter>
  );
};
