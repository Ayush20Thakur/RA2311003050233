import { Log } from "../logging middleware/logger.js";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhdDA1MTNAc21pc3QuZWR1LmluIiwiZXhwIjoxNzc3NzA0MDQzLCJpYXQiOjE3Nzc3MDMxNDMsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiIzYThkOTY0OS01ZDVkLTQ3NjItOTcyOC1lZGU3OWM0ZTQ3MjgiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJheXVzaCB0aGFrdXIiLCJzdWIiOiI5YWVkZjg4My05NTBiLTQ5M2MtYWM1My0zNDllOWFhNzJhM2YifSwiZW1haWwiOiJhdDA1MTNAc21pc3QuZWR1LmluIiwibmFtZSI6ImF5dXNoIHRoYWt1ciIsInJvbGxObyI6InJhMjMxMTAwMzA1MDIzMyIsImFjY2Vzc0NvZGUiOiJRa2JweEgiLCJjbGllbnRJRCI6IjlhZWRmODgzLTk1MGItNDkzYy1hYzUzLTM0OWU5YWE3MmEzZiIsImNsaWVudFNlY3JldCI6ImRBenRyTkRtQ0pwSmpNek0ifQ.akcWoMEC_ZMiCgAwtssXjTdlQ_WiLI-Pu-Xj0JKUOdQ";

// Priority weights
const weights = {
  Placement: 3,
  Result: 2,
  Event: 1
};

//  Fetch notifications from API
async function fetchNotifications() {
  await Log("frontend", "info", "api", "Fetching notifications");

  try {
    const res = await fetch("http://20.207.122.201/evaluation-service/notifications", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${TOKEN}`
      }
    });

    const data = await res.json();

    // Debug log (allowed during dev)
    console.log("API RESPONSE:", data);

    if (!data || !data.notifications) {
      await Log("frontend", "warn", "api", "No notifications received");
      return [];
    }

    return data.notifications;

  } catch (err) {
    await Log("frontend", "error", "api", "Failed to fetch notifications");
    console.error("Fetch Error:", err);
    return [];
  }
}

//  Compute top 10 notifications
function getTopNotifications(notifications) {
  if (!notifications || notifications.length === 0) {
    console.log("No notifications available");
    return [];
  }

  return notifications
    .map(n => ({
      ...n,
      score: weights[n.Type] * 1e10 + new Date(n.Timestamp).getTime()
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);
}

//  Main execution
async function main() {
  await Log("frontend", "info", "service", "Starting Stage 1 computation");

  const notifications = await fetchNotifications();

  const topNotifications = getTopNotifications(notifications);

  await Log("frontend", "info", "service", "Computed top 10 notifications");

  console.log("\n===== TOP 10 PRIORITY NOTIFICATIONS =====\n");
  console.log(topNotifications);
}

main();