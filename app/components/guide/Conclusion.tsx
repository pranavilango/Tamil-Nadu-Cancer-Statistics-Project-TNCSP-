import { Heading } from "./OnPageSidebar";
import FadeIn from "./FadeIn";

export const conclusionHeadings: Heading[] = [
  { id: "key-takeaways", title: "Our Path Forward: Key Takeaways", level: 2 },
  { id: "be-the-change", title: "Be the Change", level: 2 },
];

export default function Conclusion() {
  return (
    <FadeIn>
      <article className="prose dark:prose-invert max-w-none prose-headings:font-bold prose-p:leading-relaxed sm:prose-lg lg:prose-xl">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl">🎓 The Final Word on Cancer</h1>
          <p className="lead italic">
            Building a future where awareness leads to action—and action leads to hope.
          </p>
        </div>

        <div>
          <p>
            Cancer is a complex and serious illness, but it is no longer the death sentence it was once believed to be. Thanks to medical advancements and a deeper understanding of its biology, many cancers today are <strong>treatable</strong>, <strong>manageable</strong>, and even <strong>curable</strong>—especially when detected early.
          </p>
          <p>
            The future of cancer care in Tamil Nadu rests on <strong>collective responsibility</strong>. The key lies in awareness, early screening, and timely access to healthcare services for all.
          </p>
        </div>

        <div id="key-takeaways" className="scroll-mt-24">
          <div className="not-prose bg-white/60 dark:bg-zinc-900/60 backdrop-blur-lg rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 space-y-4 shadow-lg shadow-zinc-200/50 dark:shadow-black/20">
            <h3 className="text-2xl font-semibold text-black dark:text-white mt-0">Our Path Forward: Key Takeaways</h3>
            <ul className="list-none space-y-3 text-black dark:text-zinc-200 text-base">
              <li className="flex items-start space-x-3">
                <span className="text-green-500 font-bold text-xl mt-px">✓</span>
                <span><strong>Prevention is Powerful:</strong> Regular check-ups, avoiding tobacco, eating nutritious food, and staying active are simple actions that drastically reduce risk.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-500 font-bold text-xl mt-px">✓</span>
                <span><strong>Early Detection is a Lifesaver:</strong> We must normalize screenings and encourage everyone to seek help for persistent symptoms without delay or stigma.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-500 font-bold text-xl mt-px">✓</span>
                <span><strong>Community is a Cure:</strong> Every individual, family, and leader has a role. We must support patients, educate children, and build a culture of health.</span>
              </li>
            </ul>
          </div>
        </div>
        
         <p className="text-center italic max-w-4xl mx-auto pt-4">
            Let’s strive to make <strong>treatment accessible to all</strong> and <strong>survivors symbols of strength</strong>. A cancer-aware Tamil Nadu is not a dream—it is a vision we must realize together.
          </p>

        <div id="be-the-change" className="text-center pt-6 scroll-mt-24">
            <div className="not-prose border-t-2 border-b-2 border-gray-200 dark:border-zinc-800 py-6">
                <h3 className="text-2xl font-semibold text-black dark:text-white mt-0">🫱🏽‍🫲🏽 Be the Change</h3>
                <p className="mt-2 text-black dark:text-zinc-200 text-base max-w-3xl mx-auto leading-relaxed">
                  By staying informed, supporting those affected, and making healthier choices every day, <strong>you</strong> can help
                  transform fear into hope and isolation into solidarity. Let’s make cancer awareness not just a campaign, but
                  a <strong>way of life</strong>.
                </p>
            </div>
        </div>
      </article>
    </FadeIn>
  );
}