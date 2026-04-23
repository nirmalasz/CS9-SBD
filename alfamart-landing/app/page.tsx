import Image from "next/image";
import SliderPromo from "@/components/SliderPromo";
import React from "react";
import { Phone, MessageCircle, Mail } from "lucide-react";
const beritaData = [
  {
    id: 1,
    date: "05/02/2026",
    title: "Laporan Penyaluran Sedekah Konsumen - Oktober 2025",
    image:
      "https://alfamart.co.id/storage/page/February2026/pPYZty1s99If89CWh6Sk.jpg",
  },
  {
    id: 2,
    date: "04/02/2026",
    title:
      "Alfamart Kini Punya 100 UCollect Box, Setor Minyak Jelantah Kini Makin ...",
    image:
      "https://alfamart.co.id/storage/page/February2026/nYwicrzcrMZaJaN3Rjcp.jpg",
  },
  {
    id: 3,
    date: "04/02/2026",
    title:
      "Alfamart Perkuat Intervensi Gizi Anak pada 2026 dengan 510.000 Butir Telur",
    image:
      "https://alfamart.co.id/storage/page/February2026/fjdcUtQdplw1wDRzVkle.jpg",
  },
  {
    id: 4,
    date: "30/12/2025",
    title:
      "Percepat Bantuan untuk Sumatera, Alfamart Distribusikan Bantuan ...",
    image:
      "https://alfamart.co.id/storage/page/December2025/P9DFfZD8lQSbgHGZBmVP.JPG",
  },
];


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src="https://alfamart.co.id/frontend/img/brand/logo_alfamart_transparent.png"
                alt="Alfamart Logo"
                className="h-10 w-auto"
              />
            </a>
          </div>
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex gap-8 font-semibold text-black">
              <a href="#" className="hover:text-[#BB1724] transition-colors">
                Promo & Program
              </a>
              <a href="#" className="hover:text-[#BB1724] transition-colors">
                Keanggotaan
              </a>
              <a href="#" className="hover:text-[#BB1724] transition-colors">
                Produk & Layanan Digital
              </a>
              <a href="#" className="hover:text-[#BB1724] transition-colors">
                Berita
              </a>
              <a href="#" className="hover:text-[#BB1724] transition-colors">
                Corporate
              </a>
            </nav>

            {/* Search/Magnify Glass Icon */}
            <div className="text-black hover:text-[#BB1724] cursor-pointer">
              <svg
                xmlns="http://w3.org"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </div>
        </div>
        {/*stripe */}
        <div className="h-2 bg-[#BB1724]"></div>
        <div className="h-1 bg-[#FAD400]"></div>
      </header>
      <main className="flex flex-col items-center justify-center py-5">
        <SliderPromo />
      </main>
      {/*layanan */}
      <section className="py-12 bg-[#F0F3F7]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-2xl font-semibold mb-12">
            Produk dan Layanan Alfamart
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Top Up Uang Elektronik",
                desc: "Bayar tagihan atau top-up uang elektronik-mu di Alfamart",
                svg: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-12 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                ),
              },
              {
                title: "Pembayaran Tagihan",
                desc: "Bayar tagihan belanja, sekolah, asuransi, kredit, air, listrik, dan segala jenis tagihan di Alfamart",
                svg: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-12 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                    />
                  </svg>
                ),
              },
              {
                title: "Pembelian Voucher",
                desc: "Belanja voucher game, layanan streaming, dan musik favoritmu hanya di Alfamart",
                svg: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-12 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                    />
                  </svg>
                ),
              },
              {
                title: "Pembelian Tiket Online",
                desc: "Beli tiket pesawat, bus & travel, hiburan, hotel, dan kereta api melalui Alfamart",
                svg: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-12 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                    />
                  </svg>
                ),
              },
              {
                title: "Transfer Dana",
                desc: "Transfer uang ke berbagai bank nasional dan internasional dengan mudah melalui Alfamart",
                svg: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-12 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                    />
                  </svg>
                ),
              },
              {
                title: "Belanja Produk Online",
                desc: "Belanja produk online dengan AlfaGift - langsung diantar ke rumah",
                svg: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-12 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-md p-8 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-24 h-24 bg-[#BB1724] rounded-full flex-shrink-0">
                  <div className="w-24 h-24 flex items-center justify-center">
                    {item.svg}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-black leading-tight hover:text-[#245AB2]">
                    {item.title}
                  </h3>

                  {/* Strip Biru */}
                  <div className="h-[3px] w-12 bg-[#245AB2]"></div>

                  <p className="text-[13px] text-gray-600 leading-relaxed mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*berita*/}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-black">Ruang Berita</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {beritaData.map((berita) => (
              <div key={berita.id} className="group cursor-pointer">
                <div className="relative h-48 w-full bg-gray-200 rounded-xl overflow-hidden mb-4">
                  <img
                    src={berita.image}
                    alt={berita.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-gray-700 mb-2">{berita.date}</p>
                <h3 className="text-[12px] font-medium leading-snug mb-1.5 text-gray-800 line-clamp-3 h-14">
                  {berita.title}
                </h3>
                <button className="text-[#BB1724] hover:text-[#96121D] font-bold text-[14px] transition-colors">
                  Baca Selengkapnya
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <button className="bg-[#FAD400] hover:bg-[#F0C800] px-10 py-3 rounded-full font-bold text-gray-900 shadow-sm transition-all active:scale-95">
              Baca Berita Terbaru Lainnya
            </button>
          </div>
        </div>
      </section>
      {/*promo*/}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-[#F0F3F7] rounded-2xl p-10 flex flex-col md:flex-row items-center gap-12 shadow-sm border border-gray-100">
            <div className="relative w-full md:w-1/2 flex justify-center">
              <div className="w-full md:w-1/2 flex justify-center items-center">
                <img
                  src="/hadiah.png"
                  alt="Hadiah Undian Alfamart"
                  width={600}
                  height={500}
                  className="h-auto w-full max-w-[800px] object-contain"
                />
              </div>
              <div className="absolute -z-10 w-48 h-48 bg-orange-400 rounded-full blur-3xl opacity-20"></div>
            </div>

            <div className="flex-1 w-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Cek Pengumuman Pemenang Undian Disini!
              </h2>
              <p className="text-gray-800 text-[12px] mb-4 leading-relaxed">
                Apakah kamu yang beruntung memenangkan salah satu program undian
                di Alfamart? Silahkan di cek ya!
              </p>

              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-gray-700 ml-1">
                    Kode Kupon
                  </label>
                  <input
                    type="text"
                    className="w-full border-2 border-gray-300 rounded-2xl px-5 py-3 focus:outline-none focus:border-[#245AB2] transition-colors"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button className="bg-[#FAD400] hover:bg-[#e6c200] transition-all px-10 py-3 rounded-full font-bold text-gray-800 shadow-md active:scale-95">
                    Cek Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#BB1724] text-white pt-12 pb-6 mt-auto font-sans">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* 1. Logo & Address*/}
          <div className="md:col-span-3">
            <img
              src="https://alfamart.co.id/frontend/img/brand/logo_alfamart_white.png"
              alt="Alfamart Logo"
              className="h-10 mb-6 brightness-0 invert"
            />
            <div className="space-y-1 text-[13px] leading-relaxed">
              <p className="font-bold">PT Sumber Alfaria Trijaya, Tbk</p>
              <p className="font-bold mt-2">Kantor Pusat</p>
              <p>Alfa Tower 12th Floor</p>
              <p>Jl. Jalur Sutera Barat Kav. 9</p>
              <p>Kota Tangerang, Banten 15143</p>
            </div>
            <p className="text-[10px] mt-10 opacity-70">
              Designed by Nirmala Sari
            </p>
          </div>

          {/* 2. Hubungi Kami */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-bold mb-4">Hubungi Kami</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone size={16} />
                </div>
                <div className="text-[12px]">
                  <p>Layanan Pelanggan</p>
                  <p className="font-bold">1500 280</p>
                </div>
              </div>
              <div className="h-[2px] bg-[#FAD400] w-full"></div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle size={16} />
                </div>
                <div className="text-[12px]">
                  <p>WhatsApp</p>
                  <p className="font-bold">0867 6767 6767</p>
                </div>
              </div>
              <div className="h-[2px] bg-[#FAD400] w-full"></div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail size={16} />
                </div>
                <div className="text-[12px]">
                  <p>Email</p>
                  <p className="font-bold">kontak@alfamart.co.id</p>
                </div>
              </div>
              <div className="h-[2px] bg-[#FAD400] w-full"></div>
            </div>
          </div>

          {/* 3. Media Sosial & Aplikasi*/}
          <div className="md:col-span-6">
            {/* Media Sosial Section */}
            <div>
              <h3 className="text-lg font-bold mb-4">Media Sosial</h3>
              {/* Grid 2 kolom yang langsung membungkus semua item */}
              <div className="grid grid-cols-2 gap-x-2 gap-y-3">
                {/* Facebook */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <span className="text-[12px] font-medium leading-none">
                    Alfamart
                  </span>
                </div>

                {/* Twitter/X */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.25 2.25h6.634l4.704 6.22z" />
                    </svg>
                  </div>
                  <span className="text-[12px] font-medium leading-none">
                    Alfamart
                  </span>
                </div>

                {/* Instagram */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 fill-none stroke-white"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                  <span className="text-[12px] font-medium leading-none">
                    @alfamart 
                  </span>
                </div>

                {/* Youtube */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  <span className="text-[12px] font-medium leading-none">
                    @alfamartofficial
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Aplikasi Alfamart</h3>
                <div className="bg-white rounded-lg p-2 w-32">
                  <img
                    src="https://static-content.alfagift.id/static/logo-alfagift.png"
                    alt="Alfagift"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">
                  Berlangganan newsletter Alfamart
                </h3>
                <div className="flex items-center bg-[#8B111B] rounded-[5px] overflow-hidden">
                  <input
                    type="text"
                    className="bg-transparent flex-1 px-3 py-2 text-sm outline-none placeholder-white/50"
                  />
                  <button className="bg-[#FAD400] text-white px-4 py-2 font-bold">
                    GO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
