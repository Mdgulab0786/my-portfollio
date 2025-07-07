import { useEffect, useRef, useState } from "react";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    {
      name: "HTML5",
      percentage: 95,
      icon: "fab fa-html5",
      iconColor: "text-orange-600",
      gradientColor: "from-orange-500 to-red-500"
    },
    {
      name: "CSS3",
      percentage: 90,
      icon: "fab fa-css3-alt",
      iconColor: "text-blue-600",
      gradientColor: "from-blue-500 to-cyan-500"
    },
    {
      name: "JavaScript",
      percentage: 88,
      icon: "fab fa-js-square",
      iconColor: "text-yellow-600",
      gradientColor: "from-yellow-500 to-amber-500"
    },
    {
      name: "React",
      percentage: 85,
      icon: "fab fa-react",
      iconColor: "text-cyan-600",
      gradientColor: "from-cyan-500 to-blue-500"
    },
    {
      name: "Node.js",
      percentage: 82,
      icon: "fab fa-node-js",
      iconColor: "text-green-600",
      gradientColor: "from-green-500 to-emerald-500"
    },
    {
      name: "MongoDB",
      percentage: 78,
      icon: "fas fa-database",
      iconColor: "text-purple-600",
      gradientColor: "from-purple-500 to-pink-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Skills & Expertise</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">Technologies I work with</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <i className={`${skill.icon} ${skill.iconColor} text-2xl mr-3`}></i>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{skill.name}</h3>
              </div>
              <div className="bg-slate-200 dark:bg-slate-700 rounded-full h-3 mb-2">
                <div
                  className={`bg-gradient-to-r ${skill.gradientColor} h-3 rounded-full transition-all duration-2000 ease-out`}
                  style={{
                    width: isVisible ? `${skill.percentage}%` : '0%'
                  }}
                ></div>
              </div>
              <span className="text-sm text-slate-600 dark:text-slate-400">{skill.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
