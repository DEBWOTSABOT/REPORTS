import express from "express";
import mongoose from "mongoose";
import quoteRoutes from "./routes/quoteRoutes.js";
import salesOrderRoutes from "./routes/salesOrderRoutes.js";
import salesMetricsRoutes from "./routes/salesMetricsRoutes.js";
import meetingRoutes from "./routes/meetingRoutes.js";
import invoiceRoutes from "./routes/invoiceRoutes.js";
import visitRoutes from "./routes/visitRoutes.js";
import cors from "cors";

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// const databaseURL =
//   "mongodb+srv://BackendUser:rUOIpCKLc0oVpmtw@clusterkreupai.imb19.mongodb.net/Quotes-management?retryWrites=true&w=majority&appName=ClusterKreupAI";
const databaseURL = "mongodb://localhost:27017/REPORTS";
// Database connection
mongoose
  .connect(databaseURL, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

// Routes
app.use("/api", quoteRoutes);
app.use("/api", salesOrderRoutes);
app.use("/api", salesMetricsRoutes);
app.use("/api", meetingRoutes);
app.use("/api", invoiceRoutes);
app.use("/api", visitRoutes);

app.listen(port, () => {
  console.log(`Server running on port:${port}`);
});
