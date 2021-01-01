import "./App.css";
import LeftNav from "./components/LeftNav/LeftNav";
import UserProfile from "./pages/UserProfile/UserProfile";
import Notifications from "./pages/Notifications/Notifications";
import Plans from "./pages/Plans/Plans";
import Billing from "./pages/Billing/Billing";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <LeftNav />
      <Route exact path="/" render={() => <UserProfile />} />
      <Route path="/notifications" render={() => <Notifications />} />
      <Route path="/plans" render={() => <Plans />} />
      <Route path="/billing" render={() => <Billing />} />
    </div>
  );
}

export default App;
