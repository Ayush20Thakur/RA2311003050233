const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhdDA1MTNAc21pc3QuZWR1LmluIiwiZXhwIjoxNzc3NzAwNTE1LCJpYXQiOjE3Nzc2OTk2MTUsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI4YjFhYzA3ZS02ZmM3LTRhMTAtYjQ2ZS1mN2Q2YzE1OTBjM2IiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJheXVzaCB0aGFrdXIiLCJzdWIiOiI5YWVkZjg4My05NTBiLTQ5M2MtYWM1My0zNDllOWFhNzJhM2YifSwiZW1haWwiOiJhdDA1MTNAc21pc3QuZWR1LmluIiwibmFtZSI6ImF5dXNoIHRoYWt1ciIsInJvbGxObyI6InJhMjMxMTAwMzA1MDIzMyIsImFjY2Vzc0NvZGUiOiJRa2JweEgiLCJjbGllbnRJRCI6IjlhZWRmODgzLTk1MGItNDkzYy1hYzUzLTM0OWU5YWE3MmEzZiIsImNsaWVudFNlY3JldCI6ImRBenRyTkRtQ0pwSmpNek0ifQ.iz2N58SVFgNUBAdEG4e2XiAJJfl5ze-NpFPuuZwwsxY";

export async function Log(stack, level, pkg, message) {
  try {
    const response = await fetch("http://20.207.122.201/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${TOKEN}`
      },
      body: JSON.stringify({
        stack: stack,
        level: level,
        package: pkg,
        message: message
      })
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Logging failed:", error);
  }
}