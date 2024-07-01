import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "./router/Router";
import { NavbarContextProvider } from "./context/navbar/navbarContext";
import { UserContextProvider } from "./context/userContext/userContext";
import "./styles/global.css";
function App() {
  return (
    <UserContextProvider>
      <NavbarContextProvider>
        <Router />
      </NavbarContextProvider>
    </UserContextProvider>
  );
}

export default App;
