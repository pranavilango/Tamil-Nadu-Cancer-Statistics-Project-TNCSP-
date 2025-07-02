export default function StagesOfCancer() {
  return (
    <section className="bg-white py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            🧗‍♂️ Understanding Cancer Stages
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 italic">
            From early signs to advanced spread — why staging matters.
          </p>
        </div>

        {/* Overview Paragraphs */}
        <div className="space-y-4 pt-4">
          <p className="text-black text-sm md:text-base">
            Cancer isn’t just one thing. Doctors classify it into <strong>stages from 0 to IV</strong> to describe how far it has grown or spread.
          </p>
          <p className="text-black text-sm md:text-base">
            <strong>Stage 0</strong> is the earliest form, where abnormal cells haven’t yet invaded nearby tissue. <strong>Stage IV</strong> is the most serious, meaning the cancer has metastasized to distant organs. Staging is critical because it helps doctors choose the best treatment and predict the likely outcome.
          </p>
        </div>

        {/* TNM System Breakdown in a Styled Card */}
        <div className="bg-gray-50 shadow-lg rounded-2xl border border-gray-200 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-black">📊 The TNM System</h2>
          <p className="text-black text-sm md:text-base">
            One of the most common staging methods is the <strong>TNM system</strong>. It provides a detailed snapshot based on three key factors:
          </p>
          <ul className="list-disc list-inside text-black text-sm md:text-base space-y-2 pl-4">
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

        {/* Stage Table */}
        <div className="space-y-4 pt-4">
          <h2 className="text-2xl font-semibold text-black">📶 Stages 0 to IV — At a Glance</h2>
          <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
            <table className="w-full table-auto text-left text-sm md:text-base text-black">
              <thead className="bg-gray-100 text-black font-semibold">
                <tr>
                  <th className="px-4 py-3 border-b-2 border-gray-200">Stage</th>
                  <th className="px-4 py-3 border-b-2 border-gray-200">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3 font-medium align-top">Stage 0</td>
                  <td className="px-4 py-3">Abnormal cells are present but have not spread (carcinoma in situ). Confined to the top layer of cells.</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3 font-medium align-top">Stage I</td>
                  <td className="px-4 py-3">A small, localized tumor that has not grown deeply into nearby tissues or spread to lymph nodes.</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3 font-medium align-top">Stage II & III</td>
                  <td className="px-4 py-3">The cancer is larger and has grown more deeply into surrounding tissue. It may have also spread to nearby lymph nodes, but not to distant parts of the body.</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3 font-medium align-top">Stage IV</td>
                  <td className="px-4 py-3">The cancer has metastasized, spreading to distant organs or tissues, such as the lungs, liver, or brain.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary */}
        <div className="space-y-4 pt-4 text-center">
           <h3 className="text-2xl font-semibold text-black">Why Staging Is Key</h3>
          <p className="text-black text-sm md:text-base max-w-3xl mx-auto">
            Ultimately, <strong>early-stage cancers (0 & I)</strong> have the highest chance of successful treatment, while <strong>late-stage cancers (III & IV)</strong> are more complex and require more aggressive therapies. This is why early detection is so vital.
          </p>
        </div>
      </div>
    </section>
  );
}