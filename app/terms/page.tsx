import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms for using Navo.",
  alternates: { canonical: "/terms" },
};

/*
 * ⚠️ TEMPLATE — NOT LEGAL ADVICE. This is a U.S.-oriented starting-point Terms of
 * Service for Navo. Have a licensed attorney review it before you rely on it, and:
 *   1. Fill every [bracketed] field: [Company Legal Name], [Governing-Law State],
 *      [County, State] (venue), and [Mailing Address]. (Support email defaults to
 *      support@navolearning.com — change if different.)
 *   2. DECIDE on Section 14 (binding arbitration + class-action waiver) with counsel —
 *      it is a significant, optional choice and its enforceability varies by state.
 *   3. Publish a separate PRIVACY POLICY (referenced in Section 8); there is no /privacy
 *      page yet.
 *   4. Reconcile the marketing promise ("never misses what's due") with the Section 11
 *      disclaimer so the two don't read as contradictory — counsel should weigh in.
 *   5. Confirm the auto-renewal disclosure (Section 6) and cancel path (Section 7) match
 *      what the signup flow actually does (card-up-front, charge after the 7-day trial).
 */

const LAST_UPDATED = "June 25, 2026";
const SUPPORT_EMAIL = "support@navolearning.com";

type Para = { text: string; emphasis?: boolean };

