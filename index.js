import { app } from "./app.js";
import { createdb } from "./createdb.js";
import Role from "./src/models/Role.js";

createdb();

app.listen(5000);
console.log("\n\n\n\n");




