console.log('ok');

const data = [
  {
    name: "Ali Khan",
    jobTitle: "Frontend Developer",
    description: "Passionate about building interactive UI with React and JavaScript.",
    img: "https://images.unsplash.com/photo-1502767089025-6572583495b4?auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Sara Ahmed",
    jobTitle: "UI/UX Designer",
    description: "Designs clean and user-friendly interfaces for web and mobile apps.",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Usman Tariq",
    jobTitle: "Backend Developer",
    description: "Expert in Node.js and database management systems.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Ayesha Noor",
    jobTitle: "Graphic Designer",
    description: "Creates visually appealing graphics and branding materials.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Hassan Raza",
    jobTitle: "Full Stack Developer",
    description: "Works on both frontend and backend technologies efficiently.",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Fatima Zahra",
    jobTitle: "Content Writer",
    description: "Writes engaging and SEO-friendly content for websites.",
    img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Bilal Ahmed",
    jobTitle: "Digital Marketer",
    description: "Specialist in social media marketing and online campaigns.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Zain Ali",
    jobTitle: "Mobile App Developer",
    description: "Builds Android and iOS apps using modern frameworks.",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Noor Malik",
    jobTitle: "Software Engineer",
    description: "Develops scalable software solutions for businesses.",
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Ahmed Raza",
    jobTitle: "DevOps Engineer",
    description: "Manages CI/CD pipelines and cloud infrastructure.",
    img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=500&q=60"
  }
];
let startup = 0;
const img = document.querySelector('img')
const namestudent = document.querySelector('h1')
const jobTitle = document.querySelector('h2')
const para = document.querySelector('p')
function menuMalupate(){
  img.src = data[startup].img
  namestudent.textContent = data[startup].name
  jobTitle.innerText = data[startup].jobTitle
  para.innerHTML = data[startup].description

}

function previousHandler() {
  console.log('previousHandler');
  if (startup==0) {
    startup=data.length-1
  }else{
    startup--;

  }
menuMalupate()

}
function nextHandler() {
  console.log('nextHandler');
 if (startup==data.length-1) {
    startup=0
  }else{
    startup++;

  }menuMalupate()

}

menuMalupate()