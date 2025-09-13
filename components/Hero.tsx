export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/80 to-white">
      <div className="absolute inset-0 bg-[url('/modern-construction-site-with-high-rise-buildings.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">Every Break Needs a Restart</h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 text-pretty">
          Building dreams with precision, trust, and excellence. Your vision, our expertise.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-lg text-lg font-semibold">Start Your Project</button>
          <button className="border border-white text-white hover:bg-white hover:text-primary bg-transparent px-6 py-3 rounded-lg text-lg font-semibold">View Portfolio</button>
        </div>
      </div>
    </section>
  );
}
