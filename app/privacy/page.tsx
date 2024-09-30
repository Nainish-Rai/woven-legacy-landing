// app/privacy-policy/page.js

export default function PrivacyPolicy() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        This Privacy Policy describes how we collect, use, and disclose your
        information when you use our services.
      </p>
      <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>
      <p className="mb-4">We may collect the following types of information:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Personal information (e.g., name, email address)</li>
        <li>Usage data (e.g., pages visited, time spent on site)</li>
        <li>Device information (e.g., IP address, browser type)</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">How We Use Your Information</h2>
      <p className="mb-4">
        We use the collected information for the following purposes:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>To provide and maintain our services</li>
        <li>To improve and personalize your experience</li>
        <li>To communicate with you</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">
        Disclosure of Your Information
      </h2>
      <p className="mb-4">
        We may disclose your information to third parties in the following
        circumstances:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>With your consent</li>
        <li>To comply with legal obligations</li>
        <li>To protect our rights and property</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Security</h2>
      <p className="mb-4">
        We take reasonable measures to protect your information from
        unauthorized access or disclosure.
      </p>
      <h2 className="text-2xl font-bold mb-2">
        Changes to This Privacy Policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page.
      </p>
      <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us
        at{" "}
        <a href="mailto:info@wovenlegacy.in" className="text-blue-500">
          info@wovenlegacy.in
        </a>
        .
      </p>
    </div>
  );
}
