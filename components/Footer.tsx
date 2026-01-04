import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-12 pb-8 mt-12 border-t-4 border-orange-600">
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* KOLUMNA 1: O NAS */}
          <div>
            <h3 className="text-xl font-black mb-6 uppercase tracking-tighter">
              CRYPTO<span className="text-orange-600">PULSE</span>NOW
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 italic">
              Professional crypto market analysis, deep dives into blockchain technology, and real-time updates from the world of digital finance. Your pulse on the future of money.
            </p>
            <div className="flex space-x-4">
              {/* Ikony społecznościowe - można później dodać SVG */}
              <span className="text-xs font-bold text-orange-600 hover:text-white cursor-pointer transition">FB</span>
              <span className="text-xs font-bold text-orange-600 hover:text-white cursor-pointer transition">TW</span>
              <span className="text-xs font-bold text-orange-600 hover:text-white cursor-pointer transition">TG</span>
            </div>
          </div>

          {/* KOLUMNA 2: KATEGORIE (Quick Links) */}
          <div>
            <h4 className="text-sm font-black uppercase mb-6 border-b border-gray-800 pb-2 inline-block">
              Categories
            </h4>
            <ul className="space-y-3 text-sm font-bold text-gray-400 uppercase tracking-wider">
              <li><Link href="/category/bitcoin" className="hover:text-orange-600 transition">Bitcoin News</Link></li>
              <li><Link href="/category/exchanges" className="hover:text-orange-600 transition">Exchanges</Link></li>
              <li><Link href="/category/mining" className="hover:text-orange-600 transition">Mining Hub</Link></li>
              <li><Link href="/category/altcoins" className="hover:text-orange-600 transition">Altcoin Analysis</Link></li>
            </ul>
          </div>

          {/* KOLUMNA 3: LEGAL & CONTACT */}
          <div>
            <h4 className="text-sm font-black uppercase mb-6 border-b border-gray-800 pb-2 inline-block">
              Legal Info
            </h4>
            <ul className="space-y-3 text-sm font-bold text-gray-400 uppercase tracking-wider">
              <li><Link href="/privacy-policy" className="hover:text-orange-600 transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-orange-600 transition">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:text-orange-600 transition">Contact Us</Link></li>
              <li className="text-[10px] text-gray-600 mt-4 leading-tight italic">
                Investing in crypto involves risk. Always do your own research.
              </li>
            </ul>
          </div>

        </div>

        {/* DOLNY PASEK: COPYRIGHT */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
          <p>© 2026 CRYPTOPULSENOW. ALL RIGHTS RESERVED.</p>
          <p className="mt-4 md:mt-0 italic">Built for the future of finance</p>
        </div>
      </div>
    </footer>
  );
}