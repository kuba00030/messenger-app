import { UserContextProvider } from "./context/userContext/userContext";
import { Router } from "./router/Router";
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <UserContextProvider>
      <Router />;
    </UserContextProvider>
  );
}

export default App;
