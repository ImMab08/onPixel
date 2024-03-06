'use client'
import Image from "next/image";
import { BackgroundGradient } from "./background-gradient";

export const About = () => {
  return (
    <section className="h-full bg-black text-white w-full rounded-md relative flex flex-col items-center justify-center antialiased">
      <div className="mx-20 my-20">
        <div className="hidden md:flex items-center justify-center flex-col">
          <p className="section-title text-left text-white font-bold text-5xl md:text-7xl">Transformando ideas en</p>
          <p className="section-title text-left text-white font-bold text-2xl md:text-7xl">realidad digital</p>
        </div>
        <div className="flex md:hidden items-center justify-center flex-col">
          <p className="section-title mobile-title text-left text-white font-bold text-5xl md:text-7xl">Transformando</p>
          <p className="section-title mobile-title text-left text-white font-bold text-4xl md:text-7xl">ideas en realidad </p>
          <p className="section-title mobile-title text-left text-white font-bold text-5xl md:text-7xl"> digital</p>
        </div>
        <div className=" mt-20 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">
          <div className=""></div>

          <BackgroundGradient className="rounded-[22px] w-full h-[16rem] bg-black p-2">
            <div className="p-6">
              <div className="mb-4 flex items-center gap-2">
                <svg width={30} height={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <h3 className="text-2xl font-bold">Desarrollo Web</h3>
              </div>
              <p className="text-md">Creamos sitios web atractivos y funcionales que representan la esencia de tu marca. Desde páginas de aterrizaje hasta portales de comercio electrónico, estamos aquí para convertir tus ideas en realidad.</p>
            </div>
          </BackgroundGradient>

          <BackgroundGradient className="rounded-[22px] w-full h-[16rem] bg-black p-2">
            <div className="p-6">
              <div className="mb-4 flex items-center gap-2">
                <svg width={30} height={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 18H12.01M9.2 21H14.8C15.9201 21 16.4802 21 16.908 20.782C17.2843 20.5903 17.5903 20.2843 17.782 19.908C18 19.4802 18 18.9201 18 17.8V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.07989 6 6.2V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <h3 className="text-2xl font-bold">Aplicaciones Móviles</h3>
              </div>
              <p className="text-md">Diseñamos y desarrollamos aplicaciones móviles intuitivas y escalables. Ya sea para iOS o Android, nos apasiona crear experiencias fluidas y cautivadoras para tus usuarios.</p>
            </div>
          </BackgroundGradient>

          <BackgroundGradient className="rounded-[22px] w-full h-[16rem] bg-black p-2">
            <div className="p-6">
              <div className="mb-4 flex items-center gap-2">
                <svg width={30} height={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.5 8C6.88071 8 8 6.88071 8 5.5C8 4.11929 6.88071 3 5.5 3C4.11929 3 3 4.11929 3 5.5C3 6.88071 4.11929 8 5.5 8ZM5.5 8V16M5.5 8C5.5 10.2091 7.29086 12 9.5 12H16M5.5 16C4.11929 16 3 17.1193 3 18.5C3 19.8807 4.11929 21 5.5 21C6.88071 21 8 19.8807 8 18.5C8 17.1193 6.88071 16 5.5 16ZM16 12C16 13.3807 17.1193 14.5 18.5 14.5C19.8807 14.5 21 13.3807 21 12C21 10.6193 19.8807 9.5 18.5 9.5C17.1193 9.5 16 10.6193 16 12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <h3 className="text-2xl font-bold">Software Personalizado</h3>
              </div>
              <p className="text-md">Nuestro equipo de ingenieros trabaja en estrecha colaboración contigo para construir soluciones de software a medida. Creamos software que se adapta perfectamente a tus necesidades.</p>
            </div>
          </BackgroundGradient>

          <BackgroundGradient className="rounded-[22px] w-full h-[16rem] bg-black p-2">
            <div className="p-6">
              <div className="mb-4 flex items-center  gap-2">
                <svg width={30} height={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.5 4.5C7.5 3.11929 8.61929 2 10 2C11.3807 2 12.5 3.11929 12.5 4.5V6H13.5C14.8978 6 15.5967 6 16.1481 6.22836C16.8831 6.53284 17.4672 7.11687 17.7716 7.85195C18 8.40326 18 9.10218 18 10.5H19.5C20.8807 10.5 22 11.6193 22 13C22 14.3807 20.8807 15.5 19.5 15.5H18V17.2C18 18.8802 18 19.7202 17.673 20.362C17.3854 20.9265 16.9265 21.3854 16.362 21.673C15.7202 22 14.8802 22 13.2 22H12.5V20.25C12.5 19.0074 11.4926 18 10.25 18C9.00736 18 8 19.0074 8 20.25V22H6.8C5.11984 22 4.27976 22 3.63803 21.673C3.07354 21.3854 2.6146 20.9265 2.32698 20.362C2 19.7202 2 18.8802 2 17.2V15.5H3.5C4.88071 15.5 6 14.3807 6 13C6 11.6193 4.88071 10.5 3.5 10.5H2C2 9.10218 2 8.40326 2.22836 7.85195C2.53284 7.11687 3.11687 6.53284 3.85195 6.22836C4.40326 6 5.10218 6 6.5 6H7.5V4.5Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <h3 className="text-2xl font-bold">Diseño UI - UX</h3>
              </div>
              <p className="text-md">La usabilidad y la estética son fundamentales. Creamos interfaces de usuario que no solo se ven bien, sino que también son fáciles de usar y accesibles.</p>
            </div>
          </BackgroundGradient>

          <div className=""></div>

          <BackgroundGradient className="rounded-[22px] w-full h-[16rem] bg-black p-2">
            <div className="p-6">
              <div className="mb-4 flex items-center  gap-2">
                <svg width={30} height={30} viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>add-eye</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="icon" fill="#ffffff" transform="translate(42.666667, 85.333333)"> <path d="M384,234.666667 L383.999333,298.666667 L448,298.666667 L448,341.333333 L383.999333,341.332667 L384,405.333333 L341.333333,405.333333 L341.332333,341.332667 L277.333333,341.333333 L277.333333,298.666667 L341.332333,298.666667 L341.333333,234.666667 L384,234.666667 Z M213.333333,1.42108547e-14 C362.666667,1.42108547e-14 426.666667,170.666667 426.666667,170.666667 C426.666667,170.666667 419.806465,188.960536 405.337387,213.569457 L405.333333,213.333333 L354.651041,213.332518 C366.256821,196.877829 374.660833,181.433195 379.954347,170.658773 C361.9296,133.970133 307.595093,42.6666667 213.333333,42.6666667 C119.114667,42.6666667 64.7850667,133.88928 46.7136,170.67328 C64.7370667,207.3632 119.071573,298.666667 213.333333,298.666667 C228.597918,298.666667 242.815495,296.272256 256.00151,292.102854 L256.001906,336.459743 C242.635306,339.59149 228.419781,341.333333 213.333333,341.333333 C64,341.333333 3.55271368e-14,170.666667 3.55271368e-14,170.666667 C3.55271368e-14,170.666667 64,1.42108547e-14 213.333333,1.42108547e-14 Z M213.333333,96 C254.57024,96 288,129.42976 288,170.666667 C288,211.903573 254.57024,245.333333 213.333333,245.333333 C172.096427,245.333333 138.666667,211.903573 138.666667,170.666667 C138.666667,129.42976 172.096427,96 213.333333,96 Z M213.333333,138.666667 C195.688747,138.666667 181.333333,153.02208 181.333333,170.666667 C181.333333,188.311253 195.688747,202.666667 213.333333,202.666667 C230.97792,202.666667 245.333333,188.311253 245.333333,170.666667 C245.333333,153.02208 230.97792,138.666667 213.333333,138.666667 Z" id="Combined-Shape"> </path> </g> </g> </g></svg>
                <h3 className="text-2xl font-bold">Consultoría Tecnológica</h3>
              </div>
              <p className="text-md">¿Necesitas orientación? Te asesoramos sobre las últimas tendencias tecnológicas, estrategias digitales y mejores prácticas.</p>
            </div>
          </BackgroundGradient>

          <div className=""></div>

          <div className=""></div>

        </div>
      </div>
    </section>
  )
}