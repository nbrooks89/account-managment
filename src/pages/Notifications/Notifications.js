import "./Notifications.css";
import Table from "../../components/Table/Table";

function Notifications() {
  return (
    <div className="notifications-container">
      <header>
        <h2>Notification Settings</h2>
      </header>
      <main>
        <Table />

        <button type="submit">Save</button>
      </main>
    </div>
  );
}

export default Notifications;
