import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Spinner, Alert } from "react-bootstrap";
import axiosInstance from "../api/axiosInstance";
import { useAuth } from "../context/AuthContext";
import "../styles/Profile.css";

const DEFAULT_AVATAR =
  "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=User";

const avatars = [
  "/avtar 1.png",
  "/avtar 2.png",
  "/avtar 3.png",
  "/avtar 4.png",
];

const Profile = () => {
  const navigate = useNavigate();
  const { user, updateUser, logout } = useAuth();

  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    course: "",
    year: "",
    phone: "",
    avatar: "",
  });

  /* =========================
     🔄 LOAD USER DATA (SAFE)
  ========================= */
  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    // 🔒 Don't override while editing
    if (editing) return;

    setProfile({
      name: user.name || "",
      email: user.email || "",
      course: user.course || "",
      year: user.year || "",
      phone: user.phone || "",
      avatar:
        user.avatar ||
        `https://ui-avatars.com/api/?name=${encodeURIComponent(
          user.name || "User"
        )}`,
    });
  }, [user, editing, navigate]);

  /* =========================
     ✏️ INPUT CHANGE (MISSING FIX)
  ========================= */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =========================
     💾 SAVE PROFILE
  ========================= */
  const handleSave = async () => {
    try {
      // 1️⃣ UPDATE PROFILE
      await axiosInstance.put("/user/profile", {
        name: profile.name,
        course: profile.course,
        year: profile.year,
        phone: profile.phone,
      });

      // 2️⃣ RE-FETCH UPDATED USER
      const fresh = await axiosInstance.get("/user/profile");

      // 3️⃣ UPDATE CONTEXT + LOCAL STATE
      updateUser(fresh.data);

      setProfile({
        name: fresh.data.name || "",
        email: fresh.data.email || "",
        course: fresh.data.course || "",
        year: fresh.data.year || "",
        phone: fresh.data.phone || "",
        avatar: fresh.data.avatar || profile.avatar,
      });

      setEditing(false);
      setMessage({ type: "success", text: "Profile updated successfully" });
    } catch (err) {
      console.error(err);
      setMessage({ type: "danger", text: "Profile update failed" });
    }
  };

  /* =========================
     🧑‍🎨 SELECT AVATAR
  ========================= */
  const selectAvatar = async (avatar) => {
    try {
      const res = await axiosInstance.put("/user/profile/avatar", { avatar });

      updateUser(res.data);
      setProfile((prev) => ({ ...prev, avatar }));
    } catch {
      setMessage({ type: "danger", text: "Avatar update failed" });
    }
  };

  /* =========================
     ⏳ LOADING
  ========================= */
  if (!user) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 profile-bg">
      <Card className="profile-card p-4">
        <h3 className="text-center mb-3">👤 My Profile</h3>

        {/* PROFILE AVATAR */}
        <div className="text-center mb-3">
          <img
            src={
              profile.avatar ||
              user.avatar ||
              `https://ui-avatars.com/api/?name=${encodeURIComponent(
                profile.name || "User"
              )}`
            }
            className="profile-avatar"
            alt="avatar"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = DEFAULT_AVATAR;
            }}
          />
        </div>

        {/* AVATAR OPTIONS */}
        <div className="d-flex justify-content-center gap-2 mb-3">
          {avatars.map((a) => (
            <img
              key={a}
              src={a}
              alt="avatar-option"
              className={`avatar-option ${
                profile.avatar === a ? "active" : ""
              }`}
              onClick={() => selectAvatar(a)}
              onError={(e) => (e.target.style.display = "none")}
            />
          ))}
        </div>

        {message.text && (
          <Alert variant={message.type}>{message.text}</Alert>
        )}

        {/* EDITABLE FIELDS */}
        {["name", "course", "year", "phone"].map((field) => (
          <div className="mb-2" key={field}>
            <label className="form-label text-capitalize">{field}</label>
            <input
              className="form-control"
              name={field}
              value={profile[field]}
              onChange={handleChange}
              disabled={!editing}
            />
          </div>
        ))}

        {/* EMAIL (READ ONLY) */}
        <div className="mb-2">
          <label className="form-label">Email</label>
          <input className="form-control" value={profile.email} disabled />
        </div>

        {/* ACTION BUTTONS */}
        <div className="d-flex justify-content-between mt-4">
          {editing ? (
            <>
              <Button variant="success" onClick={handleSave}>
                Save
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  setEditing(false);
                  setProfile((prev) => ({
                    ...prev,
                    avatar: user.avatar,
                  }));
                }}
              >
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Button variant="primary" onClick={() => setEditing(true)}>
                Edit
              </Button>
              <Button variant="danger" onClick={logout}>
                Logout
              </Button>
            </>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Profile;
