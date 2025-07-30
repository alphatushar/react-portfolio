export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-blue-600 to-blue-400 text-white">
      <h2 className="text-4xl font-bold mb-4">Hi, I’m Tushar 👋</h2>
      <p className="text-lg max-w-xl">
        I am a passionate Full-Stack Developer & DevOps Enthusiast. 
        I build scalable apps, automate deployments, and analyze data for impact.
      </p>
      <a
        href="#projects"
        className="mt-6 bg-white text-blue-600 font-semibold px-6 py-2 rounded hover:bg-gray-200"
      >
        View My Projects
      </a>
    </section>
  );
}