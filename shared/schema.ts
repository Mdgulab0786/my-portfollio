import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { z } from "zod";

// 🔸 Define Drizzle tables
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// ✅ Zod schemas defined manually (no drizzle-zod used here)
export const insertUserSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const insertContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

// 🔹 TypeScript types inferred from Zod schemas
export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertContact = z.infer<typeof insertContactSchema>;

// 🔹 Types inferred from Drizzle ORM (DB rows)
export type User = typeof users.$inferSelect;
export type Contact = typeof contacts.$inferSelect;
