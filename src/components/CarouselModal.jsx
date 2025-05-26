import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const CarouselModal = ({ isOpen, onClose, image, onNext, onPrev, currentIndex, totalImages }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    if (image) {
      setIsLoading(true);
      setCurrentImage(image);
    }
  }, [image]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  if (!currentImage) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/95 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-2 sm:p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-4xl mx-auto">
                {/* Close button */}
                <button
                  className="absolute -top-10 right-0 text-white hover:text-primary transition-colors duration-300 z-10"
                  onClick={onClose}
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>

                {/* Main content */}
                <div className="relative overflow-hidden rounded-lg bg-gray-900/50 backdrop-blur-sm">
                  {/* Loading state */}
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 z-10">
                      <ArrowPathIcon className="h-8 w-8 text-white animate-spin" />
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative aspect-[16/9] max-h-[70vh]">
                    <img
                      src={currentImage.image}
                      alt={currentImage.title}
                      className={`w-full h-full object-contain transition-opacity duration-300 ${
                        isLoading ? 'opacity-0' : 'opacity-100'
                      }`}
                      onLoad={handleImageLoad}
                    />
                  </div>

                  {/* Image info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <div className="max-w-2xl mx-auto">
                      <h3 className="text-xl font-bold text-white mb-1">{currentImage.title}</h3>
                      <p className="text-sm text-gray-200">{currentImage.description}</p>
                    </div>
                  </div>

                  {/* Navigation buttons */}
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white hover:bg-primary/80 transition-all duration-300 hover:scale-110"
                    onClick={onPrev}
                  >
                    <ChevronLeftIcon className="h-6 w-6" />
                  </button>
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white hover:bg-primary/80 transition-all duration-300 hover:scale-110"
                    onClick={onNext}
                  >
                    <ChevronRightIcon className="h-6 w-6" />
                  </button>
                </div>

                {/* Image counter */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/50 text-white text-xs">
                  {currentIndex + 1} of {totalImages}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CarouselModal; 