const SECTIONS: { title: string; body: Para[] }[] = [
  {
    title: "1. The Service",
    body: [
      {
        text: "Navo connects to your Canvas account, with your permission, and turns your assignments and due dates into one daily study plan. We access your Canvas data on a read-only basis to build your plan. We do not submit, edit, or delete anything in Canvas. We may add, change, or remove features over time.",
      },
    ],
  },
  {
    title: "2. Who can use Navo",
    body: [
      {
        text: "You must be able to form a binding contract under U.S. law to use the Service. The Service is intended for users 18 and older. If you are between 13 and 17, you may use it only with the consent and supervision of a parent or legal guardian who agrees to these Terms on your behalf. The Service is not directed to, and we do not knowingly collect personal information from, children under 13. By using the Service, you represent that you meet these requirements.",
      },
    ],
  },
  {
    title: "3. Your account",
    body: [
      {
        text: "You are responsible for the information you provide, for activity under your account, and for keeping your login credentials secure. Give us accurate information, keep it current, and tell us promptly if you believe your account has been accessed without your permission. Do not share your account or let others use it.",
      },
    ],
  },
  {
    title: "4. Connecting Canvas and other tools",
    body: [
      {
        text: "To use Navo, you give us a read-only Canvas access token (or connect through a similar authorized method) that you generate. You authorize us to use it only to read the coursework needed to build your plan. You may also choose to connect Google Calendar on a read-only basis. You can disconnect either at any time. Your use of Canvas and any connected service stays subject to that provider's and your school's own terms, and you confirm you have the right to connect any account you link.",
      },
    ],
  },
  {
    title: "5. Acceptable use",
    body: [
      {
        text: "Use the Service only for lawful, personal, educational purposes. You agree not to misuse it or interfere with how it works; access it in unauthorized ways or probe its security; copy, scrape, resell, or commercialize it; reverse engineer it except where that restriction is prohibited by law; upload anything unlawful or harmful; or use it to violate anyone's rights. We may limit or suspend use we reasonably believe breaks these rules.",
      },
    ],
  },
  {
    title: "6. Subscription, free trial, and automatic renewal",
    body: [
      {
        text: "Navo is a paid subscription. When you sign up, you start a 7-day free trial and provide a valid payment method.",
      },
    {
        text: "After the 7-day free trial ends, your paid subscription begins automatically and your payment method is charged the then-current price. Your subscription then renews automatically each billing period (for example, monthly) at the then-current price until you cancel.",
        emphasis: true,
      },
      {
        text: "You authorize us and our payment processor to securely store your payment method and to charge these recurring amounts. We show you the price and billing period before you start. We may change prices; if we do, we will give you reasonable advance notice, and the new price applies to the next billing period after that notice.",
      },
    ],
  },
  {
    title: "7. Cancellation and refunds",
    body: [
      {
        text: `You can cancel anytime in your account settings or by emailing ${SUPPORT_EMAIL}. If you cancel before your 7-day free trial ends, you will not be charged.`,
        emphasis: true,
      },
      {
        text: "If you cancel after the trial, the cancellation takes effect at the end of your current billing period, and you keep access until then. Except where required by law, payments are non-refundable and we do not give refunds or credits for partial periods. If you are entitled to a refund under applicable law (for example, certain state auto-renewal or consumer-protection laws), we will honor it.",
      },
    ],
  },
  {
    title: "8. Your data and privacy",
    body: [
      {
        text: "Your coursework and personal data are yours. You grant us a limited license to access, process, and store your data only to operate, secure, and improve the Service and to provide it to you. We do not sell your personal data. Our Privacy Policy explains what we collect, how we use it, and your choices, and is part of these Terms. Because the data you connect may include school records, you represent that you have the right to share it, and you authorize us to process it on your behalf as a student user.",
      },
    ],
  },
  {
    title: "9. Our intellectual property; your feedback",
    body: [
      {
        text: "Navo — including its software, design, content, and brand — belongs to us or our licensors and is protected by intellectual-property laws. We grant you a personal, non-exclusive, non-transferable, revocable license to use the Service as intended. These Terms give you no rights to our name, logo, or content beyond that. If you send us feedback or suggestions, you grant us a perpetual, royalty-free right to use them without any obligation to you.",
      },
    ],
  },
  {
    title: "10. Third-party services",
    body: [
      {
        text: "Navo is an independent product. We are not affiliated with, endorsed by, or sponsored by Instructure, Inc. (“Canvas”), Google, or any school. Names like “Canvas” are used only to describe the platforms Navo works with. We are not responsible for third-party services, and your use of them is governed by their own terms.",
      },
    ],
  },
  {
    title: "11. Disclaimers",
    body: [
      {
        text: "THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.",
      },
      {
        text: "Navo is built to help you keep track of your work, but it depends on data from Canvas and other services we do not control, which may be incomplete, delayed, or unavailable. We do not warrant that the Service will be uninterrupted or error-free, or that your plan will be complete or accurate. You remain responsible for your own assignments and deadlines and should confirm important details in Canvas. Some states do not allow certain warranty exclusions, so some of the above may not apply to you.",
      },
    ],
  },
  {
    title: "12. Limitation of liability",
    body: [
      {
        text: "TO THE FULLEST EXTENT PERMITTED BY LAW, NAVO AND ITS OWNERS, EMPLOYEES, AND SUPPLIERS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY LOST GRADES, MISSED DEADLINES, LOST DATA, OR LOST OPPORTUNITIES, ARISING FROM OR RELATING TO THE SERVICE. OUR TOTAL LIABILITY FOR ANY CLAIM WILL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US IN THE 12 MONTHS BEFORE THE EVENT GIVING RISE TO THE CLAIM, OR (B) US $50. Some states do not allow certain limitations, so some of the above may not apply to you.",
      },
    ],
  },
  {
    title: "13. Indemnification",
    body: [
      {
        text: "You agree to defend, indemnify, and hold harmless Navo and its owners and employees from claims, damages, losses, and expenses (including reasonable attorneys' fees) arising from your misuse of the Service, your violation of these Terms, or your violation of any law or third-party right.",
      },
    ],
  },
  {
    title: "14. Dispute resolution and arbitration",
    body: [
      {
        text: `Most concerns can be resolved quickly. Please contact us first at ${SUPPORT_EMAIL}, and we will try in good faith to resolve any dispute informally within 30 days.`,
      },
      {
        text: "If we cannot, you and Navo agree that any dispute will be resolved by binding individual arbitration administered by the American Arbitration Association under its Consumer Arbitration Rules, rather than in court — except that either party may bring a qualifying claim in small-claims court. YOU AND NAVO WAIVE THE RIGHT TO A JURY TRIAL AND THE RIGHT TO PARTICIPATE IN A CLASS ACTION OR REPRESENTATIVE PROCEEDING.",
        emphasis: true,
      },
      {
        text: `You may opt out of this arbitration agreement within 30 days of first accepting these Terms by emailing ${SUPPORT_EMAIL} with your name and a clear statement that you opt out. Opting out does not affect the rest of these Terms.`,
      },
    ],
  },
  {
    title: "15. Governing law and venue",
    body: [
      {
        text: "These Terms are governed by the laws of the State of [Governing-Law State] and applicable U.S. federal law, without regard to conflict-of-laws rules. Subject to Section 14, you and Navo agree to the exclusive jurisdiction and venue of the state and federal courts located in [County, State] for any matter not subject to arbitration.",
      },
    ],
  },
  {
    title: "16. Termination",
    body: [
      {
        text: "You may stop using the Service and cancel at any time (see Section 7). We may suspend or end your access if you violate these Terms, if needed to protect the Service or others, or if we stop offering the Service. Sections that by their nature should survive — including Sections 8 through 15 and Section 19 — will survive termination.",
      },
    ],
  },
  {
    title: "17. Changes to these Terms",
    body: [
      {
        text: "We may update these Terms from time to time. If we make material changes, we will update the date above and, where appropriate, notify you. Changes take effect when posted (or on a stated effective date). If you keep using the Service after changes take effect, you accept the updated Terms; if you do not agree, stop using the Service and cancel.",
      },
    ],
  },
  {
    title: "18. Electronic communications",
    body: [
      {
        text: "By using the Service, you consent to receive communications from us electronically — including account, billing, and legal notices — by email or through the Service, and you agree these satisfy any legal requirement that such communications be in writing.",
      },
    ],
  },
  {
    title: "19. General",
    body: [
      {
        text: "These Terms, together with the Privacy Policy, are the entire agreement between you and Navo about the Service. If any part is found unenforceable, the rest stays in effect. Our failure to enforce a provision is not a waiver. You may not assign these Terms without our consent; we may assign them in connection with a merger, acquisition, or sale of assets. Neither party is liable for delays or failures caused by events beyond its reasonable control.",
      },
    ],
  },
  {
    title: "20. Contact us",
    body: [
      {
        text: `Questions about these Terms? Contact us at ${SUPPORT_EMAIL}. [Company Legal Name], [Mailing Address].`,
      },
    ],
  },
];

