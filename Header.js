import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-8 bg-gradient-to-r from-emerald-800 to-yellow-200 shadow-lg">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <Image
          src="/images/logo_tmzo.png"
          alt="لوگو تمنای ظهور"
          width={50}
          height={50}
          className="rounded-full border-2 border-yellow-300"
        />
        <h1 className="text-2xl font-bold text-emerald-900 font-COLAK">
          تمنای ظهور - سفیدشهر
        </h1>
      </div>
      <nav className="hidden md:flex space-x-8 rtl:space-x-reverse text-emerald-800 font-semibold">
        <a href="#home" className="hover:text-yellow-500">
          خانه
        </a>
        <a href="#works" className="hover:text-yellow-500">
          آثار
        </a>
        <a href="#about" className="hover:text-yellow-500">
          درباره ما
        </a>
        <a href="#events" className="hover:text-yellow-500">
          رویدادها
        </a>
        <a href="#contact" className="hover:text-yellow-500">
          تماس با ما
        </a>
      </nav>
    </header>
  );
}