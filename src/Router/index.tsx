import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthGuard from "./AuthGuard";
import Fallback from "../utils/Fallback";
import ErrorBoundary from "../utils/ErrorBoundary";

const Login = lazy(() => import("./routes/publicRoutes/Login"));
const Profile = lazy(() => import("./routes/privateRoutes/Profile"));
const NotFound = lazy(() => import("./routes/publicRoutes/NotFound"));
const Posts = lazy(() => import("./routes/publicRoutes/Posts"));

function Router() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/login/*" element={<Login />} />
          <Route path="/posts/*" element={<Posts />} />
          <Route path="/" element={<Navigate to="/profile" replace />} />
          <Route element={<AuthGuard />}>
            <Route path="/profile/*" element={<Profile />} />
          </Route>
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default Router;
