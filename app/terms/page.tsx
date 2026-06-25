import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms for using Navo.",
  alternates: { canonical: "/terms" },
};

/*
 * ⚠️ TEMPLATE — NOT LEGAL ADVICE.
 * This is a starting-point Terms of Service. Have a qualified attorney review it and fill
 * every [bracketed] field (legal entity, effective date, jurisdiction, contact) before you
 * rely on it. You also need a separate Privacy Policy (referenced in section 7).
 */

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
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Terms of Service</h1>
        <p className="mt-3 text-sm text-faint">Last updated: [Effective Date]</p>

        <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-muted">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) are an agreement between you and [Company Legal Name]
            (&ldquo;Navo,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;) for your use of the Navo website and app
            (the &ldquo;Service&rdquo;). By using the Service, you agree to these Terms. If you do not agree, please do
            not use the Service.
          </p>

          <Term title="1. The Service">
            Navo connects to your Canvas account, with your permission, and turns your assignments and due dates into
            one daily study plan. We access your Canvas data on a read-only basis to build your plan. We do not submit,
            edit, or delete anything in Canvas.
          </Term>

          <Term title="2. Who can use Navo">
            You must be able to form a binding contract where you live. If you are under 18, you may use the Service only
            with the involvement and consent of a parent or guardian. The Service is not directed to children under 13,
            and we do not knowingly collect personal information from children under 13 without verifiable parental
            consent.
          </Term>

          <Term title="3. Your account">
            You are responsible for the information you provide and for keeping your account secure. Please give us
            accurate information and let us know if you believe your account has been used without your permission.
          </Term>

          <Term title="4. Connecting Canvas">
            To use Navo you may give us a read-only Canvas access token that you generate. You authorize us to use it
            only to read the coursework needed to build your plan. You can disconnect at any time. Your use of Canvas
            remains subject to your school&rsquo;s and Canvas&rsquo;s own terms.
          </Term>

          <Term title="5. Acceptable use">
            Use the Service only for lawful, personal, educational purposes. Do not misuse it, try to access it in
            unauthorized ways, scrape it, resell it, or interfere with how it works.
          </Term>

          <Term title="6. Free trial and billing">
            Navo is a paid subscription with a 7-day free trial. You add a payment method when you sign up, and your
            subscription begins automatically when the trial ends unless you cancel before then. Prices and billing terms
            are shown at the point of purchase. [Add your billing, renewal, refund, and cancellation terms here.]
          </Term>

          <Term title="7. Your content and data">
            Your coursework and data are yours. You grant us permission to use them only to provide the Service. How we
            handle your information is described in our Privacy Policy. We do not sell your data.
          </Term>

          <Term title="8. Our intellectual property">
            Navo, including its software, design, and brand, belongs to us or our licensors. These Terms do not give
            you any rights to our name, logo, or content except to use the Service as intended.
          </Term>

          <Term title="9. Not affiliated with Canvas / Instructure">
            Navo is an independent product. We are not affiliated with, endorsed by, or sponsored by Instructure,
            Inc. or Canvas. &ldquo;Canvas&rdquo; is used only to describe the platform Navo works with.
          </Term>

          <Term title="10. Disclaimers">
            The Service is provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo; While Navo is designed to help
            you keep track of your work, we do not guarantee that your plan is complete, accurate, or error-free. You are
            responsible for your own assignments and deadlines, and you should always confirm important details in Canvas.
          </Term>

          <Term title="11. Limitation of liability">
            To the fullest extent allowed by law, Navo will not be liable for indirect, incidental, or consequential
            damages, or for missed deadlines or lost work arising from your use of the Service. [Add any liability cap
            here, e.g., limited to the amount you paid us in the prior 12 months.]
          </Term>

          <Term title="12. Termination">
            You may stop using the Service at any time. We may suspend or end your access if you violate these Terms or to
            protect the Service.
          </Term>

          <Term title="13. Changes">
            We may update the Service and these Terms from time to time. If we make material changes, we will update the
            date above. Continuing to use the Service means you accept the updated Terms.
          </Term>

          <Term title="14. Governing law">
            These Terms are governed by the laws of [State / Country], without regard to conflict-of-laws rules.
          </Term>

          <Term title="15. Contact">
            Questions about these Terms? Contact us at [contact email].
          </Term>
        </div>
      </article>
    </main>
  );
}
