// ===============================
// AUTH CONTEXT – FINAL PRODUCTION READY
// ===============================

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import axios from "../api/axiosInstance";

const AuthContext = createContext();

// ===============================
// PROVIDER
// ===============================
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ===============================
     🔄 LOAD USER + TOKEN (ON REFRESH)
  ================================ */
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      const storedToken = localStorage.getItem("token");

      if (storedUser && storedToken) {
        const parsedUser = JSON.parse(storedUser);

        setUser(parsedUser);
        setToken(storedToken);

        // 🔐 Attach token globally
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${storedToken}`;

        // 📦 Load enrollments
        fetchEnrollments(storedToken);
      }
    } catch (err) {
      console.error("Auth load error:", err);
      logout();
    } finally {
      setLoading(false);
    }
  }, []);

  /* ===============================
     📦 FETCH ENROLLMENTS
  ================================ */
  const fetchEnrollments = async (authToken) => {
    try {
      const res = await axios.get("/enrolls/my", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      const courses = res.data.map((e) => e.course);
      setEnrolledCourses(courses);
    } catch (err) {
      console.warn("Enrollment fetch failed");
      setEnrolledCourses([]);
    }
  };

  /* ===============================
     🔐 LOGIN
  ================================ */
  const login = (userData, authToken) => {
    const normalizedUser = {
      _id: userData._id,
      name: userData.name,
      email: userData.email,
      role: userData.role || "user",
      avatar: userData.avatar || null,
      phone: userData.phone || "",
      course: userData.course || "",
      year: userData.year || "",
    };

    // Save to storage
    localStorage.setItem(
      "user",
      JSON.stringify(normalizedUser)
    );
    localStorage.setItem("token", authToken);

    // Set state
    setUser(normalizedUser);
    setToken(authToken);

    // Attach token globally
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${authToken}`;

    // Load enrollments
    fetchEnrollments(authToken);
  };

  /* ===============================
     🔄 UPDATE USER
  ================================ */
  const updateUser = (data) => {
    setUser((prev) => {
      if (!prev) return prev;

      const updated = {
        ...prev,
        ...data,
        avatar: data.avatar ?? prev.avatar,
      };

      localStorage.setItem(
        "user",
        JSON.stringify(updated)
      );

      return updated;
    });
  };

  /* ===============================
     📦 MANUAL ENROLLMENT REFRESH
  ================================ */
  const refreshEnrollments = async () => {
    if (!token) return;
    await fetchEnrollments(token);
  };

  /* ===============================
     🚪 LOGOUT
  ================================ */
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    delete axios.defaults.headers.common[
      "Authorization"
    ];

    setUser(null);
    setToken(null);
    setEnrolledCourses([]);
  };

  /* ===============================
     CONTEXT VALUE
  ================================ */
  const value = {
    user,
    token,
    enrolledCourses,
    login,
    logout,
    updateUser,
    refreshEnrollments,
    isAuthenticated: !!user,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// ===============================
// HOOK
// ===============================
export const useAuth = () => useContext(AuthContext);
