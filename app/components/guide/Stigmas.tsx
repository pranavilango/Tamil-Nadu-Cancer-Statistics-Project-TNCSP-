"use client";
import { Heading } from "./OnPageSidebar";

export const stigmasHeadings: Heading[] = [
  { id: "isolation-at-home", title: "Isolation Begins at Home", level: 2 },
  { id: "women-double-burden", title: "Women Face Double the Burden", level: 2 },
  { id: "more-than-hair-loss", title: "More Than Just Hair Loss", level: 2 },
  { id: "price-of-survival", title: "The Price of Survival", level: 2 },
  { id: "change-starts-with-us", title: "Change Starts with Us", level: 2 },
];


export default function Stigmas() {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto space-y-10">

        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            🧠 Cancer and Stigma: The Battle Beyond the Body
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 italic">
            Fighting cancer isn't just about medicine — it's about mindset, too.
          </p>
        </div>

        <div className="space-y-4 pt-4">
          <p className="text-black text-sm md:text-base leading-relaxed">
            In many communities, cancer is still surrounded by fear, silence, and shame. Some see it as a punishment — a result of karma or bad luck. Others believe it’s contagious, or worse, a curse. These are myths.
          </p>
          <p className="text-black text-sm md:text-base leading-relaxed">
            Stigma doesn’t just hurt feelings — it hurts outcomes. It makes people hide their diagnosis, delay treatment, or reject help. It builds walls between the patient and the world. And in some cases, it costs lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div id="isolation-at-home" className="bg-gray-50 shadow-lg rounded-2xl border border-gray-200 p-6 space-y-4 flex flex-col scroll-mt-20">
            <h3 className="text-2xl font-semibold text-black">🧱 Isolation Begins at Home</h3>
            <div className="text-black text-sm md:text-base space-y-3 leading-relaxed">
              <p>
                Families often avoid disclosing a diagnosis, fearing judgment. This secrecy can isolate the patient, even from those closest to them. Shame replaces support, and fear takes the place of empathy.
              </p>
              <p>
                Some patients even refuse life-saving treatment because they worry what others might think. For them, the stigma is stronger than the disease.
              </p>
            </div>
          </div>
          <div id="women-double-burden" className="bg-gray-50 shadow-lg rounded-2xl border border-gray-200 p-6 space-y-4 flex flex-col scroll-mt-20">
            <h3 className="text-2xl font-semibold text-black">👩‍⚕️ Women Face Double the Burden</h3>
            <div className="text-black text-sm md:text-base space-y-3 leading-relaxed">
              <p>
                Stigma hits women especially hard, particularly in rural areas. Reproductive cancers are seen as a source of dishonor, and women may be blamed, shunned, or even abandoned.
              </p>
              <p>
                Some face rejection in marriage proposals or are excluded from household decisions. Cancer doesn’t strip them of dignity — but society often does.
              </p>
            </div>
          </div>
          <div id="more-than-hair-loss" className="bg-gray-50 shadow-lg rounded-2xl border border-gray-200 p-6 space-y-4 flex flex-col scroll-mt-20">
            <h3 className="text-2xl font-semibold text-black">💇‍♀️ More Than Just Hair Loss</h3>
            <div className="text-black text-sm md:text-base space-y-3 leading-relaxed">
              <p>
                Visible changes like hair loss are deeply emotional. It becomes harder to feel “normal,” and some patients withdraw from social life entirely.
              </p>
              <p>
                The myth that cancer always means death prevents people from getting tested early — when they still have the best chance of survival.
              </p>
            </div>
          </div>
          <div id="price-of-survival" className="bg-gray-50 shadow-lg rounded-2xl border border-gray-200 p-6 space-y-4 flex flex-col scroll-mt-20">
            <h3 className="text-2xl font-semibold text-black">💸 The Price of Survival</h3>
            <div className="text-black text-sm md:text-base space-y-3 leading-relaxed">
              <p>
                The high cost of treatment leads to another layer of stigma. Families may sell assets to pay for care, and in the worst cases, patients are abandoned.
              </p>
              <p>
                Poverty should never be a death sentence. Yet, for too many, it is.
              </p>
            </div>
          </div>
        </div>

        <div id="change-starts-with-us" className="text-center pt-8 scroll-mt-20">
          <h3 className="text-2xl font-semibold text-black">🌱 Change Starts with Us</h3>
          <p className="mt-2 text-black text-sm md:text-base max-w-3xl mx-auto">
            Curing cancer requires medicine. But defeating stigma takes courage, conversation, and compassion. Let’s stop whispering and start listening. Let’s treat patients as people — with respect, with love, and with hope.
            Because cancer doesn’t isolate people — stigma does. And we all have the power to end it.
          </p>
        </div>
      </div>
    </section>
  );
}