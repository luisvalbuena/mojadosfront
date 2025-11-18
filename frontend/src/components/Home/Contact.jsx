import React from "react";
import { Send, Mail, Phone, User } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-[#0FA958]/10">
      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Solicita Información
          </h2>
          <p className="text-gray-600 mt-3">
            Completa el formulario y un asesor se pondrá en contacto contigo para ayudarte a elegir tu villa ideal.
          </p>
        </div>

        {/* Form container */}
        <div className="bg-white shadow-2xl border border-gray-200 rounded-3xl p-10">

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Nombre */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium flex items-center gap-2">
                <User size={18} /> Nombre
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0FA958] outline-none"
                placeholder="Tu nombre"
                required
              />
            </div>

            {/* Teléfono */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium flex items-center gap-2">
                <Phone size={18} /> Teléfono
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0FA958] outline-none"
                placeholder="Tu número"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-gray-700 font-medium flex items-center gap-2">
                <Mail size={18} /> Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0FA958] outline-none"
                placeholder="tucorreo@email.com"
                required
              />
            </div>

            {/* Mensaje */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-gray-700 font-medium">
                Mensaje (opcional)
              </label>
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0FA958] outline-none h-32 resize-none"
                placeholder="Escribe aquí tu consulta..."
              ></textarea>
            </div>

            {/* Select tipo de villa */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-gray-700 font-medium">
                ¿Qué tipo de villa te interesa?
              </label>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0FA958] outline-none"
              >
                <option>Villa 1 dormitorio</option>
                <option>Villa 2 dormitorios</option>
                <option>Villa 3 dormitorios</option>
                <option>No lo tengo claro</option>
              </select>
            </div>

            {/* Submit */}
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="mt-6 bg-[#0FA958] hover:bg-[#0d8e4a] text-white font-semibold px-10 py-4 rounded-xl shadow-xl flex items-center gap-2 transition-all"
              >
                Enviar solicitud
                <Send size={20} />
              </button>
            </div>

          </form>

        </div>

        {/* Legal */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Al enviar este formulario aceptas nuestra política de privacidad.
        </p>

      </div>
    </section>
  );
}
