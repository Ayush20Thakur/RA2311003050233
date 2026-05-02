import { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notifications";
import { getTopNotifications } from "../utils/priority";
import {
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
  Box
} from "@mui/material";

export default function PriorityInbox() {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    fetchNotifications().then(res => {
      const top = getTopNotifications(res?.notifications || [], limit);
      setData(top);
    });
  }, [limit]);

  const getColor = (type) => {
    if (type === "Placement") return "#fff3cd";
    if (type === "Result") return "#d1ecf1";
    return "#f8f9fa";
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Priority Inbox
      </Typography>

      <Select
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
        fullWidth
        style={{ marginBottom: "15px" }}
      >
        <MenuItem value={10}>Top 10</MenuItem>
        <MenuItem value={15}>Top 15</MenuItem>
        <MenuItem value={20}>Top 20</MenuItem>
      </Select>

      {data.map(n => (
        <Card
          key={n.ID}
          style={{
            marginBottom: "10px",
            background: getColor(n.Type)
          }}
        >
          <CardContent>
            <Typography variant="subtitle2">
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