import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white mb-6 animate-slide-up">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Md Gulab
              </span>
            </h1>
            <p
              className="text-xl text-slate-600 dark:text-slate-300 mb-8 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Full Stack Developer passionate about creating beautiful,
              functional web applications that solve real-world problems.
            </p>
            <div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Hire Me
              </Button>
              <Button
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-8 py-3 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-800 transition-all duration-200"
                onClick={() => {
                  // Option 1: Direct download from public folder
                  const link = document.createElement("a");
                  link.href = "Md gulab resume.pdf";
                  link.download = "Md gulab resume";
                  link.click();

                  // Option 2: Download via backend API (uncomment if you prefer)
                  // window.open('/api/resume', '_blank');
                }}
              >
                Download Resume
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="Md Gulab.png"
              alt="Md gulab"
              className="w-80 h-80 rounded-full shadow-2xl animate-float border-8 border-white dark:border-slate-700 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
