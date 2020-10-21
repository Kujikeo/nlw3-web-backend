import { Router } from "express";

import multer from "multer";
import uploadconfig from "./config/upload";
import OrphanagesController from "./controllers/OrphanagesController";

const routes = Router();
const upload = multer(uploadconfig);

//rota = conjunto
//Recurso = usuario

//Query: localhost:3333/users?nome=teste
//Parms: localhost:3333/users/1
//Body: corpo do json
//Header: Cabeçalho da req

routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.show);
routes.post("/orphanages", upload.array("images"), OrphanagesController.create);

export default routes;
