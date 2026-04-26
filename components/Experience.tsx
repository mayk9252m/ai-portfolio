import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section className="py-20 px-10">
      <h2 className="text-3xl font-bold mb-10">Experience</h2>

      {experience.map((e, i) => (
        <div key={i} className="mb-4">
          <h3 className="font-semibold">{e.title}</h3>
          <p>{e.org} - {e.year}</p>
        </div>
      ))}
    </section>
  );
}