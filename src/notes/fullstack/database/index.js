import SQL from "./SQL";
import MongoDB from "./MongoDB"; // agar ho

const database = {
  id: "database",
  title: "Database",
  topics: [
    {
      id: "sql",
      title: "SQL",
      component: SQL
    },

    {
      id: "mongodb",
      title: "MongoDB",
      component: MongoDB
    }
  ]
};

export default database;
