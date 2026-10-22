import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans font-normal">
      
      <div className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          <div className="flex-shrink-0 flex items-center">
            <Image
              src="/images/logoini.png"
              alt="logo Deepublish Store"
              width={160}
              height={50}
              className="h-12 w-auto object-contain"
            />
          </div>

          <div className="hidden lg:flex items-center gap-6 text-xs text-gray-700 uppercase tracking-wide">
            <div className="hover:text-red-600 cursor-pointer flex items-center gap-1 transition-colors">
              KATEGORI <span className="text-[10px]">▾</span>
            </div>
            <div className="hover:text-red-600 cursor-pointer flex items-center gap-1 transition-colors">
              PENGASILAN TAMBAHAN <span className="text-[10px]">▾</span>
            </div>
            <div className="hover:text-red-600 cursor-pointer transition-colors">PROMO</div>
            <div className="hover:text-red-600 cursor-pointer transition-colors">BUKU GRATIS</div>
            <div className="hover:text-red-600 cursor-pointer flex items-center gap-1 transition-colors">
              PEMBELIAN BUKU <span className="text-[10px]">▾</span>
            </div>
            <div className="hover:text-red-600 cursor-pointer transition-colors">BLOG</div>
            <div className="hover:text-red-600 cursor-pointer transition-colors">EBOOK RESELLER</div>
          </div>

          <div className="flex items-center gap-5 text-gray-700">
            <button className="relative p-1 hover:text-red-600 transition-colors" aria-label="Cart">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-1 -right-2 bg-orange-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            <button className="p-1 hover:text-red-600 transition-colors" aria-label="Search">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <button className="p-1 hover:text-red-600 transition-colors" aria-label="User Account">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-16">
        
        <div className="relative w-full rounded-xl overflow-hidden shadow-sm">
          <div className="relative w-full h-[220px] sm:h-[320px] md:h-[400px]">
            <Image
              src="/bannerpromo.webp"
              alt="Promo Banner"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="flex justify-center items-center gap-2 py-3 bg-white">
            <span className="w-2 h-2 rounded-full bg-gray-300 cursor-pointer"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300 cursor-pointer"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300 cursor-pointer"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300 cursor-pointer"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300 cursor-pointer"></span>
            <span className="w-2 h-2 rounded-full bg-black cursor-pointer"></span>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-end mb-6">
            <div className="text-2xl text-red-700 tracking-tight">Produk Terlaris</div>
            <div className="text-xs text-red-600 hover:underline cursor-pointer tracking-wider">SEE MORE</div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            
            <div className="flex flex-col justify-between border border-gray-100 rounded-xl p-3 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="w-full aspect-[3/4] relative rounded-lg overflow-hidden mb-2">
                  <Image src="/image/terlaris1.png" alt="Buku Dasar Cyber Security" fill className="object-cover" />
                </div>
                <div className="text-[10px] text-orange-500 mb-1">★★★★★</div>
                <div className="text-xs text-gray-700 line-clamp-3 leading-snug mb-2">
                  Buku Dasar Cyber Security dan Forensic
                </div>
              </div>
              <div className="mt-2 text-xs">
                <span className="line-through text-gray-400 mr-1.5">Rp 165.000</span>
                <span className="text-red-600">Rp 140.250</span>
              </div>
            </div>

            <div className="flex flex-col justify-between border border-gray-100 rounded-xl p-3 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="w-full aspect-[3/4] relative rounded-lg overflow-hidden mb-2">
                  <Image src="/image/terlaris2.webp" alt="Buku Kemahiran Hukum" fill className="object-cover" />
                </div>
                <div className="text-[10px] text-orange-500 mb-1">★★★★★</div>
                <div className="text-xs text-gray-700 line-clamp-3 leading-snug mb-2">
                  Buku Seri Kemahiran Hukum: Terampil Menangani Perkara Perdata
                </div>
              </div>
              <div className="mt-2 text-xs">
                <span className="line-through text-gray-400 mr-1.5">Rp 153.000</span>
                <span className="text-red-600">Rp 130.050</span>
              </div>
            </div>

            <div className="flex flex-col justify-between border border-gray-100 rounded-xl p-3 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="w-full aspect-[3/4] relative rounded-lg overflow-hidden mb-2">
                  <Image src="/image/terlaris3.jpg" alt="Buku Dasar AutoCAD" fill className="object-cover" />
                </div>
                <div className="text-[10px] text-orange-500 mb-1">★★★★★</div>
                <div className="text-xs text-gray-700 line-clamp-3 leading-snug mb-2">
                  Dasar AutoCAD 2D
                </div>
              </div>
              <div className="mt-2 text-xs">
                <span className="line-through text-gray-400 mr-1.5">Rp 58.000</span>
                <span className="text-red-600">Rp 49.300</span>
              </div>
            </div>

            <div className="flex flex-col justify-between border border-gray-100 rounded-xl p-3 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="w-full aspect-[3/4] relative rounded-lg overflow-hidden mb-2">
                  <Image src="/image/terlaris4.jpg" alt="Buku Pabrik Kimia" fill className="object-cover" />
                </div>
                <div className="text-[10px] text-orange-500 mb-1">★★★★★</div>
                <div className="text-xs text-gray-700 line-clamp-3 leading-snug mb-2">
                  Perancangan Proses dan Pabrik Kimia
                </div>
              </div>
              <div className="mt-2 text-xs">
                <span className="line-through text-gray-400 mr-1.5">Rp 385.000</span>
                <span className="text-red-600">Rp 327.250</span>
              </div>
            </div>

            <div className="flex flex-col justify-between border border-gray-100 rounded-xl p-3 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="w-full aspect-[3/4] relative rounded-lg overflow-hidden mb-2">
                  <Image src="/image/terlaris5.jpg" alt="Buku Peradilan Agama" fill className="object-cover" />
                </div>
                <div className="text-[10px] text-orange-500 mb-1">★★★★★</div>
                <div className="text-xs text-gray-700 line-clamp-3 leading-snug mb-2">
                  Garis Besar Hukum Formil Peradilan Agama
                </div>
              </div>
              <div className="mt-2 text-xs">
                <span className="line-through text-gray-400 mr-1.5">Rp 178.000</span>
                <span className="text-red-600">Rp 151.300</span>
              </div>
            </div>

            <div className="flex flex-col justify-between border border-gray-100 rounded-xl p-3 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="w-full aspect-[3/4] relative rounded-lg overflow-hidden mb-2">
                  <Image src="/image/terlaris6.jpg" alt="Buku English Grammar" fill className="object-cover" />
                </div>
                <div className="text-[10px] text-orange-500 mb-1">★★★★★</div>
                <div className="text-xs text-gray-700 line-clamp-3 leading-snug mb-2">
                  English Grammar (Pre-Intermediate)
                </div>
              </div>
              <div className="mt-2 text-xs">
                <span className="line-through text-gray-400 mr-1.5">Rp 87.000</span>
                <span className="text-red-600">Rp 73.950</span>
              </div>
            </div>

          </div>
        </div>

        <div>
          <div className="flex justify-between items-end mb-1">
            <div className="text-2xl text-red-700 tracking-tight">
              Buku Teknologi Best Seller
            </div>
            <div className="text-xs text-red-600 hover:underline cursor-pointer tracking-wider">SEE MORE</div>
          </div>
          <div className="text-sm text-gray-600 mb-6">
            Diskon hingga 15% Pembelian via <span className="text-gray-800">Website</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            
            <div className="flex flex-col justify-between border border-gray-100 rounded-xl p-3 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="w-full aspect-[3/4] relative rounded-lg overflow-hidden mb-3">
                  <Image src="/image/buku.jpg" alt="Buku Aplikasi IoT" fill className="object-cover" />
                </div>
                <div className="text-xs text-gray-700 line-clamp-3 leading-snug mb-2">
                  Buku Aplikasi Internet of Things (IoT) dengan ARDUINO dan ANDROID “Membangun Smart Home dan Smart Robot berbasis Arduino dan Android”
                </div>
              </div>
              <div className="mt-2 text-xs">
                <span className="line-through text-gray-400 mr-1.5">Rp 72.000</span>
                <span className="text-red-600">Rp 61.200</span>
              </div>
            </div>

            <div className="flex flex-col justify-between border border-gray-100 rounded-xl p-3 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="w-full aspect-[3/4] relative rounded-lg overflow-hidden mb-3">
                  <Image src="/image/buku2.webp" alt="Buku ChatGPT" fill className="object-cover" />
                </div>
                <div className="text-xs text-gray-700 line-clamp-3 leading-snug mb-2">
                  Buku Pemanfaatan Chatgpt dan Tools Ai untuk Mendukung Studi dan Pekerjaan
                </div>
              </div>
              <div className="mt-2 text-xs">
                <span className="line-through text-gray-400 mr-1.5">Rp 269.000</span>
                <span className="text-red-600">Rp 228.650</span>
              </div>
            </div>

            <div className="flex flex-col justify-between border border-gray-100 rounded-xl p-3 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="w-full aspect-[3/4] relative rounded-lg overflow-hidden mb-3">
                  <Image src="/image/buku3.webp" alt="Buku IoT dan Aplikasinya" fill className="object-cover" />
                </div>
                <div className="text-xs text-gray-700 line-clamp-3 leading-snug mb-2">
                  Buku Internet Of Things dan Aplikasinya
                </div>
              </div>
              <div className="mt-2 text-xs">
                <span className="line-through text-gray-400 mr-1.5">Rp 100.000</span>
                <span className="text-red-600">Rp 85.000</span>
              </div>
            </div>

            <div className="flex flex-col justify-between border border-gray-100 rounded-xl p-3 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="w-full aspect-[3/4] relative rounded-lg overflow-hidden mb-3">
                  <Image src="/image/buku4.webp" alt="Buku Sistem Operasi" fill className="object-cover" />
                </div>
                <div className="text-xs text-gray-700 line-clamp-3 leading-snug mb-2">
                  Buku Sistem Operasi Algoritma Penjadwalan CPU
                </div>
              </div>
              <div className="mt-2 text-xs">
                <span className="line-through text-gray-400 mr-1.5">Rp 141.000</span>
                <span className="text-red-600">Rp 119.850</span>
              </div>
            </div>

            <div className="flex flex-col justify-between border border-gray-100 rounded-xl p-3 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="w-full aspect-[3/4] relative rounded-lg overflow-hidden mb-3">
                  <Image src="/image/buku5.webp" alt="Buku SAP2000" fill className="object-cover" />
                </div>
                <div className="text-xs text-gray-700 line-clamp-3 leading-snug mb-2">
                  Buku Ajar Komputer Terapan SAP2000 untuk Program Vokasi dan Terapan
                </div>
              </div>
              <div className="mt-2 text-xs">
                <span className="line-through text-gray-400 mr-1.5">Rp 245.000</span>
                <span className="text-red-600">Rp 208.250</span>
              </div>
            </div>

            <div className="flex flex-col justify-between border border-gray-100 rounded-xl p-3 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="w-full aspect-[3/4] relative rounded-lg overflow-hidden mb-3">
                  <Image src="/image/buku6.webp" alt="Buku Multimedia IoT" fill className="object-cover" />
                </div>
                <div className="text-xs text-gray-700 line-clamp-3 leading-snug mb-2">
                  Buku Multimedia Internet of Things (M-IoT)
                </div>
              </div>
              <div className="mt-2 text-xs">
                <span className="line-through text-gray-400 mr-1.5">Rp 465.000</span>
                <span className="text-red-600">Rp 395.250</span>
              </div>
            </div>

          </div>
        </div>

        <div className="relative py-8">
          <button 
            aria-label="Previous Press" 
            className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-600 text-3xl z-10 hidden sm:block"
          >
            ‹
          </button>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center px-8">
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-28 h-28">
                <Image src="/image/UGM-Press.jpg" alt="UGM Press" fill className="object-contain" />
              </div>
              <span className="text-xs text-gray-600 font-medium">UGM Press</span>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="relative w-28 h-28">
                <Image src="/image/uii-press.jpg" alt="UII Press" fill className="object-contain" />
              </div>
              <span className="text-xs text-gray-600 font-medium">UII Press</span>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="relative w-28 h-28">
                <Image src="/image/umy-press.jpg" alt="UAD Press" fill className="object-contain" />
              </div>
              <span className="text-xs text-gray-600 font-medium">uad Press</span>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="relative w-28 h-28">
                <Image src="/image/umy.jpg" alt="UMY Press" fill className="object-contain" />
              </div>
              <span className="text-xs text-gray-600 font-medium">UMY Press</span>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="relative w-28 h-28">
                <Image src="/image/soepraoen-press.webp" alt="Soepraoen Press" fill className="object-contain" />
              </div>
              <span className="text-xs text-gray-600 font-medium">Soepraoen Press</span>
            </div>
          </div>

          <button 
            aria-label="Next Press" 
            className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-600 text-3xl z-10 hidden sm:block"
          >
            ›
          </button>

          <div className="flex justify-center items-center gap-2 mt-8">
            <span className="w-2 h-2 rounded-full bg-black cursor-pointer"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 cursor-pointer"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 cursor-pointer"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 cursor-pointer"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 cursor-pointer"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 cursor-pointer"></span>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-red-700 tracking-tight mb-6">
            Event Deepublish Store
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="flex flex-col justify-between">
              <div>
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
                  <Image 
                    src="/image/event1.webp" 
                    alt="Event Goes To Campus" 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <h3 className="font-bold text-gray-800 text-base leading-snug mb-2 hover:text-red-600 cursor-pointer transition-colors">
                  Perkuat Budaya Literasi, Deepublish Store Goes To Campus Angkat Tema “Grow Before You Go”
                </h3>
                <p className="text-xs text-gray-400 mb-4">
                  Maret 6, 2026 /// Maret 6, 2026
                </p>
              </div>
              <a href="#" className="text-xs font-semibold text-gray-800 hover:text-red-600 transition-colors">
                Read More »
              </a>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
                  <Image 
                    src="/image/event2.webp" 
                    alt="Event Beasiswa LPDP" 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <h3 className="font-bold text-gray-800 text-base leading-snug mb-2 hover:text-red-600 cursor-pointer transition-colors">
                  Investasi Diri Menuju Generasi Emas: Deepublish Store Hadirkan Direktur Beasiswa LPDP dalam Puncak HUT 16 Tahun
                </h3>
                <p className="text-xs text-gray-400 mb-4">
                  Maret 13, 2026 /// Maret 13, 2026
                </p>
              </div>
              <a href="#" className="text-xs font-semibold text-gray-800 hover:text-red-600 transition-colors">
                Read More »
              </a>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
                  <Image 
                    src="/image/event3.webp" 
                    alt="Event Diskusi Pustaka UNU" 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <h3 className="font-bold text-gray-800 text-base leading-snug mb-2 hover:text-red-600 cursor-pointer transition-colors">
                  Deepublish Store dan UPT Perpustakaan UNU Yogyakarta Bersinergi dalam Diskusi Pustaka Indonesia: Membangun Perpustakaan yang Relevan Lewat Digital Marketing
                </h3>
                <p className="text-xs text-gray-400 mb-4">
                  Maret 13, 2026 /// Maret 13, 2026
                </p>
              </div>
              <a href="#" className="text-xs font-semibold text-gray-800 hover:text-red-600 transition-colors">
                Read More »
              </a>
            </div>

          </div>
        </div>

        <div className="pt-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Apakah Kamu Butuh Buku Referensi Kuliah?
            </h2>
            <p className="text-sm text-gray-600">
              Dapatkan buku kuliah terbaik dan terlengkap dengan harga paling pas di kantong mahasiswa hanya di <span className="font-semibold text-gray-800">Deepublish Store</span>
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 mb-8">
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="flex justify-between items-center p-4 bg-white font-bold text-sm text-gray-800 cursor-pointer">
                <span>Deepublish Store Menjual Buku Apa Saja?</span>
                <span className="text-lg font-normal">−</span>
              </div>
              <div className="px-4 pb-4 bg-white text-xs text-gray-600 leading-relaxed">
                Toko Buku Online Deepublish menjual berbagai jenis buku. Mulai buku fiksi, non fiksi, buku kuliah, buku agama, buku filsafat, buku kedokteran dan buku penunjang lainnya.
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center bg-white font-bold text-sm text-gray-800 cursor-pointer">
              <span>Apakah Ada Promo?</span>
              <span className="text-lg font-normal">+</span>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center bg-white font-bold text-sm text-gray-800 cursor-pointer">
              <span>Apa Kelebihan Beli Buku di Deepublish?</span>
              <span className="text-lg font-normal">+</span>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center bg-white font-bold text-sm text-gray-800 cursor-pointer">
              <span>Deepublish Store, Toko Buku Online Terlengkap dan Pusatnya Buku Kuliah di Indonesia</span>
              <span className="text-lg font-normal">+</span>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center bg-white font-bold text-sm text-gray-800 cursor-pointer">
              <span>Buku yang Dijual di Deepublish Store</span>
              <span className="text-lg font-normal">+</span>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center bg-white font-bold text-sm text-gray-800 cursor-pointer">
              <span>Manfaat Membaca Buku</span>
              <span className="text-lg font-normal">+</span>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center bg-white font-bold text-sm text-gray-800 cursor-pointer">
              <span>Cara Merawat Buku</span>
              <span className="text-lg font-normal">+</span>
            </div>

          </div>

          <div className="text-center space-y-3 mb-16">
            <p className="text-xs text-gray-600">
              Yuk, beli buku kuliahmu supaya jadi mahasiswa berprestasi
            </p>
            <p className="text-sm font-bold italic text-gray-800">
              Deepublish Store, Pusatnya Buku Kuliah.
            </p>
            <div className="pt-2">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase px-6 py-3 rounded-full transition-colors shadow-sm">
                LIHAT BUKU BEST SELLER
              </button>
            </div>
          </div>

          <div className="space-y-4 max-w-5xl mx-auto text-xs text-gray-600 leading-relaxed">
            <h3 className="text-xl font-bold text-gray-800">
              Dimana Beli Buku Online? Di Deepublish Store
            </h3>

            <p>
              Malas harus pergi ke toko buku? Hari serba canggih! Kamu tidak perlu pergi keluar rumah, ataupun tak perlu lagi menghabiskan bensin dan menghabiskan waktu. Cukup duduk manis di depan smartphone ataupun laptop kamu. Dan kamu bisa berbelanja apa saja di sana. Salah satunya adalah berbelanja buku-buku kuliah.
            </p>

            <p>
              Dimana beli buku online? Deepublish store jawabannya. Cukup scroll toko buku online, kamu akan menemukan banyak koleksi buku. Di sana kamu tidak hanya menemukan buku pendidikan saja loh. Tetapi juga menemukan banyak buku seperti self improvement, buku motivasi, buku biografi, buku pengayaan, buku ilmiah, hingga buku fiksi seperti novel.
            </p>

            <p>
              Pokoknya deepublish store adalah toko buku online terlengkap, menarik karena selalu ada promo harga tiap bulannya. Tidak habis sampai disitu, di deepublish store juga selalu menyuguhkan buku-buku terbaru, terlengkap, eksklusif.
            </p>

            <p>
              Kenapa buku-buku deepublish store eksklusif? Karena setiap buku yang diterbitkan ditulis langsung oleh penulis yang berkompeten. Selain itu, buku terbitan deepublish hanya dijual oleh deepublish store dan anggota reseller saja. Sehingga tidak ditemukan di toko buku.
            </p>

            <div className="pt-2">
              <button className="flex items-center gap-1 text-xs font-semibold text-gray-800 hover:text-red-600 transition-colors">
                <span className="text-[10px]">▶</span> Tampilkan Lebih Banyak
              </button>
            </div>
          </div>
        </div>

      </div>

      <footer className="mt-16 border-t border-gray-100 bg-white pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-xs text-gray-700">
            
            <div className="space-y-6">
              <div>
                <Image
                  src="/image/logo.png"
                  alt="Deepublish Store"
                  width={150}
                  height={45}
                  className="h-10 w-auto object-contain mb-3"
                />
                <p className="text-gray-600 leading-relaxed">
                  Deepublish Store adalah toko buku online dengan berbagai pilihan buku kuliah berkualitas dan terlengkap.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 uppercase tracking-wide mb-3">IKUTI KAMI</h4>
                <div className="flex items-center gap-3 text-gray-800">
                  <a href="#" className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="#" className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="#" className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="#" className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  </a>
                </div>
                <p className="text-[11px] text-gray-500 mt-2">
                  © 2026 All Right Reserved. Toko Buku Deepublish - CV. Budi Utama
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 uppercase tracking-wide mb-2">JAM PELAYANAN</h4>
                <p className="font-semibold text-gray-800">Senin - Jumat pukul 08.00 - 17.00 WIB</p>
                <p className="text-[11px] text-gray-500">(Pesan Sabtu/Minggu akan diproses Hari Senin)</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-900 uppercase tracking-wide mb-3">LAYANAN</h4>
                <ul className="space-y-1.5 text-gray-600">
                  <li className="hover:text-red-600 cursor-pointer">· Menerbitkan Buku</li>
                  <li className="hover:text-red-600 cursor-pointer">· Pengadaan Buku</li>
                  <li className="hover:text-red-600 cursor-pointer">· Afiliasi Buku</li>
                  <li className="hover:text-red-600 cursor-pointer">· Reseller Buku</li>
                  <li className="hover:text-red-600 cursor-pointer">· Ebook Bisnis [Free]</li>
                  <li className="hover:text-red-600 cursor-pointer">· Katalog Buku</li>
                  <li className="hover:text-red-600 cursor-pointer">· Mitra Toko</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 uppercase tracking-wide mb-2">ALAMAT</h4>
                <p className="text-gray-600 leading-relaxed">
                  Jl.Rajawali G. Elang 6 No 3 RT/RW 005/033, Drono, Sardonoharjo, Ngaglik, Sleman, D.I Yogyakarta 55581
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 uppercase tracking-wide mb-2">KONTAK KAMI</h4>
                <ul className="space-y-1 text-gray-600">
                  <li className="flex items-center gap-1.5">
                    <span>💬</span> CS Pembelian Retail : <a href="https://wa.me/6281519897193" className="hover:underline">0815-1989-7193 (WA)</a>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span>💬</span> CS Marketplace : <a href="https://wa.me/628112845901" className="hover:underline">0811-2845-901 (WA)</a>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span>💬</span> CS Reseller 1 : <a href="https://wa.me/6285878188344" className="hover:underline">0858-7818-8344 (WA)</a>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span>💬</span> CS Pengadaan Buku 1 : <a href="https://wa.me/6281286304188" className="hover:underline">0812-8630-4188 (WA)</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-900 uppercase tracking-wide mb-3">BELANJA</h4>
                <ul className="space-y-1.5 text-gray-600">
                  <li className="hover:text-red-600 cursor-pointer">· Testimoni</li>
                  <li className="hover:text-red-600 cursor-pointer">· Informasi</li>
                  <li className="hover:text-red-600 cursor-pointer">· Cara Belanja</li>
                  <li className="hover:text-red-600 cursor-pointer">· Cara Bayar</li>
                  <li className="hover:text-red-600 cursor-pointer">· Proses Pengiriman</li>
                  <li className="hover:text-red-600 cursor-pointer text-orange-500 font-semibold">· PROMO ⚡</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 uppercase tracking-wide mb-3">TENTANG KAMI</h4>
                <ul className="space-y-1.5 text-gray-600">
                  <li className="hover:text-red-600 cursor-pointer">· FAQ</li>
                  <li className="hover:text-red-600 cursor-pointer">· About Us</li>
                  <li className="hover:text-red-600 cursor-pointer text-blue-600 font-semibold">· EVENT PENTING 🚀</li>
                  <li className="hover:text-red-600 cursor-pointer">· Testimoni</li>
                  <li className="hover:text-red-600 cursor-pointer">· Buletin</li>
                  <li className="hover:text-red-600 cursor-pointer">· Tentang Kami</li>
                  <li className="hover:text-red-600 cursor-pointer">· Ajukan Partnership</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-900 uppercase tracking-wide mb-3">MARKETPLACE</h4>
                <div className="flex flex-wrap gap-2 items-center">
                  <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                    S
                  </div>
                  <div className="w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-[10px] shadow-sm">
                    Laz
                  </div>
                  <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[10px] shadow-sm">
                    Bli
                  </div>
                  <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs shadow-sm">
                    🎵
                  </div>
                  <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                    🦉
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 uppercase tracking-wide mb-3">PEMBAYARAN</h4>
                <div className="flex flex-wrap gap-2 items-center text-[10px] font-bold text-blue-900">
                  <span className="px-2 py-1 bg-gray-100 rounded border border-gray-200">BCA</span>
                  <span className="px-2 py-1 bg-gray-100 rounded border border-gray-200 text-blue-500">Danamon</span>
                  <span className="px-2 py-1 bg-gray-100 rounded border border-gray-200 text-blue-700">BANK BRI</span>
                  <span className="px-2 py-1 bg-gray-100 rounded border border-gray-200 text-red-600">QRIS</span>
                  <span className="px-2 py-1 bg-gray-100 rounded border border-gray-200 text-blue-800">mandiri</span>
                  <span className="px-2 py-1 bg-gray-100 rounded border border-gray-200 text-orange-600">BNI</span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 uppercase tracking-wide mb-3">PENGIRIMAN</h4>
                <div className="flex flex-wrap gap-2 items-center text-[10px] font-bold italic">
                  <span className="px-2 py-1 bg-blue-600 text-white rounded">Wahana</span>
                  <span className="px-2 py-1 bg-red-600 text-white rounded">JNE</span>
                  <span className="px-2 py-1 bg-red-700 text-white rounded">J&T Express</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="bg-red-700 text-white text-center py-3 text-xs font-semibold tracking-wide">
          © 2026 Deepublish Store - Deepublish. All rights reserved.
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-emerald-500 text-white px-3 py-2 rounded-full shadow-lg cursor-pointer hover:bg-emerald-600 transition-colors text-xs">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
        <span>Hubungi Admin</span>
      </div>

    </div>
  );
}