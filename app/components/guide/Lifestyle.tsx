"use client";
import React from "react";
import { Heading } from "./OnPageSidebar";
import FadeIn from "./FadeIn";
import { StaggeredList, StaggeredListItem } from "./StaggeredList";

export const lifestyleHeadings: Heading[] = [
  { id: "key-pillars", title: "Key Lifestyle Pillars", level: 2 },
  { id: "other-critical-factors", title: "Other Critical Factors", level: 2 },
  { id: "prevention-starts-with-you", title: "Prevention Starts With You", level: 2 },
];

export default function Lifestyle() {
  return (
    <FadeIn>
      <article className="prose dark:prose-invert max-w-none prose-headings:font-bold prose-p:leading-relaxed sm:prose-lg lg:prose-xl">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl">🧘‍♀️ Lifestyle & Cancer: Your Choices Matter</h1>
          <p className="lead italic">
            How everyday habits shape your risk—and your future.
          </p>
        </div>

        <div>
          <p>
            Cancer doesn’t just affect those with “bad habits.” It can impact anyone. Still, the way we live can significantly influence our risk. Prevention starts with awareness and taking control of what we can: our diet, activity, and environment.
          </p>
        </div>

        <div id="key-pillars" className="scroll-mt-24 pt-4">
          <StaggeredList>
            <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-6">
              <StaggeredListItem>
                <div className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-lg h-full rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col space-y-3 shadow-lg shadow-zinc-200/50 dark:shadow-black/20">
                  <h3 className="text-xl font-semibold text-black dark:text-white mt-0">🚬 Tobacco & Alcohol</h3>
                  <p className="text-black dark:text-zinc-200 text-base leading-relaxed">
                    Tobacco is the single most preventable cause of cancer. Alcohol also raises risk, especially when combined with tobacco, by damaging tissues and weakening defenses.
                  </p>
                </div>
              </StaggeredListItem>
              <StaggeredListItem>
                <div className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-lg h-full rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col space-y-3 shadow-lg shadow-zinc-200/50 dark:shadow-black/20">
                  <h3 className="text-xl font-semibold text-black dark:text-white mt-0">🥗 Diet Matters</h3>
                  <p className="text-black dark:text-zinc-200 text-base leading-relaxed">
                    A diet high in processed foods increases risk, while a diet rich in fruits, vegetables, and whole foods boosts immunity and protects cells. Home-cooked meals make a big difference.
                  </p>
                </div>
              </StaggeredListItem>
              <StaggeredListItem>
                <div className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-lg h-full rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col space-y-3 shadow-lg shadow-zinc-200/50 dark:shadow-black/20">
                  <h3 className="text-xl font-semibold text-black dark:text-white mt-0">🏃‍♀️ Stay Active</h3>
                  <p className="text-black dark:text-zinc-200 text-base leading-relaxed">
                    Lack of movement is linked to several cancers. Regular exercise—even 30 minutes of walking daily—helps balance hormones and maintain a healthy weight, reducing risk.
                  </p>
                </div>
              </StaggeredListItem>
            </div>
          </StaggeredList>
        </div>

        <div id="other-critical-factors" className="scroll-mt-24">
          <h2 className="text-center">Other Critical Factors</h2>
          <div className="not-prose bg-white/60 dark:bg-zinc-900/60 backdrop-blur-lg rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 mt-6 space-y-6 shadow-lg shadow-zinc-200/50 dark:shadow-black/20">
            <p className="text-black dark:text-zinc-200 text-base leading-relaxed">
              Beyond the main three, other factors play a crucial role in cancer prevention:
            </p>
            <ul className="list-disc list-inside text-black dark:text-zinc-200 text-base space-y-3">
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

        <div id="prevention-starts-with-you" className="text-center pt-8 scroll-mt-24">
          <h3>💡 Prevention Starts With You</h3>
          <p className="max-w-3xl mx-auto">
            Cancer prevention isn’t about fear—it’s about informed choices. What you eat, how you move, and how you manage stress all play a role. Start small. Stay consistent. You deserve a healthy future.
          </p>
        </div>

      </article>
    </FadeIn>
  );
}