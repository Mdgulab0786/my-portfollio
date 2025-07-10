import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import * as z from "zod";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      console.log("Contact form submission:", req.body);
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      console.log("Contact created successfully:", contact);
      res.json({
        success: true,
        message: "Message sent successfully!",
        contact,
      });
    } catch (err: unknown) {
      console.error("Contact form error:", err);
      if (err instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: err.errors, // ✅ Now TypeScript knows it's a ZodError
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Internal server error",
          error: err instanceof Error ? err.message : "Unknown error",
        });
      }
    }
  });

  // Get all contacts
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  });

  // Resume download endpoint
  app.get("/api/resume", (req, res) => {
    const filePath = path.join(__dirname, "../client/public/assets/resume.pdf");
    res.download(filePath, "Your_Name_Resume.pdf", (err) => {
      if (err) {
        res.status(404).json({ error: "Resume not found" });
      }
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
