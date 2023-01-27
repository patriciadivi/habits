import Fastify from "fastify";
// import cors from '@fastify/cors'
import { PrismaClient } from "@prisma/client";

const app = Fastify();
const prisma = new PrismaClient();

// app.register(cors)

app.get("/habits", async () => {
  const habits = await prisma.habit.findMany();

  return habits;
});

app.listen({ port: 3333 }).then((port) => {
  console.log(`HTTP Server running! ${port}`);
});
