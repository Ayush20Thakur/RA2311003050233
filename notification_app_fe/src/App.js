import AllNotifications from "./pages/AllNotifications";
import PriorityInbox from "./pages/PriorityInbox";
import { Container, Typography, Divider } from "@mui/material";

function App() {
  return (
    <Container maxWidth="md" style={{ marginTop: "30px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Notification System
      </Typography>

      <AllNotifications />

      <Divider style={{ margin: "30px 0" }} />

      <PriorityInbox />
    </Container>
  );
}

export default App;