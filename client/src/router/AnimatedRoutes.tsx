import { Routes, Route, useLocation } from "react-router-dom";

import { Dashboard } from "../pages/dashboard/Dashboard";
import { Default } from "../pages/Default";
import { Home } from "../pages/home/Home";
import { AnimatePresence } from "framer-motion";
import { ForgetPassowrd } from "../pages/auth/forget-password/ForgetPassword";
import { useUserContext } from "../context/userContext/userContext";
import { Inbox } from "../pages/dashboard/sections/Inbox";
import { AddFriend } from "../pages/dashboard/sections/AddFriend";
import { Notifications } from "../pages/dashboard/sections/Notifications";
import { SignIn } from "../pages/auth/sign-in/SignIn";
import { SignUp } from "../pages/auth/sign-up/SignUp";

export const AnimatedRoutes = () => {
  const location = useLocation();
  const { user } = useUserContext();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
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

        {user && (
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="inbox" element={<Inbox />} />
            <Route path="add-friend" element={<AddFriend />} />
            <Route path="notifications" element={<Notifications />} />
          </Route>
        )}
      </Routes>
    </AnimatePresence>
  );
};
