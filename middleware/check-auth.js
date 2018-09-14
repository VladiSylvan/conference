const cookieparser = process.server ? require("cookieparser") : undefined;

const getUserFromCookie = req => {
  if (!req.headers.cookie) return;
  const parsed = cookieparser.parse(req.headers.cookie);
  const data = { user: JSON.parse(parsed.user), token: parsed.jwt };
  return data;
};

const getUserFromLocalStorage = () => {
  const user = window.localStorage.user;
  const token = window.localStorage.token;
  const data = {
    user: user ? JSON.parse(user) : undefined,
    token: token
  };
  return data;
};

export default function({ store, req }) {
  // If nuxt generate, pass this middleware
  if (process.server && !req) return;
  const loggedUser = process.server
    ? getUserFromCookie(req)
    : getUserFromLocalStorage();
  store.commit("updateUser", loggedUser ? loggedUser.user : null);
  store.commit("authToken", loggedUser ? loggedUser.token : null);
}
