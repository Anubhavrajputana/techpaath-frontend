import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  /* ===============================
     🔄 LOAD USER FROM STORAGE (ONCE)
  ================================ */
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch {
      localStorage.removeItem("user");
      setUser(null);
    }
  }, []);

  /* ===============================
     🔐 LOGIN (SAFE & NORMALIZED)
  ================================ */
  const login = (userData, token) => {
    const normalized = {
      _id: userData._id,
      name: userData.name,
      email: userData.email,
      role: userData.role || "user",
      avatar: userData.avatar || null,
      phone: userData.phone || "",
      course: userData.course || "",
      year: userData.year || "",
    };

    localStorage.setItem("user", JSON.stringify(normalized));
    localStorage.setItem("token", token);

    setUser(normalized);
  };

  /* ===============================
     🔄 UPDATE USER (SAFE MERGE)
  ================================ */
  const updateUser = (data) => {
    setUser((prev) => {
      if (!prev) return prev;

      const merged = {
        ...prev,
        ...data,
        avatar: data.avatar ?? prev.avatar,
      };

      localStorage.setItem("user", JSON.stringify(merged));
      return merged;
    });
  };

  /* ===============================
     📦 ENROLLMENTS (MANUAL ONLY)
  ================================ */
  const refreshEnrollments = async () => {
    try {
      const { default: axios } = await import("../api/axiosInstance");
      const res = await axios.get("/enrolls/my");
      setEnrolledCourses(res.data.map((e) => e.course));
    } catch {
      setEnrolledCourses([]);
    }
  };

  /* ===============================
     🚪 LOGOUT (SOFT RESET)
  ================================ */
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    setUser(null);
    setEnrolledCourses([]);

    // ❌ NO HARD RELOAD
    // navigation should be handled by router
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        enrolledCourses,
        login,
        updateUser,
        refreshEnrollments,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
