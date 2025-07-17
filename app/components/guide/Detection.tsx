"use client";
import { Heading } from "./OnPageSidebar";

export const detectionHeadings: Heading[] = [
  { id: "pillars-of-detection", title: "The Pillars of Detection", level: 2 },
  { id: "routine-screenings", title: "Routine Screenings Save Lives", level: 2 },
  { id: "dont-wait", title: "Don’t Wait for a Warning", level: 2 },
];

export default function Detection() {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto space-y-10">

        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            🧫 How Is Cancer Detected?
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 italic">
            When found early, cancer can often be treated more effectively.
          </p>
        </div>

        <div className="space-y-4 pt-4">
          <p className="text-black text-sm md:text-base leading-relaxed">
            Early detection is the single most powerful tool in the fight against cancer. When found early, many cancers can be treated more effectively, giving patients a far better chance of survival.
          </p>
          <p className="text-black text-sm md:text-base leading-relaxed">
            Yet too often, people ignore symptoms or delay screenings. Cancer doesn’t always shout. Sometimes, it whispers — and listening early can save a life.
          </p>
        </div>

        <div id="pillars-of-detection" className="scroll-mt-24">
          <div className="bg-gray-50 shadow-lg rounded-2xl border border-gray-200 p-6 md:p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-black">🔍 The Pillars of Detection</h2>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-black">🧑‍⚕️ Physical Examination</h3>
              <p className="text-black text-sm md:text-base">
                Doctors look for signs like lumps, swelling, or skin changes and review personal and family history to assess risks that may need further testing.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-black">🖼️ Imaging Tests</h3>
              <p className="text-black text-sm md:text-base">
                Imaging lets doctors <strong>see</strong> what’s happening inside the body. Common types include Mammograms, Colonoscopies, CT Scans, and MRIs.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-black">🧪 Lab Tests</h3>
              <p className="text-black text-sm md:text-base">
                Cancer may show up in blood, urine, or other fluids through tests like PSA (prostate), CA-125 (ovarian), Pap smears (cervical), and liquid biopsies.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-black">🧬 Biopsy</h3>
              <p className="text-black text-sm md:text-base">
                This is the definitive test. A small tissue sample is removed and examined under a microscope to confirm cancer, its type, and its characteristics.
              </p>
            </div>
          </div>
        </div>

        <div id="routine-screenings" className="space-y-4 pt-4 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-black">🗓️ Routine Screenings Save Lives</h2>
          <p className="text-black text-sm md:text-base leading-relaxed">
            Screenings find cancer before symptoms appear. These should be a regular part of life for at-risk groups:
          </p>
          <ul className="list-disc list-inside text-black text-sm md:text-base space-y-1 pl-4">
            <li><strong>Breast Cancer:</strong> Mammograms & clinical checks (after 40).</li>
            <li><strong>Cervical Cancer:</strong> Pap smear + HPV (ages 21–65).</li>
            <li><strong>Colorectal:</strong> Colonoscopies or stool tests (after 45).</li>
            <li><strong>Oral Cancer:</strong> Visual exams (especially in tobacco users).</li>
          </ul>
        </div>
        
        <div className="w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-700 text-lg font-medium italic">
          [ Infographic: Screening Timeline by Age and Risk ]
        </div>

        <div id="dont-wait" className="text-center pt-8 scroll-mt-24">
          <h3 className="text-2xl font-semibold text-black">📣 Don’t Wait for a Warning</h3>
          <p className="mt-2 text-black text-sm md:text-base max-w-3xl mx-auto">
            In Tamil Nadu, screening services are available in government hospitals and rural clinics, but awareness is still low. Let’s normalize yearly checkups. If you have a high-risk lifestyle, screening isn’t optional—it’s urgent.
          </p>
        </div>
      </div>
    </section>
  );
}