import axios from "axios";

export interface UserType {
  id: number;
  name: string;
}

export const getUsersByName = async (name: string) => {
  const url = `https://api.github.com/search/users?q=${name}&per_page=5`;
  const {
    data: { items },
  } = await axios.get(url);
  const users: Array<UserType> = items.map((item: any) => ({
    id: item.id,
    name: item.login,
  }));
  return users;
};
