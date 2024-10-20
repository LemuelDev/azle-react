

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 text-center p-6">
    <div className="container mx-auto">
      <h3 className="text-lg font-semibold mb-2 text-white">Act Now Against Climate Change</h3>
      <p className="text-sm mb-4 text-white">
        Climate change is one of the biggest challenges of our time. Let's work together to make a difference by reducing our carbon footprint and promoting sustainable practices.
      </p>
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="https://www.un.org/climatechange"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          UN Climate Change
        </a>
        <a
          href="https://www.ipcc.ch/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          IPCC Reports
        </a>
        <a
          href="https://www.worldwildlife.org/initiatives/climate"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          WWF Climate Initiatives
        </a>
      </div>
      <p className="text-xs text-white">© {new Date().getFullYear()} Climate Action. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer