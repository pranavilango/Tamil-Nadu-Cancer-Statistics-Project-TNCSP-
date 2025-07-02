// --- START OF FILE DiseaseMechanism.tsx ---

export default function DiseaseMechanism() {
  return (
    <section className="bg-white py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            🔬 What Actually Happens in the Body?
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 italic">
            The biology behind cancer — explained simply.
          </p>
        </div>
        <div className="bg-gray-50 shadow-lg rounded-2xl border border-gray-200 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-black">From Healthy Cells to a Tumor</h2>
          <div className="space-y-4 text-black text-sm md:text-base">
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
        <div className="w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-700 text-lg font-medium italic">
          [ Infographic: Benign vs Malignant Tumors ]
        </div>
        <div className="space-y-4 pt-4">
          <h2 className="text-2xl font-semibold text-black">⚙️ How Cancer Disrupts the Body</h2>
          <p className="text-black text-sm md:text-base">
            Cancer cells are disruptive. They grow quickly, crowding out healthy cells and stealing the nutrients, oxygen, and space needed for normal body functions. Because they originate from your own body, the immune system often struggles to recognize and fight them effectively. They master two dangerous tricks:
          </p>
          <ul className="list-disc list-inside text-black text-sm md:text-base space-y-2 pl-4">
            <li><strong>Avoiding Apoptosis:</strong> They ignore the natural signals for self-destruction.</li>
            <li><strong>Angiogenesis:</strong> They grow their own new blood vessels to supply themselves with food.</li>
          </ul>
        </div>
        <div className="space-y-4 pt-4">
          <h2 className="text-2xl font-semibold text-black">🧬 The Root Cause: Genetic Mutations</h2>
          {/* FIX: Replaced unescaped characters */}
          <p className="text-black text-sm md:text-base">
            At its core, cancer is a genetic disease. It's caused by <strong>mutations</strong> in a cell's DNA that hijack its instruction manual. Some of these mutations are <strong>inherited</strong>, but most are <strong>acquired</strong> over a lifetime due to environmental factors or random errors during cell division. These mutations effectively tell the cell to "grow, grow, grow" when it shouldn't.
          </p>
        </div>
        <div className="space-y-4 pt-4">
          <h2 className="text-2xl font-semibold text-black">🧩 One Name, Many Diseases</h2>
          {/* FIX: Replaced unescaped characters */}
          <p className="text-black text-sm md:text-base">
            It's crucial to remember that "cancer" isn't one disease — it's a group of <strong>over 100 distinct types</strong>. Some grow fast, others slow. Some are best treated with surgery, while others require <strong>chemotherapy</strong> or <strong>radiation</strong>. Understanding the specific type of cancer is the most important step in choosing the right treatment plan.
          </p>
        </div>
      </div>
    </section>
  );
}