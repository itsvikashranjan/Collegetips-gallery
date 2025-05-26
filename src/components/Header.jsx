const Header = () => {
  return (
    <header className="w-full py-6 px-4 text-center bg-gradient-to-r from-[#00DC0A] to-[#008006] text-white relative h-[120px] flex justify-center items-center overflow-hidden shadow-lg">
      <div className="relative z-10 max-w-4xl w-full mx-auto text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight text-shadow">Gallery</h1>
        <p className="text-base md:text-lg max-w-xl mx-auto text-bold">
          Every picture tells a story... and every story is waiting to happen!
        </p>
      </div>
    </header>
  );
};

export default Header; 