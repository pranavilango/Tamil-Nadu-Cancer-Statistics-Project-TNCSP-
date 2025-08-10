import { Heading } from "./OnPageSidebar";
import FadeIn from "./FadeIn";

export const symptomsHeadings: Heading[] = [
  { id: "general-symptoms", title: "General Symptoms to Watch For", level: 2 },
  { id: "type-specific-signs", title: "Some Type-Specific Warning Signs", level: 2 },
  { id: "dont-ignore-signs", title: "Do not Ignore the Signs", level: 2 },
];

export default function Symptoms() {
    return (
      <FadeIn>
        <article className="prose dark:prose-invert max-w-none prose-headings:font-bold prose-p:leading-relaxed sm:prose-lg lg:prose-xl">
            <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl">🚨 What Are the Symptoms of Cancer?</h1>
            <p className="lead italic">
                Spotting signs early can save a life — maybe even your own.
            </p>
            </div>
            <div>
            <p>
                Cancer symptoms can vary widely depending on the type and location of the disease. Some early-stage cancers show <strong>no symptoms at all</strong>, while others share signs with common, less serious illnesses. That is why it is crucial to be vigilant and <strong>consult a doctor</strong> if you notice any persistent or unusual changes in your body.
            </p>
            </div>
            <div id="general-symptoms" className="scroll-mt-24">
              <div className="not-prose bg-white/60 dark:bg-zinc-900/60 backdrop-blur-lg rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 space-y-4 shadow-lg shadow-zinc-200/50 dark:shadow-black/20">
                  <h2 className="text-2xl font-semibold text-black dark:text-white mt-0">📋 General Symptoms to Watch For</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside text-black dark:text-zinc-200 text-base">
                      <li>Unexplained weight loss or gain</li>
                      <li>A lump or swelling anywhere</li>
                      <li>A sore that does not heal</li>
                      <li>Unusual bleeding or discharge</li>
                      <li>Persistent cough or hoarseness</li>
                      <li>Difficulty swallowing</li>
                      <li>Changes in bowel or bladder habits</li>
                      <li>Extreme fatigue or tiredness</li>
                  </ul>
              </div>
            </div>
            <div className="not-prose w-full h-64 sm:h-72 bg-gray-200 dark:bg-zinc-800 rounded-xl flex items-center justify-center text-gray-700 dark:text-zinc-300 text-lg font-medium italic">
                [ Infographic: Common Symptoms by Cancer Type ]
            </div>
            <div id="type-specific-signs" className="scroll-mt-24">
              <div className="not-prose bg-white/60 dark:bg-zinc-900/60 backdrop-blur-lg rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 space-y-6 shadow-lg shadow-zinc-200/50 dark:shadow-black/20">
                  <h2 className="text-2xl font-semibold text-black dark:text-white mt-0">🔍 Some Type-Specific Warning Signs</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                      <div>
                          <h3 className="text-lg font-semibold text-black dark:text-white">🩷 Breast Cancer</h3>
                          <ul className="list-disc list-inside text-black dark:text-zinc-200 text-base ml-2 mt-1">
                              <li>Lumps in the breast or underarm</li>
                              <li>Nipple discharge or inversion</li>
                              <li>Skin dimpling or redness</li>
                          </ul>
                      </div>
                      <div>
                          <h3 className="text-lg font-semibold text-black dark:text-white">🧠 Neurological Cancers</h3>
                          <ul className="list-disc list-inside text-black dark:text-zinc-200 text-base ml-2 mt-1">
                              <li>Persistent headaches or seizures</li>
                              <li>Changes in vision or hearing</li>
                              <li>Numbness or facial drooping</li>
                          </ul>
                      </div>
                      <div>
                          <h3 className="text-lg font-semibold text-black dark:text-white">🫁 Lung Cancer</h3>
                          <ul className="list-disc list-inside text-black dark:text-zinc-200 text-base ml-2 mt-1">
                              <li>A cough that does not go away</li>
                              <li>Chest pain or shortness of breath</li>
                              <li>Coughing up blood</li>
                          </ul>
                      </div>
                      <div>
                          <h3 className="text-lg font-semibold text-black dark:text-white">🚽 Bowel or Bladder Cancer</h3>
                          <ul className="list-disc list-inside text-black dark:text-zinc-200 text-base ml-2 mt-1">
                              <li>Blood in urine or stool</li>
                              <li>Persistent constipation or diarrhea</li>
                              <li>Pain or difficulty urinating</li>
                          </ul>
                      </div>
                  </div>
              </div>
            </div>
            <div id="dont-ignore-signs" className="text-center pt-4 scroll-mt-24">
                <h3>Do not Ignore the Signs</h3>
                <p className="max-w-3xl mx-auto">
                    If you notice any of these signs, <strong>do not wait.</strong> Seeing a doctor for a checkup can lead to a faster diagnosis and a much better outcome. It is not overreacting—it is being proactive about your health.
                </p>
            </div>
        </article>
      </FadeIn>
    );
}