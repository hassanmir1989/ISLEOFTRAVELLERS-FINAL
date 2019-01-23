const login = uid => ({
  type: "LOGIN",
  uid
});

const logout = () => ({
  type: "LOGOUT"
});

export { login, logout };
