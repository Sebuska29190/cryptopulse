export default function Sidebar() {
  return (
    <aside className="space-y-8">
      {/* Widget: Social Media */}
      <div className="bg-white p-5 border border-gray-200 shadow-sm">
        <div className="border-b-2 border-black mb-5">
          <h3 className="text-xs font-bold uppercase bg-black text-white px-3 py-1.5 inline-block">
            Stay Connected
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-blue-600 text-white text-center py-2 text-[10px] font-bold cursor-pointer hover:opacity-90">FACEBOOK</div>
          <div className="bg-sky-400 text-white text-center py-2 text-[10px] font-bold cursor-pointer hover:opacity-90">TWITTER</div>
        </div>
      </div>

      {/* Widget: Newsletter (Newsup Style) */}
      <div className="bg-white p-5 border border-gray-200 shadow-sm text-center">
        <div className="border-b-2 border-black mb-5 text-left">
          <h3 className="text-xs font-bold uppercase bg-black text-white px-3 py-1.5 inline-block">
            Newsletter
          </h3>
        </div>
        <p className="text-xs text-gray-500 mb-4 italic">Get the best crypto news delivered to your inbox.</p>
        <input 
          type="email" 
          placeholder="Email Address" 
          className="w-full border border-gray-300 p-2 text-xs mb-3 outline-none focus:border-black"
        />
        <button className="w-full bg-black text-white py-2 text-xs font-bold uppercase hover:bg-orange-600 transition">
          Subscribe
        </button>
      </div>

      {/* Widget: Recent Posts (Placeholder) */}
      <div className="bg-white p-5 border border-gray-200 shadow-sm">
        <div className="border-b-2 border-black mb-5 text-left">
          <h3 className="text-xs font-bold uppercase bg-black text-white px-3 py-1.5 inline-block">
            Don't Miss
          </h3>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-3 border-b border-gray-50 pb-3 last:border-0">
              <div className="w-16 h-16 bg-gray-200 flex-shrink-0"></div>
              <div className="flex flex-col">
                <h4 className="text-xs font-bold leading-tight hover:text-orange-600 cursor-pointer">
                  How crypto regulation is changing in 2026...
                </h4>
                <span className="text-[9px] text-gray-400 mt-1 uppercase italic">Jan 4, 2026</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}