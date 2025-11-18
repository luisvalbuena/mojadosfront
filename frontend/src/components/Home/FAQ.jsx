import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿Qué incluye la reserva de 1.500 €?",
      answer:
        "La reserva asegura tu parcela y el modelo de vivienda elegido. Es reembolsable durante el periodo inicial de selección y garantiza prioridad en la asignación."
    },
    {
      question: "¿Se puede personalizar la vivienda?",
      answer:
        "Sí. Las villas permiten personalizar acabados, distribución interior y opciones adicionales para adaptarlas a tu estilo de vida."
    },
    {
      question: "¿Cuánto tarda la construcción?",
      answer:
        "Gracias al sistema constructivo optimizado, el tiempo estimado de ejecución es significativamente menor que el de una obra tradicional."
    },
    {
      question: "¿Cómo funciona la financiación desde 350 €/mes?",
      answer:
        "Disponemos de asesoramiento financiero para calcular la cuota adaptada a tu situación. La financiación depende del banco y del modelo elegido."
    },
    {
      question: "¿Las viviendas tienen eficiencia energética A?",
      answer:
        "Sí. Todas las villas cuentan con aislamiento avanzado, sistemas eficientes y materiales de alta calidad que garantizan la clasificación energética tipo A."
    },
    {
      question: "¿Es realmente autopromoción?",
      answer:
        "Correcto. Tú eres el promotor de tu vivienda, lo que reduce costes y te permite personalizar el proyecto. Nosotros te acompañamos en todo el proceso."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Preguntas Frecuentes
          </h2>
          <p className="text-gray-600 mt-3">
            Resolvemos las dudas más habituales sobre el proyecto Villas de Mojados.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
            >
              {/* Question */}
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-gray-800">
                  {faq.question}
                </span>

                <ChevronDown
                  size={22}
                  className={`transition-transform text-gray-600 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 px-6 ${
                  openIndex === index
                    ? "max-h-[300px] py-2 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
