// src/notes/cpp/index.js

import basics from "./basics";
import oops from "./oops";
import advanced from "./advanced";

const cppNotes = {
    id: "cpp",
  title: "C++ Programming Language",
  description:
    "Complete C++ notes from Basics to Advanced with Deep OOPS concepts",

  // 🔥 NotesViewer expects `topics`
  topics: [
    ...basics.topics,
    ...oops.topics,
    ...advanced.topics,
  ],
};

export default cppNotes;
