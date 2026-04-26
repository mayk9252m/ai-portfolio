export default function Contact() {
  return (
    <section className="py-20 px-10 bg-lightGray">
      <h2 className="text-3xl font-bold mb-10">Contact</h2>

      <form className="flex flex-col gap-4 max-w-xl">
        <input placeholder="Name" className="p-3 border rounded" />
        <input placeholder="Email" className="p-3 border rounded" />
        <textarea placeholder="Message" className="p-3 border rounded" />
        <button className="bg-darkGray text-white py-2 rounded">
          Send
        </button>
      </form>
    </section>
  );
}