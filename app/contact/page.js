"use client";

import EnquiryForm from "@/components/EnquiryForm";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ContactContent() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product") || "";

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
              hello@auramaison.com
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
              +1 (555) 123-4567
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
              Hours
            </h3>
            <p className="text-[var(--on-surface-variant)] text-sm">
              Mon-Fri: 9AM - 6PM
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

export default function Contact() {
  return (
    <Suspense
      fallback={
        <div className="py-16 text-center">
          <p className="text-[var(--outline)]">Loading...</p>
        </div>
      }
    >
      <ContactContent />
    </Suspense>
  );
}
