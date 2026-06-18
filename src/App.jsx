import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">

        
        {/* Navbar */}
<nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md flex justify-between items-center py-6">

  <h1 className="text-2xl font-bold text-blue-400">
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      Shivam Honrao
    </motion.span>
  </h1>

  {/* Desktop Menu */}
  <div className="hidden md:flex gap-8 text-lg">
    <a href="#" className="hover:text-blue-400 transition">
      Home
    </a>

    <a href="#about" className="hover:text-blue-400 transition">
      About
    </a>

    <a href="#skills" className="hover:text-blue-400 transition">
      Skills
    </a>

    <a href="#projects" className="hover:text-blue-400 transition">
      Projects
    </a>

    <a href="#contact" className="hover:text-blue-400 transition">
      Contact Me
    </a>
  </div>

  {/* Mobile Menu Button */}
  <button
    className="md:hidden text-2xl text-blue-400"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? <FaTimes /> : <FaBars />}
  </button>
  {/* Mobile Menu */}
{menuOpen && (
  <div className="absolute top-20 right-0 w-52 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl p-5 flex flex-col gap-5 text-center z-50">

    <a
      href="#"
      onClick={() => setMenuOpen(false)}
      className="hover:text-blue-400 transition duration-300"
    >
      Home
    </a>

    <a
      href="#about"
      onClick={() => setMenuOpen(false)}
      className="hover:text-blue-400 transition duration-300"
    >
      About
    </a>

    <a
      href="#skills"
      onClick={() => setMenuOpen(false)}
      className="hover:text-blue-400 transition duration-300"
    >
      Skills
    </a>

    <a
      href="#projects"
      onClick={() => setMenuOpen(false)}
     className="hover:text-blue-400 transition duration-300"
    >
      Projects
    </a>

    <a
      href="#contact"
      onClick={() => setMenuOpen(false)}
     className="hover:text-blue-400 transition duration-300"
    >
      Contact Me
    </a>

  </div>
)}
</nav>

        {/* Hero Section */}
        <section className="grid md:grid-cols-2 items-center min-h-[80vh] gap-10">
          
          {/* Left Side */}
          <div>

            <p className="text-blue-400 text-lg">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-bold mt-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition duration-500">
              Shivam Honrao
            </h1>

            <h2 className="text-2xl md:text-4xl mt-4 text-gray-300">
              Java Full Stack Developer
            </h2>

            <p className="mt-6 max-w-2xl text-gray-400 text-lg leading-relaxed">
              Passionate Java Full Stack Developer skilled in
              Java, Spring Boot, Hibernate, JPA, PostgreSQL,
              MySQL, React and REST APIs.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
       <div className="mt-8 flex gap-4 flex-wrap">
       

  <a
    href="#projects"
    className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition duration-300"
  >
    View Projects
  </a>

  <a
    href="#contact"
    className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition duration-300"
  >
    Contact Me
  </a>

  <a
    href="/resume.pdf"
    download
    className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition duration-300"
  >
    Download Resume
  </a>

</div>


            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1 shadow-2xl animate-pulse">

              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-8xl">
                👨‍💻
              </div>

            </div>

          </div>

        </section>
        {/* About Section */}

<section id="about" className="py-24 scroll-mt-24">

  <h2 className="text-4xl font-bold text-center mb-12">
    About Me
  </h2>

  <div className="grid md:grid-cols-2 gap-10">

    <div>
      <h3 className="text-2xl font-semibold mb-4 text-blue-400">
        Java Full Stack Developer
      </h3>

      <p  className="text-gray-400 leading-8 max-w-xl">
        I am a passionate Java Full Stack Developer with
        strong knowledge of Java, Spring Boot, Hibernate,
        JPA, PostgreSQL, MySQL, React and REST APIs.

        I enjoy building scalable web applications and
        continuously learning new technologies.
      </p>
    </div>

    <div className="grid grid-cols-2 gap-4">

      <div className="bg-gray-900 p-6 rounded-xl hover:-translate-y-2 hover:shadow-xl transition duration-300">
        <h3 className="text-3xl font-bold text-blue-400">
          4+
        </h3>

        <p className="text-gray-400 mt-2">
          Projects
        </p>
      </div>

      <div className="bg-gray-900 p-6 rounded-xl hover:-translate-y-2 hover:shadow-xl transition duration-300">
        <h3 className="text-3xl font-bold text-purple-400">
          10+
        </h3>

        <p className="text-gray-400 mt-2">
          Technologies
        </p>
      </div>

      <div className="bg-gray-900 p-6 rounded-xl hover:-translate-y-2 hover:shadow-xl transition duration-300">
        <h3 className="text-3xl font-bold text-green-400">
          Diploma
        </h3>

        <p className="text-gray-400 mt-2">
          Information Technology
        </p>
      </div>

      <div className="bg-gray-900 p-6 rounded-xl hover:-translate-y-2 hover:shadow-xl transition duration-300">
        <h3 className="text-3xl font-bold text-yellow-400">
          B.Tech
        </h3>

        <p className="text-gray-400 mt-2">
          Computer Engineering
        </p>
      </div>

    </div>

  </div>

