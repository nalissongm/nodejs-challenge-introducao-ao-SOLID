import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { headers } = request;
    const user_id = String(headers.user_id);

    try {
      const users = this.listAllUsersUseCase.execute({ user_id });
      return response.status(200).json(users);
    } catch (err) {
      if (err.message === "User not exists!") {
        return response.status(404).json({ error: err.message });
      }

      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListAllUsersController };
