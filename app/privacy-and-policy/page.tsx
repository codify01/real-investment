"use client"
import React, { useState } from "react";

const PrivacyPolicy: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (section: number) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen  text-pry px-6 py-8 lg:px-20">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold">Privacy & Policy</h1>
        <p className="text-sm text-sec/70 mt-2">Effective Date: December 2024</p>
        <p className="text-sec/60 text-sm mt-1">
          Your privacy matters to us. Learn how we protect your data.
        </p>
      </div>

      {/* Collapsible Content Sections */}
      <div className="space-y-6">
        {/* Section 1: Introduction */}
        <section
          className="border border-sec/20 rounded-lg p-4 shadow-md"
          onClick={() => toggleSection(1)}
        >
          <h2 className="text-lg font-medium flex justify-between items-center">
            <span>1. Introduction</span>
            <span className="text-sec/50">
              {expandedSection === 1 ? "−" : "+"}
            </span>
          </h2>
          {expandedSection === 1 && (
            <p className="text-sm text-sec/80 mt-2 leading-relaxed">
              Welcome to [App Name]! This Privacy Policy outlines our practices
              for collecting, using, and safeguarding your data while using our
              services.
            </p>
          )}
        </section>

        {/* Section 2: Data Collection */}
        <section
          className="border border-sec/20 rounded-lg p-4 shadow-md"
          onClick={() => toggleSection(2)}
        >
          <h2 className="text-lg font-medium flex justify-between items-center">
            <span>2. Data Collection</span>
            <span className="text-sec/50">
              {expandedSection === 2 ? "−" : "+"}
            </span>
          </h2>
          {expandedSection === 2 && (
            <ul className="mt-2 pl-4 list-disc text-sm text-sec/80">
              <li>Personal details (e.g., Name, Email, Phone Number)</li>
              <li>Transaction and payment details</li>
              <li>Device and usage data (e.g., IP address, location)</li>
              <li>Cookies for enhancing user experience</li>
            </ul>
          )}
        </section>

        {/* Section 3: Data Usage */}
        <section
          className="border border-sec/20 rounded-lg p-4 shadow-md"
          onClick={() => toggleSection(3)}
        >
          <h2 className="text-lg font-medium flex justify-between items-center">
            <span>3. Data Usage</span>
            <span className="text-sec/50">
              {expandedSection === 3 ? "−" : "+"}
            </span>
          </h2>
          {expandedSection === 3 && (
            <p className="text-sm text-sec/80 mt-2 leading-relaxed">
              We use your data to:
              <ul className="mt-2 pl-4 list-disc">
                <li>Provide, operate, and maintain our services</li>
                <li>Process financial transactions securely</li>
                <li>Send service-related updates and notifications</li>
                <li>Enhance your overall user experience</li>
              </ul>
            </p>
          )}
        </section>

        {/* Section 4: Data Security */}
        <section
          className="border border-sec/20 rounded-lg p-4 shadow-md"
          onClick={() => toggleSection(4)}
        >
          <h2 className="text-lg font-medium flex justify-between items-center">
            <span>4. Data Security</span>
            <span className="text-sec/50">
              {expandedSection === 4 ? "−" : "+"}
            </span>
          </h2>
          {expandedSection === 4 && (
            <p className="text-sm text-sec/80 mt-2 leading-relaxed">
              We prioritize your data security by using encryption and secure
              data storage methods. While we aim for maximum protection, no
              system is entirely invulnerable.
            </p>
          )}
        </section>

        {/* Section 5: User Rights */}
        <section
          className="border border-sec/20 rounded-lg p-4 shadow-md"
          onClick={() => toggleSection(5)}
        >
          <h2 className="text-lg font-medium flex justify-between items-center">
            <span>5. Your Rights</span>
            <span className="text-sec/50">
              {expandedSection === 5 ? "−" : "+"}
            </span>
          </h2>
          {expandedSection === 5 && (
            <p className="text-sm text-sec/80 mt-2 leading-relaxed">
              You have the right to:
              <ul className="mt-2 pl-4 list-disc">
                <li>Request access to your personal data</li>
                <li>Correct inaccuracies in your data</li>
                <li>Request data deletion, where applicable</li>
              </ul>
              Contact us at{" "}
              <a
                href="mailto:privacy@example.com"
                className="text-sec underline"
              >
                privacy@example.com
              </a>
            </p>
          )}
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-sec/60">
        <p>
          For questions or concerns about this policy, reach out to us at{" "}
          <a href="mailto:support@example.com" className="text-sec underline">
            support@example.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
