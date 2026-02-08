import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

export default function AdminProjects() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null); // project being edited
  const [form, setForm] = useState({ title: "", description: "", studentId: "", studentName: "", courseId: "", deployUrl: "" });
  const [screenshots, setScreenshots] = useState([]);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = () => {
    setLoading(true);
    axiosInstance.get("/projects").then(res => setList(res.data)).catch(err => alert("Cannot fetch")).finally(()=>setLoading(false));
  };

  const startCreate = () => { setEditing(null); setForm({ title:"", description:"", studentId:"", studentName:"", courseId:"", deployUrl:"" }); setScreenshots([]); setVideo(null); };
  const startEdit = (p) => { setEditing(p); setForm({ title:p.title, description:p.description, studentId:p.studentId?._id || p.studentId, studentName:p.studentName, courseId:p.courseId, deployUrl:p.deployUrl }); setScreenshots([]); setVideo(null); };

  const submit = async () => {
    try {
      const fd = new FormData();
      fd.append("title", form.title);
      fd.append("description", form.description);
      fd.append("studentId", form.studentId);
      fd.append("studentName", form.studentName);
      fd.append("courseId", form.courseId);
      fd.append("deployUrl", form.deployUrl);
      screenshots.forEach(f => fd.append("screenshots", f));
      if (video) fd.append("video", video);

      if (editing) {
        await axiosInstance.put(`/projects/admin/${editing._id}`, fd, { headers: { "Content-Type": "multipart/form-data" } });
        alert("Updated");
      } else {
        await axiosInstance.post("/projects/admin/create", fd, { headers: { "Content-Type": "multipart/form-data" } });
        alert("Created");
      }
      fetchList();
      setEditing(null);
    } catch (err) {
      alert(err.response?.data?.message || "Save failed");
    }
  };

  const remove = async (id) => {
    if (!confirm("Delete?")) return;
    await axiosInstance.delete(`/projects/admin/${id}`);
    fetchList();
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Admin Projects</h2>
        <div className="flex gap-2">
          <button onClick={startCreate} className="px-4 py-2 rounded bg-indigo-500 text-white">New Project</button>
        </div>
      </div>

      <div className="grid gap-4">
        {list.map(p => (
          <div key={p._id} className="p-4 rounded-lg bg-white/5 flex justify-between items-center">
            <div>
              <div className="font-bold">{p.title}</div>
              <div className="text-sm text-slate-300">{p.studentName} • {p.courseId}</div>
            </div>
            <div className="flex gap-2">
              <button onClick={()=>startEdit(p)} className="px-3 py-1 rounded bg-yellow-500 text-white">Edit</button>
              <button onClick={()=>remove(p._id)} className="px-3 py-1 rounded bg-red-600 text-white">Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-white/5 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">{editing ? "Edit Project" : "Create Project"}</h3>
        <input className="w-full p-2 rounded mb-2 bg-white/6" placeholder="Title" value={form.title} onChange={e=>setForm({...form, title:e.target.value})} />
        <textarea className="w-full p-2 rounded mb-2 bg-white/6" placeholder="Description" value={form.description} onChange={e=>setForm({...form, description:e.target.value})} />
        <input className="w-full p-2 rounded mb-2 bg-white/6" placeholder="Student ID" value={form.studentId} onChange={e=>setForm({...form, studentId:e.target.value})} />
        <input className="w-full p-2 rounded mb-2 bg-white/6" placeholder="Student Name" value={form.studentName} onChange={e=>setForm({...form, studentName:e.target.value})} />
        <input className="w-full p-2 rounded mb-2 bg-white/6" placeholder="Course ID" value={form.courseId} onChange={e=>setForm({...form, courseId:e.target.value})} />
        <input className="w-full p-2 rounded mb-2 bg-white/6" placeholder="Deployment URL" value={form.deployUrl} onChange={e=>setForm({...form, deployUrl:e.target.value})} />

        <label className="block mb-2">Screenshots (max 6)</label>
        <input type="file" accept="image/*" multiple onChange={e=>setScreenshots(Array.from(e.target.files))} />

        <label className="block mt-2 mb-2">Video (max 20MB)</label>
        <input type="file" accept="video/*" onChange={e=>setVideo(e.target.files[0])} />

        <div className="mt-3 flex gap-2">
          <button onClick={submit} className="px-4 py-2 rounded bg-green-600 text-white">{editing ? "Update" : "Create"}</button>
          <button onClick={()=>{ setEditing(null); setForm({title:"",description:"",studentId:"",studentName:"",courseId:"",deployUrl:""}); }} className="px-4 py-2 rounded bg-gray-600 text-white">Reset</button>
        </div>
      </div>
    </div>
  );
}
