import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const jobRouter = createTRPCRouter({
  getAllJobs: publicProcedure.query(({ ctx }) => {
    return ctx.db.job.findMany();
  }),
});
