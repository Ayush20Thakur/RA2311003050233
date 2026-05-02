import AllNotifications from "./pages/AllNotifications";
import PriorityInbox from "./pages/PriorityInbox";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>Notification System</h1>

      <AllNotifications />

      <hr />

      <PriorityInbox />
    </div>
  );
}

export default App; //THIS WAS MISSING