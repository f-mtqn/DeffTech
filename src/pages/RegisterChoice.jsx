import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function RegisterChoice() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex font-sans">
      {/* Left Panel */}
      <div className="hidden lg:flex w-1/2 relative bg-gray-900">
        <img
          src="../assets/hero.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
        <div className="relative z-10 p-12 flex flex-col justify-between h-full text-white">
          <Link to="/" className="text-3xl font-bold tracking-tight text-white">diffaTech</Link>
          <div>
            <h1 className="text-4xl font-bold mb-4">Inklusivitas dalam Dunia Kerja</h1>
            <p className="text-lg text-gray-200">Menghubungkan talenta luar biasa dengan perusahaan yang peduli.</p>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 md:px-24 py-12 bg-white">
        <div className="max-w-md w-full mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-8">
            <span className="text-base">♿</span> disability-friendly
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-2">Buat Akun</h2>
          <p className="text-gray-500 mb-8">Pilih jenis akun yang sesuai dengan kebutuhanmu</p>

          <div className="space-y-4">
            {/* Pencari Kerja Card */}
            <button
              onClick={() => navigate('/register/pencari-kerja')}
              className="w-full text-left p-6 border-2 border-gray-100 rounded-2xl hover:border-blue-500 hover:shadow-md transition-all duration-200 group flex items-start gap-4 bg-white"
            >
              <div className="p-3 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-100 transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Pencari Kerja</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Buat profil, lamar lowongan, dan temukan pekerjaan yang sesuai dengan kemampuanmu</p>
              </div>
              <div className="text-gray-400 group-hover:text-blue-500 self-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            {/* Perusahaan Card */}
            <button
              onClick={() => navigate('/register/perusahaan')}
              className="w-full text-left p-6 border-2 border-gray-100 rounded-2xl hover:border-blue-500 hover:shadow-md transition-all duration-200 group flex items-start gap-4 bg-white"
            >
              <div className="p-3 bg-purple-50 rounded-lg text-purple-600 group-hover:bg-purple-100 transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Perusahaan</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Daftarkan perusahaanmu, posting lowongan, dan temukan kandidat terbaik yang inklusif</p>
              </div>
              <div className="text-gray-400 group-hover:text-blue-500 self-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>

          <div className="mt-8 text-center text-sm text-gray-600">
            Sudah Punya Akun? <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-500 hover:underline">Masuk</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
