// --- START OF FILE Symptoms.tsx ---

export default function Symptoms() {
    return (
        <section className="bg-white py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black">
                🚨 What Are the Symptoms of Cancer?
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 italic">
                Spotting signs early can save a life — maybe even your own.
            </p>
            </div>
            <div className="space-y-4 pt-4">
            {/* FIX: Replaced unescaped characters */}
            <p className="text-black text-sm md:text-base">
                Cancer symptoms can vary widely depending on the type and location of the disease. Some early-stage cancers show <strong>no symptoms at all</strong>, while others share signs with common, less serious illnesses. That is why it is crucial to be vigilant and <strong>consult a doctor</strong> if you notice any persistent or unusual changes in your body.
            </p>
            </div>
            <div className="bg-gray-50 shadow-lg rounded-2xl border border-gray-200 p-6 md:p-8 space-y-4">
                <h2 className="text-2xl font-semibold text-black">📋 General Symptoms to Watch For</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside text-black text-sm md:text-base">
                    <li>Unexplained weight loss or gain</li>
                    <li>A lump or swelling anywhere</li>
                    {/* FIX: Replaced unescaped characters */}
                    <li>A sore that does not heal</li>
                    <li>Unusual bleeding or discharge</li>
                    <li>Persistent cough or hoarseness</li>
                    <li>Difficulty swallowing</li>
                    <li>Changes in bowel or bladder habits</li>
                    <li>Extreme fatigue or tiredness</li>
                </ul>
            </div>
            <div className="w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-700 text-lg font-medium italic">
                [ Infographic: Common Symptoms by Cancer Type ]
            </div>
            <div className="bg-gray-50 shadow-lg rounded-2xl border border-gray-200 p-6 md:p-8 space-y-6">
                <h2 className="text-2xl font-semibold text-black">🔍 Some Type-Specific Warning Signs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                        <h3 className="text-lg font-semibold text-black">🩷 Breast Cancer</h3>
                        <ul className="list-disc list-inside text-black text-sm md:text-base ml-2 mt-1">
                            <li>Lumps in the breast or underarm</li>
                            <li>Nipple discharge or inversion</li>
                            <li>Skin dimpling or redness</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-black">🧠 Neurological Cancers</h3>
                        <ul className="list-disc list-inside text-black text-sm md:text-base ml-2 mt-1">
                            <li>Persistent headaches or seizures</li>
                            <li>Changes in vision or hearing</li>
                            <li>Numbness or facial drooping</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-black">🫁 Lung Cancer</h3>
                        <ul className="list-disc list-inside text-black text-sm md:text-base ml-2 mt-1">
                            {/* FIX: Replaced unescaped characters */}
                            <li>A cough that does not go away</li>
                            <li>Chest pain or shortness of breath</li>
                            <li>Coughing up blood</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-black">🚽 Bowel or Bladder Cancer</h3>
                        <ul className="list-disc list-inside text-black text-sm md:text-base ml-2 mt-1">
                            <li>Blood in urine or stool</li>
                            <li>Persistent constipation or diarrhea</li>
                            <li>Pain or difficulty urinating</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="space-y-4 pt-4 text-center">
                <h3 className="text-2xl font-semibold text-black">Do not Ignore the Signs</h3>
                {/* FIX: Replaced unescaped characters */}
                <p className="text-black text-sm md:text-base max-w-3xl mx-auto">
                    If you notice any of these signs, <strong>do not wait.</strong> Seeing a doctor for a checkup can lead to a faster diagnosis and a much better outcome. It is not overreacting—it is being proactive about your health.
                </p>
            </div>
        </div>
        </section>
    );
}