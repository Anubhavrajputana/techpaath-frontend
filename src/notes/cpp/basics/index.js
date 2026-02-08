import Introduction from "./Introduction";
import Variables from "./Variables";
import Operators from "./Operators";
import Conditions from "./Conditions";
import Loops from "./Loops";
import Functions from "./Functions";
import Arrays from "./Arrays";
import Pointers from "./Pointers";

const basics = {
  id: "cpp-basics",
  title: "C++ Basics",
  topics: [
    {
  id: "cpp-intro",
  title: "Introduction to C++",
  component: Introduction,
},
    
{
  id: "cpp-variables",
  title: "Variables & Data Types in C++",
  component: Variables,
},
    {
  id: "cpp-operators",
  title: "Operators in C++",
  component: Operators,
},
    
{
  id: "cpp-conditions",
  title: "Conditional Statements",
  component: Conditions,
},
    {
  id: "cpp-loops",
  title: "Loops in C++",
  component: Loops,
},
    {
  id: "cpp-functions",
  title: "Functions in C++",
  component: Functions,
},
    
{
  id: "cpp-arrays",
  title: "Arrays in C++",
  component: Arrays,
},
    
{
  id: "cpp-pointers",
  title: "Pointers in C++",
  component: Pointers,
},
  ],
};

export default basics;
