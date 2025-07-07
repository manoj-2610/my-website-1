import Link from "next/link"

const Pricing = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-10">Transparent Pricing for Austrian Startups</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Starter Plan */}
        <div className="border rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-blue-600 mb-2">Starter</h2>
          <p className="text-gray-700 mb-4">€99 / month</p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Company formation</li>
            <li>Basic founder agreements</li>
            <li>1 consultation / month</li>
            <li>Email support</li>
          </ul>
        </div>

        {/* Growth Plan */}
        <div className="border rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-blue-600 mb-2">Growth</h2>
          <p className="text-gray-700 mb-4">€199 / month</p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>All Starter features</li>
            <li>Custom employment & contractor contracts</li>
            <li>2 consultations / month</li>
            <li>GDPR compliance guidance</li>
          </ul>
        </div>

        {/* Scale Plan */}
        <div className="border rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-blue-600 mb-2">Scale</h2>
          <p className="text-gray-700 mb-4">€499 / month</p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>All Growth features</li>
            <li>Dedicated legal advisor</li>
            <li>Priority support (24h)</li>
            <li>Startup due diligence package</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10">
        <p className="text-sm text-gray-500">
          All prices exclude VAT. Want a custom quote? <Link href="/contact" className="text-blue-600 underline">Contact us</Link>.
        </p>
      </div>
    </div>
  )
}

export default Pricing
