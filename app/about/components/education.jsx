import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faGraduationCap,
  faTrophy,
  faAward,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Me4 from "@/public/image/me12.jpg";
import Me5 from "@/public/image/me9.jpg";
import Me6 from "@/public/image/me10.jpg";

function Wrapper({ children }) {
  return (
    <div className="mx-auto container gap-10 p-10 grid grid-cols-1 my-10">
      <motion.div
        className="flex justify-center items-start flex-col mb-5"
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          type: "spring",
          stiffness: 100,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function Education() {
  const [isExpanded, setIsExpanded] = useState(false);

  const achievementsByYear = {
    2025: [
      {
        icon: faMedal,
        title: "Finalist & Winner – Best Beginner Award",
        subtitle:
          "University Build & Brand Challenge – by Adaa Jaipur, Marwadi University & GDG",
        date: "Feb 2025",
        color: "from-yellow-400 to-orange-500",
      },
      {
        icon: faAward,
        title: "1st Runner-Up",
        subtitle:
          "CodeStorm – Technical Coding Event at MU Fest, Marwadi University",
        date: "Mar 2025",
        color: "from-blue-500 to-purple-600",
      },
      // {
      //   icon: faMedal,
      //   title: "3rd place (Bronze Medal)",
      //   subtitle: "Faculty of Engineering Most Outstanding Student",
      //   date: "Feb 2025",
      //   color: "from-amber-600 to-yellow-600",
      // },
    ],
    2024: [
      {
        icon: faTrophy,
        title: "1st Place (Gold Medal)",
        subtitle:
          "WebArtisan Clash – Frolic 2024, Darshan University (State-Level Tech Fest)",
        date: "Sep 2024",
        color: "from-yellow-400 to-orange-500",
      },
      // {
      //   icon: faMedal,
      //   title: "3rd place (Bronze Medal)",
      //   subtitle: "Fesmaro UI/UX Design",
      //   date: "Jun 2024",
      //   color: "from-amber-600 to-yellow-600",
      // },
    ],
    // 2023: [
    //   {
    //     icon: faAward,
    //     title: "Finalist",
    //     subtitle: "36th National Student Science Week (PIMNAS)",
    //     date: "Nov 2023",
    //     color: "from-blue-500 to-purple-600",
    //   },
    //   {
    //     icon: faMedal,
    //     title: "3rd place (Bronze Medal)",
    //     subtitle: "FORKAFEST 3.0 Web Development competition",
    //     date: "Jan 2023",
    //     color: "from-amber-600 to-yellow-600",
    //   },
    // ],
  };

  // Flatten all achievements into a single array for easier limiting
  const allAchievements = Object.entries(achievementsByYear)
    .sort(([a], [b]) => parseInt(b) - parseInt(a))
    .flatMap(([year, achievements]) =>
      achievements.map((achievement) => ({ ...achievement, year }))
    );

  const visibleAchievements = isExpanded
    ? allAchievements
    : allAchievements.slice(0, 6);
  const hasMoreAchievements = allAchievements.length > 6;

  return (
    <Wrapper>
      <section className="grid gap-8 md:gap-12">
        {" "}
        {/* Header */}
        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Education
          </h1>
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            Get to know more about my educational background.
          </p>
        </motion.div>
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Section - Left */}
          <motion.div
            className="px-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="font-medium text-lg mb-4">2024 - Present</div>
            <div>
              <h2 className="font-semibold text-xl">Marwadi University</h2>
              <h3 className="text-md font-normal mb-3">
                Bachelor of Computer Applications (BCA)
              </h3>
              <div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
                <div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
                  <Image
                    src={Me5}
                    width={400}
                    height={225}
                    alt="University"
                    className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />
                </div>
                <div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
                  <Image
                    src={Me4}
                    width={400}
                    height={225}
                    alt="University"
                    className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />
                </div>

                <div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
                  <Image
                    src={Me6}
                    width={400}
                    height={225}
                    alt="University"
                    className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-gray-600 text-justify title text-lg">
                  Aspiring to become a successful Full Stack Web Developer,
                  I&rsquo;m currently pursuing my Bachelor&apos;s degree in{" "}
                  <span className="text-black font-medium">
                    Computer Applications (BCA)
                  </span>{" "}
                  at{" "}
                  <span className="text-black font-medium">
                    Marwadi University, Rajkot
                  </span>
                  . My journey in tech is fueled by curiosity and
                  dedication—combining creative front-end design with efficient
                  back-end development to build meaningful digital solutions.
                  <br />
                  <br />
                  Beyond academics, I&apos;m an active member of the{" "}
                  <span className="text-black font-medium">
                    Google Developer Groups (GDG) on Campus
                  </span>
                  , where I stay connected with the developer community, learn
                  from tech talks, and collaborate on student-driven
                  initiatives.
                  <br />
                  <br />
                  I&apos;ve proudly secured a{" "}
                  <span className="text-black font-medium">First Rank</span> in
                  the{" "}
                  <span className="text-black font-medium">
                    WebArtisan Clash
                  </span>{" "}
                  at Frolic 2024, organized by Darshan University. I was also a{" "}
                  <span className="text-black font-medium">finalist</span> in
                  the{" "}
                  <span className="text-black font-medium">
                    University Build and Brand Challenge
                  </span>
                  , where I won{" "}
                  <span className="text-black font-medium">
                    Best Beginner for Outstanding Effort and Creativity
                  </span>
                  . The event was hosted by{" "}
                  <span className="text-black font-medium">Adaa Jaipur</span> in
                  collaboration with{" "}
                  <span className="text-black font-medium">
                    Marwadi University
                  </span>{" "}
                  and{" "}
                  <span className="text-black font-medium">
                    Google Developer Groups
                  </span>
                  .
                  <br />
                  <br />
                  I&apos;m passionate about solving real-world problems through
                  code, especially in the field of web development. Whether
                  it&apos;s building user-friendly interfaces or writing
                  efficient backend logic, I enjoy turning ideas into working
                  solutions. Always learning, experimenting, and growing —
                  I&apos;m excited to explore new technologies and contribute to
                  impactful digital experiences.
                </p>
              </div>
              {/* <div className="flex flex-wrap gap-2 mt-4 text-sm">
                <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                  GPA: 3.9 out of 4
                </div>
              </div> */}
            </div>
          </motion.div>{" "}
          {/* Achievements Section - Right */}
          <motion.div
            className="flex flex-col justify-start px-5 md:px-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="font-semibold text-xl mt-7">Achievements</h2>
            <p className="text-md font-normal mb-3 md:mb-6">
              Some of my achievements during my study.
            </p>

            {/* Achievements Container with transparent bottom effect */}
            <div className="relative">
              <div className="space-y-4">
                {/* Show visible achievements */}
                <AnimatePresence>
                  {visibleAchievements.map((achievement, index) => (
                    <motion.div
                      key={`${achievement.year}-${index}`}
                      className="group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      {/* Year indicator for first achievement of each year */}
                      {index === 0 ||
                      visibleAchievements[index - 1]?.year !==
                        achievement.year ? (
                        <div className="flex items-center gap-3 mb-3 mt-2">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-xs font-bold text-gray-600">
                              {achievement.year}
                            </span>
                          </div>
                          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                        </div>
                      ) : null}

                      {/* Glassmorphism achievement card with monochrome to color effect */}
                      <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 shadow-lg hover:bg-white/30 transition-all duration-300 hover:shadow-xl grayscale hover:grayscale-0">
                        <div className="flex items-center gap-4">
                          <div
                            className={`aspect-square w-10 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center text-primary-foreground transition-all duration-300`}
                          >
                            <FontAwesomeIcon
                              icon={achievement.icon}
                              className="text-white h-5 w-5"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium">{achievement.title}</h3>
                            <p className="text-sm">{achievement.subtitle}</p>
                            <div className="text-xs text-gray-500 mt-1">
                              {achievement.date}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Transparent bottom overlay when not expanded */}
              {!isExpanded && hasMoreAchievements && (
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-stale-300 via-stale/70 to-transparent pointer-events-none"></div>
              )}

              {/* Expand/Collapse Button */}
              {hasMoreAchievements && (
                <motion.div
                  className="flex justify-center mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-2 px-6 py-3 bg-white/30 backdrop-blur-md border border-white/40 rounded-full hover:bg-white/40 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl"
                  >
                    <span>
                      {isExpanded
                        ? `Show Less`
                        : `Show ${allAchievements.length - 4} More`}
                    </span>
                    <FontAwesomeIcon
                      icon={isExpanded ? faChevronUp : faChevronDown}
                      className="h-3 w-3 transition-transform duration-300"
                    />
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </Wrapper>
  );
}
