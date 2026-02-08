// ===============================
// 📘 C PROGRAMMING NOTES INDEX
// ===============================

// DATA-BASED NOTES
import Intro from "./Intro";
import Variables from "./Variables";
import Operators from "./Operators";
import Conditions from "./Conditions";
import Loops from "./Loops";
import Functions from "./Functions";
import Arrays from "./Arrays";
import Pointers from "./Pointers";
import FileHandling from "./FileHandling";
import OOPSIntro from "./OOPSIntro";
import Encapsulation from "./Encapsulation";
import Inheritance from "./Inheritance";
import Polymorphism from "./Polymorphism";

// COMPONENT-BASED NOTE
import Abstraction from "./Abstraction";

// ===============================
// 📚 NOTES CONFIG
// ===============================
const cNotes = {
  id: "c",
  title: "C Programming Notes",

  description: `
Complete C Programming Notes from Beginner to Advanced level.
Includes theory, examples, diagrams, flowcharts, dry runs and
interview-oriented explanations.
`,

  topics: [
    {
  id: "intro",
  title: "Introduction to C Programming",
  component: Intro,
},
    {
  id: "variables",
  title: "Variables & Data Types in C",
  component: Variables,
},
    {
  id: "operators",
  title: "Operators in C",
  component: Operators,
},
    {
  id: "conditions",
  title: "Conditional Statements in C",
  component: Conditions,
},
    {
  id: "loops",
  title: "Loops in C (Advanced)",
  component: Loops,
},
    {
  id: "functions",
  title: "Functions in C",
  component: Functions,
},
    {
  id: "arrays",
  title: "Arrays in C",
  component: Arrays,
},

    {
  id: "pointers",
  title: "Pointers in C",
  component: Pointers,
},
    {
  id: "file-handling",
  title: "File Handling in C",
  component: FileHandling,
},
    {
  id: "oops-intro",
  title: "Introduction to OOPS in C",
  component: OOPSIntro,
},
    {
      id: "abstraction",
      title: "Abstraction in C",
      component: Abstraction,
    },

    {
  id: "encapsulation",
  title: "Encapsulation in C",
  component: Encapsulation,
},
    {
  id: "inheritance",
  title: "Inheritance in C",
  component: Inheritance,
},
    {
  id: "polymorphism",
  title: "Polymorphism in C",
  component: Polymorphism,
},
  ],
};

export default cNotes;
