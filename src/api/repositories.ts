import axios from "axios";

export interface RepoType {
  id: number;
  userId: number;
  title: string;
  description: string;
  starCount: number;
}

export const getReposByUserName = async (userName: string) => {
  const url = `https://api.github.com/users/${userName}/repos`;
  const { data: items } = await axios.get(url);
  const repositories: Array<RepoType> = items.map((item: any) => ({
    id: item.id,
    userId: item.owner.id,
    title: item.name,
    description: item.description,
    starCount: item.stargazers_count,
  }));
  return repositories;
};
