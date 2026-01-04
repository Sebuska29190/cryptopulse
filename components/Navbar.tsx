import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white font-sans">
      <div className="container mx-auto max-w-[1200px] px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <Link href="/" 
          className="font-bold tracking-[-1.7px] text-[34px] text-gray-900 uppercase"
        >
          CRYPTO<span className="text-orange-600">PULSE</span>NOW
        </Link>
        <div className="hidden md:block bg-gray-50 border border-gray-100 px-8 py-3 text-gray-400 text-[10px] font-black uppercase tracking-[0.3em]">
          Institutional Grade Market Intelligence
        </div>
      </div>

      <nav className="bg-[#1a1a1a] text-white sticky top-0 z-50">
        <div className="container mx-auto max-w-[1200px] px-4 flex items-center justify-between h-[50px]">
          <div className="flex space-x-1 text-[11px] font-bold uppercase tracking-wider h-full items-center">
            <Link href="/" className="bg-orange-600 h-full flex items-center px-5 hover:bg-orange-700 transition">Home</Link>
            <Link href="/category/news" className="h-full flex items-center px-4 hover:bg-white hover:text-black transition">News</Link>
            <Link href="/category/regulations" className="h-full flex items-center px-4 hover:bg-white hover:text-black transition">Regulations</Link>
            <Link href="/category/technology" className="h-full flex items-center px-4 hover:bg-white hover:text-black transition">Technology</Link>
            <Link href="/category/exchanges" className="h-full flex items-center px-4 hover:bg-white hover:text-black transition">Exchanges</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}