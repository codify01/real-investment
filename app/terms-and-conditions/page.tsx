"use client";

import React, { useState } from "react";

const TermsConditions: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (section: number) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-sec text-pry px-6 py-8 lg:px-20">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold">Terms & Conditions</h1>
        <p className="text-sm text-sec/70 mt-2">Effective Date: December 2024</p>
        <p className="text-sec/60 text-sm mt-1">
          Please read these terms carefully before using our platform.
        </p>
      </div>

      {/* Collapsible Content Sections */}
      <div className="space-y-6">
        {/* Section 1: Agreement Overview */}
        <section
          className="border border-sec/20 rounded-lg p-4 shadow-md"
          onClick={() => toggleSection(1)}
        >
          <h2 className="text-lg font-medium flex justify-between items-center">
            <span>1. Agreement Overview</span>
            <span className="text-sec/50">
              {expandedSection === 1 ? "−" : "+"}
            </span>
          </h2>
          {expandedSection === 1 && (
            <p className="text-sm text-sec/80 mt-2 leading-relaxed">
              By accessing or using our platform, you agree to be bound by these
              Terms and Conditions. If you do not agree with any part of the
              terms, you may not use the services.
            </p>
          )}
        </section>

        {/* Section 2: User Responsibilities */}
        <section
          className="border border-sec/20 rounded-lg p-4 shadow-md"
          onClick={() => toggleSection(2)}
        >
          <h2 className="text-lg font-medium flex justify-between items-center">
            <span>2. User Responsibilities</span>
            <span className="text-sec/50">
              {expandedSection === 2 ? "−" : "+"}
            </span>
          </h2>
          {expandedSection === 2 && (
            <ul className="mt-2 pl-4 list-disc text-sm text-sec/80">
              <li>You must provide accurate and up-to-date information.</li>
              <li>Do not share your account credentials with others.</li>
              <li>Ensure all activities comply with applicable laws.</li>
              <li>Avoid misuse of platform features or content.</li>
            </ul>
          )}
        </section>

        {/* Section 3: Prohibited Activities */}
        <section
          className="border border-sec/20 rounded-lg p-4 shadow-md"
          onClick={() => toggleSection(3)}
        >
          <h2 className="text-lg font-medium flex justify-between items-center">
            <span>3. Prohibited Activities</span>
            <span className="text-sec/50">
              {expandedSection === 3 ? "−" : "+"}
            </span>
          </h2>
          {expandedSection === 3 && (
            <p className="text-sm text-sec/80 mt-2 leading-relaxed">
              Users are prohibited from:
              <ul className="mt-2 pl-4 list-disc">
                <li>Engaging in fraudulent or harmful activities.</li>
                <li>Uploading malware or disruptive content.</li>
                <li>Infringing on intellectual property rights.</li>
              </ul>
            </p>
          )}
        </section>

        {/* Section 4: Termination of Use */}
        <section
          className="border border-sec/20 rounded-lg p-4 shadow-md"
          onClick={() => toggleSection(4)}
        >
          <h2 className="text-lg font-medium flex justify-between items-center">
            <span>4. Termination of Use</span>
            <span className="text-sec/50">
              {expandedSection === 4 ? "−" : "+"}
            </span>
          </h2>
          {expandedSection === 4 && (
            <p className="text-sm text-sec/80 mt-2 leading-relaxed">
              We reserve the right to suspend or terminate access to our
              platform for any violations of these terms or for any other
              reason at our discretion.
            </p>
          )}
        </section>

        {/* Section 5: Liability Limitations */}
        <section
          className="border border-sec/20 rounded-lg p-4 shadow-md"
          onClick={() => toggleSection(5)}
        >
          <h2 className="text-lg font-medium flex justify-between items-center">
            <span>5. Liability Limitations</span>
            <span className="text-sec/50">
              {expandedSection === 5 ? "−" : "+"}
            </span>
          </h2>
          {expandedSection === 5 && (
            <p className="text-sm text-sec/80 mt-2 leading-relaxed">
              Our platform is provided "as is" without warranties of any kind.
              We are not liable for any damages resulting from your use of our
              services.
            </p>
          )}
        </section>

        {/* Section 6: Updates to Terms */}
        <section
          className="border border-sec/20 rounded-lg p-4 shadow-md"
          onClick={() => toggleSection(6)}
        >
          <h2 className="text-lg font-medium flex justify-between items-center">
            <span>6. Updates to Terms</span>
            <span className="text-sec/50">
              {expandedSection === 6 ? "−" : "+"}
            </span>
          </h2>
          {expandedSection === 6 && (
            <p className="text-sm text-sec/80 mt-2 leading-relaxed">
              We may update these Terms periodically. Your continued use of the
              platform after updates constitutes acceptance of the new terms.
            </p>
          )}
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-sec/60">
        <p>
          For inquiries regarding these terms, contact us at{" "}
          <a href="mailto:terms@example.com" className="text-sec underline">
            terms@example.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default TermsConditions;
