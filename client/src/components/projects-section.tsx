import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB featuring payment integration and admin dashboard.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      technologies: ["React", "Node.js", "MongoDB"],
      techColors: [
        "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
        "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
        "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
      ],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      technologies: ["React", "Firebase", "Tailwind"],
      techColors: [
        "bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200",
        "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
        "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200"
      ],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      technologies: ["JavaScript", "API", "CSS3"],
      techColors: [
        "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
        "bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200",
        "bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200"
      ],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Social Media Analytics",
      description: "Comprehensive social media analytics dashboard with data visualization, engagement tracking, and automated reporting.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      technologies: ["Vue.js", "Laravel", "Chart.js"],
      techColors: [
        "bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200",
        "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
        "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
      ],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">Some of my recent work</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-slate-50 dark:bg-slate-900 rounded-xl shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={`px-3 py-1 rounded-full text-sm ${project.techColors[techIndex]}`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 p-0"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 p-0"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
