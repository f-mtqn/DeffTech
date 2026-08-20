# disLok — LinkedIn for Disabilities Web App

Platform kerja inklusif untuk talenta disabilitas. Website ini mirip LinkedIn tetapi difokuskan untuk penyandang disabilitas. Scope saat ini: **Login, Register, dan Dashboard**.

## Ringkasan dari Desain Mockup

Berdasarkan semua PNG yang saya lihat:

| Halaman | Detail |
|---|---|
| **Login (Pencari Kerja & Perusahaan)** | Split layout: kiri foto hero, kanan form. Toggle tab "Pencari Kerja" / "Perusahaan". Field: Email, Password, checkbox Ingat Saya, link Lupa Password, tombol "Masuk" (biru), link "Daftar" |
| **Registrasi Pilihan** | Split layout sama. Pilih jenis akun: "Pencari Kerja" atau "Perusahaan" dengan card selection |
| **Registrasi Pencari Kerja** | Split layout. Field: Nama Lengkap, Email, Password, Konfirmasi Password. Disclaimer terms, tombol "Daftar" |
| **Registrasi Perusahaan** | Full-width form panjang: Nama Perusahaan, URL Website, Deskripsi, Alamat, Logo URL, Bidang Industri, Media Sosial, Pernyataan Kelayakan & Persetujuan |
| **Dashboard** | Sidebar kiri (navigasi: Dasboard, Cari Lowongan, Lamaran Saya, Notifikasi, Chat HRD). Konten utama: profil user, skills, education, pengalaman. Sidebar kanan: statistik lamaran, Tentang Saya, CV, Sertikasi |

## Stack Teknologi

Sesuai notes, menggunakan:
- **Frontend**: React + Vite + Tailwind CSS (user request explicit di notes)
- **Auth & DB**: Supabase (`@supabase/supabase-js`)
- **Routing**: `react-router-dom`
- **Struktur**: `frontend/` folder terpisah

## Proposed Changes

### 1. Project Setup (`frontend/`)

#### [NEW] `frontend/` — Vite + React Project
- Inisialisasi project dengan `npx create-vite@latest ./ --template react`
- Install dependencies: `@supabase/supabase-js`, `react-router-dom`
- Install & setup Tailwind CSS v3

#### [NEW] `frontend/.env`
- `VITE_SUPABASE_URL=https://khupozasdweezkqnqxdt.supabase.co`
- `VITE_SUPABASE_ANON_KEY=<anon key dari notes>`

---

### 2. Supabase Client

#### [NEW] `frontend/src/utils/supabaseClient.js`
- `createClient()` dengan env variables
- Export singleton client

---

### 3. Auth Context

#### [NEW] `frontend/src/context/AuthContext.jsx`
- React context untuk session management
- `onAuthStateChange` listener
- Expose: `user`, `session`, `loading`, `signUp`, `signIn`, `signOut`

---

### 4. Halaman Login (`/login`)

#### [NEW] `frontend/src/pages/Login.jsx`
- **Layout**: Split 50/50 — kiri hero image, kanan form
- **Tab toggle**: "Pencari Kerja" / "Perusahaan" (mengubah label tombol)
- **Form fields**: Email, Password
- **Features**: Ingat Saya checkbox, Lupa Password link, error message
- **Action**: `supabase.auth.signInWithPassword()` → redirect ke `/dashboard`
- **Link**: "Belum Punya Akun? Daftar" → ke `/register`

---

### 5. Halaman Register

#### [NEW] `frontend/src/pages/RegisterChoice.jsx` (`/register`)
- **Layout**: Split 50/50 — kiri hero image, kanan pilihan
- **2 card pilihan**: "Pencari Kerja" & "Perusahaan" dengan icon dan deskripsi
- **Link**: "Sudah Punya Akun? Masuk" → ke `/login`

#### [NEW] `frontend/src/pages/RegisterJobSeeker.jsx` (`/register/pencari-kerja`)
- **Layout**: Split 50/50
- **Fields**: Nama Lengkap, Email, Password, Konfirmasi Password
- **Disclaimer**: Syarat & Ketentuan, Kebijakan Privasi
- **Action**: `supabase.auth.signUp()` dengan metadata `{role: 'job_seeker', full_name}`
- **Link**: "Kembali pilih jenis akun"

#### [NEW] `frontend/src/pages/RegisterCompany.jsx` (`/register/perusahaan`)
- **Layout**: Full-width centered form (sesuai desain)
- **Fields**: Nama Perusahaan, URL Website, Deskripsi, Alamat, Logo URL, Bidang Industri (dynamic list), Media Sosial (LinkedIn, YouTube, Instagram, Twitter)
- **Pernyataan Kelayakan**: Checkbox persetujuan disability-friendly commitment
- **Action**: `supabase.auth.signUp()` dengan metadata `{role: 'company', company_name, ...}`

---

### 6. Dashboard (`/dashboard`)

#### [NEW] `frontend/src/pages/Dashboard.jsx`
- **Protected route** — redirect ke `/login` kalau belum ada session
- **Layout 3 kolom**:
  - **Sidebar kiri**: Logo "disLok", user info, navigasi (Dasboard, Cari Lowongan, Lamaran Saya, Notifikasi, Chat HRD)
  - **Konten utama**: Hero text, Profile card (avatar, email, edit), Tipe Pekerjaan tags, Skills tags, Education, Pengalaman (list)
  - **Sidebar kanan**: Statistik lamaran (4 box grid), Tentang Saya, CV card, Sertikasi card

---

### 7. Protected Route & Routing

#### [NEW] `frontend/src/components/ProtectedRoute.jsx`
- Cek session dari AuthContext
- Redirect ke `/login` jika tidak ada session

#### [MODIFY] `frontend/src/App.jsx`
- Setup `BrowserRouter` + Routes:
  - `/login` → Login
  - `/register` → RegisterChoice
  - `/register/pencari-kerja` → RegisterJobSeeker
  - `/register/perusahaan` → RegisterCompany
  - `/dashboard` → Dashboard (protected)
  - `/` → redirect ke `/login`

---

### 8. Styling & Assets

- **Color palette**: Primary blue `#2563EB` (sesuai desain), white background, light grays
- **Font**: Inter (Google Fonts) sesuai vibe desain
- **Hero image**: Generate gambar hero untuk panel kiri login/register
- **Branding**: Logo text "disLok" warna biru bold

## Verification Plan

### Manual Verification
- `npm run dev` dan test semua flow di browser:
  1. Buka `/` → redirect ke `/login`
  2. Login page tampil sesuai desain, tab toggle berfungsi
  3. Klik "Daftar" → ke `/register` (pilihan)
  4. Pilih "Pencari Kerja" → form register, isi → signup berhasil
  5. Pilih "Perusahaan" → form register panjang tampil benar
  6. Login dengan akun baru → redirect ke `/dashboard`
  7. Dashboard tampil 3 kolom, info user, tombol logout berfungsi
  8. Akses `/dashboard` tanpa login → redirect ke `/login`

> [!NOTE]
> Saya akan menggunakan **Tailwind CSS** sesuai notes kamu. Untuk hero image di panel kiri, saya akan generate gambar yang mirip tema disability-friendly workplace daripada menggunakan placeholder.

> [!IMPORTANT]
> **Supabase keys** dari notes kamu akan saya masukkan ke file `.env`. Pastikan file `.env` tidak di-commit ke Git. Saya akan tambahkan ke `.gitignore`.
