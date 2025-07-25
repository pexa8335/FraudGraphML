'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Star, History, FileText, LogOut, LayoutDashboard, BarChart, Wallet } from 'lucide-react'; 

const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Analyze', href: '/fraud', icon: BarChart },
    { name: 'WatchList', href: '/watchlist', icon: Star },
    { name: 'History', href: '/history', icon: History },
    { name: 'Docs', href: '/docs', icon: FileText },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 flex-shrink-0 h-screen sticky top-0
                   bg-gradient-to-b from-slate-900 to-gray-900
                   border-r border-white/10 flex flex-col">
      <div className="flex items-center justify-center h-24 border-b border-white/10">
        <Link href="/" className="flex items-center group"> 
          <Image src="/logo.png" alt="NovaLedger Logo" width={40} height={40} />
          <span 
            className="ml-3 text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200" // Thêm styling hover
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
          >
            NovaLedger
          </span>
        </Link>
      </div>

      <nav className="flex-grow p-4">
        <ul>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-4 px-4 py-3 my-2 rounded-lg text-sm font-medium transition-colors duration-200
                    ${
                      isActive
                        ? 'bg-cyan-400/20 text-white shadow-inner'
                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="p-4 border-t border-white/10">
        <Link
          href="/connect-wallet" 
          className="flex items-center gap-4 px-4 py-3 rounded-lg text-gray-300 hover:bg-blue-500/20 hover:text-white transition-colors duration-200"
        >
          <Wallet size={20} /> 
          <span className="text-sm font-medium">Connect Wallet</span>
        </Link>
      </div>
    </aside>
  );
}