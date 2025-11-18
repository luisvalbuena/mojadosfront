export default function About() {
    return (
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* TEXTO */}
          <div>
            <p className="uppercase text-sm tracking-widest text-gray-500 mb-3">
              Sobre la Promoción
            </p>
  
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Un nuevo concepto de vivienda moderna y sostenible
            </h2>
  
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Esta promoción ha sido diseñada para ofrecer espacios amplios, luminosos
              y funcionales, pensados para elevar tu calidad de vida. Cada vivienda
              incorpora materiales premium, aislamiento eficiente y un diseño que
              prioriza el bienestar y la tranquilidad.
            </p>
  
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Ubicada en una zona estratégica, combina la paz de un entorno residencial
              con la comodidad de tener todos los servicios a pocos minutos.
            </p>
  
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-800 transition-all">
              Conocer más
            </button>
          </div>
  
          {/* IMAGEN */}
          <div className="relative w-full h-[380px] md:h-[460px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/about-building.jpg"
              alt="Promoción inmobiliaria"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </section>
    );
  }
  