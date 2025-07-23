import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full h-16 bg-transparent backdrop-blur-md z-50 flex items-center justify-center border-b border-white/10">
        <nav className="flex gap-8 text-white font-medium text-sm">
          <button>About</button>
          <button>Experience</button>
          <button>Projects</button>
          <button>Honors</button>
          <button>Hobbies</button>
        </nav>
      </header>

      {/* Split layout */}
      <div className="flex pt-16 h-full">
        {/* Left fixed panel */}
        <aside className="content-center w-1/2 bg-gray-900 text-white pl-25 p-10 space-y-5 overflow-y-auto">
          <div>
            <h1 className="text-left pb-5 text-3xl font-bold">Kevin Gutierrez</h1>
            <p className="text-left text-sm">Columbia University Class of 2026</p>
            <p className="text-left text-sm">Computer Science</p>
            <p className="text-left text-sm">New York, NY</p>
            <p className="text-left text-sm">kmg2226@columbia.edu</p>
          </div>
          <button className="mt-4 px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition">
            Placeholder Button
          </button>
        </aside>

        {/* Right scrollable panel */}
        <main className="bg-gray-900 w-1/2 h-full overflow-y-scroll p-10 space-y-20 bg-gray-900 text-white">
          <section id="about">
            <h2 className="text-center text-2xl font-bold mb-2">About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec tincidunt arcu...</p>
          </section>

          <section id="experience">
            <h2 className="text-center text-2xl font-bold mb-2">Experience</h2>
            <p>Fusce imperdiet, erat vel consectetur pretium, erat augue varius justo...</p>
          </section>

          <section id="projects">
            <h2 className="text-center text-2xl font-bold mb-2">Projects</h2>
            <p>Donec ullamcorper, libero nec malesuada eleifend, turpis sapien porta lacus...</p>
          </section>

          <section id="honors">
            <h2 className="text-center text-2xl font-bold mb-2">Honors</h2>
            <p>Aliquam at nunc vel ligula faucibus fermentum. Sed blandit quis lorem nec hendrerit...</p>
          </section>

          <section id="hobbies">
            <h2 className="text-center text-2xl font-bold mb-2">Hobbies</h2>
            <p>Nam finibus purus a sapien malesuada, nec fermentum turpis faucibus...</p>
          </section>
        </main>
      </div>
    </div>
  );
}
