const API_URL = "http://127.0.0.1:8000";

export async function getExpenses() {
  const response = await fetch(`${API_URL}/expenses`);

  if (!response.ok) {
    throw new Error("Failed to fetch expenses");
  }

  return response.json();
}