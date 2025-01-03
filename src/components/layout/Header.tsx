export function Header() {
  return (
    <header className="bg-white shadow-sm py-6 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <img 
            src="https://static.wixstatic.com/media/ef3e67_051e5ffb7c6d471fb4d8a71b831a7d19~mv2.png"
            alt="Like Look Solutions Logo"
            className="h-12 w-auto sm:h-16"
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Accessible Communication
          </h1>
        </div>
      </div>
    </header>
  );
}