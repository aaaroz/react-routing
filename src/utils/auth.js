import Cookies from "js-cookie";

const auth = {
  isAuthorized() {
    return Cookies.get("token");
  },
  storeAuthCredential(token) {
    return Cookies.set("token", token);
  },
  logout() {
    window.location.href = "/";
    return Cookies.remove("token");
  },
};

export default auth;
