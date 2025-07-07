import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">42Law Austria</h1>
        <nav className="space-x-4">
          <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link  href="/about" className="text-gray-700 hover:text-blue-500">About</Link>
          <Link  href="/pricing" className="text-gray-700 hover:text-blue-500">Pricing</Link>
          <Link  href="/services" className="text-gray-700 hover:text-blue-500">Services</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
