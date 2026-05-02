import { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notifications";

export default function AllNotifications() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(""); // ✅ NEW

  useEffect(() => {
    fetchNotifications().then(res => {
      setData(res?.notifications || []);
    });
  }, []);

  return (
    <div>
      <h2>All Notifications</h2>

      {/* ✅ FILTER DROPDOWN */}
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Placement">Placement</option>
        <option value="Result">Result</option>
        <option value="Event">Event</option>
      </select>

      <br /><br />

      {/* ✅ FILTER APPLIED HERE */}
      {data
        .filter(n => !filter || n.Type === filter)
        .map(n => (
          <div key={n.ID} style={{ marginBottom: "10px" }}>
            <b>{n.Type}</b> - {n.Message}
          </div>
        ))}
    </div>
  );
}