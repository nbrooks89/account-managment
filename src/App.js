import "./App.scss";
import LeftNav from "./components/LeftNav/LeftNav";
import UserProfile from "./pages/UserProfile/UserProfile";
import Notifications from "./pages/Notifications/Notifications";
import Plans from "./pages/Plans/Plans";
import Billing from "./pages/Billing/Billing";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <aside>
        <LeftNav />
      </aside>
      <main>
        <Route exact path="/" render={() => <UserProfile />} />
        <Route path="/notifications" render={() => <Notifications />} />
        <Route path="/plans" render={() => <Plans />} />
        <Route path="/billing" render={() => <Billing />} />
        <Route path="/success" render={() => <SuccessPage />} />
      </main>
    </div>
  );
}

export default App;
