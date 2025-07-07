import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      console.log("Contact form submission:", req.body);
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      console.log("Contact created successfully:", contact);
      res.json({ success: true, message: "Message sent successfully!", contact });
    } catch (error) {
      console.error("Contact form error:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: "Invalid form data", errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: "Internal server error", error: error instanceof Error ? error.message : "Unknown error" });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // Resume download endpoint
  app.get("/api/resume", (req, res) => {
    const filePath = path.join(__dirname, '../client/public/assets/resume.pdf');
    res.download(filePath, 'Your_Name_Resume.pdf', (err) => {
      if (err) {
        res.status(404).json({ error: 'Resume not found' });
      }
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
