export default function CancerCauses() {
  return (
    <section className="bg-white py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Title */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            ⚠️ What Causes Cancer?
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 italic">
            A look at the factors that trigger this complex disease.
          </p>
        </div>

        {/* Overview */}
        <div className="space-y-4 pt-4">
          <p className="text-black text-sm md:text-base leading-relaxed">
            At its core, cancer begins when a cell’s <strong>DNA is damaged or mutated</strong>.
          </p>
          <p className="text-black text-sm md:text-base leading-relaxed">
            DNA acts like a set of instructions for how our body works. When it mutates, the cell may start acting abnormally — dividing too much or not dying when it should.
          </p>
          <p className="text-black text-sm md:text-base leading-relaxed">
            Some of these changes are inherited. Others are caused by things we’re exposed to throughout life.
          </p>
        </div>

        {/* Section: Genetics */}
        <div className="space-y-4 pt-4">
          <h3 className="text-2xl font-semibold text-black">🧬 Genetics</h3>
          <p className="text-black text-sm md:text-base leading-relaxed">
            Some people are <strong>born with mutations</strong> in their DNA that raise their cancer risk. These are passed down through families and cannot be prevented.
          </p>
          <p className="text-black text-sm md:text-base leading-relaxed">
            These mutations don’t guarantee cancer — but they do increase the chances.
          </p>
          <p className="text-black text-sm md:text-base leading-relaxed">
            Other mutations can arise <strong>spontaneously</strong>, either during normal cell division or due to damage from the environment.
          </p>
        </div>

        {/* Section: Environment */}
        <div className="space-y-4 pt-4">
          <h3 className="text-2xl font-semibold text-black">🌍 Environmental Factors</h3>
          <p className="text-black text-sm md:text-base leading-relaxed">
            Prolonged exposure to harmful substances in our surroundings is a leading cause of cancer.
          </p>
          <p className="text-black text-sm md:text-base leading-relaxed">
            <strong>Chemicals:</strong> Tobacco smoke, asbestos, pesticides, and industrial pollutants.
          </p>
          <p className="text-black text-sm md:text-base leading-relaxed">
            <strong>Radiation:</strong> UV rays from the sun and ionizing radiation from medical imaging or environmental exposure.
          </p>
          <p className="text-black text-sm md:text-base leading-relaxed">
            <strong>Infections:</strong> Some viruses like HPV and hepatitis B/C, as well as certain bacteria, are also linked to cancer.
          </p>
        </div>

        {/* Section: Lifestyle */}
        <div className="space-y-4 pt-4">
          <h3 className="text-2xl font-semibold text-black">💡 Lifestyle Choices</h3>
          <p className="text-black text-sm md:text-base leading-relaxed">
            Everyday habits play a major role in cancer risk.
          </p>
          <p className="text-black text-sm md:text-base leading-relaxed">
            Smoking, drinking alcohol excessively, poor diet, obesity, and lack of physical activity all increase cancer risk over time.
          </p>
          <p className="text-black text-sm md:text-base leading-relaxed">
            Even long-term exposure to sunlight or polluted air can cause damage.
          </p>
        </div>

        {/* Section: Age & Other Factors */}
        <div className="space-y-4 pt-4">
          <h3 className="text-2xl font-semibold text-black">⏳ Age & Other Risks</h3>
          <p className="text-black text-sm md:text-base leading-relaxed">
            As we age, our cells have more time to accumulate mutations — which is why cancer is more common in older adults.
          </p>
          <p className="text-black text-sm md:text-base leading-relaxed">
            Other risk factors include <strong>chronic inflammation</strong>, <strong>hormonal imbalances</strong>, and <strong>weakened immunity</strong>.
          </p>
        </div>

      </div>
    </section>
  );
}
