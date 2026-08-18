import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error logging out', error);
    }
  };

  const userName = user?.user_metadata?.full_name || 'Pengguna';
  const userEmail = user?.email || 'email@example.com';

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full bg-white border-b z-20 px-4 py-3 flex justify-between items-center shadow-sm">
        <h1 className="text-xl font-bold text-blue-600">diffaTech</h1>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>

      {/* Sidebar Left */}
      <div className={`fixed inset-y-0 left-0 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out z-10 w-56 bg-white border-r flex flex-col justify-between pt-16 md:pt-0`}>
        <div>
          <div className="hidden md:flex items-center px-6 py-5">
            <h1 className="text-2xl font-bold text-blue-600">diffaTech</h1>
          </div>
          
          <div className="flex flex-col items-center px-6 py-6 border-b border-gray-100">
            <div className="w-20 h-20 bg-gray-200 rounded-full mb-3 flex items-center justify-center text-gray-500 text-3xl font-semibold">
              {userName.charAt(0).toUpperCase()}
            </div>
            <h2 className="font-semibold text-gray-800 text-center">{userName}</h2>
            <p className="text-sm text-gray-500 text-center mt-1">Pencari Kerja</p>
          </div>

          <div className="px-4 py-6">
            <p className="text-xs font-semibold text-gray-400 mb-4 px-2 uppercase tracking-wider">PLATFORM</p>
            <nav className="space-y-1">
              <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-md bg-blue-50 text-blue-700">
                <svg className="mr-3 h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                Dashboard
              </a>
              <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                <svg className="mr-3 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                Cari Lowongan
              </a>
              <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                <svg className="mr-3 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Lamaran Saya
              </a>
              <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                <svg className="mr-3 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                Notifikasi
              </a>
            </nav>

            <p className="text-xs font-semibold text-gray-400 mt-8 mb-4 px-2 uppercase tracking-wider">APPROVED JOB</p>
            <nav className="space-y-1">
              <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                <svg className="mr-3 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                Chat HRD
              </a>
            </nav>
          </div>
        </div>

        <div className="p-4 border-t border-gray-100">
          <button onClick={handleLogout} className="flex items-center w-full hover:bg-gray-50 p-2 rounded-md transition-colors">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600 flex-shrink-0">
               {userName.charAt(0).toUpperCase()}
            </div>
            <div className="ml-3 flex-1 text-left min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{userName}</p>
              <p className="text-xs text-gray-500 truncate">{userEmail}</p>
            </div>
            <svg className="ml-2 w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 pt-16 md:pt-0 overflow-y-auto">
        <main className="flex-1 px-4 sm:px-6 md:px-8 py-8 w-full max-w-5xl mx-auto">
          <div className="mb-8 mt-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-2">Siap memberi banyak lowongan pekerjaan</h1>
            <p className="text-gray-500 text-sm sm:text-base">Ribuan lowongan dari perusahaan yang peduli aksesibilitas</p>
          </div>

          {/* Profile Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-200 rounded-full flex items-center justify-center text-3xl sm:text-4xl font-semibold text-gray-500 mr-5 sm:mr-6 flex-shrink-0">
                    {userName.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{userName}</h2>
                    <p className="text-sm sm:text-base text-gray-500">{userEmail}</p>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors rounded-full hover:bg-gray-50">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                </button>
              </div>

              <hr className="my-6 border-gray-100" />

              <div className="mb-8">
                <h3 className="text-base font-semibold text-gray-900 mb-4">Tipe Pekerjaan</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <span className="px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">Paruh Waktu</span>
                  <span className="px-4 py-1.5 bg-green-50 text-green-700 text-sm font-medium rounded-full">Full Time</span>
                  <span className="px-4 py-1.5 bg-purple-50 text-purple-700 text-sm font-medium rounded-full">Ramah Disleksia</span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-base font-semibold text-gray-900 mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <span className="px-4 py-1.5 bg-white border border-blue-200 text-blue-600 text-sm font-medium rounded-full shadow-sm">Figma</span>
                  <span className="px-4 py-1.5 bg-white border border-blue-200 text-blue-600 text-sm font-medium rounded-full shadow-sm">React</span>
                  <span className="px-4 py-1.5 bg-white border border-blue-200 text-blue-600 text-sm font-medium rounded-full shadow-sm">UI/UX Design</span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-base font-semibold text-gray-900 mb-3">Education</h3>
                <p className="text-gray-700 bg-gray-50 inline-block px-4 py-2 rounded-lg text-sm">Fresh Graduate</p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-4">Pengalaman</h3>
                <div className="space-y-4">
                  {/* Experience Item 1 */}
                  <div className="border border-gray-100 rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-900 text-base">Frontend Developer - PT Teknologi Inovasi</h4>
                    <p className="text-sm text-blue-600 font-medium mb-3 mt-1">Jan 2024 - Sekarang</p>
                    <p className="text-sm text-gray-600 leading-relaxed">Membangun antarmuka web yang responsif dan dapat diakses untuk berbagai klien korporat. Menggunakan React dan Tailwind CSS.</p>
                  </div>
                  {/* Experience Item 2 */}
                  <div className="border border-gray-100 rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-900 text-base">UI/UX Designer Intern - Studio Kreatif</h4>
                    <p className="text-sm text-blue-600 font-medium mb-3 mt-1">Jun 2023 - Des 2023</p>
                    <p className="text-sm text-gray-600 leading-relaxed">Mendesain wireframe dan prototipe interaktif menggunakan Figma. Melakukan riset pengguna untuk aksesibilitas.</p>
                  </div>
                  {/* Experience Item 3 */}
                  <div className="border border-gray-100 rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-900 text-base">Asisten Laboratorium - Universitas</h4>
                    <p className="text-sm text-blue-600 font-medium mb-3 mt-1">Agu 2022 - Mei 2023</p>
                    <p className="text-sm text-gray-600 leading-relaxed">Membantu mahasiswa dalam praktikum pemrograman web dasar dan struktur data.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Sidebar Right */}
      <div className="hidden lg:block w-80 bg-white border-l p-6 overflow-y-auto">
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-blue-50 p-4 rounded-xl text-center shadow-sm">
            <span className="block text-3xl font-bold text-blue-600 mb-1">12</span>
            <span className="text-xs text-blue-800 font-medium uppercase tracking-wide">Lamar Kerja</span>
          </div>
          <div className="bg-green-50 p-4 rounded-xl text-center shadow-sm">
            <span className="block text-3xl font-bold text-green-600 mb-1">2</span>
            <span className="text-xs text-green-800 font-medium uppercase tracking-wide">Diterima Kerja</span>
          </div>
          <div className="bg-yellow-50 p-4 rounded-xl text-center shadow-sm">
            <span className="block text-3xl font-bold text-yellow-600 mb-1">6</span>
            <span className="text-xs text-yellow-800 font-medium uppercase tracking-wide">Dalam Proses</span>
          </div>
          <div className="bg-red-50 p-4 rounded-xl text-center shadow-sm">
            <span className="block text-3xl font-bold text-red-600 mb-1">4</span>
            <span className="text-xs text-red-800 font-medium uppercase tracking-wide">Ditolak Kerja</span>
          </div>
        </div>

        <div className="mb-6 border border-gray-100 rounded-xl p-5 bg-white shadow-sm">
          <h3 className="font-bold text-gray-900 mb-3 text-base">Tentang Saya</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Seorang profesional yang berdedikasi tinggi dengan pengalaman di bidang teknologi. Bersemangat untuk menciptakan solusi inklusif yang dapat diakses oleh semua orang, terlepas dari kemampuan mereka.
          </p>
        </div>

        <div className="mb-4 border border-gray-100 rounded-xl p-4 bg-white shadow-sm flex items-center justify-between hover:border-blue-100 transition-colors group cursor-pointer">
          <div className="flex items-center overflow-hidden">
            <div className="bg-red-50 p-2.5 rounded-lg mr-4">
              <svg className="w-7 h-7 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">CV - {userName}</p>
              <p className="text-xs text-gray-500 mt-0.5">Update 24 Okt 2025</p>
            </div>
          </div>
          <button className="text-gray-400 group-hover:text-blue-600 p-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
          </button>
        </div>

        <div className="border border-gray-100 rounded-xl p-4 bg-white shadow-sm flex items-center justify-between hover:border-blue-100 transition-colors group cursor-pointer">
          <div className="flex items-center overflow-hidden">
             <div className="bg-yellow-50 p-2.5 rounded-lg mr-4">
              <svg className="w-7 h-7 text-yellow-600" fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" /></svg>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">Sertifikasi - {userName}</p>
              <p className="text-xs text-gray-500 mt-0.5">Update 24 Okt 2025</p>
            </div>
          </div>
          <button className="text-gray-400 group-hover:text-blue-600 p-2">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
