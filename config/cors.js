// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Authorization, content-type");
//   res.setHeader("Access-Control-Allow-Credentials", "true");

//   console.log(req.method);
//   console.log("BODY: ", req.body);

//   if (req.method === "OPTIONS") {
//     return res.sendStatus(200);
//   }

//   next();
// });

import cors from "cors";

const customCorsMiddleware = cors({
  origin: (origin, callback) => {
    const allowed = [
      "http://localhost:3000",
      "http://myfrontend.com",
      "http://127.0.0.1:5500",
    ];
    if (allowed.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Authorization", "content-type"],
  credentials: true,
});

export default customCorsMiddleware;
