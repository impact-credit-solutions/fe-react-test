import {
  type RouteConfig,
  route,
} from "@react-router/dev/routes";

export default [
  route("/", "./pages/hello.tsx"),
  route("/login", "./pages/login.tsx"),
];