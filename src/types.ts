import { Request, Response} from 'express';

export interface User {
  id: number,
  name: string,
  carColorId: number,
}

export interface Color {
  id: number,
  name: string,
}

export type ControllerAction = (req: Request, res: Response) => void;