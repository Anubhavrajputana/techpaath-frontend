import React, { useState, useMemo } from "react";
import { Navbar, Nav, Button, Image } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { AlignJustify } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import Sidebar from "./Sidebar.jsx";
import "./NavbarComponent.css";

/* 🔒 ABSOLUTE SAFE FALLBACK */
const DEFAULT_AVATAR =
  "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=User";

const NavbarComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const role = useMemo(() => user?.role || "user", [user]);

  /* ===============================
     🔥 FOREVER AVATAR FIX
  =============================== */
  const profilePic = useMemo(() => {
  if (user?.avatar && user.avatar.trim() !== "") {
    return user.avatar;
  }

  if (user?.name) {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(
      user.name
    )}&background=0D8ABC&color=fff`;
  }

  return DEFAULT_AVATAR;
}, [user]);

  const go = (path) => {
    setSidebarOpen(false);
    setProfileOpen(false);
    navigate(path);
  };

  const handleLogout = () => {
    setProfileOpen(false);
    logout();
    navigate("/");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <Navbar fixed="top" variant="dark" className="custom-navbar">
        <div className="navbar-inner">

          {/* ================= BRAND ================= */}
          <div className="brand-container" onClick={() => go("/")}>
  <div className="brand-logo-box">
    
    <div className="brand-text-top">
      Tech<span>Paath</span>
    </div>

    <div className="brand-text-bottom">
      SOLUTIONS
    </div>

  </div>
</div>


          {/* ================= CENTER LINKS ================= */}
          <Nav className="nav-center d-none d-lg-flex">
            {[
              ["/", "Home"],
              ["/internships", "Internships"],
              ["/courses", "Courses"],
              ["/projects", "Projects"],
              ["/contests", "Events"],
              ["/blogs", "Blogs"],
              ["/notes", "Notes"],
              ["/about", "About Us"],
              ["/contact", "Contact Us"],
              ["/faq", "FAQ"],
            ].map(([path, label]) => (
              <span
                key={path}
                className={isActive(path) ? "active" : ""}
                onClick={() => go(path)}
              >
                {label}
              </span>
            ))}
          </Nav>

          {/* ================= RIGHT ================= */}
          <div className="nav-right">
            {user ? (
              <div className="profile-wrapper">
                <div
                  className="profile-trigger"
                  onClick={() => setProfileOpen(!profileOpen)}
                >
                  <Image
                    src={profilePic}
                    roundedCircle
                    className="profile-pic"
                    onError={(e) => {
                      e.target.onerror = null; // 🔒 infinite loop protection
                      e.target.src = DEFAULT_AVATAR;
                    }}
                  />
                  <span className="profile-btn">Profile</span>
                </div>

                {profileOpen && (
                  <div className="profile-dropdown">
                    <div className="profile-header">
                      <img
                        src={profilePic}
                        alt="avatar"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = DEFAULT_AVATAR;
                        }}
                      />
                      <div>
                        <h6>{user.name}</h6>
                        <span>{role.toUpperCase()}</span>
                      </div>
                    </div>

                    <div className="profile-actions">
                      <button onClick={() => go("/profile")}>
                        👤 My Profile
                      </button>

                      {role === "admin" && (
                        <button onClick={() => go("/admin")}>
                          🛠 Admin Panel
                        </button>
                      )}

                      <button className="danger" onClick={handleLogout}>
                        🚪 Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Button variant="outline-light" onClick={() => go("/login")}>
                  Login
                </Button>
                <Button variant="success" onClick={() => go("/signup")}>
                  Sign Up
                </Button>
              </>
            )}

            <button
              className="menu-btn d-lg-none"
              onClick={() => setSidebarOpen(true)}
            >
              <AlignJustify size={26} />
            </button>
          </div>
        </div>
      </Navbar>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default NavbarComponent;
