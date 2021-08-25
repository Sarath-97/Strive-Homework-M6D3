import express from "express";
import cors from "cors"
import db from "./db/models/product.js";


const server = express();

const PORT = process.env.PORT;

server.use(cors());

server.use(express.json());
// server.use("/category", categoryRoutes);
// server.use("/products", products);

db.sequelize

  .sync()
  .then(() => {
    server.listen(PORT, () =>
      console.log(`Server is running on port: ${port}`)
    );

    server.on("error", (error) =>
      console.log(`Server crashed due to ${error}`)
    );
  })

  .catch((e) => console.log(e));
