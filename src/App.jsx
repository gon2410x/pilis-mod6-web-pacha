import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./routes";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import Contenedor from "./pages/container/ContainerPage";
import OrganizationPage from "./pages/OrganizationPage";
import CreateContainer from "./pages/container/Create";
import EditContainer from "./pages/container/Edit"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <main className="container content-container mx-auto px-10 md:px-0">
          <Navbar />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/container" element={<Contenedor />} />
              <Route path="/container/create" element={<CreateContainer />} />
              <Route path="/edit/:id" element={<EditContainer />} />

              <Route path="/organization" element={<OrganizationPage />} />

              <Route path="/profile" element={<h1>Profile</h1>} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
