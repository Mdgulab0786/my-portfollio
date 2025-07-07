import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      try {
        const response = await apiRequest("POST", "/api/contact", data);
        return response;
      } catch (error: any) {
        throw new Error(error?.message || "Failed to send message");
      }
    },
    onSuccess: (data) => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: (error: any) => {
      console.error("Contact form error:", error);
      toast({
        title: "Error sending message",
        description: error?.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send a message.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">Let's discuss your next project</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Let's work together</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              I'm always open to discussing new opportunities, creative projects, or potential collaborations. Whether you're a startup looking to build your first product or an established company seeking to modernize your digital presence, I'd love to hear from you.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-blue-600 dark:text-blue-400 w-5 h-5 mr-4" />
                <span className="text-slate-700 dark:text-slate-300">alex.johnson@email.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-blue-600 dark:text-blue-400 w-5 h-5 mr-4" />
                <span className="text-slate-700 dark:text-slate-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-blue-600 dark:text-blue-400 w-5 h-5 mr-4" />
                <span className="text-slate-700 dark:text-slate-300">San Francisco, CA</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors duration-200">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors duration-200">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-200">
                  <i className="fab fa-dribbble"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-slate-700 dark:text-slate-300">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-slate-700 dark:text-slate-300">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="mt-2 border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
