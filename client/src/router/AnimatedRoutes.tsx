import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Default } from "../pages/Default";
import { Home } from "../pages/home/Home";
import { AnimatePresence } from "framer-motion";
import { ForgetPassowrd } from "../pages/auth/forget-password/ForgetPassword";
import { useUserContext } from "../context/user/UserContext";
import { Notifications } from "../pages/dashboard/sections/notifications/Notifications";
import { SignIn } from "../pages/auth/sign-in/SignIn";
import { SignUp } from "../pages/auth/sign-up/SignUp";
import { Contacts } from "../pages/dashboard/sections/contacts/Contacts";
import { Calls } from "../pages/dashboard/sections/calls/Calls";
import { ChatPanel } from "../pages/dashboard/sections/chat-panel/ChatPanel";

export const AnimatedRoutes = () => {
  const location = useLocation();
  const { user } = useUserContext();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {user ? (
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Navigate to="inbox" />} />
            <Route path="inbox" element={<ChatPanel />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="calls" element={<Calls />} />
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
