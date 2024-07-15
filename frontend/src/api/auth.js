const API_BASE_URL = "http://your-backend-url.com/api";

export const register = async (username, password) => {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  if (!response.ok) {
    throw new Error("Failed to register");
  }
  return response.json();
};

export const login = async (username, password) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  if (!response.ok) {
    throw new Error("Failed to login");
  }
  return response.json();
};

export const getUser = async (token) => {
  const response = await fetch(`${API_BASE_URL}/user`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }
  return response.json();
};
