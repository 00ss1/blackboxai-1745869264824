import React from 'react';

function App() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <img
          src="https://webobjects2.cdw.com/is/image/CDW/cdw-homepage-defender-security-mobile-hero-1200"
          alt="IT specialist working on a laptop in a data center"
          className="w-full h-96 object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold max-w-4xl">
            Amazing happens when deeply integrated security gives you more visibility into threats.
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            CDW’s Managed Security Services for Defender XDR & Sentinel provide real-time attack detection, expert-led response and advanced threat containment.
          </p>
          <a
            href="/content/cdw/en/brand/microsoft-modern-work/microsoft-security-solutions.html"
            className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition"
          >
            Explore Managed Security
          </a>
        </div>
      </section>

      {/* Why Work with CDW Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Why Work with CDW?</h2>
        <p className="text-center max-w-3xl mx-auto mb-12 text-lg">
          We bring together the services and technologies that solve your business problems.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <img
              src="https://webobjects2.cdw.com/is/content/CDW/cdw/on-domain-cdw/cdw-branded/homepage/experience-expertise-icon-148.svg"
              alt="Experience & Expertise"
              className="mx-auto mb-4"
              width="72"
              height="72"
            />
            <h3 className="text-xl font-semibold">Expertise & Experience</h3>
          </div>
          <div>
            <img
              src="https://webobjects2.cdw.com/is/content/CDW/cdw/on-domain-cdw/cdw-branded/homepage/industry-leading-partnerships-icon-148.svg"
              alt="Industry Leading Partnerships"
              className="mx-auto mb-4"
              width="72"
              height="72"
            />
            <h3 className="text-xl font-semibold">Industry-Leading Partnerships</h3>
          </div>
          <div>
            <img
              src="https://webobjects2.cdw.com/is/content/CDW/cdw/on-domain-cdw/cdw-branded/homepage/end-to-end-support-icon-148.svg"
              alt="End-to-End Support"
              className="mx-auto mb-4"
              width="72"
              height="72"
            />
            <h3 className="text-xl font-semibold">End-to-End Support</h3>
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href="/accountcenter/logon/newaccount?"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded transition"
          >
            Create An Account
          </a>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-gray-50 py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Industries we solve for:</h2>
        <ul className="flex flex-wrap justify-center gap-6 text-lg font-medium text-gray-700 max-w-4xl mx-auto">
          <li className="px-4 py-2 bg-white rounded shadow hover:shadow-lg transition cursor-pointer">Enterprise</li>
          <li className="px-4 py-2 bg-white rounded shadow hover:shadow-lg transition cursor-pointer">Finance</li>
          <li className="px-4 py-2 bg-white rounded shadow hover:shadow-lg transition cursor-pointer">Government</li>
          <li className="px-4 py-2 bg-white rounded shadow hover:shadow-lg transition cursor-pointer">Retail</li>
          <li className="px-4 py-2 bg-white rounded shadow hover:shadow-lg transition cursor-pointer">Small Business</li>
        </ul>
      </section>

      {/* Articles Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Latest Articles & Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Article Card 1 */}
          <article className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden flex flex-col">
            <img
              src="https://webobjects2.cdw.com/is/image/CDW/mkt83258-vmware-blog-q225-tile"
              alt="Get the Most From Your VMware Investments"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <time className="text-sm text-gray-500 mb-2">Apr 23, 2025</time>
              <h3 className="text-xl font-semibold mb-2">
                <a href="/content/cdw/en/articles/datacenter/get-the-most-from-your-vmware-investments.html" className="hover:underline">
                  Get the Most From Your VMware Investments
                </a>
              </h3>
              <p className="text-gray-700 flex-grow">
                By embracing recent changes, organizations can gain deeper insights into their environments, streamline operations and reduce unnecessary spending.
              </p>
              <span className="mt-4 text-sm text-gray-500">Article 3 min</span>
            </div>
          </article>

          {/* Article Card 2 */}
          <article className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden flex flex-col">
            <img
              src="https://webobjects2.cdw.com/is/image/CDW/thumb-mkt83250-540"
              alt="Minimum Viable Data Governance: Laying the Foundation for Data Success"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <time className="text-sm text-gray-500 mb-2">Apr 21, 2025</time>
              <h3 className="text-xl font-semibold mb-2">
                <a href="/content/cdw/en/articles/dataanalytics/minimum-viable-data-governance-laying-foundation-data-success.html" className="hover:underline">
                  Minimum Viable Data Governance: Laying the Foundation for Data Success
                </a>
              </h3>
              <p className="text-gray-700 flex-grow">
                Find out how your organization can navigate the complexities of today’s data-rich environments and the promise of AI with a strong data governance foundation.
              </p>
              <span className="mt-4 text-sm text-gray-500">Article 6 min</span>
            </div>
          </article>

          {/* Article Card 3 */}
          <article className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden flex flex-col">
            <img
              src="https://webobjects2.cdw.com/is/image/CDW/thumb-mkt84108-540"
              alt="CDW Services That Simplify the Shift to Windows 11 Pro"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <time className="text-sm text-gray-500 mb-2">Apr 17, 2025</time>
              <h3 className="text-xl font-semibold mb-2">
                <a href="/content/cdw/en/articles/software/cdw-services-that-simplify-shift-windows-11-pro.html" className="hover:underline">
                  CDW Services That Simplify the Shift to Windows 11 Pro
                </a>
              </h3>
              <p className="text-gray-700 flex-grow">
                Our experts are equipped to provide comprehensive support throughout every step of your migration.
              </p>
              <span className="mt-4 text-sm text-gray-500">Article 3 min</span>
            </div>
          </article>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="bg-gray-50 py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Explore Popular Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <a href="/category/computers/laptops-2-in-1s/?w=CB" className="group block text-center">
            <img
              src="https://webobjects2.cdw.com/is/image/CDW/5572154?$product_250$"
              alt="Laptops"
              className="mx-auto mb-4 w-24 h-24 object-contain"
            />
            <h3 className="text-lg font-semibold group-hover:text-blue-600 transition">Laptops</h3>
          </a>
          <a href="/category/printers-supplies/?w=X&akr=0" className="group block text-center">
            <img
              src="https://webobjects2.cdw.com/is/image/CDW/7198794a?$product_250$"
              alt="Printers"
              className="mx-auto mb-4 w-24 h-24 object-contain"
            />
            <h3 className="text-lg font-semibold group-hover:text-blue-600 transition">Printers</h3>
          </a>
          <a href="/category/computer-monitors-displays/computer-monitors/?w=UA" className="group block text-center">
            <img
              src="https://webobjects2.cdw.com/is/image/CDW/4754887?$product_250$"
              alt="Monitors"
              className="mx-auto mb-4 w-24 h-24 object-contain"
            />
            <h3 className="text-lg font-semibold group-hover:text-blue-600 transition">Monitors</h3>
          </a>
          <a href="/category/networking/?w=R" className="group block text-center">
            <img
              src="https://webobjects2.cdw.com/is/image/CDW/4403895?$product_250$"
              alt="Networking"
              className="mx-auto mb-4 w-24 h-24 object-contain"
            />
            <h3 className="text-lg font-semibold group-hover:text-blue-600 transition">Networking</h3>
          </a>
          <a href="/category/computers/desktops/?w=CA" className="group block text-center">
            <img
              src="https://webobjects2.cdw.com/is/image/CDW/5193589?$product_250$"
              alt="Desktops"
              className="mx-auto mb-4 w-24 h-24 object-contain"
            />
            <h3 className="text-lg font-semibold group-hover:text-blue-600 transition">Desktops</h3>
          </a>
        </div>
      </section>

      {/* Cookie Consent Modal */}
      <div
        id="cookie-consent"
        className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-300 p-6 shadow-lg flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
      >
        <div className="max-w-3xl text-gray-700 text-sm">
          <p>
            CDW uses cookies and other technologies to make our website function and to make advertising and content more relevant to you. To learn more view our{' '}
            <a
              href="https://www.cdw.com/content/cdw/en/terms-conditions/privacy-notice/cookie-notice.html"
              className="text-blue-600 hover:underline"
            >
              Cookie Notice
            </a>
            . You can manage your cookie preferences at any time by selecting{' '}
            <a
              href="https://www.cdw.com/content/cdw/en/terms-conditions/privacy-notice/cookie-notice.html"
              className="text-blue-600 hover:underline"
            >
              Manage Cookies
            </a>
            .
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            id="accept-cookies"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
            onClick={() => {
              document.getElementById('cookie-consent').style.display = 'none';
              // Here you could add logic to store cookie consent in localStorage or cookies
            }}
          >
            Accept All Cookies
          </button>
          <button
            id="manage-cookies"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded transition"
            onClick={() => {
              window.location.href = 'https://www.cdw.com/content/cdw/en/terms-conditions/privacy-notice/cookie-notice.html';
            }}
          >
            Manage Cookies
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
