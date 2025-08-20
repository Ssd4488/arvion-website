import React from 'react';
import '../csssection/LegalPages.css'; // This will use a new, shared CSS file

const PrivacyPolicyPage = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Privacy Policy for Arvion Technologies</h1>
        <p className="last-updated">Last Updated: August 17, 2025</p>

        <p>Arvion Technologies ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>

        <h2>Collection of Your Information</h2>
        <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
        <ul>
          <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, and company information that you voluntarily give to us when you fill out our contact form or register for our services.</li>
          <li><strong>Log Information:</strong> When you access our services, our servers automatically record information that your browser sends. These server logs may include information such as your web request, Internet Protocol (IP) address, browser type, and the date and time of your request.</li>
          <li><strong>Cookies:</strong> We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</li>
        </ul>

        <h2>Use of Your Information</h2>
        <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
        <ul>
          <li>Respond to your inquiries and support needs.</li>
          <li>Send you periodic emails regarding our services or information you requested.</li>
          <li>Improve our website and service offerings.</li>
          <li>Personalize your experience on our site.</li>
        </ul>

        <h2>Disclosure of Your Information</h2>
        <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.</p>

        <h2>Security of Your Information</h2>
        <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

        <h2>Contact Us</h2>
        <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
        <p>
          Arvion Technologies<br />
          IBLUE ENTERTAINMENT, #62/1, 
         NEW NO 7, GROUND FLOOR, 1ST CROSS, 
         2ND MAIN, GANGANAGAR, BANGALORE -560032.<br />
         <a
         href="mailto:cat@arvion.com">cat@arvion.com </a>(Client Advocacy Team)<br />
          9535764655
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
