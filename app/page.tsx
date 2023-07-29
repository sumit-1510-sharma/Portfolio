import About from '@/components/About';
import ContactMe from '@/components/ContactMe';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import WorkExperience from '@/components/WorkExperience';
import { Inter } from 'next/font/google';
import Head from 'next/head';


const inter = Inter({ subsets: ['latin'] })


function Home() {
  return (
    <div className="text-white bg-[rgb(36,36,36)] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20  scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Sumit Portfolio </title>
      </Head>
          
      <Header />

      {/* Hero */}
      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      {/* About */}
      <section id="about" className='snap-center'>
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className='snap-center'>
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id="skills" className='snap-start' >
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <a href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer' src="sumitPic.jpg" alt="" />
          </div>
        </footer>
      </a>
    </div>
  )
}

export default Home;


