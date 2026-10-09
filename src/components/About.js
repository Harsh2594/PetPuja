import User from "./User";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest">
            Welcome to PetPuja
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            Good Food. Great Mood. ❤️
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-orange-50 md:text-xl">
            PetPuja is your one-stop destination for discovering delicious food
            from your favorite restaurants.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-2 font-semibold text-orange-500">ABOUT PETPUJA</p>

            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              We bring your favorite food closer to you.
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              At PetPuja, we believe that food is more than just a meal. It's
              about happiness, memories and bringing people together.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Explore restaurants, discover new dishes and order your favorites
              with a simple and enjoyable experience.
            </p>
          </div>

          {/* Food Card */}
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-orange-50 p-6 text-center">
                <span className="text-4xl">🍕</span>
                <h3 className="mt-3 font-semibold text-gray-800">
                  Delicious Food
                </h3>
              </div>

              <div className="rounded-2xl bg-green-50 p-6 text-center">
                <span className="text-4xl">🚀</span>
                <h3 className="mt-3 font-semibold text-gray-800">
                  Fast Delivery
                </h3>
              </div>

              <div className="rounded-2xl bg-yellow-50 p-6 text-center">
                <span className="text-4xl">⭐</span>
                <h3 className="mt-3 font-semibold text-gray-800">
                  Top Restaurants
                </h3>
              </div>

              <div className="rounded-2xl bg-red-50 p-6 text-center">
                <span className="text-4xl">❤️</span>
                <h3 className="mt-3 font-semibold text-gray-800">
                  Happy Customers
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="font-semibold text-orange-500">WHY PETPUJA?</p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Everything you need for a great food experience
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 text-4xl">🍽️</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Wide Variety
              </h3>

              <p className="mt-3 text-gray-600">
                Discover cuisines and dishes from different restaurants all in
                one place.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 text-4xl">⚡</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Easy Ordering
              </h3>

              <p className="mt-3 text-gray-600">
                Browse menus, choose your favorite dishes and place your order
                with ease.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 text-4xl">💯</div>

              <h3 className="text-xl font-semibold text-gray-900">
                Great Experience
              </h3>

              <p className="mt-3 text-gray-600">
                We focus on making your food discovery and ordering experience
                simple and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Component */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>

          <p className="mt-3 text-gray-600">
            The people behind the PetPuja experience.
          </p>

          <div className="mt-8 flex justify-center">
            <User />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to satisfy your cravings?</h2>

        <p className="mx-auto mt-4 max-w-xl text-gray-300">
          Explore your favorite restaurants and find something delicious today.
        </p>
        <Link to={"/"}>
          {" "}
          <button className="mt-7 rounded-full bg-orange-500 px-7 py-3 font-semibold transition hover:bg-orange-600">
            Explore Restaurants
          </button>
        </Link>
      </section>
    </div>
  );
};

export default About;
