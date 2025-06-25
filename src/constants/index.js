import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am currently pursuing a Diploma in Computer Science, where I have developed skills in programming and networking through coursework and projects. Currently, I am gaining practical experience as a Web Developer Intern at Infinicore, where I am further enhancing my technical expertise. This experience allows me to apply my knowledge in real-world scenarios, collaborate with professionals, and continue growing in the field of web development.`;

export const ABOUT_TEXT = `I am a dedicated and eager full stack developer currently pursuing a Diploma in Computer Science at KPM Beranang, where I have gained a strong foundation in programming and networking over the past two years. I am currently interning at Infinicore SDN BHD, where I am actively applying my knowledge in real-world projects. With experience in technologies like HTML, CSS, JavaScript, C++, React, Node.js, I am passionate about building efficient and user-friendly web applications. I am continuously eager to learn and grow, solving problems and delivering high-quality solutions. Outside of coding, I love staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Web Developer Intern",
    company: "Infinicore SDN BHD",
    description: `Developed a frontend for generating reports and fetching data from APIs using React.js. Created components to allow users to generate customized reports and display real-time data. Integrated the frontend with backend APIs to ensure a smooth user experience and efficient data retrieval.`,
  technologies: ["HTML","CSS","Javascript","Node.js", "React.js"],
  },
  
  {
    year: "2023 - 2025",
    role: "KPM Beranang Student",
    company: "KPM Beranang",
    description: `Worked on various academic projects involving web development, hardware integration, and data visualization. Built applications using Python, Node.js, and C++, and developed IoT-based systems with Arduino. Designed and simulated network setups using Cisco Packet Tracer and explored data visualization techniques using R.`,
    technologies: ["Python", "HTML", "CSS", "Node.js", "C++", "Cisco", "R"],
  }
  

];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "Python"],
  },
  {
    title: "Recyclear App",
    image: project2,
    description:"A mobile app built with MIT App Inventor to promote recycling. It helps users find nearby recycling centers, learn recycling tips, set recycling reminders, and earn rewards for eco-friendly actions. Aimed at raising environmental awareness and encouraging sustainable habits.",
    technologies: ["MIT APP Inventor"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Vite"],
  },
  {
    title: "Smart Fire Truck",
    image: project4,
    description:
      "An IoT-based smart fire truck system designed to detect fires using flame sensors. The system sends real-time alerts to users via the Blynk app for quick emergency response.",
    technologies: ["Arduino", "C++","Blynk"],
  }
  
];

export const CONTACT = {
  address: "Rawang, Selangor, Malaysia",
  phoneNo: "+60 18-3522-593",
  email: "mdamar1809@gmail.com",
};
