import { api } from "~/trpc/server";

type PageProps = {
  params: { username: string[] };
};

export default async function Page({ params }: PageProps) {
  const [username] = params.username;

  if (!username) {
    return <div>Oho something went wrong!</div>;
  }

  const user = await api.creative.getByUsername.query({ username });

  if (!user) {
    return <div>Could not found user</div>;
  }

  return <div>Hello {user.username}</div>;
}