</section>
          


    {/*Skill Section*/}
<section id="skills" className="py-24 scroll-mt-24">

  <h2 className="text-4xl font-bold text-center mb-12">
    Skills & Expertise
  </h2>

  <div className="max-w-4xl mx-auto space-y-6">

    {[
      { name: "Java", level: 90 },
      { name: "Spring Boot", level: 85 },
      { name: "Hibernate", level: 80 },
      { name: "JPA", level: 85 },
      { name: "React", level: 75 },
      { name: "JavaScript", level: 75 },
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "Git", level: 80 },
      { name: "GitHub", level: 85 },
      { name: "REST API", level: 90 },
      { name: "Maven", level: 80 },
    ].map((skill) => (

      <motion.div
        key={skill.name}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gray-900 p-5 rounded-xl hover:scale-[1.02] transition duration-300"
      >

        <div className="flex justify-between mb-2">

          <span className="font-semibold text-lg">
            {skill.name}
          </span>

          <span className="text-blue-400 font-bold">
            {skill.level}%
          </span>

        </div>

        <div className="w-full bg-gray-700 rounded-full h-3">

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-3 rounded-full"
          />

        </div>

      </motion.div>

    ))}

  </div>

</section>

<section id="projects" className="py-24 scroll-mt-24">

  <h2 className="text-4xl font-bold text-center mb-12">
    Projects
  </h2>

  <div className="grid md:grid-cols-2 gap-8">

    <div className="bg-gray-900 p-6 rounded-xl hover:-translate-y-3 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition duration-300">
      <h3 className="text-2xl font-bold text-blue-400">
        QuizNest
      </h3>

      <p className="text-gray-400 mt-4">
        Smart online quiz platform with performance tracking,
        progress analysis and institute-based access system.
      </p>

      <div className="mt-4 flex gap-2 flex-wrap">
        <span className="bg-blue-600 px-3 py-1 rounded">
          Spring Boot
        </span>
        <span className="bg-purple-600 px-3 py-1 rounded">
          React
        </span>
        <span className="bg-green-600 px-3 py-1 rounded">
          PostgreSQL
        </span>
      </div>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl hover:-translate-y-3 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition duration-300">
      <h3 className="text-2xl font-bold text-green-400">
        Ride Share X
      </h3>

      <p className="text-gray-400 mt-4">
        Ola/Uber inspired ride booking platform developed
        using Spring Boot microservices architecture.
      </p>

      <div className="mt-4 flex gap-2 flex-wrap">
        <span className="bg-blue-600 px-3 py-1 rounded">
          Java
        </span>
        <span className="bg-purple-600 px-3 py-1 rounded">
          React
        </span>
        <span className="bg-red-600 px-3 py-1 rounded">
          MySQL
        </span>
      </div>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl hover:-translate-y-3 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition duration-300">
      <h3 className="text-2xl font-bold text-cyan-400">
        E-Learning Platform
      </h3>

      <p className="text-gray-400 mt-4">
        Full stack learning management platform with course
        management and student tracking.
      </p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl hover:-translate-y-3 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition duration-300">
      <h3 className="text-2xl font-bold text-yellow-400">
        Doctor Booking System
      </h3>

      <p className="text-gray-400 mt-4">
        Appointment booking system developed using Spring MVC,
        Spring JDBC and PostgreSQL.
      </p>
    </div>

  </div>

</section>

<section id="contact" className="py-24 scroll-mt-24">

  <h2 className="text-4xl font-bold text-center mb-12">
    Contact Me
  </h2>

  <div className="max-w-3xl mx-auto bg-gray-900 p-10 rounded-2xl">

    <div className="space-y-6">

      <div>
        <h3 className="text-xl font-semibold text-blue-400">
          Name
        </h3>

        <p className="text-gray-300">
          Shivam Honrao
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-green-400">
          Role
        </h3>

        <p className="text-gray-300">
          Java Full Stack Developer
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-purple-400">
          Email
        </h3>

        <p className="text-gray-300">
          shivamhonrao5580@gmail.com
        </p>
      </div>
      <div>
                <h3 className="text-purple-400 text-xl font-semibold">GitHub</h3>
                <a
                  href="https://github.com/Shivamh-018"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  github.com/Shivamh-018
                </a>
              </div>

              <div>
                <h3 className="text-cyan-400 text-xl font-semibold">LinkedIn</h3>
                <a
                  href="https://linkedin.com/in/shivam-honrao-018"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  linkedin.com/in/shivam-honrao-018
                </a>
              </div>


      <div>
        <h3 className="text-xl font-semibold text-yellow-400">
          Location
        </h3>

        <p className="text-gray-300">
          Pune, Maharashtra, India
        </p>
      </div>

    </div>

  </div>

</section>

<footer className="py-8 text-center border-t border-gray-800">

  <p className="text-gray-400">
    © 2026 Shivam Honrao | Java Full Stack Developer
  </p>

</footer>

      </div>
    </div>
  );
}

export default App;
