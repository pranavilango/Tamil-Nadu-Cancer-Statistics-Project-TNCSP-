import { Heading } from "./OnPageSidebar";
import FadeIn from "./FadeIn";
import { StaggeredList, StaggeredListItem } from "./StaggeredList";

export const diseaseMechanismHeadings: Heading[] = [
    { id: "from-healthy-to-tumor", title: "From Healthy Cells to a Tumor", level: 2 },
    { id: "how-cancer-disrupts", title: "How Cancer Disrupts the Body", level: 2 },
    { id: "root-cause-mutations", title: "The Root Cause: Genetic Mutations", level: 2 },
    { id: "one-name-many-diseases", title: "One Name, Many Diseases", level: 2 },
];

export default function DiseaseMechanism() {
  return (
    <FadeIn>
      <article className="prose dark:prose-invert max-w-none prose-headings:font-bold prose-p:leading-relaxed sm:prose-lg lg:prose-xl">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl">🔬 What Actually Happens in the Body?</h1>
          <p className="lead italic">
            The biology behind cancer — explained simply.
          </p>
        </div>
        <div id="from-healthy-to-tumor" className="scroll-mt-24">
          <div className="not-prose bg-white/60 dark:bg-zinc-900/60 backdrop-blur-lg rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 space-y-4 shadow-lg shadow-zinc-200/50 dark:shadow-black/20">
            <h2 className="text-2xl font-semibold text-black dark:text-white mt-0">From Healthy Cells to a Tumor</h2>
            <div className="space-y-4 text-black dark:text-zinc-200 text-base">
              <p>
                Every living organism is made up of <strong>cells</strong> — the tiny building blocks of life. These cells are programmed to grow, divide, and die in a <strong>controlled, orderly</strong> way.
              </p>
              <p>
                Cancer begins when this control system breaks down. A cell starts to <strong>divide uncontrollably</strong>, ignoring the signals to stop. This relentless division creates a clump of abnormal cells called a <strong>tumor</strong>.
              </p>
              <p>
                Not all tumors are dangerous. Some, called <strong>benign</strong>, stay in one place. But others, which are <strong>malignant</strong> (cancerous), can invade nearby tissues and spread to distant organs. This process of spreading is called <strong>metastasis</strong>.
              </p>
            </div>
          </div>
        </div>
        <div className="not-prose w-full h-64 sm:h-72 bg-gray-200 dark:bg-zinc-800 rounded-xl flex items-center justify-center text-gray-700 dark:text-zinc-300 text-lg font-medium italic">
          [ Infographic: Benign vs Malignant Tumors ]
        </div>
        <div id="how-cancer-disrupts" className="scroll-mt-24">
          <h2>⚙️ How Cancer Disrupts the Body</h2>
          <p>
            Cancer cells are disruptive. They grow quickly, crowding out healthy cells and stealing the nutrients, oxygen, and space needed for normal body functions. Because they originate from your own body, the immune system often struggles to recognize and fight them effectively. They master two dangerous tricks:
          </p>
          <StaggeredList>
            <ul className="!list-none !pl-0">
              <StaggeredListItem><li><strong>Avoiding Apoptosis:</strong> They ignore the natural signals for self-destruction.</li></StaggeredListItem>
              <StaggeredListItem><li><strong>Angiogenesis:</strong> They grow their own new blood vessels to supply themselves with food.</li></StaggeredListItem>
            </ul>
          </StaggeredList>
        </div>
        <div id="root-cause-mutations" className="scroll-mt-24">
          <h2>🧬 The Root Cause: Genetic Mutations</h2>
          <p>
            At its core, cancer is a genetic disease. It is caused by <strong>mutations</strong> in the DNA of a cell that hijack its instruction manual. Some of these mutations are <strong>inherited</strong>, but most are <strong>acquired</strong> over a lifetime due to environmental factors or random errors during cell division. These mutations effectively tell the cell to grow when it should not.
          </p>
        </div>
        <div id="one-name-many-diseases" className="scroll-mt-24">
          <h2>🧩 One Name, Many Diseases</h2>
          <p>
            It is crucial to remember that cancer is not one disease — it is a group of <strong>over 100 distinct types</strong>. Some grow fast, others slow. Some are best treated with surgery, while others require <strong>chemotherapy</strong> or <strong>radiation</strong>. Understanding the specific type of cancer is the most important step in choosing the right treatment plan.
          </p>
        </div>
      </article>
    </FadeIn>
  );
}