export default function Widgets({ activeIndex }) {
  const data = [
    { title: "First UserName", description: "Lorem ipsum dolor sit amet." },
    { title: "Second UserName", description: "Lorem ipsum dolor sit amet." },
    { title: "Third UserName", description: "Lorem ipsum dolor sit amet." },
    { title: "Fourth UserName", description: "Lorem ipsum dolor sit amet." },
  ];

  return (
    <div className="relative w-full h-full">
      {data.map((item, index) => (
        <div
          key={index}
          className={`
            absolute inset-0
            p-6 bg-white rounded shadow-lg
            transition-all duration-300
            ${
              activeIndex === index
                ? "z-20 opacity-100 scale-100"
                : "z-10 opacity-0 scale-95 pointer-events-none"
            }
          `}
        >
          <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
