import { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notifications";

export default function AllNotifications() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchNotifications().then(res => {
      setData(res?.notifications || []);
    });
  }, []);

  return (
    <div style={{ marginBottom: "30px" }}>
      <h2>All Notifications</h2>

      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Placement">Placement</option>
        <option value="Result">Result</option>
        <option value="Event">Event</option>
      </select>

      <div style={{ marginTop: "15px" }}>
        {data
          .filter(n => !filter || n.Type === filter)
          .map(n => (
            <div
              key={n.ID}
              style={{
                padding: "10px",
                marginBottom: "8px",
                border: "1px solid #ccc",
                borderRadius: "6px",
                background: "#fafafa"
              }}
            >
              <b>{n.Type}</b>
              <div>{n.Message}</div>
            </div>
          ))}
      </div>
    </div>
  );
}