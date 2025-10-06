'use client';

import { Button } from '@/components/ui/button';
import { FileText, CheckCircle, AlertTriangle } from 'lucide-react';
import contactData from '@/data/contact.json';

export default function Terms() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-brand-secondary mb-6 font-poppins">
              Terms of Service
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Please read these terms carefully before using our services. By using Synap Tech's website and services, you agree to these terms.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="h-10 w-10 text-brand-primary" />
              </div>
              <h2 className="text-2xl font-bold text-brand-secondary mb-4 font-poppins">
                Terms and Conditions
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                These Terms of Service govern your use of Synap Tech's website and services. 
                By accessing or using our services, you agree to be bound by these terms.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold text-brand-secondary mb-4 font-poppins flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-brand-primary" />
                Services
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Synap Tech provides the following services:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Website development and design</li>
                  <li>Content creation and management</li>
                  <li>Graphic design services</li>
                  <li>PowerPoint presentation design</li>
                  <li>Website maintenance and support</li>
                </ul>
                <p>
                  All project timelines and costs are confirmed after consultation and agreement.
                </p>
              </div>
            </div>

            {/* Payment Terms */}
            <div>
              <h3 className="text-xl font-bold text-brand-secondary mb-4 font-poppins">Payment Terms</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Payment terms are outlined in each project agreement and typically include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Deposit requirement (typically 30-50% upfront)</li>
                  <li>Progress payments for larger projects</li>
                  <li>Final payment upon completion</li>
                  <li>Accepted payment methods (bank transfer, mobile money, etc.)</li>
                  <li>Payment due dates and late payment policies</li>
                </ul>
              </div>
            </div>

            {/* Intellectual Property */}
            <div>
              <h3 className="text-xl font-bold text-brand-secondary mb-4 font-poppins">Intellectual Property</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Regarding intellectual property rights:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Creative materials remain Synap Tech's property until full payment is made</li>
                  <li>Upon full payment, rights are transferred to the client as specified in the agreement</li>
                  <li>Synap Tech retains the right to display completed work in our portfolio</li>
                  <li>Client-provided content remains the property of the client</li>
                  <li>Third-party assets (stock photos, fonts, etc.) are licensed appropriately</li>
                </ul>
              </div>
            </div>

            {/* Client Responsibilities */}
            <div>
              <h3 className="text-xl font-bold text-brand-secondary mb-4 font-poppins">Client Responsibilities</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  As a client, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete information for your project</li>
                  <li>Supply necessary content and materials in a timely manner</li>
                  <li>Provide feedback and approvals according to agreed timelines</li>
                  <li>Ensure you have rights to any content you provide</li>
                  <li>Make timely payments as agreed</li>
                </ul>
              </div>
            </div>

            {/* Project Timeline */}
            <div>
              <h3 className="text-xl font-bold text-brand-secondary mb-4 font-poppins">Project Timeline</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  We aim for accuracy and excellence in all our projects:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Timelines are estimates based on project scope</li>
                  <li>Delays may occur due to client feedback cycles</li>
                  <li>We communicate any timeline changes promptly</li>
                  <li>Rush services may be available at additional cost</li>
                  <li>Final client approval is required before launch</li>
                </ul>
              </div>
            </div>

            {/* Revisions and Changes */}
            <div>
              <h3 className="text-xl font-bold text-brand-secondary mb-4 font-poppins">Revisions and Changes</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Our revision policy includes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Number of revision rounds specified in each package</li>
                  <li>Additional revisions available at hourly rates</li>
                  <li>Major changes may require a new agreement</li>
                  <li>Revision requests should be provided in writing</li>
                </ul>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h3 className="text-xl font-bold text-brand-secondary mb-4 font-poppins flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-brand-primary" />
                Limitation of Liability
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Synap Tech's liability is limited as follows:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We are not liable for indirect or consequential damages</li>
                  <li>Our total liability is limited to the project cost</li>
                  <li>We are not responsible for third-party service interruptions</li>
                  <li>Client is responsible for website content and legal compliance</li>
                </ul>
              </div>
            </div>

            {/* Termination */}
            <div>
              <h3 className="text-xl font-bold text-brand-secondary mb-4 font-poppins">Termination</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Either party may terminate the agreement under certain conditions:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Written notice with reasonable time period</li>
                  <li>Payment for work completed up to termination date</li>
                  <li>Return of client materials and content</li>
                  <li>Final payment of any outstanding balances</li>
                </ul>
              </div>
            </div>

            {/* Confidentiality */}
            <div>
              <h3 className="text-xl font-bold text-brand-secondary mb-4 font-poppins">Confidentiality</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Both parties agree to maintain confidentiality of sensitive information shared during the project. 
                This includes business strategies, technical information, and proprietary data.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h3 className="text-xl font-bold text-brand-secondary mb-4 font-poppins">Governing Law</h3>
              <p className="text-gray-600 dark:text-gray-300">
                These terms shall be governed by and construed in accordance with the laws of Ghana. 
                Any disputes shall be resolved through good faith negotiation and, if necessary, 
                through appropriate legal channels in Ghana.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-bold text-brand-secondary mb-4 font-poppins">Contact Us</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  If you have any questions about these Terms of Service, please contact us:
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
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Let's discuss your project and create a partnership that works for both of us.
          </p>
          <Button
            size="lg"
            className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={() => window.open(contactData.whatsappLinkTemplate, '_blank')}
          >
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
}