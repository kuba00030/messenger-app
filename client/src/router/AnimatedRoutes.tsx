import { Routes, Route, useLocation } from "react-router-dom";

import { Dashboard } from "../pages/dashboard/Dashboard";
import { SignIn } from "../pages/auth/SignIn";
import { Default } from "../pages/Default";
import { Home } from "../pages/home/Home";
import { SignUp } from "../pages/auth/SignUp";
import { AnimatePresence } from "framer-motion";
import { ForgetPassowrd } from "../pages/auth/forget-password/ForgetPassword";
import { useUserContext } from "../context/userContext/userContext";

export const AnimatedRoutes = () => {
  const location = useLocation();
  const { user } = useUserContext();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {!user && (
          <Route path="/" element={<Default />}>
            <Route index element={<Home />} />
            <Route path="sign_in">
              <Route index element={<SignIn />} />
              <Route path="forget_password">
                <Route index element={<ForgetPassowrd />} />
              </Route>
            </Route>
            <Route path="sign_up" element={<SignUp />} />
          </Route>
        )}
        {user && <Route path="dashboard" element={<Dashboard />} />}
      </Routes>
    </AnimatePresence>
  );
};
