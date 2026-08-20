import React from 'react';
import { Link } from 'react-router-dom';
import AccessibilityWidget from '../components/AccessibilityWidget';

// JobCard Component
const JobCard = ({ color, logoText, title, company, location, salary, type, tags, a11y, posted }) => (
  <div className="border border-slate-200 rounded-2xl p-5 bg-white flex flex-col gap-4">
    {/* Row 1 */}
    <div className="flex justify-between items-start">
      <div className="flex gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg`} style={{ backgroundColor: color }}>
          {logoText}
        </div>
        <div>
          <h3 className="font-semibold text-[16px] text-[#0F172B]">{title}</h3>
          <p className="font-normal text-[14px] text-[#45556C]">{company}</p>
        </div>
      </div>
      <button className="text-slate-400 hover:text-blue-600 transition-colors" aria-label="Simpan lowongan">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    </div>

    {/* Row 2 */}
    <div className="flex flex-wrap items-center gap-4 text-[#45556C] text-[12px]">
      <div className="flex items-center gap-1.5">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        {location}
      </div>
      <div className="flex items-center gap-1.5">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        {salary}
      </div>
      <div className="flex items-center gap-1.5">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
        {type}
      </div>
    </div>

    {/* Row 3 */}
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, idx) => (
        <span key={idx} className="bg-blue-50 border border-blue-100 rounded-full px-2.5 py-1 text-blue-600 font-medium text-[12px]">
          {tag}
        </span>
      ))}
    </div>

    {/* Row 4 */}
    <div className="border-t border-slate-100 pt-3 flex justify-between items-center text-[12px]">
      <div className="flex items-center gap-1.5 text-[#62748E]">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 16v-4"></path>
          <path d="M12 8h.01"></path>
        </svg>
        <span>
          Ramah untuk: <span className="font-bold text-[#314158]">{a11y}</span>
        </span>
      </div>
      <span className="text-[#90A1B9]">{posted}</span>
    </div>

    {/* Row 5 */}
    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-2.5 font-semibold text-[14px] transition-colors mt-2">
      Lamar Sekarang
    </button>
  </div>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-['Plus_Jakarta_Sans'] text-slate-900 flex flex-col">
      {/* 1. HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-[1152px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M14.31 8l5.74 9.94"></path>
                <path d="M9.69 8h11.48"></path>
                <path d="M7.38 12l5.74-9.94"></path>
                <path d="M9.69 16L3.95 6.06"></path>
                <path d="M14.31 16H2.83"></path>
                <path d="M16.62 12l-5.74 9.94"></path>
              </svg>
            </div>
            <span className="font-bold text-[18px] text-[#0F172B] tracking-tight">DiffaTech</span>
          </Link>

          {/* Center: Nav links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/jobs" className="font-medium text-[14px] text-[#45556C] hover:text-blue-600 transition-colors">Lowongan Kerja</Link>
            <Link to="/training" className="font-medium text-[14px] text-[#45556C] hover:text-blue-600 transition-colors">Pelatihan</Link>
            <Link to="/community" className="font-medium text-[14px] text-[#45556C] hover:text-blue-600 transition-colors">Komunitas</Link>
            <Link to="/about" className="font-medium text-[14px] text-[#45556C] hover:text-blue-600 transition-colors">Tentang</Link>
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            <Link to="/employer" className="hidden lg:block font-medium text-[14px] text-blue-600 hover:text-blue-700 transition-colors">
              Daftar Perusahaan
            </Link>
            <AccessibilityWidget />
            <Link to="/login" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl px-4 py-1.5 font-semibold text-[14px] transition-colors">
              Masuk
            </Link>
            <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-4 py-1.5 font-semibold text-[14px] shadow-md transition-colors">
              Daftar
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* 2. HERO SECTION */}
        <section className="pt-16 pb-12 bg-white px-6">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            {/* Badge */}
            <div className="bg-blue-50 border border-blue-200 rounded-full px-3 py-1.5 flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full opacity-90"></span>
              <span className="font-semibold text-[12px] text-blue-600">Platform kerja inklusif & aksesibel #1 di Indonesia</span>
            </div>

            {/* Main heading */}
            <h1 className="font-extrabold text-[60px] leading-[66px] text-[#0F172B] tracking-tight">
              Karier IT terbaik untuk <span className="text-blue-600">profesional berbakat</span> penyandang disabilitas
            </h1>

            {/* Paragraph */}
            <p className="mt-5 font-normal text-[20px] leading-[32.5px] text-[#45556C]">
              Lebih dari <span className="font-bold text-slate-800">4.200 lowongan</span> dari perusahaan teknologi terkemuka Indonesia yang berkomitmen pada inklusivitas dan aksesibilitas di tempat kerja.
            </p>

            {/* Search bar */}
            <div className="mt-8 w-full max-w-2xl bg-white border-2 border-slate-200 rounded-xl shadow-sm flex items-center p-2">
              <div className="pl-3 pr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#62748E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <input 
                type="text" 
                placeholder="Posisi, keahlian, atau nama perusahaan…" 
                className="flex-grow bg-transparent outline-none text-[14px] text-slate-900 placeholder:text-[#90A1B9] py-2"
              />
              <button className="px-3 text-slate-400 hover:text-slate-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="23"></line>
                  <line x1="8" y1="23" x2="16" y2="23"></line>
                </svg>
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-5 py-2.5 font-semibold text-[14px] shadow-sm ml-2 transition-colors">
                Cari Lowongan
              </button>
            </div>

            {/* Popular tags */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <span className="text-[14px] text-[#62748E]">Populer:</span>
              <Link to="/jobs?q=frontend" className="text-[14px] text-blue-600 font-medium hover:underline">Frontend Developer</Link>
              <span className="text-slate-300">,</span>
              <Link to="/jobs?q=uiux" className="text-[14px] text-blue-600 font-medium hover:underline">UI/UX Designer</Link>
              <span className="text-slate-300">,</span>
              <Link to="/jobs?q=data" className="text-[14px] text-blue-600 font-medium hover:underline">Data Analyst</Link>
              <span className="text-slate-300">,</span>
              <Link to="/jobs?q=devops" className="text-[14px] text-blue-600 font-medium hover:underline">DevOps</Link>
            </div>
          </div>
        </section>

        {/* 3. STATS SECTION */}
        <section className="bg-slate-50 border-y border-slate-100">
          <div className="max-w-[1152px] mx-auto p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <h2 className="font-extrabold text-[30px] leading-[36px] text-[#0F172B]">4.200+</h2>
                <p className="font-normal text-[14px] text-[#45556C] text-center mt-1">Lowongan Aktif</p>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="font-extrabold text-[30px] leading-[36px] text-[#0F172B]">850+</h2>
                <p className="font-normal text-[14px] text-[#45556C] text-center mt-1">Perusahaan Inklusif</p>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="font-extrabold text-[30px] leading-[36px] text-[#0F172B]">12.000+</h2>
                <p className="font-normal text-[14px] text-[#45556C] text-center mt-1">Profesional Terdaftar</p>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="font-extrabold text-[30px] leading-[36px] text-[#0F172B]">93%</h2>
                <p className="font-normal text-[14px] text-[#45556C] text-center mt-1">Tingkat Penempatan</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FEATURED JOBS SECTION */}
        <section className="py-14 px-6 bg-white">
          <div className="max-w-[1152px] mx-auto">
            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="font-bold text-[30px] text-[#0F172B]">Lowongan Unggulan</h2>
                <p className="font-normal text-[16px] text-[#45556C] mt-2">
                  Posisi IT dari perusahaan yang sudah terverifikasi ramah disabilitas
                </p>
              </div>
              <Link to="/jobs" className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl px-4 py-2 font-semibold text-[14px] transition-colors whitespace-nowrap">
                Lihat semua lowongan
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>

            {/* Grid 2x2 */}
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <JobCard 
                color="#10B981"
                logoText="GT"
                title="Senior Frontend Engineer"
                company="GoTo Group"
                location="Jakarta Selatan"
                salary="Rp 25-35 juta/bln"
                type="Full-Time · Remote"
                tags={["React.js", "TypeScript", "GraphQL"]}
                a11y="Disleksia, Tunarungu"
                posted="2 hari lalu"
              />
              <JobCard 
                color="#6366F1"
                logoText="GI"
                title="UI/UX Designer – Produk Digital"
                company="GovTech Indonesia"
                location="Jakarta Pusat"
                salary="Rp 15-22 juta/bln"
                type="Full-Time · Hybrid"
                tags={["Figma", "Design System", "User Research"]}
                a11y="Tunadaksa, Disleksia"
                posted="1 hari lalu"
              />
              <JobCard 
                color="#F59E0B"
                logoText="BJ"
                title="Backend Engineer (Node.js)"
                company="Bank Jago"
                location="Jakarta Barat"
                salary="Rp 20-30 juta/bln"
                type="Full-Time · Onsite"
                tags={["Node.js", "PostgreSQL", "AWS"]}
                a11y="Tunarungu, Tunadaksa"
                posted="3 hari lalu"
              />
              <JobCard 
                color="#EF4444"
                logoText="TI"
                title="Data Scientist & ML Engineer"
                company="Telkom Indonesia"
                location="Bandung"
                salary="Rp 22-35 juta/bln"
                type="Full-Time · Hybrid"
                tags={["Python", "TensorFlow", "BigQuery"]}
                a11y="Disleksia, Tunanetra"
                posted="5 hari lalu"
              />
            </div>
          </div>
        </section>

        {/* 5. HOW IT WORKS SECTION */}
        <section className="bg-slate-50 py-16 border-y border-slate-100 px-6">
          <div className="max-w-[1152px] mx-auto">
            <div className="text-center">
              <h2 className="font-bold text-[30px] text-[#0F172B]">Cara Kerja DiffaTech</h2>
              <p className="font-normal text-[16px] text-[#45556C] mt-2">
                Tiga langkah sederhana menuju karier IT impianmu
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-[14px]">
                  01
                </div>
                <h3 className="font-semibold text-[16px] text-[#0F172B]">Buat Profil Profesional</h3>
                <p className="font-normal text-[14px] text-[#45556C]">
                  Lengkapi data diri, keahlian IT, dan kebutuhan akomodasi aksesibilitasmu dengan aman dan rahasia.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-[14px]">
                  02
                </div>
                <h3 className="font-semibold text-[16px] text-[#0F172B]">Lamar Lowongan Pilihan</h3>
                <p className="font-normal text-[14px] text-[#45556C]">
                  Temukan lowongan dari perusahaan terverifikasi yang cocok dengan keahlian dan kebutuhan aksesibilitasmu.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-[14px]">
                  03
                </div>
                <h3 className="font-semibold text-[16px] text-[#0F172B]">Terhubung & Diterima Kerja</h3>
                <p className="font-normal text-[14px] text-[#45556C]">
                  Ikuti proses seleksi yang inklusif dan mulailah perjalanan karier IT-mu di tempat yang tepat.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-3 font-semibold text-[14px] transition-colors w-full sm:w-auto text-center">
                Mulai Daftar Sekarang
              </Link>
              <Link to="/login" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl px-6 py-3 font-semibold text-[14px] transition-colors w-full sm:w-auto text-center">
                Sudah Punya Akun
              </Link>
            </div>
          </div>
        </section>

        {/* 6. CTA BANNER */}
        <section className="px-6 pb-16 pt-16 bg-white">
          <div className="max-w-[1152px] mx-auto bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="font-bold text-[30px] text-white">Siap memulai karier IT-mu?</h2>
              <p className="font-normal text-[16px] text-[#BEDBFF] mt-3">
                Bergabunglah dengan ribuan profesional disabilitas lainnya yang telah menemukan tempat kerja impian mereka.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Link to="/employer" className="border-2 border-white text-white hover:bg-white/10 rounded-xl px-6 py-3 font-semibold text-[14px] transition-colors text-center whitespace-nowrap">
                Daftar Perusahaan
              </Link>
              <Link to="/register" className="bg-white text-blue-600 hover:bg-slate-50 rounded-xl px-6 py-3 font-semibold text-[14px] shadow text-center whitespace-nowrap transition-colors">
                Daftar sebagai Pencari Kerja
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* 7. FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-[1152px] mx-auto px-6">
          {/* Top row */}
          <div className="py-10 flex flex-col lg:flex-row justify-between gap-10">
            <div className="w-full lg:w-80">
              <Link to="/" className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M14.31 8l5.74 9.94"></path>
                    <path d="M9.69 8h11.48"></path>
                    <path d="M7.38 12l5.74-9.94"></path>
                    <path d="M9.69 16L3.95 6.06"></path>
                    <path d="M14.31 16H2.83"></path>
                    <path d="M16.62 12l-5.74 9.94"></path>
                  </svg>
                </div>
                <span className="font-bold text-[18px] text-[#0F172B] tracking-tight">DiffaTech</span>
              </Link>
              <p className="font-normal text-[14px] text-[#62748E] mb-4">
                Platform karir IT terkemuka yang menghubungkan profesional penyandang disabilitas dengan perusahaan inklusif di seluruh Indonesia.
              </p>
              <p className="font-normal text-[12px] text-[#90A1B9]">
                Memenuhi standar WCAG 2.1 AA
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">
              <div>
                <h4 className="font-semibold text-[14px] text-[#314158] mb-4">Platform</h4>
                <ul className="flex flex-col gap-3">
                  <li><Link to="/jobs" className="font-normal text-[14px] text-[#62748E] hover:text-blue-600 transition-colors">Cari Lowongan</Link></li>
                  <li><Link to="/employer/post" className="font-normal text-[14px] text-[#62748E] hover:text-blue-600 transition-colors">Posting Kerja</Link></li>
                  <li><Link to="/training" className="font-normal text-[14px] text-[#62748E] hover:text-blue-600 transition-colors">Pelatihan IT</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[14px] text-[#314158] mb-4">Perusahaan</h4>
                <ul className="flex flex-col gap-3">
                  <li><Link to="/companies" className="font-normal text-[14px] text-[#62748E] hover:text-blue-600 transition-colors">Daftar Perusahaan</Link></li>
                  <li><Link to="/verification" className="font-normal text-[14px] text-[#62748E] hover:text-blue-600 transition-colors">Verifikasi Inklusif</Link></li>
                  <li><Link to="/pricing" className="font-normal text-[14px] text-[#62748E] hover:text-blue-600 transition-colors">Harga & Paket</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[14px] text-[#314158] mb-4">Bantuan</h4>
                <ul className="flex flex-col gap-3">
                  <li><Link to="/accessibility-guide" className="font-normal text-[14px] text-[#62748E] hover:text-blue-600 transition-colors">Panduan Aksesibilitas</Link></li>
                  <li><Link to="/faq" className="font-normal text-[14px] text-[#62748E] hover:text-blue-600 transition-colors">FAQ</Link></li>
                  <li><Link to="/contact" className="font-normal text-[14px] text-[#62748E] hover:text-blue-600 transition-colors">Kontak Kami</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="border-t border-slate-100 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-normal text-[12px] text-[#90A1B9]">
              © 2025 DiffaTech. Hak Cipta Dilindungi.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1 flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#009966" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span className="font-medium text-[12px] text-[#009966]">WCAG 2.1 AA Compliant</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
