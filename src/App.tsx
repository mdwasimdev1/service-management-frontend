import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-[#faf9f5]">
      <Navbar />

      {/* ── Replace with your page routes / content ── */}
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-stone-900 leading-tight">
          All Your Services,{" "}
          <span className="text-amber-500">One Platform.</span>
        </h1>
        <p className="mt-4 text-lg text-stone-500">
          Book trusted home &amp; lifestyle services in minutes.
        </p>
      </main>
    </div>
  );
}

export default App;
