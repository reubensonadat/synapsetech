import { Button } from '@/components/ui/button';
import { Shield, Eye, Lock } from 'lucide-react';
import contactData from '@/data/contact.json';

export default function Privacy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-brand-secondary mb-6 font-poppins">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-brand-primary" />
              </div>
              <h2 className="text-2xl font-bold text-brand-secondary mb-4 font-poppins">
                Our Commitment to Privacy
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                At Synap Tech, we respect your privacy and are committed to protecting your personal information. 
                This Privacy Policy outlines how we collect, use, store, and protect your data when you interact 
                with our website and services.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h3 className="text-xl font-bold text-brand-secondary mb-4 font-poppins flex items-center gap-2">
                <Eye className="h-5 w-5 text-brand-primary" />
                Information We Collect
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  We may collect the following types of information when you interact with us:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Contact Information:</strong> Name, email address, phone number, and company details</li>
                  <li><strong>Project Information:</strong> Details about your project requirements and preferences</li>
                  <li><strong>Communication Data:</strong> Messages, emails, and other communications</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, and usage patterns</li>
                  <li><strong>Business Information:</strong> Company size, industry, and specific needs</li>
                </ul>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h3 className="text-xl font-bold text-brand-secondary mb-4 font-poppins flex items-center gap-2">
                <Lock className="h-5 w-5 text-brand-primary" />
                How We Use Your Information
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  We use your information to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and improve our services</li>
                  <li>Communicate with you about your projects</li>
                  <li>Send quotes and proposals</li>
                  <li>Process payments and manage projects</li>
                  <li>Provide customer support</li>
                  <li>Send relevant updates and marketing materials (with your consent)</li>
                </ul>
              </div>
            </div>

            {/* Data Protection */}
            <div>
              <h3 className="text-xl font-bold text-brand-secondary mb-4 font-poppins">Data Protection</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  We implement appropriate security measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Secure storage systems with limited access</li>
                  <li>Encryption of sensitive data</li>
                  <li>Regular security updates and monitoring</li>
                  <li>Staff training on data protection</li>
                </ul>
              </div>
            </div>

            {/* Data Sharing */}
            <div>
              <h3 className="text-xl font-bold text-brand-secondary mb-4 font-poppins">Data Sharing</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  We do not sell, rent, or share your personal information with third parties for marketing purposes. 
                  We may only share your information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With service providers who assist in delivering our services</li>
                  <li>When required by law or legal process</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>
            </div>

            {/* Your Rights */}
            <div>
              <h3 className="text-xl font-bold text-brand-secondary mb-4 font-poppins">Your Rights</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Restrict processing of your information</li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <h3 className="text-xl font-bold text-brand-secondary mb-4 font-poppins">Cookies</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Our website may use cookies to enhance your experience. Cookies help us:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Remember your preferences</li>
                  <li>Analyze website traffic</li>
                  <li>Provide personalized content</li>
                  <li>Improve our services</li>
                </ul>
                <p>
                  You can control cookies through your browser settings.
                </p>
              </div>
            </div>

            {/* Policy Updates */}
            <div>
              <h3 className="text-xl font-bold text-brand-secondary mb-4 font-poppins">Policy Updates</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the "Last Updated" date.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-bold text-brand-secondary mb-4 font-poppins">Contact Us</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  If you have any questions about this Privacy Policy or how we handle your data, 
                  please contact us:
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 space-y-2">
                  <p><strong>Email:</strong> {contactData.email}</p>
                  <p><strong>Phone:</strong> {contactData.phoneDisplay}</p>
                  <p><strong>Location:</strong> Ghana</p>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-600">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
            Questions About Your Privacy?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            We're here to help. Contact us if you have any concerns about how we handle your data.
          </p>
          <Button
            size="lg"
            className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={() => window.open(`mailto:${contactData.email}?subject=Privacy%20Policy%20Inquiry`, '_blank')}
          >
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
}