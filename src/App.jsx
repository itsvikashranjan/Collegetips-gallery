import { useState, useEffect } from 'react';
import Header from './components/Header';
import FilterButtons from './components/FilterButtons';
import GalleryGrid from './components/GalleryGrid';
import CarouselModal from './components/CarouselModal';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleImageClick = (image, images) => {
    setFilteredImages(images);
    const index = images.findIndex(img => img.id === image.id);
    setCurrentImageIndex(index);
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const handlePrevImage = () => {
    const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div className="bg-white dark:bg-dark min-h-screen font-['Poppins']">
      <Header />
      <FilterButtons selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      <GalleryGrid 
        selectedCategory={selectedCategory} 
        onImageClick={handleImageClick}
      />
      <CarouselModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        image={selectedImage}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
        currentIndex={currentImageIndex}
        totalImages={filteredImages.length}
      />
    </div>
  );
}

export default App;
