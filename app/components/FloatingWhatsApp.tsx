"use client";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/917015665848"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden lg:flex fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full items-center justify-center shadow-2xl hover:bg-[#20ba5a] transition-all whatsapp-btn-pulse overflow-visible select-none"
      aria-label="Chat on WhatsApp"
    >
      {/* Exact FontAwesome WhatsApp brand icon class provided by you */}
      <i className="fa-brands fa-whatsapp text-4xl text-white"></i>
    </a>
  );
}
