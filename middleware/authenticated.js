const authPaths = {
  "auth-signup": true,
  "password-reset": true,
  "password-confirmation": true,
  "password-success": true,
  "auth-login": true,
  index: true
};

export default function({ store, redirect, route }) {
  // If the user is not authenticated
  if (!store.state.user) {
    if (authPaths[route.name] !== true) return redirect("/auth/login");
  }
}
