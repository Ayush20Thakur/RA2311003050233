import { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notifications";
import {
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
  Box
} from "@mui/material";

export default function AllNotifications() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchNotifications().then(res => {
      setData(res?.notifications || []);
    });
  }, []);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        All Notifications
      </Typography>

      <Select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        displayEmpty
        fullWidth
        style={{ marginBottom: "15px" }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Placement">Placement</MenuItem>
        <MenuItem value="Result">Result</MenuItem>
        <MenuItem value="Event">Event</MenuItem>
      </Select>

      {data
        .filter(n => !filter || n.Type === filter)
        .map(n => (
          <Card key={n.ID} style={{ marginBottom: "10px" }}>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary">
                {n.Type}
              </Typography>
              <Typography variant="body1">
                {n.Message}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </Box>
  );
}