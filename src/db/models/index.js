import products from "./Blog.js";
import sequelize from "../index.js";

// Author.beforeCreate(async (user) => {
//     const hashedPassword = await hashPassword(user.password);
//     user.password = hashedPassword;
//   });

// products.belongsTo(Author);

export default {sequelize, products };