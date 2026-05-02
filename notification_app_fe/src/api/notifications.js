const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhdDA1MTNAc21pc3QuZWR1LmluIiwiZXhwIjoxNzc3NzA2NDkyLCJpYXQiOjE3Nzc3MDU1OTIsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiIwM2JjY2U2Zi1jNzhlLTRhODctYmM0NS0wZDVkNzYyOGMxZTAiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJheXVzaCB0aGFrdXIiLCJzdWIiOiI5YWVkZjg4My05NTBiLTQ5M2MtYWM1My0zNDllOWFhNzJhM2YifSwiZW1haWwiOiJhdDA1MTNAc21pc3QuZWR1LmluIiwibmFtZSI6ImF5dXNoIHRoYWt1ciIsInJvbGxObyI6InJhMjMxMTAwMzA1MDIzMyIsImFjY2Vzc0NvZGUiOiJRa2JweEgiLCJjbGllbnRJRCI6IjlhZWRmODgzLTk1MGItNDkzYy1hYzUzLTM0OWU5YWE3MmEzZiIsImNsaWVudFNlY3JldCI6ImRBenRyTkRtQ0pwSmpNek0ifQ.NPCOPHvCqGIu3L1Z6KtgP9ljl8fh33HI8tnpkndSk5E";

export async function fetchNotifications() {
  try {
    const res = await fetch("/evaluation-service/notifications", {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    });

    const data = await res.json();

    console.log("API RESPONSE:", data); //IMPORTANT

    return data;
  } catch (err) {
    console.error("FETCH ERROR:", err);
    return { notifications: [] };
  }
}