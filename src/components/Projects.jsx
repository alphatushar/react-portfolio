export default function Projects() {
  const projects = [
    {
      title: "DevOps Monitoring",
      description: "Docker + Prometheus + Grafana setup for Flask app monitoring",
      link: "https://github.com/alphatushar/devops-monitoring",
    },
    {
      title: "E-Commerce KPI Dashboard",
      description: "Python & Pandas project with visual analytics",
      link: "https://github.com/alphatushar/ecommerce-kpi-dashboard",
    },
    {
      title: "YouTube Video Downloader",
      description: "Python app to download videos with custom folder structure",
      link: "https://github.com/alphatushar/youtube-downloader",
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-600 font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}