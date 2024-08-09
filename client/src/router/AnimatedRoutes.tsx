import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import { Dashboard } from "../pages/dashboard/Dashboard";
import { Default } from "../pages/Default";
import { Home } from "../pages/home/Home";
import { AnimatePresence } from "framer-motion";
import { ForgetPassowrd } from "../pages/auth/forget-password/ForgetPassword";
import { useUserContext } from "../context/userContext/userContext";
import { Inbox } from "../pages/dashboard/sections/Inbox";
import { Notifications } from "../pages/dashboard/sections/Notifications";
import { SignIn } from "../pages/auth/sign-in/SignIn";
import { SignUp } from "../pages/auth/sign-up/SignUp";

export const AnimatedRoutes = () => {
  const location = useLocation();
  const { user } = useUserContext();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {user ? (
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Navigate to="inbox" />} />
            <Route path="inbox" element={<Inbox />} />
            <Route path="contacts" element={<Inbox />} />
            <Route path="calls" element={<Inbox />} />
            <Route path="notifications" element={<Notifications />} />
          </Route>
        ) : (
          <Route path="/" element={<Default />}>
            <Route index element={<Home />} />
            <Route path="sign-in">
              <Route index element={<SignIn />} />
              <Route path="forget-password">
                <Route index element={<ForgetPassowrd />} />
              </Route>
            </Route>
            <Route path="sign-up" element={<SignUp />} />
          </Route>
        )}
      </Routes>
    </AnimatePresence>
  );
};
