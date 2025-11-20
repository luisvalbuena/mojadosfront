import React from "react";
import {
  Percent,
  Euro,
  ShieldCheck,
  Home,
  BadgePercent,
  PiggyBank
} from "lucide-react";

export default function Benefits() {
  const items = [
    {
      icon: Percent,
      title: "Impuesto Súper Reducido 0,01%",
      desc: "Para jóvenes menores de 36 años: paga solo 0,01% en TPO y AJD al comprar tu primera vivienda en Mojados."
    },
    {
      icon: PiggyBank,
      title: "Ahorro de hasta 13.000 €",
      desc: "En una vivienda de 140.000 €, el ahorro fiscal puede superar los 13.000 € frente a los tipos generales del 8% y 1,5%."
    },
    {
      icon: Home,
      title: "Deducción IRPF del 15%",
      desc: "Desgrava un 15% de las cantidades invertidas en tu vivienda nueva, con un máximo de 1.500 € al año."
    },
    {
      icon: ShieldCheck,
      title: "Ventajas para Familias Numerosas",
      desc: "Tipo reducido del 4% en la compra de vivienda habitual para titulares de familia numerosa."
    },
    {
      icon: BadgePercent,
      title: "Beneficios por Discapacidad",
      desc: "Tipo reducido del 4% si algún miembro de la unidad familiar tiene un grado de discapacidad ≥ 65%."
    },
    {
      icon: Euro,
      title: "Viviendas en Núcleo Rural",
      desc: "Mojados (<10.000 habitantes) está dentro del régimen fiscal reforzado que ofrece Castilla y León para vivienda rural."
    }
  ];

  return (
    <section className="py-20 bg-gray-100" id="beneficios">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Beneficios Fiscales al Comprar en{" "}
          <span className="text-[#0FA958]">Villas de Mojados</span>
        </h2>

        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Comprar vivienda en Mojados no solo es una gran inversión: también te
          permite acceder a los mayores incentivos fiscales de Castilla y León.
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
