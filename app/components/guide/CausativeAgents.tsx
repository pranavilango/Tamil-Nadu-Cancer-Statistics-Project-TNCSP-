import { Heading } from "./OnPageSidebar";
import FadeIn from "./FadeIn";
import { StaggeredList, StaggeredListItem } from "./StaggeredList";

export const causativeAgentsHeadings: Heading[] = [
  { id: "genetics", title: "Genetics", level: 2 },
  { id: "environmental-factors", title: "Environmental Factors", level: 2 },
  { id: "lifestyle-choices", title: "Lifestyle Choices", level: 2 },
  { id: "age-and-other-risks", title: "Age & Other Risks", level: 2 },
];

export default function CancerCauses() {
  return (
    <FadeIn>
      <article className="prose dark:prose-invert max-w-none prose-headings:font-bold prose-p:leading-relaxed sm:prose-lg lg:prose-xl">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl">⚠️ What Causes Cancer?</h1>
          <p className="lead italic">
            A look at the factors that trigger this complex disease.
          </p>
        </div>

        <div>
          <p>
            At its core, cancer begins when a cell’s <strong>DNA is damaged or mutated</strong>.
          </p>
          <p>
            DNA acts like a set of instructions for how our body works. When it mutates, the cell may start acting abnormally — dividing too much or not dying when it should.
          </p>
          <p>
            Some of these changes are inherited. Others are caused by things we’re exposed to throughout life.
          </p>
        </div>

        <div id="genetics" className="scroll-mt-24">
          <h2>🧬 Genetics</h2>
          <p>
            Some people are <strong>born with mutations</strong> in their DNA that raise their cancer risk. These are passed down through families and cannot be prevented.
          </p>
          <p>
            These mutations don’t guarantee cancer — but they do increase the chances.
          </p>
          <p>
            Other mutations can arise <strong>spontaneously</strong>, either during normal cell division or due to damage from the environment.
          </p>
        </div>

        <div id="environmental-factors" className="scroll-mt-24">
          <h2>🌍 Environmental Factors</h2>
          <p>
            Prolonged exposure to harmful substances in our surroundings is a leading cause of cancer.
          </p>
          <StaggeredList>
              <ul className="!list-none !pl-0 space-y-4">
                  <StaggeredListItem><li><strong>Chemicals:</strong> Tobacco smoke, asbestos, pesticides, and industrial pollutants.</li></StaggeredListItem>
                  <StaggeredListItem><li><strong>Radiation:</strong> UV rays from the sun and ionizing radiation from medical imaging or environmental exposure.</li></StaggeredListItem>
                  <StaggeredListItem><li><strong>Infections:</strong> Some viruses like HPV and hepatitis B/C, as well as certain bacteria, are also linked to cancer.</li></StaggeredListItem>
              </ul>
          </StaggeredList>
        </div>

        <div id="lifestyle-choices" className="scroll-mt-24">
          <h2>💡 Lifestyle Choices</h2>
          <p>
            Everyday habits play a major role in cancer risk.
          </p>
          <p>
            Smoking, drinking alcohol excessively, poor diet, obesity, and lack of physical activity all increase cancer risk over time.
          </p>
          <p>
            Even long-term exposure to sunlight or polluted air can cause damage.
          </p>
        </div>

        <div id="age-and-other-risks" className="scroll-mt-24">
          <h2>⏳ Age & Other Risks</h2>
          <p>
            As we age, our cells have more time to accumulate mutations — which is why cancer is more common in older adults.
          </p>
          <p>
            Other risk factors include <strong>chronic inflammation</strong>, <strong>hormonal imbalances</strong>, and <strong>weakened immunity</strong>.
          </p>
        </div>

      </article>
    </FadeIn>
  );
}