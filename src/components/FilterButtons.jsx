const FilterButtons = ({ selectedCategory, onCategoryChange }) => {
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'team', label: 'Team Vibes' },
    { id: 'campaigns', label: 'Creative Campaigns' },
    { id: 'play', label: 'Work Hard, Play Hard' },
    { id: 'behind', label: 'Behind The Scenes' }
  ];

  return (
    <div className="filter-container w-full py-4 px-4 bg-white dark:bg-dark sticky top-0 z-50 shadow-md">
      <div className="filter-scroll max-w-7xl mx-auto flex justify-center gap-4 flex-wrap">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`filter-btn group px-6 py-3 rounded-full font-medium text-base cursor-pointer transition-all duration-500 flex items-center gap-2 hover:scale-105 hover:shadow-lg active:scale-95 hover:-translate-y-1 hover:rotate-1 hover:skew-x-1 ${
              selectedCategory === category.id
                ? 'bg-primary text-white'
                : 'bg-light dark:bg-dark/50 text-dark dark:text-white hover:bg-primary hover:text-white'
            }`}
            onClick={() => onCategoryChange(category.id)}
          >
            <span className="transition-all duration-500 group-hover:translate-x-1">
              {category.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterButtons; 