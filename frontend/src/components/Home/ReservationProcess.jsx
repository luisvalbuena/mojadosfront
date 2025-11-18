import React from "react";
import { CheckCircle, FileCheck, Home, ArrowRight } from "lucide-react";

export default function ReservationProcess() {
  const steps = [
    {
      number: "1",
      icon: FileCheck,
      title: "Elige tu parcela y modelo",
      desc: "Selecciona la villa que más se adapte a tus necesidades: 1, 2 o 3 dormitorios en parcela de 150 m²."
    },
    {
      number: "2",
      icon: CheckCircle,
      title: "Reserva por solo 1.500 €",
      desc: "Asegura tu parcela y bloquea la disponibilidad con un pequeño depósito inicial."
    },
    {
      number: "3",
      icon: Home,
      title: "Personaliza tu vivienda",
      desc: "Define acabados, distribución y todas las opciones de personalización antes del inicio de obra."
    }
  ];

  return (
    <section id="reserva" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Proceso de Reserva
          </h2>
          <p className="text-gray-600 mt-3">
            Acceder a tu villa en Villas de Mojados es un proceso sencillo, transparente y diseñado para tu tranquilidad.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map(({ number, icon: Icon, title, desc }) => (
            <div
              key={number}
              className="bg-white rounded-2xl p-10 border border-gray-200 shadow-lg hover:shadow-2xl transition-all text-center"
            >
              {/* Step number */}
              <div className="w-14 h-14 mx-auto flex items-center justify-center bg-[#0FA958]/10 text-[#0FA958] font-bold text-2xl rounded-full mb-6">
                {number}
              </div>

              {/* Icon */}
              <Icon size={46} className="text-[#0FA958] mx-auto mb-4" />

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800">
                {title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mt-3">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="text-center mt-14">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-[#0FA958] hover:bg-[#0d8e4a] text-white font-semibold px-10 py-4 rounded-xl shadow-lg transition-all"
          >
            Reservar mi villa ahora
            <ArrowRight size={20} />
          </a>
          <p className="text-gray-500 text-sm mt-2">
            Reserva reembolsable durante el periodo inicial de selección.
          </p>
        </div>

      </div>
    </section>
  );
}
