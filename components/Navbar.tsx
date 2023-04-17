import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-white cursor-pointer">Tailwind CSS</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline ml-10">
                <span className="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700">Inicio</span>
                <Link href="/about">
                  <span className="px-3 py-2 ml-4 text-sm font-medium text-gray-300 rounded-md cursor-pointer hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Acerca de</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
