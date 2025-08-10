"use client";
import { Heading } from "./OnPageSidebar";
import FadeIn from "./FadeIn";
import { StaggeredList, StaggeredListItem } from "./StaggeredList";

export const stigmasHeadings: Heading[] = [
  { id: "isolation-at-home", title: "Isolation Begins at Home", level: 2 },
  { id: "women-double-burden", title: "Women Face Double the Burden", level: 2 },
  { id: "more-than-hair-loss", title: "More Than Just Hair Loss", level: 2 },
  { id: "price-of-survival", title: "The Price of Survival", level: 2 },
  { id: "change-starts-with-us", title: "Change Starts with Us", level: 2 },
];

export default function Stigmas() {
  return (
    <FadeIn>
      <article className="prose dark:prose-invert max-w-none prose-headings:font-bold prose-p:leading-relaxed sm:prose-lg lg:prose-xl">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl">🧠 Cancer and Stigma: The Battle Beyond the Body</h1>
          <p className="lead italic">
            Fighting cancer is not just about medicine — it is about mindset, too.
          </p>
        </div>

        <div>
          <p>
            In many communities, cancer is still surrounded by fear, silence, and shame. Some see it as a punishment — a result of karma or bad luck. Others believe it’s contagious, or worse, a curse. These are myths.
          </p>
          <p>
            Stigma doesn’t just hurt feelings — it hurts outcomes. It makes people hide their diagnosis, delay treatment, or reject help. It builds walls between the patient and the world. And in some cases, it costs lives.
          </p>
        </div>

        <StaggeredList>
          <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-4">
            <StaggeredListItem>
              <div id="isolation-at-home" className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-lg h-full rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 space-y-4 flex flex-col scroll-mt-24 shadow-lg shadow-zinc-200/50 dark:shadow-black/20">
                <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-white mt-0">🧱 Isolation Begins at Home</h3>
                <div className="text-black dark:text-zinc-200 text-base space-y-3 leading-relaxed">
                  <p>
                    Families often avoid disclosing a diagnosis, fearing judgment. This secrecy can isolate the patient, even from those closest to them. Shame replaces support, and fear takes the place of empathy.
                  </p>
                  <p>
                    Some patients even refuse life-saving treatment because they worry what others might think. For them, the stigma is stronger than the disease.
                  </p>
                </div>
              </div>
            </StaggeredListItem>
            <StaggeredListItem>
              <div id="women-double-burden" className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-lg h-full rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 space-y-4 flex flex-col scroll-mt-24 shadow-lg shadow-zinc-200/50 dark:shadow-black/20">
                <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-white mt-0">👩‍⚕️ Women Face Double the Burden</h3>
                <div className="text-black dark:text-zinc-200 text-base space-y-3 leading-relaxed">
                  <p>
                    Stigma hits women especially hard, particularly in rural areas. Reproductive cancers are seen as a source of dishonor, and women may be blamed, shunned, or even abandoned.
                  </p>
                  <p>
                    Some face rejection in marriage proposals or are excluded from household decisions. Cancer doesn’t strip them of dignity — but society often does.
                  </p>
                </div>
              </div>
            </StaggeredListItem>
            <StaggeredListItem>
              <div id="more-than-hair-loss" className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-lg h-full rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 space-y-4 flex flex-col scroll-mt-24 shadow-lg shadow-zinc-200/50 dark:shadow-black/20">
                <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-white mt-0">💇‍♀️ More Than Just Hair Loss</h3>
                <div className="text-black dark:text-zinc-200 text-base space-y-3 leading-relaxed">
                  <p>
                    Visible changes like hair loss are deeply emotional. It becomes harder to feel “normal,” and some patients withdraw from social life entirely.
                  </p>
                  <p>
                    The myth that cancer always means death prevents people from getting tested early — when they still have the best chance of survival.
                  </p>
                </div>
              </div>
            </StaggeredListItem>
            <StaggeredListItem>
              <div id="price-of-survival" className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-lg h-full rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 space-y-4 flex flex-col scroll-mt-24 shadow-lg shadow-zinc-200/50 dark:shadow-black/20">
                <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-white mt-0">💸 The Price of Survival</h3>
                <div className="text-black dark:text-zinc-200 text-base space-y-3 leading-relaxed">
                  <p>
                    The high cost of treatment leads to another layer of stigma. Families may sell assets to pay for care, and in the worst cases, patients are abandoned.
                  </p>
                  <p>
                    Poverty should never be a death sentence. Yet, for too many, it is.
                  </p>
                </div>
              </div>
            </StaggeredListItem>
          </div>
        </StaggeredList>

        <div id="change-starts-with-us" className="text-center pt-8 scroll-mt-24">
          <h3>🌱 Change Starts with Us</h3>
          <p className="max-w-3xl mx-auto">
            Curing cancer requires medicine. But defeating stigma takes courage, conversation, and compassion. Let us stop whispering and start listening. Let us treat patients as people — with respect, with love, and with hope.
            Because cancer does not isolate people — stigma does. And we all have the power to end it.
          </p>
        </div>
      </article>
    </FadeIn>
  );
}