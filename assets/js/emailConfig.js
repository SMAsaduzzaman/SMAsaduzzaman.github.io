// EmailJS Configuration
// You'll need to set up your own EmailJS account and replace these values
const EMAIL_CONFIG = {
    publicKey: 'YOUR_PUBLIC_KEY',     // From EmailJS dashboard
    serviceId: 'YOUR_SERVICE_ID',     // Your email service (Gmail, Outlook, etc.)
    templateId: 'YOUR_TEMPLATE_ID'    // Your email template ID
};

// Initialize EmailJS when this script loads
if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAIL_CONFIG.publicKey);
} else {
    console.warn('EmailJS not loaded yet. Will initialize later.');
}