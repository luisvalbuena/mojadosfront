import { Home, Car, Trees, ShieldCheck } from "lucide-react";

export default function QuickFeatures() {
  const features = [
    { icon: <Home size={32} strokeWidth={1.5} />, label: "2-4 Dormitorios" },
    { icon: <Car size={32} strokeWidth={1.5} />, label: "Garaje Incluido" },
    { icon: <Trees size={32} strokeWidth={1.5} />, label: "Zonas Verdes" },
    { icon: <ShieldCheck size={32} strokeWidth={1.5} />, label: "Seguridad 24h" },
  ];

  return (
    <section className="w-full bg-white py-14 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3 p-4 rounded-xl transition-all hover:scale-[1.04] hover:shadow-xl cursor-default"
          >
            <div className="text-gray-900">{item.icon}</div>
            <p className="text-gray-800 font-semibold text-sm md:text-base tracking-wide">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}