import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUserId,
  getUsers,
  updateUser,
} from "../controllers/user.controllers";
import { Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("ALIVE");
});

router.get("/users", getUsers);

router.get("/users/:id", getUserId);

router.post("/users", createUser);

router.put("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

export default router;
