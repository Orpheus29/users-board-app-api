import { ControllerAction } from '../types';
import { ColorService } from '../services/colors.service';

const getAll: ControllerAction = (req, res) => {
  const colors = ColorService.getAll();

  res.send(colors);
};

export const ColorsController = {
  getAll,
}
