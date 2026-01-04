import Sidebar from "../../components/Sidebar";

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#f1f1f1] min-h-screen font-sans">
      <div className="container mx-auto max-w-[1200px] py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          
          <main className="lg:w-2/3 bg-white p-8 md:p-12 shadow-sm border border-gray-200">
            <header className="mb-10 border-b-4 border-black pb-6">
              <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2">
                Privacy <span className="text-orange-600">Policy</span>
              </h1>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">
                Official Legal Documentation | Crypto Pulse Now
              </p>
            </header>
            
            <div className="prose prose-slate max-w-none text-gray-800 leading-relaxed text-justify space-y-8">
              
              <section>
                <h2 className="text-xl font-black uppercase border-l-4 border-orange-600 pl-4 mb-4">
                  1. Framework of Transparency
                </h2>
                <p className="mb-4">
                  This Privacy Policy outlines how **Crypto Pulse Now** collects and processes data. We are committed to the highest standards of transparency, as mandated by the **General Data Protection Regulation (GDPR)** and informed by international human rights frameworks, including the **European Convention on Human Rights (ECHR)** regarding the right to privacy (Article 8).
                </p>
                <p>
                  Our data processing activities are grounded in the principle of legal necessity and the legitimate interest of providing a secure, high-quality professional news service to the global financial community.
                </p>
              </section>

              <section className="bg-gray-50 p-6 border border-gray-100">
                <h2 className="text-xl font-black uppercase border-l-4 border-black pl-4 mb-4">
                  2. Cookies and Advertising (Google AdSense)
                </h2>
                <p className="mb-4">
                  We utilize **Google AdSense** to sustain our independent analysis. Google, as a third-party vendor, uses cookies to serve advertisements based on your prior visits to our website or other digital platforms.
                </p>
                <ul className="list-disc ml-6 space-y-2 mb-4 font-medium">
                  <li>Google's use of advertising cookies enables it and its partners to serve ads based on your specific interactions with the Internet.</li>
                  <li>These cookies do not store personal identifies such as your name or direct contact information, but track browsing patterns to enhance relevance.</li>
                </ul>
                <div className="bg-orange-50 border-l-4 border-orange-600 p-4">
                  <p className="text-sm font-bold">
                    USER CONTROL: You may opt out of personalized advertising at any time by visiting the 
                    <a href="https://www.google.com/settings/ads" target="_blank" className="text-orange-600 underline ml-1">
                      Google Ads Settings
                    </a>.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-black uppercase border-l-4 border-orange-600 pl-4 mb-4">
                  3. Data Protection and Minimization
                </h2>
                <p className="mb-4">
                  In accordance with the principle of **data minimization**, we respect the privacy of our readers. Any personal data collected (e.g., via contact forms or newsletter subscriptions) is processed strictly for the purposes for which it was provided.
                </p>
                <p>
                  Our legal justifications are always documented. We maintain that the provision of expert financial news and regulatory analysis requires a baseline of analytical data to ensure the integrity and security of our platform against malicious actors.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-black uppercase border-l-4 border-orange-600 pl-4 mb-4">
                  4. International Standards & ECHR Compliance
                </h2>
                <p>
                  We recognize that the right to data protection is a corollary of the right to respect for private life. As such, Crypto Pulse Now aligns its internal data governance with the evolving jurisprudence of the **European Court of Human Rights**, ensuring that our technological infrastructure never compromises the fundamental rights of our users.
                </p>
              </section>

              <footer className="mt-12 pt-8 border-t border-gray-100 italic text-sm text-gray-500">
                Last Updated: January 4, 2026. This document is subject to periodic review in light of new regulatory developments in the digital assets space.
              </footer>
            </div>
          </main>

          <aside className="lg:w-1/3">
            <Sidebar />
          </aside>
          
        </div>
      </div>
    </div>
  );
}