import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const USERS_KEY = "ig_clone_users";
const SESSION_KEY = "ig_clone_session";

function loadUsers() {
  const raw = localStorage.getItem(USERS_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = localStorage.getItem(SESSION_KEY);
    if (session) {
      setCurrentUser(JSON.parse(session));
    }
    setLoading(false);
  }, []);

  function signup({ username, fullName, password }) {
    const users = loadUsers();
    const exists = users.some(
      (u) => u.username.toLowerCase() === username.toLowerCase()
    );
    if (exists) {
      throw new Error("That username is already taken.");
    }
    const newUser = {
      username,
      fullName,
      password,
      avatar: username.charAt(0).toUpperCase(),
    };
    users.push(newUser);
    saveUsers(users);
    const publicUser = { username, fullName, avatar: newUser.avatar };
    localStorage.setItem(SESSION_KEY, JSON.stringify(publicUser));
    setCurrentUser(publicUser);
    return publicUser;
  }

  function login({ username, password }) {
    const users = loadUsers();
    const found = users.find(
      (u) =>
        u.username.toLowerCase() === username.toLowerCase() &&
        u.password === password
    );
    if (!found) {
      throw new Error("Incorrect username or password.");
    }
    const publicUser = {
      username: found.username,
      fullName: found.fullName,
      avatar: found.avatar,
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(publicUser));
    setCurrentUser(publicUser);
    return publicUser;
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY);
    setCurrentUser(null);
  }

  const value = { currentUser, loading, login, signup, logout };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside an AuthProvider");
  }
  return ctx;
}
