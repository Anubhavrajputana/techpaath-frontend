// frontend/src/protection/AdminRoute.jsx
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

/**
 * AdminRoute
 *
 * Behavior:
 * - If parent passes role="admin" → allow immediately.
 * - Otherwise → verify token using /api/auth/me.
 * - If verified admin → allow.
 * - Else → redirect home "/".
 */

export default function AdminRoute({ role, children }) {
  const [checking, setChecking] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // QUICK CHECK — if role passed down already "admin"
    if (role === "admin") {
      setIsAdmin(true);
      setChecking(false);
      return;
    }

    // Otherwise verify via backend
    const token = localStorage.getItem("token");
    if (!token) {
      setIsAdmin(false);
      setChecking(false);
      return;
    }

    const verify = async () => {
      try {
        const res = await axios.get("/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const user = res?.data?.user;

        if (user && user.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } catch (err) {
        setIsAdmin(false);
      } finally {
        setChecking(false);
      }
    };

    verify();
  }, [role]);

  if (checking) {
    return (
      <div className="p-6 text-white text-center">
        Checking permissions...
      </div>
    );
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
}
