import { Request, Response } from "express";
import AppResponse from "../../utils/AppResponse";

class TestController {
  async index(req: Request, res: Response) {
    return AppResponse.sendSuccess({
      res: res,
      data: null,
      message: "TO PIONEER THE NEXT WAY OF HK SCHOLARS MANAGEMENT",
      code: 200,
    });
  }
}

export default TestController;
