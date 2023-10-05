import { checkout } from "./checkout.js";
import database from "./database.json";

document.getElementById("app").innerHTML =
  "Your price is $" + checkout(["003", "002", "003", "003", "004"], database);
