const projects = [
  {
    title: "Gesture Controller",
    desc: "Control system using hand tracking",
    tech: "OpenCV, MediaPipe",
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-10">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="p-6 bg-lightGray rounded-xl shadow-md hover:scale-105 transition">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2">{p.desc}</p>
            <p className="mt-2 text-sm text-gray-600">{p.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}