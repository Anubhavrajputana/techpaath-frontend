import Templates from "./Templates";
import STL from "./STL";
import MemoryManagement from "./MemoryManagement";
const advanced = {
  id: "cpp-advanced",
  title: "Advanced C++",
  topics: [{
  id: "cpp-templates",
  title: "Templates",
  component: Templates,
}, {
  id: "cpp-stl",
  title: "STL (Standard Template Library)",
  component: STL,
}, {
  id: "cpp-memory",
  title: "Memory Management",
  component: MemoryManagement,
}],
};

export default advanced;
