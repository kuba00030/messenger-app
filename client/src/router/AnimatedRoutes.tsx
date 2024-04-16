import { Routes, Route, useLocation } from "react-router-dom";

import { Dashboard } from "../pages/dashboard/Dashboard";
import { SignIn } from "../pages/auth/SignIn";
import { Default } from "../pages/Default";
import { Home } from "../pages/home/Home";
import { SignUp } from "../pages/auth/SignUp";
import { AnimatePresence } from "framer-motion";
import { ForgetPassowrd } from "../pages/auth/forget-password/ForgetPassword";
import { EmailVeryfication } from "../pages/auth/forget-password/EmailVeryfication";
import { NewPassword } from "../pages/auth/forget-password/NewPassword";

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Default />}>
          <Route index element={<Home />} />
          <Route path="sign_in">
            <Route index element={<SignIn />} />
            <Route path="forget_password">
              <Route index element={<ForgetPassowrd />} />
              <Route
                path="email_veryfication"
                element={<EmailVeryfication />}
              />
              <Route path="new_password" element={<NewPassword />} />
            </Route>
          </Route>
          <Route path="sign_up" element={<SignUp />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
