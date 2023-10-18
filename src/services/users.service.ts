import { User } from "../types";

const users = [
  { id: 1, name: 'Joe Biden', carColorId: 5 },
  { id: 2, name: 'Elon Musk', carColorId: 4 },
  { id: 3, name: 'Pan Roman', carColorId: 2 },
];

function getMaxId(elements: User[]): number {
  const ids: number[] = elements.map(({ id }) => id);

  return Math.max(...ids) + 1;
}

const getAll = () => users;

const findById = (userId: number): User | undefined => {
  const users = UsersService.getAll();

  return users.find(({ id }) => id === Number(userId));
}

const create = ({ name, carColorId }: Omit<User, 'id'>) => {
  const newUser = {
    id: getMaxId(users),
    name,
    carColorId,
  };

  users.push(newUser);

  return newUser;
}

export const UsersService = {
  getAll,
  create,
  findById,
};

