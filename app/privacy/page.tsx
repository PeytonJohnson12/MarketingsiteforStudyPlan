import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Navo collects, uses, and protects your data.",
  alternates: { canonical: "/privacy" },
};

/*
 * ⚠️ TEMPLATE — NOT LEGAL ADVICE. A U.S.-oriented starting-point Privacy Policy for
 * Navo. Have a licensed attorney review it before you rely on it, and:
 *   1. Fill [Company Legal Name] and [Mailing Address]. (Contact defaults to
 *      support@navolearning.com — change if you use a dedicated privacy@ inbox.)
 *   2. Make sure every practice described here MATCHES what the app actually does
 *      (what you collect, your payment processor, analytics, retention, sub-processors).
 *   3. Add a cookie-consent banner before launch (GDPR/COPPA exposure) and reflect it
 *      in Section 6 — this policy describes analytics but does not itself gate cookies.
 *   4. Keep this in sync with the Terms (which references this policy).
 */

const LAST_UPDATED = "June 25, 2026";
const CONTACT_EMAIL = "support@navolearning.com";

type Para = { text: string; emphasis?: boolean };

const SECTIONS: { title: string; body: Para[] }[] = [
  {
    title: "1. Who we are",
    body: [
      {
        text: "Navo is a Canvas-connected study planner. This Privacy Policy explains what information [Company Legal Name] (“Navo,” “we,” “us”) collects when you use the Navo website (navolearning.com) and app (app.navolearning.com), how we use it, and the choices you have. It is part of our Terms of Service.",
      },
    ],
  },
  {
    title: "2. Information we collect",
    body: [
      { text: "Account information — your name and email address, and the password you set (stored only as a secure hash).", },
      { text: "Canvas coursework — when you connect Canvas with a read-only access token, we read your assignments, quizzes, exams, due dates, and related course information to build your plan. We do not receive your Canvas password.", },
      { text: "Google Calendar (optional) — if you connect it, we read your busy times (not event details we don't need) to schedule around them. You can disconnect anytime.", },
      { text: "Payment information — when you start a subscription, our payment processor collects and processes your card details. We do not store full card numbers on our servers.", },
      { text: "Usage and device data — basic analytics about how you use the Service (pages viewed, actions taken, device and browser type), collected to operate and improve it.", },
    ],
  },
  {
    title: "3. How we use your information",
    body: [
      {
        text: "We use your information to: build and update your study plan from your coursework; create and secure your account; process your subscription and trial; provide support; send service and account emails; understand and improve the Service; and keep it safe. We do not use your coursework to train advertising models, and we do not sell your personal information.",
      },
    ],
  },
  {
    title: "4. Canvas and Google data",
    body: [
      {
        text: "Your connection to Canvas is read-only: Navo reads your coursework and due dates and cannot submit, edit, or delete anything in Canvas. We use this data only to build your plan and the features you ask for. Connected secrets (like your Canvas token and any Google tokens) are encrypted. You can disconnect at any time, which stops further access.",
      },
    ],
  },
  {
    title: "5. How we share information",
    body: [
      {
        text: "We share information only with service providers who help us run Navo — for example, hosting, our payment processor, email delivery, and analytics — under contracts that limit how they may use it. We may disclose information if required by law or to protect rights and safety, and we may transfer it as part of a merger, acquisition, or sale of assets. We do not sell your personal information.",
      },
    ],
  },
  {
    title: "6. Cookies and analytics",
    body: [
      {
        text: "We use cookies and similar technologies for essential functions (like keeping you signed in) and for analytics (we use Google Analytics to understand usage in aggregate). You can control cookies through your browser settings, and you can opt out of Google Analytics using Google's opt-out tools. Where required, we will ask for your consent before setting non-essential cookies.",
      },
    ],
  },
  {
    title: "7. How long we keep your data",
    body: [
      {
        text: "We keep your information for as long as your account is active and as needed to provide the Service. If you close your account, we delete or de-identify your personal data within a reasonable period, except where we must keep certain records (for example, billing records) to meet legal obligations.",
      },
    ],
  },
  {
    title: "8. Security",
    body: [
      {
        text: "We use reasonable administrative, technical, and physical safeguards to protect your information, including encryption of sensitive credentials. No method of transmission or storage is completely secure, so we cannot guarantee absolute security, but we work to protect your data and to respond promptly if something goes wrong.",
      },
    ],
  },
  {
    title: "9. Your choices and rights",
    body: [
      {
        text: "You can review and update your account information, disconnect Canvas or Google at any time, and unsubscribe from non-essential emails using the link in them. You may ask us to access, correct, or delete your personal data by emailing us.",
      },
      {
        text: "Depending on where you live (for example, California under the CCPA/CPRA, and other U.S. state laws), you may have additional rights — including the right to know what we collect, to request deletion, and to opt out of the “sale” or “sharing” of personal information. We do not sell your personal information. To exercise any right, contact us and we will respond as required by law.",
      },
    ],
  },
  {
    title: "10. Children's privacy",
    body: [
      {
        text: "The Service is intended for users 18 and older, and for users 13 to 17 only with a parent's or guardian's consent and supervision. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has given us personal information, contact us and we will delete it.",
      },
    ],
  },
  {
    title: "11. Students and education records",
    body: [
      {
        text: "Navo works for you, the student. You authorize us to access your coursework on your behalf; we are not acting as your school's agent and do not receive your records from your school. If your school or a law like FERPA applies special rules to your data, those are between you and your school — but we still protect your information as described here.",
      },
    ],
  },
  {
    title: "12. Changes to this policy",
    body: [
      {
        text: "We may update this Privacy Policy from time to time. If we make material changes, we will update the date above and, where appropriate, notify you. Continuing to use the Service after changes take effect means you accept the updated policy.",
      },
    ],
  },
  {
    title: "13. Contact us",
    body: [
      {
        text: `Questions or requests about your privacy? Contact us at ${CONTACT_EMAIL}. [Company Legal Name], [Mailing Address].`,
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

export default function PrivacyPage() {
  return (
    <main id="main" className="py-20 sm:py-28">
      <article className="container-page mx-auto max-w-3xl">
        <h1 className="text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-faint">Last updated: {LAST_UPDATED}</p>

        <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-muted">
          <p>
            Navo is built so you can trust it with your coursework. This policy explains, in plain language, what we
            collect and why. The short version: we read your Canvas data only to build your plan, we keep it secure, and
            we never sell it.
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
