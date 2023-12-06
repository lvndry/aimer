import { api } from "~/trpc/server";

export default async function Home() {
  const users = await api.job.getAllJobs.query();
  console.log({ users });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-black">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        WELCOME
      </div>
    </main>
  );
}
