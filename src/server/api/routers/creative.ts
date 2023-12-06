import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { createCreativeSchena, getUserSchema } from "~/types/creative";
import { randomBytes } from "crypto";

export const creativeRouter = createTRPCRouter({
  getAllUsers: publicProcedure.query(({ ctx }) => {
    return ctx.db.creative.findMany();
  }),
  getByUsername: publicProcedure
    .input(getUserSchema)
    .query(({ ctx, input }) => {
      const uniqueUser = ctx.db.creative.findUnique({
        where: { username: input.username },
      });

      console.log({ uniqueUser });
      return uniqueUser;
    }),
  create: publicProcedure
    .input(createCreativeSchena)
    .mutation(async ({ ctx, input }) => {


      const email = `${randomBytes(8).toString("hex")}@gmail.com`;

      return ctx.db.creative.create({
        data: {
          email,
          firstName: input.firstName,
          lastName: input.lastName,
          username: input.username,
          country_code: "FR",
          city: input.location,
          birthdate: input.birthdate.toISOString(),
          gender: "male",
          position: "Founder",
        },
      });
    }),
});
