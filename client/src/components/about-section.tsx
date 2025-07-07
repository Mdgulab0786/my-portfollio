import { Code, Users, Lightbulb, Rocket } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, efficient code that scales",
      bgColor:
        "from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborating effectively in agile environments",
      bgColor:
        "from-emerald-50 to-teal-50 dark:from-slate-700 dark:to-slate-600",
      iconColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and approaches",
      bgColor:
        "from-purple-50 to-pink-50 dark:from-slate-700 dark:to-slate-600",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing for speed and user experience",
      bgColor:
        "from-amber-50 to-orange-50 dark:from-slate-700 dark:to-slate-600",
      iconColor: "text-amber-600 dark:text-amber-400",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Get to know more about my journey and passion
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <img
              src="Md Gulab.png"
              alt="Md gulab"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover"
            />
          </div>

          <div className="lg:w-1/2 lg:pl-12">
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              I’m currently pursuing a diploma in Computer Science Engineering.
              Dedicated and self-driven with strong foundational knowledge in
              programming, web development, and core CS subjects. Skilled in
              front-end technologies like HTML, CSS, JavaScript, and React.js,
              as well as backend tools including PHP and MySQL. Currently
              learning Python for problem-solving and automation. Passionate
              about continuous learning, content creation, and applying
              technical knowledge to real-world projects. Seeking opportunities
              to grow as a fullstack developer and contribute meaningfully to
              tech-driven teams or startups.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-r ${highlight.bgColor} p-6 rounded-lg`}
                  >
                    <div className="flex items-center mb-3">
                      <Icon className={`${highlight.iconColor} w-6 h-6 mr-3`} />
                      <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                        {highlight.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300">
                      {highlight.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
