import { Fragment } from "react";
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';

const GalleryGrid = ({ selectedCategory, onImageClick }) => {
  const galleryItems = [
    {
      id: 1,
      category: "team",
      title: "Team Vibes",
      image: img1,
      description: "Where ideas collide and innovation happens!",
    },
    {
      id: 2,
      category: "campaigns",
      title: "Creative Campaigns",
      image: img2,
      description: "Adventure time with the squad!",
    },
    {
      id: 3,
      category: "play",
      title: "Work Hard, Play Hard",
      image: img3,
      description: "Learning together, growing together!",
    },
    {
      id: 4,
      category: "behind",
      title: "Behind The Scenes",
      image: img4,
      description: "Building stronger bonds together!",
    },
    {
      id: 5,
      category: "team",
      title: "Team Collaboration",
      image: img5,
      description: "Working together towards success!",
    },
    {
      id: 6,
      category: "campaigns",
      title: "Creative Moments",
      image: img6,
      description: "Capturing creative excellence!",
    },
    {
      id: 7,
      category: "play",
      title: "Fun Times",
      image: img7,
      description: "Enjoying every moment together!",
    },
    {
      id: 8,
      category: "behind",
      title: "Behind the Magic",
      image: img8,
      description: "The making of great memories!",
    },
    {
      id: 12,
      category: "behind",
      title: "Making Memories",
      image: "/src/assets/img12.jpg",
      description: "Capturing the essence of teamwork!",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="gallery-container max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">
          {selectedCategory === "all"
            ? "Our Gallery"
            : selectedCategory === "team"
            ? "Our Team Moments"
            : selectedCategory === "campaigns"
            ? "Explore Our Creative Chaos"
            : selectedCategory === "play"
            ? "The Grind & The Good Times"
            : "Unfiltered & Behind The Lens"}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {selectedCategory === "all"
            ? "Explore our collection of amazing moments!"
            : selectedCategory === "team"
            ? "Celebrating collaboration, laughter, and learning with our amazing crew!"
            : selectedCategory === "campaigns"
            ? "Where bold ideas, meme-worthy moments, and Gen Z genius collide!"
            : selectedCategory === "play"
            ? "From hustle mode to party mode — this is how we balance the vibe! "
            : "From candid chaos to brilliant breakthroughs — here's the real story!"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="gallery-item group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl w-full max-w-sm cursor-pointer"
            data-aos="fade-up"
            onClick={() => onImageClick(item, filteredItems)}
          >
            <div className="mood-tag absolute top-4 left-4 px-3 py-1 bg-primary/90 text-white rounded-full text-sm font-medium backdrop-blur-sm">
              {item.title}
            </div>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="caption absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm opacity-90">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
