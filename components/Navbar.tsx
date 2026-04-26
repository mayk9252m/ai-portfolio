"use client";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-sm p-4 flex justify-between z-50">
      <h1 className="font-bold">Portfolio</h1>
      <div className="flex gap-4">
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}