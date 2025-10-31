// EmailJS Configuration
// You'll need to set up your own EmailJS account and replace these values
const EMAIL_CONFIG = {
    publicKey: 'kjP0RsVT93k--0phM',     // From EmailJS dashboard
    serviceId: 'service_ghkmckt',     // Your email service (Gmail, Outlook, etc.)
    templateId: 'template_k068lxi'    // Your email template ID
};

// Initialize EmailJS when this script loads
if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAIL_CONFIG.publicKey);
} else {
    console.warn('EmailJS not loaded yet. Will initialize later.');
}
