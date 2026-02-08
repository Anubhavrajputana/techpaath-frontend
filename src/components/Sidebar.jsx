import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import "../styles/sidebar.css";

const menu = [
  { label: "Home", path: "/", icon: "🏠" },
  { label: "Internships", path: "/internships", icon: "🎓" },
  { label: "Courses", path: "/courses", icon: "📚" },
  { label: "Projects", path: "/projects", icon: "🛠️" },
  { label: "Events", path: "/contests", icon: "🚀" },
  { label: "Blogs", path: "/blogs", icon: "📝" },
  { label: "Notes", path: "/notes", icon: "📄" },
  { label: "Profile", path: "/profile", icon: "👤" },
];

export default function Sidebar({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* OVERLAY */}
          <motion.div
            className="sidebar-overlay"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* SIDEBAR */}
          <motion.aside
            className="sidebar"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            {/* HEADER */}
            <div className="sidebar-header">
              <h4>TechPaath Solutions</h4>
              <button className="close-btn" onClick={onClose}>
                <X size={22} />
              </button>
            </div>

            {/* LINKS */}
            <nav className="sidebar-links">
              {menu.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `sidebar-link ${isActive ? "active" : ""}`
                  }
                >
                  <span className="icon">{item.icon}</span>
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
