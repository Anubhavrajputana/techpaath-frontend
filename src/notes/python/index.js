// src/notes/python/index.js

import Intro from "./Intro";
import VariablesAndDatatypes from "./VariablesAndDatatypes";
import Operators from "./Operators";
import Conditions from "./Conditions";
import Loops from "./Loops";
import Functions from "./Functions";
import Arrays from "./Arrays";
import FileHandling from "./FileHandling";
import OOP from "./OOP";
import PythonInterview from "./PythonInterview";

const pythonNotes = {
  id: "python",
  title: "Python Programming Language",
  description:
    "Complete Python notes from Basics to Advanced with OOP and Interview preparation",

  // ✅ ALWAYS ensure topics is an ARRAY
  topics: [
    {
  id: "intro",
  title: "Introduction to Python",
  component: Intro,
},
    {
  id: "variables-datatypes",
  title: "Variables & Data Types",
  component: VariablesAndDatatypes,
},
    {
  id: "operators",
  title: "Operators in Python",
  component: Operators,
},
    {
  id: "conditions",
  title: "Conditional Statements",
  component: Conditions,
},
    {
  id: "loops",
  title: "Loops in Python",
  component: Loops,
},
    {
  id: "functions",
  title: "Functions",
  component: Functions,
},
    {
  id: "arrays",
  title: "Lists (Arrays)",
  component: Arrays,
},
    {
  id: "file-handling",
  title: "File Handling",
  component: FileHandling,
},
    {
  id: "oop",
  title: "OOP in Python",
  component: OOP,
},
    {
  id: "python-interview",
  title: "Python Interview Notes",
  component: PythonInterview,
},
  ].filter(Boolean), // 🔥 SAFETY: removes undefined imports
};

export default pythonNotes;
