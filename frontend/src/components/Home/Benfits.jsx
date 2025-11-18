import React from "react";
import { Home, Zap, Ruler, ShieldCheck, Euro, Leaf } from "lucide-react";

export default function Benefits() {
  const items = [
    {
      icon: Home,
      title: "Calidades Premium",
      desc: "Materiales de alta durabilidad y diseño moderno en cada vivienda."
    },
    {
      icon: Zap,
      title: "Construcción Rápida",
      desc: "Sistema constructivo eficiente que reduce los tiempos de obra."
    },
    {
      icon: Ruler,
      title: "Parcela de 150 m²",
      desc: "Tu propio espacio exterior para jardín, terraza o ampliaciones."
    },
    {
      icon: ShieldCheck,
      title: "Eficiencia Energética A",
      desc: "Ahorro mensual y máximo confort térmico garantizado."
    },
    {
      icon: Euro,
      title: "Financiación desde 350 €/mes",
      desc: "Acceso fácil a tu villa mediante cuotas adaptadas a tu situación."
    },
    {
      icon: Leaf,
      title: "Diseño Moderno",
      desc: "Viviendas luminosas con espacios personalizables a tu gusto."
    }
  ];

  return (
    <section className="py-20 bg-gray-100" id="beneficios">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Beneficios de Vivir en <span className="text-[#0FA958]">Villas de Mojados</span>
        </h2>

        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Un proyecto pensado para quienes buscan calidad, comodidad y un hogar con futuro.
        </p>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200"
            >
              <div className="flex justify-center mb-4">
                <Icon size={40} className="text-[#0FA958]" />
              </div>

              <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
              <p className="text-gray-600 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
