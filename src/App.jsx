import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./routes";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import Contenedor from "./pages/container/ContainerPage";
import OrganizationPage from "./pages/organization/OrganizationPage"
import CreateContainer from "./pages/container/Create";
import CreateOrganization from "./pages/organization/Create";
import EditContainer from "./pages/container/Edit";
import EditOrganization from "./pages/organization/Edit";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <main className="container content-container mx-auto px-10 md:px-0">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<HomePage />} />
              
              <Route path="/container" element={<Contenedor />} />
              <Route path="/container/create" element={<CreateContainer />} />
              <Route path="/edit/:id/:longitude/:latitude/:container_type/:organization/:street_description/:province/:department/:location" element={<EditContainer />} />

              <Route path="/organization" element={<OrganizationPage />} />
              <Route path="/organization/create" element={<CreateOrganization />} />
              <Route path="/edit-organization/:organization_name/:phone/:email/:organization_type/:province/:department/:location" element={<EditOrganization />} />

              <Route path="/profile" element={<h1>Profile</h1>} />
            </Route>
          </Routes>
          <Footer/>
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
