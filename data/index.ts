export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Collaborative, communicative, client-focused service. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently doing my internship at Walee lab-Seecs",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  
  {
    id: 1,
    title: "TrueCharity MVP: Blockchain based Donation Web application",
    des: "TrueCharity Donations aims to increase transparency and trust in charitable donations by leveraging blockchain technology. Charities can upload proofs of their expenditures, which are recorded and matched to specific donations, ensuring donors that their contributions are used effectively.",
    img: "/truecharity.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://truecharity-web3-ccw3.vercel.app/",
  },
  {
    id: 2,
    title: "Seven Estate",
    des: "MERN full Stack Application for Real Estate",
    img: "/state.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/Momin-Rauf/real-Estate",
  },
  {
    id: 3,
    title: "Expense Tracker Mobile App",
    des: "Expense tracker app with multi-language support, insightful charts, and secure Firebase authentication for categorizing expenses.",
    img: "/expense.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/Momin-Rauf/expense-app",
  },
  {
    id: 4,
    title: "Food Order App",
    des: "Developed a dynamic food order app using React and Firebase BaaS, offering seamless ordering and real-time updates.",
    img: "/food.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://food-order-app-gules.vercel.app/",
  },
  {
    id: 5,
    title: "Doctech",
    des: "A cutting-edge application that seamlessly empowers patients with convenient access to their medical records.To provide a robust system enabling doctors to effortlessly retrieve and manage the medical histories of their patients, fostering global accessibility through our web-based platform.",
    img: "/doctech.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/Momin-Rauf/Doctech_laravel",
  },
  {
    id: 7,
    title: "HomePage using GSAP",
    des: "A Simple homepage using Gsap for animations and Tailwindcss along with three.js",
    img: "/true.png",
    iconLists: [ "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://homepage-zeta-cyan.vercel.app/",
  },
  {
    id: 8,
    title: "3D Art Gallery",
    des: "This is a 3D art gallery made with Html css js and three.js",
    img: "/art123.png",
    iconLists: [ "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/Momin-Rauf/art-gallery-three.js",
  },
];

export const testimonials = [
  {
    quote:
      "Muhammad Momin Rauf worked on two projects Software Requirements Specification and Software Design Specification for SEEKO learning application,The quality of these deliverables was exceptional with meaningful insights which added value for EDWIZ,We highly endorse Momin for porjects of similar nature",
    name: "Zakria Amir",
    title: "Managing Director of EDWIZ Solutions (PVT) LTD",
  },
  {
    quote:
      "Your dedication and willingness to volunteer your time have been greatly appreciated.We recognize the effort and commitment required to support our initiatives, and your contributions have helped us in various ways.",
    name: "Renee Gonzalez",
    title: " Development Director, ChickTech",
  },
];

export const companies = [
  {
    id: 1,
    name: "EDWIZ",
    img: "/edwiz.png",
    nameImg: "/edwiz.png",
  },
  {
    id: 2,
    name: "TIMECHAIN LABS",
    img: "/time.png",
    nameImg: "/time.png",
  },
  {
    id: 3,
    name: "CHICKTECH",
    img: "/chicktech.png",
    nameImg: "/chicktech.png",
  },
  {
    id: 4,
    name: "ENCODE CLUB",
    img: "/encode.png",
    nameImg: "/encode.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineering Student",
    desc: "Final Year Software Engineering Student From NUST,Islamabad",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "SDS & SRS documentation",
    desc: "Collaborated with 3 group members to perform user research and requirement gathering for the MVP SEEKO",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Volunteer Front end Developer",
    desc: " Volunteered as a front-end developer for a WordPress-based website project alongside 4 multicultural team members",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 4,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 5,
    title: "Blockchain Intern",
    desc: "Developed and Deployed an MVP with 2 group members on BSV blockchain along with 2 certifications and 5+ workshops.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },

  {
    id: 3,
    img: "/link.svg",
  },
];

