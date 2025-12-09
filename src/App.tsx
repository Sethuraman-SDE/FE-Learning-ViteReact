import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login, Signup } from "./components";
import { AppLayout, AuthLayout } from "./layouts";
import { Dashboard, Profile, Settings } from "./pages";
import { NotFound } from "./components/molecules";

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

       <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
