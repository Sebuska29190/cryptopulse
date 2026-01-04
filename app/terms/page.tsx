import Sidebar from "../../components/Sidebar";

export default function TermsOfService() {
  return (
    <div className="bg-[#f1f1f1] min-h-screen font-sans">
      <div className="container mx-auto max-w-[1200px] py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          
          <main className="lg:w-2/3 bg-white p-8 md:p-12 shadow-sm border border-gray-200">
            <header className="mb-10 border-b-4 border-black pb-6">
              <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2">
                Terms <span className="text-orange-600">of Service</span>
              </h1>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">
                Operational & Legal Framework | Crypto Pulse Now
              </p>
            </header>
            
            <div className="prose prose-slate max-w-none text-gray-800 leading-relaxed text-justify space-y-8">
              
              <section>
                <p className="font-bold text-lg leading-relaxed">
                  By accessing and utilizing the services provided by **Crypto Pulse Now**, you acknowledge that you have read, understood, and agreed to be bound by the following terms. These terms are engineered to maintain a professional, secure, and legally sound environment for all participants in the digital asset discourse.
                </p>
              </section>

              <section className="bg-orange-50 p-6 border-l-4 border-orange-600 shadow-sm">
                <h2 className="text-xl font-black uppercase text-black mb-4">
                  1. Legal & Financial Disclaimer (Crucial)
                </h2>
                <p className="mb-4 font-medium">
                  All content published on <span className="underline">www.cryptopulsenow.xyz</span> is for <strong>informational and educational purposes only</strong>. It does not constitute, and shall not be construed as, financial, investment, tax, or legal advice.
                </p>
                <p className="text-sm leading-relaxed italic">
                  While we strive for the highest level of accuracy and ground our analyses in detailed justifications—including references to judicial precedents and European regulatory frameworks where applicable—the volatile nature of the crypto-asset market means that all information is provided on an <strong>"as is"</strong> and <strong>"as available"</strong> basis without any warranties of any kind.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-black uppercase border-l-4 border-black pl-4 mb-4">
                  2. Limitation of Liability
                </h2>
                <p className="mb-4">
                  **Crypto Pulse Now**, its authors, and affiliates shall not be held liable for any financial losses, damages, or unintended consequences resulting from the use of information provided on this site. 
                </p>
                <p>
                  Our commitment to "acting for the best" ensures that we provide the most detailed context and analytical depth possible. However, the final responsibility for any action taken, or investment made, remains exclusively with the user. We stringently encourage all readers to perform their own due diligence and consult with licensed professional legal or financial advisors before making any market decisions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-black uppercase border-l-4 border-black pl-4 mb-4">
                  3. Intellectual Property Rights
                </h2>
                <p>
                  The professional analyses, proprietary methodologies, and original articles published herein are the exclusive property of **Crypto Pulse Now**. These works are protected under international copyright laws and treaties. 
                </p>
                <p className="mt-4">
                  Unauthorized reproduction, distribution, or commercial exploitation of our content without express written consent is strictly prohibited and may be subject to legal action under applicable intellectual property jurisdictions.
                </p>
              </section>

              <section className="border-t border-gray-100 pt-8">
                <h2 className="text-xl font-black uppercase border-l-4 border-black pl-4 mb-4">
                  4. Regulatory Compliance
                </h2>
                <p>
                  Crypto Pulse Now operates in alignment with the principles of freedom of expression and the right to impart information, as recognized by the **European Court of Human Rights**. We maintain a rigorous standard of integrity to ensure our regulatory analyses (Regulations) and technological deep-dives (Technology) meet the expectations of a professional global audience.
                </p>
              </section>

              <footer className="mt-12 pt-8 border-t border-gray-100 italic text-sm text-gray-500">
                Effective Date: January 4, 2026. Crypto Pulse Now reserves the right to modify these terms at any time to reflect the evolving legal landscape of digital assets.
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