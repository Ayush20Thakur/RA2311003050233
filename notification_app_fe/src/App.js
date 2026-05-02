import AllNotifications from "./pages/AllNotifications";
import PriorityInbox from "./pages/PriorityInbox";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Notification System</h1>
      <AllNotifications />
      <hr />
      <PriorityInbox />
    </div>
  );
}

export default App;