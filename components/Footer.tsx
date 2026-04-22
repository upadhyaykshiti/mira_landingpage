// export default function Footer() {
//   return (
//     <footer className="border-t border-white/10 px-6 md:px-20 py-8 flex justify-between text-sm text-white/40">
//       <span>Mira</span>
//       <span>© 2025</span>
//     </footer>
//   );
// }




export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 md:px-20 py-10 flex flex-wrap items-center justify-between gap-5">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-[22px] h-[22px] bg-primary rounded-full flex items-center justify-center">
          <span className="text-[10px] text-black font-bold font-sans">
            M
          </span>
        </div>
        <span className="text-[15px] tracking-[-0.01em]">
          Mira
        </span>
      </div>

      {/* Text */}
      <p className="text-[12px] text-white/30 font-sans">
        © 2025 Mira Inc. · Privacy · Terms · Contact
      </p>
    </footer>
  );
}