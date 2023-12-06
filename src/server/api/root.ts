import { createTRPCRouter } from "~/server/api/trpc";
import { creativeRouter } from "./routers/creative";
import { jobRouter } from "./routers/job";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  creative: creativeRouter,
  job: jobRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
