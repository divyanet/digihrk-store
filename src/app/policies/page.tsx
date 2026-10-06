import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy, Terms & Refund Policy",
  description: "DigiHRK policies: privacy, terms of use, refund policy and contact information.",
};

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-display text-2xl text-ink" style={{ fontWeight: 800 }}>{title}</h2>
      <div className="mt-4 space-y-3 text-muted text-[15px] leading-relaxed">{children}</div>
    </section>
  );
}

export default function PoliciesPage() {
  return (
    <>
      <AnnouncementBar text="Secure checkout via Razorpay — UPI, Cards, NetBanking, Wallets" />
      <SiteHeader />
      <main className="max-w-3xl mx-auto px-4 py-14 space-y-12">
        <div>
          <h1 className="font-display text-4xl text-ink" style={{ fontWeight: 900 }}>Our Policies</h1>
          <p className="text-muted mt-3">
            Simple, honest terms. Questions? Write to{" "}
            <a href={`mailto:${SITE.supportEmail}`} className="text-brand-dark font-semibold">{SITE.supportEmail}</a> —
            we reply fast.
          </p>
        </div>

        <Section id="privacy" title="Privacy Policy">
          <p>
            We collect only what we need to deliver your order: your name, email address,
            and payment confirmation from Razorpay. We never see or store your card, UPI,
            or bank details — payments are processed entirely by Razorpay on their secure servers.
          </p>
          <p>
            Your email is used to send download links, order updates, and support replies.
            We don't sell, rent, or share your personal information with anyone, ever.
            You can ask us to delete your data anytime by emailing {SITE.supportEmail}.
          </p>
        </Section>

        <Section id="terms" title="Terms & Conditions">
          <p>
            All products on {SITE.brand}.com are digital downloads. After successful payment,
            download links are emailed to you — no physical product is shipped.
          </p>
          <p>
            Your purchase includes lifetime access to the files for personal use. The Coloring
            Pages Bundle additionally includes MRR + PLR rights as described on its page; the
            Worksheets Bundle is licensed for personal and classroom use only and may not be
            resold or redistributed.
          </p>
          <p>
            Prices are in Indian Rupees (INR) and include all taxes. We may update prices or
            bundle contents at any time; purchases already made are never affected.
          </p>
        </Section>

        <Section id="refund" title="Refund Policy">
          <p>
            Because our products are delivered instantly as digital downloads, all sales are
            generally final once the files have been delivered to your email.
          </p>
          <p>
            We <strong>do</strong> refund in full when: your payment succeeded but you never
            received working download links and our support team couldn't fix it, or you were
            accidentally charged twice for the same product.
          </p>
          <p>
            To request a refund, email {SITE.supportEmail} with your order details within
            7 days of purchase. Genuine issues are resolved quickly — that's a promise.
          </p>
        </Section>

        <Section id="contact" title="Contact Us">
          <p>
            Email: <a href={`mailto:${SITE.supportEmail}`} className="text-brand-dark font-semibold">{SITE.supportEmail}</a>
          </p>
          <p>
            We usually reply within a few hours. For download issues, please include the email
            address you used at checkout so we can find your order fast.
          </p>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
