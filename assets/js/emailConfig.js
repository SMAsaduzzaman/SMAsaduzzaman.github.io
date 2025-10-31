// EmailJS Configuration
// You'll need to set up your own EmailJS account and replace these values
const EMAIL_CONFIG = {
    publicKey: 'F7ulK3j9SrULnHP6IfOF5',     // From EmailJS dashboard
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
    console.warn('❌ EmailJS not loaded yet. Will try to initialize later.');
    // Try to initialize when EmailJS becomes available
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(() => {
            if (typeof emailjs !== 'undefined') {
                emailjs.init(EMAIL_CONFIG.publicKey);
                console.log('✅ EmailJS initialized after delay with public key:', EMAIL_CONFIG.publicKey);
            } else {
                console.error('❌ EmailJS still not available after page load');
            }
        }, 1000);
    });
}