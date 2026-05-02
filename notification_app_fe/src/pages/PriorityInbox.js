import { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notifications";
import { getTopNotifications } from "../utils/priority";

export default function PriorityInbox() {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    fetchNotifications().then(res => {
      const top = getTopNotifications(res?.notifications || [], limit);
      setData(top);
    });
  }, [limit]);

  return (
    <div>
      <h2>Priority Inbox</h2>

      <select onChange={(e) => setLimit(Number(e.target.value))}>
        <option value={10}>Top 10</option>
        <option value={15}>Top 15</option>
        <option value={20}>Top 20</option>
      </select>

      <div style={{ marginTop: "15px" }}>
        {data.map(n => (
          <div
            key={n.ID}
            style={{
              padding: "10px",
              marginBottom: "8px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              background:
                n.Type === "Placement"
                  ? "#fff3cd"
                  : n.Type === "Result"
                  ? "#d1ecf1"
                  : "#f8f9fa"
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