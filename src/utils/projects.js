import medialertImg from "../assets/Medialert.png";
import bookstoreImg from "../assets/book-Store.png";
import urlShortnerImg from "../assets/url-shortner.png";


const projects = [
       {
              id: 2,
              title: "Book Store Web App",
              description:
                     "A full-stack e-commerce bookstore where users can browse books, search by category, add items to the cart, manage orders, and securely authenticate accounts.",
              image: bookstoreImg,
              tech: ["React", "Next.js", "MongoDB", "Tailwind CSS"],
              github: "https://github.com/umesh851317/book-store",
              live: "https://book-store-drab-pi.vercel.app/",
       },
       {
              id: 3,
              title: "URL Shortener (Backend)",
              description:
                     "A modern URL shortener with click analytics, visit history, and responsive dashboard.",
              image: urlShortnerImg,
              tech: ["React", "Node.js", "MongoDB", "Tailwind"],
              github: "https://github.com/umesh851317/url-shortner",
              live: "https://url-shortner-xi-blush.vercel.app/",
       },
       {
              id: 1,
              title: "MediAlert Smart Pharmacy ",
              description:
                     "pharmacy inventory management system with stock forecasting, expiry alerts, and analytics dashboard.",
              image: medialertImg,
              tech: ["React", "Node.js", "Express", "MongoDB"],
              github: "https://github.com/umesh851317/MediAlert",
              live: "https://medi-alert-sigma.vercel.app/",
       },
];
export default projects