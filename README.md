# Kelompok 12 — Mabim

Website Kelompok 12 Mabim, Jurusan Informatika, untuk memperkenalkan anggota kelompok, berbagi dokumentasi kegiatan, menampung komentar, dan menghadirkan mini-game.

## Fitur

- **Profil kelompok dan anggota** — kenali kelompok dan para anggotanya.
- **Galeri kegiatan** — lihat dokumentasi kegiatan MABIM dan mentoring.
- **Bulletin Board** — kirim dan baca komentar dari pengunjung melalui Supabase.
- **Mini-game** — pilih karakter, lalu mainkan Dino Chrome, Flappy Bird, atau Space Dodge.
- **Pilihan karakter** — karakter yang dipilih ditampilkan dalam menu dan permainan.

## Halaman

| Halaman | Isi |
| --- | --- |
| `index.html` | Beranda, pengenalan kelompok, serta komentar terbaru |
| `anggota.html` | Profil anggota Kelompok 12 |
| `gallery.html` | Foto kegiatan MABIM dan mentoring |
| `bulletin.html` | Formulir dan daftar komentar |
| `game.html` | Pilihan karakter |
| `game-menu.html` | Pilihan mini-game |
| `dino.html` | Mini-game Dino Chrome |
| `flappy.html` | Mini-game Flappy Bird |
| `space-dodge.html` | Mini-game Space Dodge |

## Menjalankan secara lokal

Proyek ini berupa situs statis dan tidak memerlukan proses build atau instalasi dependensi. Untuk melihat seluruh fitur, jalankan server lokal dari folder proyek:

```bash
python -m http.server 8000
```

Jika perintah `python` tidak tersedia di Windows, gunakan:

```powershell
py -m http.server 8000
```

Buka [http://localhost:8000](http://localhost:8000) di browser, lalu pilih `index.html` sebagai halaman awal. Fitur Bulletin Board memerlukan koneksi internet dan konfigurasi Supabase proyek.

## Teknologi

- HTML, CSS, dan JavaScript
- Supabase untuk data Bulletin Board
- Google Fonts, Tailwind CSS CDN, dan Lucide pada halaman yang menggunakannya

## Tim dan kontribusi

| Nama | Kontribusi |
| --- | --- |
| Parel | Mengembangkan website dan mengintegrasikan halaman serta fitur. |
| Aditya | Menyusun dan mengembangkan animasi. |
| Radhitya | Merancang konsep desain awal website. |
| Defnika, Winda, Efqi, Daris | Berkontribusi dalam pengembangan ide dan konsep proyek. |
| Ihsan, Alif, Daris, Nanda | Merancang konsep desain untuk game. |

Terima kasih kepada seluruh anggota Kelompok 12 yang telah berkontribusi dalam proyek ini.
