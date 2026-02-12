

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Event Design",
      link: "/public/event.png",
      image: "/public/event.png",
    },
    {
      id: 2,
      title: "Culture Heritage Design",
      link: "/public/Culture.png",
      image: "/public/Culture.png",
    },
    {
      id: 3,
      title: "Febraury Design",
      link: "/public/Febrary.png",
      image:  "/public/Febrary.png",
    },
    {
      id: 4,
      title: "Sport Design",
      link: "/public/Main.png",
      image: "/public/Main.png",
    },
    {
      id: 5,
      title: "Travel Agency Design",
      link: "/public/island new.png",
      image: "/public/island new.png",
    },
    
  ];

  return (
    <div className="bg-white text-purple-900 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-purple-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold">HollyHub</h1>
          <nav className="space-x-6 hidden md:block">
            <a href="#home" className="hover:text-purple-200">Home</a>
            <a href="#portfolio" className="hover:text-purple-200">My Work</a>
          </nav>
        </div>
      </header>

      {/* Welcome / Hero Section */}
      <section id="home" className="bg-purple-50 py-28 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Welcome, I'm a Graphic Designer
          </h2>
          <p className="text-lg md:text-xl text-purple-700 mb-8">
            I design clean, creative, and professional visuals that help brands stand out.
          </p>
          <a href="#portfolio" className="bg-purple-700 text-white px-8 py-3 rounded-full shadow hover:bg-purple-800 transition">
            View My Work
          </a>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-14">
            My Work
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition block"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 text-center">
                  <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                  <p className="text-purple-700 text-sm">Click to view project</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-700 text-white py-6">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm">© 2026 HollyHub Portfolio. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}


export default Portfolio
