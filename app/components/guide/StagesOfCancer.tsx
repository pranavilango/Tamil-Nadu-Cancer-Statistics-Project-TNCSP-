import { Heading } from "./OnPageSidebar";
import FadeIn from "./FadeIn";

export const stagesOfCancerHeadings: Heading[] = [
  { id: "tnm-system", title: "The TNM System", level: 2 },
  { id: "stages-at-a-glance", title: "Stages 0 to IV — At a Glance", level: 2 },
  { id: "why-staging-is-key", title: "Why Staging Is Key", level: 2 },
];

export default function StagesOfCancer() {
  return (
    <FadeIn>
      <article className="prose dark:prose-invert max-w-none prose-headings:font-bold prose-p:leading-relaxed sm:prose-lg lg:prose-xl">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl">🧗‍♂️ Understanding Cancer Stages</h1>
          <p className="lead italic">
            From early signs to advanced spread — why staging matters.
          </p>
        </div>

        <div>
          <p>
            Cancer isn’t just one thing. Doctors classify it into <strong>stages from 0 to IV</strong> to describe how far it has grown or spread.
          </p>
          <p>
            <strong>Stage 0</strong> is the earliest form, where abnormal cells haven’t yet invaded nearby tissue. <strong>Stage IV</strong> is the most serious, meaning the cancer has metastasized to distant organs. Staging is critical because it helps doctors choose the best treatment and predict the likely outcome.
          </p>
        </div>

        <div id="tnm-system" className="scroll-mt-24">
          <div className="not-prose bg-white/60 dark:bg-zinc-900/60 backdrop-blur-lg rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 space-y-4 shadow-lg shadow-zinc-200/50 dark:shadow-black/20">
            <h2 className="text-2xl font-semibold text-black dark:text-white mt-0">📊 The TNM System</h2>
            <p className="text-black dark:text-zinc-200 text-base">
              One of the most common staging methods is the <strong>TNM system</strong>. It provides a detailed snapshot based on three key factors:
            </p>
            <ul className="list-disc list-inside text-black dark:text-zinc-200 text-base space-y-2 pl-4">
              <li>
                <strong>T (Tumor):</strong> Measures the size and extent of the original tumor.
              </li>
              <li>
                <strong>N (Nodes):</strong> Indicates whether the cancer has spread to nearby lymph nodes.
              </li>
              <li>
                <strong>M (Metastasis):</strong> Confirms if the cancer has spread to distant parts of the body.
              </li>
            </ul>
          </div>
        </div>

        <div id="stages-at-a-glance" className="scroll-mt-24">
          <h2>📶 Stages 0 to IV — At a Glance</h2>
          <div className="not-prose overflow-x-auto rounded-xl shadow-lg border border-gray-200 dark:border-zinc-800">
            <table className="w-full table-auto text-left text-sm md:text-base text-black dark:text-zinc-200">
              <thead className="bg-gray-100 dark:bg-zinc-800 text-black dark:text-white font-semibold">
                <tr>
                  <th className="px-4 py-3 border-b-2 border-gray-200 dark:border-zinc-700">Stage</th>
                  <th className="px-4 py-3 border-b-2 border-gray-200 dark:border-zinc-700">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-zinc-900/80">
                <tr className="border-t border-gray-200 dark:border-zinc-800">
                  <td className="px-4 py-3 font-medium align-top">Stage 0</td>
                  <td className="px-4 py-3">Abnormal cells are present but have not spread (carcinoma in situ). Confined to the top layer of cells.</td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-zinc-800">
                  <td className="px-4 py-3 font-medium align-top">Stage I</td>
                  <td className="px-4 py-3">A small, localized tumor that has not grown deeply into nearby tissues or spread to lymph nodes.</td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-zinc-800">
                  <td className="px-4 py-3 font-medium align-top">Stage II & III</td>
                  <td className="px-4 py-3">The cancer is larger and has grown more deeply into surrounding tissue. It may have also spread to nearby lymph nodes, but not to distant parts of the body.</td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-zinc-800">
                  <td className="px-4 py-3 font-medium align-top">Stage IV</td>
                  <td className="px-4 py-3">The cancer has metastasized, spreading to distant organs or tissues, such as the lungs, liver, or brain.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="why-staging-is-key" className="text-center pt-4 scroll-mt-24">
           <h3>Why Staging Is Key</h3>
          <p className="max-w-3xl mx-auto">
            Ultimately, <strong>early-stage cancers (0 & I)</strong> have the highest chance of successful treatment, while <strong>late-stage cancers (III & IV)</strong> are more complex and require more aggressive therapies. This is why early detection is so vital.
          </p>
        </div>
      </article>
    </FadeIn>
  );
}