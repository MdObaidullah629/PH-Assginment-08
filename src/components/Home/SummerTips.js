export default function SummerTips() {
  const tips = [
    { emoji: "💧", title: "Stay Hydrated", desc: "Drink at least 8-10 glasses of water." },
    { emoji: "🧴", title: "Sunscreen", desc: "Protect your skin with SPF 50+." },
    { emoji: "🍎", title: "Fresh Fruits", desc: "Eat seasonal fruits to stay cool." }
  ];

  return (
    <section className="bg-sky-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-black mb-12 text-center italic">☀️ Summer Care Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm text-center hover:-translate-y-2 transition-transform">
              <div className="text-4xl mb-4">{tip.emoji}</div>
              <h4 className="font-bold text-xl mb-2">{tip.title}</h4>
              <p className="text-gray-600">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}