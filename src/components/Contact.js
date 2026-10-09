const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-orange-100">
            We're here to help
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">Contact Us</h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-orange-50">
            Have a question about your order or need some assistance? Our
            support team is always happy to help.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Customer Support */}
          <div className="rounded-2xl bg-white p-7 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-2xl">
              📞
            </div>

            <h2 className="text-xl font-bold text-gray-800">
              Customer Support
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Need help with your order?
            </p>

            <a
              href="tel:+911800123456"
              className="mt-4 inline-block font-semibold text-orange-500 hover:text-orange-600"
            >
              +91 1800 123 456
            </a>
          </div>

          {/* Email */}
          <div className="rounded-2xl bg-white p-7 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-2xl">
              ✉️
            </div>

            <h2 className="text-xl font-bold text-gray-800">Email Us</h2>

            <p className="mt-2 text-sm text-gray-500">
              Send us your questions anytime.
            </p>

            <a
              href="mailto:support@petpuja.com"
              className="mt-4 inline-block font-semibold text-orange-500 hover:text-orange-600"
            >
              support@petpuja.com
            </a>
          </div>

          {/* Office */}
          <div className="rounded-2xl bg-white p-7 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-2xl">
              📍
            </div>

            <h2 className="text-xl font-bold text-gray-800">Visit Us</h2>

            <p className="mt-2 text-sm text-gray-500">PetPuja Headquarters</p>

            <p className="mt-4 font-semibold text-gray-700">
              Mumbai, Maharashtra
            </p>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="rounded-3xl bg-white p-8 text-center shadow-md md:p-12">
          <div className="mb-4 text-4xl">🍕</div>

          <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
            We're always happy to hear from you!
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            Whether you have feedback, a question about your order, or just want
            to say hello, feel free to reach out.
          </p>

          <button className="mt-7 rounded-xl bg-orange-500 px-7 py-3 font-semibold text-white shadow-md transition hover:bg-orange-600 hover:shadow-lg">
            Contact Support
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-6 text-center text-sm text-gray-500">
        © 2026 PetPuja. Made with ❤️ for food lovers.
      </footer>
    </div>
  );
};

export default Contact;
