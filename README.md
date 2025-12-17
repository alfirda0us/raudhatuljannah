# Raudhatul Jannah — Website

Selamat datang di repo **Raudhatul Jannah** — sebuah situs sederhana untuk Masjid Raudhatul Jannah, dibangun dengan Vite, React, TypeScript, Tailwind CSS, dan shadcn-ui.

---

## Mulai Cepat

Persyaratan: Node.js (LTS) dan npm

```powershell
# Pasang dependensi
npm install

# Jalankan server development
npm run dev

# Build untuk produksi
npm run build

# Preview hasil build
npm run preview
```

---

## Cara mengganti Title & Logo

- **Title (judul halaman)**: buka `index.html` di root proyek dan ubah tag `<title>...</title>` serta meta `og:title` jika perlu.
- **Logo**: ganti file `src/assets/mosque-logo.jpeg` dengan gambar baru (nama file tetap), atau ubah import di `src/components/Navbar.tsx` dan `src/components/Footer.tsx` ke file gambar lain.
- **Favicon (opsional)**: letakkan `favicon.ico`/`favicon.png` di folder `public/` dan tambahkan `<link rel="icon" href="/favicon.ico" />` di `index.html`.

---

## Struktur Singkat

- `index.html` — entry HTML (title, meta)
- `src/` — kode sumber React
- `src/assets/` — gambar, termasuk `mosque-logo.jpeg`
- `src/components/Navbar.tsx` & `src/components/Footer.tsx` — komponen yang menampilkan logo dan nama

---

## Deployment

Anda dapat menggunakan Lovable (jika terhubung) untuk publish otomatis, atau deploy ke provider lain (Vercel, Netlify, dsb.).

---

## Kontribusi

Silakan fork, buat branch, lalu kirim pull request. Untuk perubahan cepat, Anda juga bisa edit langsung dan commit ke branch `main` jika Anda pemilik repo.

---

## Kontak

Untuk pertanyaan atau bantuan, buka issue di repo ini.

---

_README ini dibuat ulang untuk memudahkan pengembangan lokal dan penggantian aset seperti title dan logo._