function Term({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-ink">{title}</h2>
      <div className="mt-2 space-y-3">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <main id="main" className="py-20 sm:py-28">
      <article className="container-page mx-auto max-w-3xl">
        <h1 className="text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">Terms of Service</h1>
        <p className="mt-3 text-sm text-faint">Last updated: {LAST_UPDATED}</p>

        <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-muted">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) are a binding agreement between you and [Company Legal Name]
            (&ldquo;Navo,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) and govern your access to and use of the
            Navo website at navolearning.com, the Navo app at app.navolearning.com, and related services (together, the
            &ldquo;Service&rdquo;). By creating an account, starting a free trial, or using the Service, you agree to these Terms
            and to our Privacy Policy. If you do not agree, do not use the Service.
          </p>
          <p className="font-medium text-ink">
            Please read Section 14 (Dispute Resolution and Arbitration) carefully &mdash; it affects how disputes are resolved
            and includes a class-action waiver, with a 30-day option to opt out.
          </p>

          {SECTIONS.map((s) => (
            <Term key={s.title} title={s.title}>
              {s.body.map((p, i) => (
                <p key={i} className={p.emphasis ? "font-medium text-ink" : undefined}>
                  {p.text}
                </p>
              ))}
            </Term>
          ))}
        </div>
      </article>
    </main>
  );
}
