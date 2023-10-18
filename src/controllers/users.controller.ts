import { UsersService } from '../services/users.service';
import { ControllerAction } from '../types';

const getAll: ControllerAction = ((req, res) => {
  const users = UsersService.getAll();
  res.send(users);
});

const getById: ControllerAction = ((req, res) => {
  const { userId } = req.params;

  const user = UsersService.findById(+userId);

  if (!user) {
    res.sendStatus(404);

    return;
  }
  
  res.send(user);
});

const create: ControllerAction = ((req, res) => {
  const { name, carColorId } = req.body;

  if (
    typeof name !== 'string'
    || typeof carColorId !== 'number'
  ) {
      res.sendStatus(422);

      return;
  }
  
  const newUser = UsersService.create({ name, carColorId });

  res.status(201);
  res.send(newUser);
});

export const UsersController = {
  getAll,
  create,
  getById,
};