import NavBar from "@/components/ui/Navbar"
import Hero from "@/components/ui/Hero";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { EvervaultCard } from "@/components/ui/evervault-card";


const Home = () => {
  return (
    <>
      <main style={{
        backgroundColor: 'rgb(2,0,36)',
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 9%, rgba(63,79,82,1) 49%, rgba(39,39,42,1) 82%)'
      }}>
        <NavBar />
        <TracingBeam>
          <Hero />
        </TracingBeam> 
        <TracingBeam>
          <section className="m-4">
            <h3 className="text-center text-white text-4xl">ALGOS WE SUPPORT</h3>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1 m-2 ">


            <EvervaultCard text="CAESER" className="" />
            <EvervaultCard text="MD5" className="" />
            <EvervaultCard text="BASE64" className="" />
            <EvervaultCard text="ROT13" className="" />

          </section>
        </TracingBeam>
        <section>
        </section>

      </main>


    </>
  )
}
export default Home;