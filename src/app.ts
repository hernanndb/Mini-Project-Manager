import  express  from "express";
import  server  from "./server.js"
import  router from "./Routes/auth.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

//Configuracion de Carpeta raiz Public

const __dirname = path.dirname(fileURLToPath(import.meta.url));                   
app.use(express.static(path.join(__dirname, "public")));

server(app);