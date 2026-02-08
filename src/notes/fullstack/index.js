import HTML from "./frontend/HTML";
import CSS from "./frontend/CSS";
import JavaScript from "./frontend/JavaScript";
import ReactJS from "./frontend/React";

import NodeJS from "./backend/NodeJS";
import Express from "./backend/Express";

import MongoDB from "./database/MongoDB";
import SQL from "./database/SQL";

import JWTAuth from "./advanced/JWTAuth";
import OAuth from "./advanced/OAuth";
import RESTApis from "./advanced/RESTApis";
import Security from "./advanced/Security";
import Docker from "./advanced/Docker";
import Deployment from "./advanced/Deployment";

const fullstackNotes = {
  id: "fullstack",
  title: "Full Stack Web Development",
  topics: [
    { id: "html", title: "HTML", component: HTML },
    { id: "css", title: "CSS", component: CSS },
    { id: "javascript", title: "JavaScript", component: JavaScript },
    { id: "react", title: "React", component: ReactJS },

    { id: "node", title: "Node.js", component: NodeJS },
    { id: "express", title: "Express.js", component: Express },

    { id: "mongodb", title: "MongoDB", component: MongoDB },
    { id: "sql", title: "SQL", component: SQL },

    { id: "jwt", title: "JWT Authentication", component: JWTAuth },
    { id: "oauth", title: "OAuth (Google Login)", component: OAuth },
    { id: "rest", title: "REST APIs", component: RESTApis },
    { id: "security", title: "Security (XSS, CSRF)", component: Security },
    { id: "docker", title: "Docker", component: Docker },
    { id: "deployment", title: "Deployment", component: Deployment },
  ],
};

export default fullstackNotes;
