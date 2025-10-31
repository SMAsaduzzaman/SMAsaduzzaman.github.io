// EmailJS Configuration
// You'll need to set up your own EmailJS account and replace these values
const EMAIL_CONFIG = {
    publicKey: 'kjP0RsVT93k--0phM',     // From EmailJS dashboard
    serviceId: 'service_ghkmckt',     // Your email service (Gmail, Outlook, etc.)
    templateId: 'template_k068lxi'    // Your email template ID
};

// Initialize EmailJS when this script loads
if (typeof emailjs !== 'undefined') {
    // Use the newer init method with options
    emailjs.init({
        publicKey: EMAIL_CONFIG.publicKey,
        // Add CORS options for local testing
        blockHeadless: true,
        limitRate: {
            id: 'app',
            throttle: 10000,
        },
    });
    console.log('✅ EmailJS initialized successfully with public key:', EMAIL_CONFIG.publicKey);
} else {
    console.warn('EmailJS not loaded yet. Will initialize later.');
}

