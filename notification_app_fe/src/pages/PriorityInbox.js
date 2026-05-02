import { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notifications";
import { getTopNotifications } from "../utils/priority";

export default function PriorityInbox() {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10); // ✅ NEW

  useEffect(() => {
    fetchNotifications().then(res => {
      const top = getTopNotifications(res?.notifications || [], limit);
      setData(top);
    });
  }, [limit]); // ✅ IMPORTANT (updates when limit changes)

  return (
    <div>
      <h2>Priority Inbox</h2>

      {/* ✅ LIMIT DROPDOWN */}
      <select onChange={(e) => setLimit(Number(e.target.value))}>
        <option value={10}>Top 10</option>
        <option value={15}>Top 15</option>
        <option value={20}>Top 20</option>
      </select>

      <br /><br />

      {data.map(n => (
        <div
          key={n.ID}
          style={{
            marginBottom: "10px",
            padding: "8px",

            // ✅ HIGHLIGHT IMPORTANT
            background:
              n.Type === "Placement"
                ? "#ffd700"
                : n.Type === "Result"
                ? "#add8e6"
                : "#eee"
          }}
        >
          <b>{n.Type}</b> - {n.Message}
        </div>
      ))}
    </div>
  );
}