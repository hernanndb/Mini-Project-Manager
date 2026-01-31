import { Application } from "express";


 export default function server (app:Application) {
    app.listen(3000, () =>console.log("Servidor en http://localhost:3000"))
}