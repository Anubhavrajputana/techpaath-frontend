import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

/* CONTEXT */
import { useAuth } from "../context/AuthContext";

/* COMPONENTS */
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";

/* PUBLIC PAGES */
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import Internships from "../pages/Internships";
import ApplyForm from "../pages/ApplyForm";
import PremiumCourses from "../pages/PremiumCourses";
import CourseCheckout from "../pages/CourseCheckout";
import EnrollPage from "../pages/EnrollPage";
import ProjectsPage from "../pages/ProjectsPage";
import EventsPage from "../pages/EventsPage";
import BlogFeed from "../pages/BlogFeed";
import BlogDetail from "../pages/BlogDetail";
import RecordedVideos from "../pages/RecordedVideos";
import Notes from "../pages/Notes";
import NotesViewer from "../pages/NotesViewer";
import About from "../pages/About";
import GetStarted from "../pages/GetStarted";
import StartLearning from "../pages/StartLearning";
import ContactSales from "../pages/ContactSales";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";

/* ADMIN */
import AdminDashboard from "../pages/AdminDashboard";
import AdminCreate from "../pages/AdminCreate";
import AdminEdit from "../pages/AdminEdit";
import AdminVideos from "../pages/AdminVideos";
import WebinarDashboard from "../pages/admin/WebinarDashboard";
import AdminRoute from "../protection/AdminRoute";

/* ===================================
   🔐 PROTECTED ROUTE WRAPPER
=================================== */
const ProtectedRoute = ({ children, isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default function AppRoutes() {
  const location = useLocation();

  /* 🔥 AUTH CONTEXT */
  const { user } = useAuth();

  const isLoggedIn = !!user;
  const role = user?.role || "user";

  const userProfilePic =
    user?.avatar ||
    user?.googleAvatar ||
    "/default-avatar.png";

  return (
    <>
      {/* ===============================
          NAVBAR
      =============================== */}
      <NavbarComponent
        isLoggedIn={isLoggedIn}
        userProfilePic={userProfilePic}
      />

      {/* ===============================
          MAIN CONTENT
      =============================== */}
      <main className="main-content">
        <Routes>

          {/* ========= PUBLIC ========= */}
          <Route path="/" element={<Home />} />

          <Route
            path="/login"
            element={!isLoggedIn ? <Login /> : <Navigate to="/" />}
          />

          <Route
            path="/signup"
            element={!isLoggedIn ? <Signup /> : <Navigate to="/" />}
          />

          <Route path="/internships" element={<Internships />} />
          <Route path="/apply" element={<ApplyForm />} />
          <Route path="/courses" element={<PremiumCourses />} />
          <Route path="/checkout" element={<CourseCheckout />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contests" element={<EventsPage />} />
          <Route path="/blogs" element={<BlogFeed />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/videos" element={<RecordedVideos />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/start-learning" element={<StartLearning />} />
          <Route path="/contact-sales" element={<ContactSales />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />

          {/* ========= USER PROTECTED ========= */}

          <Route
            path="/profile"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/enroll"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <EnrollPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/notes"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Notes />
              </ProtectedRoute>
            }
          />

          <Route
            path="/notes/:language"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <NotesViewer />
              </ProtectedRoute>
            }
          />

          {/* ========= ADMIN ========= */}

          <Route
            path="/admin"
            element={
              <AdminRoute role={role}>
                <AdminDashboard />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/create"
            element={
              <AdminRoute role={role}>
                <AdminCreate />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/edit/:id"
            element={
              <AdminRoute role={role}>
                <AdminEdit />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/videos"
            element={
              <AdminRoute role={role}>
                <AdminVideos />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/webinars/:id"
            element={
              <AdminRoute role={role}>
                <WebinarDashboard />
              </AdminRoute>
            }
          />

          {/* ========= FALLBACK ========= */}
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </main>

      {/* ===============================
          FOOTER (ONLY HOME)
      =============================== */}
      {location.pathname === "/" && <Footer />}
    </>
  );
}
