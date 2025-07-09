import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

// Type definitions
type SubmitStatus = "success" | "error" | null;

interface FormData {
  [key: string]: string;
}

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const encode = (data: FormData): string => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Convert FormData to object
    const data: FormData = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      // Check if we're in production (Netlify)
      const isProduction = window.location.hostname !== 'localhost';
      
      if (isProduction) {
        // Production: Use Netlify forms
        const response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...data })
        });

        if (response.ok) {
          setSubmitStatus("success");
          form.reset();
        } else {
          setSubmitStatus("error");
        }
      } else {
        // Development: Simulate success after 1 second
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmitStatus("success");
        form.reset();
        console.log("Form data (development):", data);
      }
    } catch (error) {
      // Only show error in production
      const isProduction = window.location.hostname !== 'localhost';
      if (isProduction) {
        console.error("Form submission error:", error);
        setSubmitStatus("error");
      } else {
        // Development fallback - show success
        setSubmitStatus("success");
        form.reset();
        console.log("Development mode - Form submitted successfully:", data);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Let's discuss your next project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
              Let's work together
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              I'm always open to discussing new opportunities, creative
              projects, or potential collaborations. Whether you're a startup
              looking to build your first product or an established company
              seeking to modernize your digital presence, I'd love to hear from
              you.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-blue-600 dark:text-blue-400 w-5 h-5 mr-4" />
                <span className="text-slate-700 dark:text-slate-300">
                  team66415@email.com
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="text-blue-600 dark:text-blue-400 w-5 h-5 mr-4" />
                <span className="text-slate-700 dark:text-slate-300">
                  +91 97112143
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-blue-600 dark:text-blue-400 w-5 h-5 mr-4" />
                <span className="text-slate-700 dark:text-slate-300">
                  New Delhi, India
                </span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/md-gulab-team66/"
                  className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors duration-200"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/Mdgulab0786"
                  className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors duration-200"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-200"
                >
                  <i className="fab fa-dribbble"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 text-green-700 dark:text-green-300 rounded-lg">
                <p className="font-semibold">Message sent successfully! ✅</p>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-300 rounded-lg">
                <p className="font-semibold">Error sending message ❌</p>
                <p>Please try again or contact me directly via email.</p>
              </div>
            )}

            <form
              name="contact"
              method="POST"
              onSubmit={handleSubmit}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-6"
            >
              {/* Netlify hidden inputs */}
              <input type="hidden" name="form-name" value="contact" />
              <p style={{ display: "none" }}>
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              <div>
                <Label
                  htmlFor="name"
                  className="text-slate-700 dark:text-slate-300"
                >
                  Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="text-slate-700 dark:text-slate-300"
                >
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <Label
                  htmlFor="subject"
                  className="text-slate-700 dark:text-slate-300"
                >
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  className="mt-2 border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div>
                <Label
                  htmlFor="message"
                  className="text-slate-700 dark:text-slate-300"
                >
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-2 border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                  placeholder="Tell me about your project, requirements, timeline, budget, etc."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;