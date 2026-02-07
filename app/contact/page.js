import dynamic from "next/dynamic";
import Image from "next/image";

const EnquiryForm = dynamic(() => import("@/components/EnquiryForm"), {
  loading: () => (
    <div className="py-12 text-center">
      <p className="text-[var(--on-surface-variant)] text-sm">Loading…</p>
    </div>
  ),
});

export default async function Contact({ searchParams }) {
  const { product } = await searchParams;
  // const productParam = (await searchParams?.product) ?? "";
  const productParam = typeof product === "string" ? product : "";

  const contactPhoneDisplay = "+91-6369632489";
  const contactPhoneHref = "tel:+916369632489";
  const contactEmail = "info@hocc.in";
  const contactAddress =
    "First Floor, Ram Apartments, A7 & 8, Raja Annamaalai Rd, Purasaivakkam, Chennai, Tamil Nadu, 600084";
  const mapSrc =
    "https://www.google.com/maps?q=" +
    encodeURIComponent(contactAddress) +
    "&output=embed";

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--on-surface)] mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-[var(--on-surface-variant)] max-w-2xl mx-auto">
            Have a question about our planters? Want to make an enquiry? Fill
            out the form below and we&apos;ll get back to you as soon as
            possible.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-12 h-12 bg-[var(--secondary-container)] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-[var(--primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-[var(--on-surface)] mb-2">
              Email
            </h3>
            <p className="text-[var(--on-surface-variant)] text-sm">
              <a href={`mailto:${contactEmail}`} className="underline">
                {contactEmail}
              </a>
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-[var(--secondary-container)] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-[var(--primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-[var(--on-surface)] mb-2">
              Phone
            </h3>
            <p className="text-[var(--on-surface-variant)] text-sm">
              <a href={contactPhoneHref} className="underline">
                {contactPhoneDisplay}
              </a>
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-[var(--secondary-container)] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-[var(--primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-[var(--on-surface)] mb-2">
              Address
            </h3>
            <p className="text-[var(--on-surface-variant)] text-sm">
              {contactAddress}
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="mb-16">
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg overflow-hidden">
            <div className="relative w-full aspect-[16/9]">
              <iframe
                title="Aura Maison location"
                src={mapSrc}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* Optional small note / logo lockup */}
          <div className="mt-6 flex items-center justify-center gap-3 opacity-80">
            <Image src="/full.png" alt="Aurē Maison" width={22} height={22} />
            <p className="text-sm text-[var(--on-surface-variant)]">
              Visit us or send an enquiry — we’ll respond quickly.
            </p>
          </div>
        </div>

        {/* Enquiry Form */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-8 md:p-12">
          <h2 className="text-2xl font-bold text-[var(--on-surface)] mb-8 text-center">
            Send Us an Enquiry
          </h2>
          <EnquiryForm prefilledProduct={productParam} />
        </div>
      </div>
    </div>
  );
}
