"use client";
import { Heading } from "./OnPageSidebar";
import FadeIn from "./FadeIn";
import { StaggeredList, StaggeredListItem } from "./StaggeredList";

export const detectionHeadings: Heading[] = [
  { id: "pillars-of-detection", title: "The Pillars of Detection", level: 2 },
  { id: "routine-screenings", title: "Routine Screenings Save Lives", level: 2 },
  { id: "dont-wait", title: "Don’t Wait for a Warning", level: 2 },
];

export default function Detection() {
  return (
    <FadeIn>
      <article className="prose dark:prose-invert max-w-none prose-headings:font-bold prose-p:leading-relaxed sm:prose-lg lg:prose-xl">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl">🧫 How Is Cancer Detected?</h1>
          <p className="lead italic">
            When found early, cancer can often be treated more effectively.
          </p>
        </div>

        <div>
          <p>
            Early detection is the single most powerful tool in the fight against cancer. When found early, many cancers can be treated more effectively, giving patients a far better chance of survival.
          </p>
          <p>
            Yet too often, people ignore symptoms or delay screenings. Cancer doesn’t always shout. Sometimes, it whispers — and listening early can save a life.
          </p>
        </div>

        <div id="pillars-of-detection" className="scroll-mt-24">
          <div className="not-prose bg-white/60 dark:bg-zinc-900/60 backdrop-blur-lg rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 space-y-6 shadow-lg shadow-zinc-200/50 dark:shadow-black/20">
            <h2 className="text-2xl font-semibold text-black dark:text-white mt-0">🔍 The Pillars of Detection</h2>

            <StaggeredList>
              <div className="space-y-6">
                <StaggeredListItem>
                  <div className="space-y-2 text-black dark:text-zinc-200">
                    <h3 className="text-xl font-semibold text-black dark:text-white">🧑‍⚕️ Physical Examination</h3>
                    <p className="text-base">
                      Doctors look for signs like lumps, swelling, or skin changes and review personal and family history to assess risks that may need further testing.
                    </p>
                  </div>
                </StaggeredListItem>
                <StaggeredListItem>
                  <div className="space-y-2 text-black dark:text-zinc-200">
                    <h3 className="text-xl font-semibold text-black dark:text-white">🖼️ Imaging Tests</h3>
                    <p className="text-base">
                      Imaging lets doctors <strong>see</strong> what’s happening inside the body. Common types include Mammograms, Colonoscopies, CT Scans, and MRIs.
                    </p>
                  </div>
                </StaggeredListItem>
                <StaggeredListItem>
                  <div className="space-y-2 text-black dark:text-zinc-200">
                    <h3 className="text-xl font-semibold text-black dark:text-white">🧪 Lab Tests</h3>
                    <p className="text-base">
                      Cancer may show up in blood, urine, or other fluids through tests like PSA (prostate), CA-125 (ovarian), Pap smears (cervical), and liquid biopsies.
                    </p>
                  </div>
                </StaggeredListItem>
                <StaggeredListItem>
                  <div className="space-y-2 text-black dark:text-zinc-200">
                    <h3 className="text-xl font-semibold text-black dark:text-white">🧬 Biopsy</h3>
                    <p className="text-base">
                      This is the definitive test. A small tissue sample is removed and examined under a microscope to confirm cancer, its type, and its characteristics.
                    </p>
                  </div>
                </StaggeredListItem>
              </div>
            </StaggeredList>
          </div>
        </div>

        <div id="routine-screenings" className="scroll-mt-24">
          <h2>🗓️ Routine Screenings Save Lives</h2>
          <p>
            Screenings find cancer before symptoms appear. These should be a regular part of life for at-risk groups:
          </p>
          <ul>
            <li><strong>Breast Cancer:</strong> Mammograms & clinical checks (after 40).</li>
            <li><strong>Cervical Cancer:</strong> Pap smear + HPV (ages 21–65).</li>
            <li><strong>Colorectal:</strong> Colonoscopies or stool tests (after 45).</li>
            <li><strong>Oral Cancer:</strong> Visual exams (especially in tobacco users).</li>
          </ul>
        </div>
        
        <div className="not-prose w-full h-64 sm:h-72 bg-gray-200 dark:bg-zinc-800 rounded-xl flex items-center justify-center text-gray-700 dark:text-zinc-300 text-lg font-medium italic">
          [ Infographic: Screening Timeline by Age and Risk ]
        </div>

        <div id="dont-wait" className="text-center pt-8 scroll-mt-24">
          <h3>📣 Don’t Wait for a Warning</h3>
          <p className="max-w-3xl mx-auto">
            In Tamil Nadu, screening services are available in government hospitals and rural clinics, but awareness is still low. Let’s normalize yearly checkups. If you have a high-risk lifestyle, screening isn’t optional—it’s urgent.
          </p>
        </div>
      </article>
    </FadeIn>
  );
}