const login = uid => ({
  type: "LOGIN",
  uid
});

const logout = () => ({
  type: "logout"
});

export { login, logout };
