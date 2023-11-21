import { Request, Response } from "express";
import { User } from "../entities/User";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    console.log(users);

    res.status(200).json(users);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

export const getUserId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findOneBy({ id: parseInt(id) });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname } = req.body;
    const user = new User();

    user.firstname = firstname;
    user.lastname = lastname;
    await user.save();

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error("Error in createUser:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await User.findOneBy({ id: parseInt(id) });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await User.update({ id: parseInt(id) }, req.body);

    return res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error in updateUser:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await User.findOneBy({ id: parseInt(id) });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.remove();

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error in deleteUser:", error);
    res.status(500).send("Internal Server Error");
  }
};
