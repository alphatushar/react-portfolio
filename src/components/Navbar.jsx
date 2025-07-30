export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white sticky top-0">
      <h1 className="text-xl font-bold">Tushar's Portfolio</h1>
      <ul className="flex gap-6">
        <li><a href="#projects" className="hover:underline">Projects</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}