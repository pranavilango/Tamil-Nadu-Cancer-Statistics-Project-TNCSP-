"use client";
import React from "react";
import { Heading } from "./OnPageSidebar";

export const lifestyleHeadings: Heading[] = [
  { id: "key-pillars", title: "Key Lifestyle Pillars", level: 2 },
  { id: "other-critical-factors", title: "Other Critical Factors", level: 2 },
  { id: "prevention-starts-with-you", title: "Prevention Starts With You", level: 2 },
];

export default function Lifestyle() {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            🧘‍♀️ Lifestyle & Cancer: Your Choices Matter
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 italic">
            How everyday habits shape your risk—and your future.
          </p>
        </div>

        <div className="space-y-4 pt-4">
          <p className="text-black text-sm md:text-base leading-relaxed">
            Cancer doesn’t just affect those with “bad habits.” It can impact anyone. Still, the way we live can significantly influence our risk. Prevention starts with awareness and taking control of what we can: our diet, activity, and environment.
          </p>
        </div>

        <div id="key-pillars" className="scroll-mt-20 pt-4">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 shadow-lg rounded-2xl border border-gray-200 p-6 flex flex-col space-y-3">
              <h3 className="text-xl font-semibold text-black">🚬 Tobacco & Alcohol</h3>
              <p className="text-black text-sm md:text-base leading-relaxed">
                Tobacco is the single most preventable cause of cancer. Alcohol also raises risk, especially when combined with tobacco, by damaging tissues and weakening defenses.
              </p>
            </div>
            <div className="bg-gray-50 shadow-lg rounded-2xl border border-gray-200 p-6 flex flex-col space-y-3">
              <h3 className="text-xl font-semibold text-black">🥗 Diet Matters</h3>
              <p className="text-black text-sm md:text-base leading-relaxed">
                A diet high in processed foods increases risk, while a diet rich in fruits, vegetables, and whole foods boosts immunity and protects cells. Home-cooked meals make a big difference.
              </p>
            </div>
            <div className="bg-gray-50 shadow-lg rounded-2xl border border-gray-200 p-6 flex flex-col space-y-3">
              <h3 className="text-xl font-semibold text-black">🏃‍♀️ Stay Active</h3>
              <p className="text-black text-sm md:text-base leading-relaxed">
                Lack of movement is linked to several cancers. Regular exercise—even 30 minutes of walking daily—helps balance hormones and maintain a healthy weight, reducing risk.
              </p>
            </div>
          </div>
        </div>

        <div id="other-critical-factors" className="space-y-4 pt-4 scroll-mt-20">
          <h2 className="text-2xl font-semibold text-black text-center">Other Critical Factors</h2>
          <div className="bg-gray-50 shadow-lg rounded-2xl border border-gray-200 p-6 md:p-8 mt-6 space-y-6">
            <p className="text-black text-sm md:text-base leading-relaxed">
              Beyond the main three, other factors play a crucial role in cancer prevention:
            </p>
            <ul className="list-disc list-inside text-black text-sm md:text-base space-y-3">
              <li>
                <strong>Environmental Toxins:</strong> Exposure to polluted air, pesticides, and industrial fumes matters. Use clean fuels and protective gear when necessary.
              </li>
              <li>
                <strong>Infections:</strong> Viruses like HPV and Hepatitis can cause cancer. Vaccination, safe practices, and proper hygiene are key preventive measures.
              </li>
              <li>
                <strong>Chronic Stress:</strong> Long-term stress weakens the immune system. Managing it through yoga, meditation, and community support improves overall well-being.
              </li>
            </ul>
          </div>
        </div>

        <div id="prevention-starts-with-you" className="text-center pt-8 scroll-mt-20">
          <h3 className="text-2xl font-semibold text-black">💡 Prevention Starts With You</h3>
          <p className="mt-2 text-black text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            Cancer prevention isn’t about fear—it’s about informed choices. What you eat, how you move, and how you manage stress all play a role. Start small. Stay consistent. You deserve a healthy future.
          </p>
        </div>

      </div>
    </section>
  );
}