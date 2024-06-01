import  { useState } from 'react'
function App() {
  
    // State to manage the visibility of the mobile menu
    const [isOpen, setIsOpen] = useState(false);
  
    // Function to toggle the menu visibility
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div >
     <nav className="container mx-auto bg-slate-100 p-6 rounded-md fadeIn" style={{ animationDelay: '0.2s' }}>
        <div className="flex item-center justify-between">
          <div className="flex items-center">
            <img src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow Logo" className="h-8 w-auto fadeIn" style={{ animationDelay: '0.5s' }} />
          </div>
          <div className="hidden md:flex">
            <a href="#" className=" hover:text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium fadeIn" style={{ animationDelay: '0.8s' }}>Dashboard</a>
            <a href="#" className=" hover:text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium fadeIn" style={{ animationDelay: '1s' }}>Team</a>
            <a href="#" className=" hover:text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium fadeIn" style={{ animationDelay: '1.2s' }}>Projects</a>
            <a href="#" className=" hover:text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium fadeIn" style={{ animationDelay: '1.4s' }}>Calendar</a>
            <a href="#" className=" hover:text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium fadeIn" style={{ animationDelay: '1.6s' }}>Reports</a>
            <a href="#" className=" bg-blue-700 text-white hover:text-gray-200 hover:bg-blue-500 py-2 px-3 rounded-md font-medium fadeIn" style={{ animationDelay: '1.8s' }}>Call me</a>
          </div>
          <button id="mobile-btn" className="md:hidden" onClick={toggleMenu}>
        <i className="ri-menu-fold-line text-2xl"></i>
      </button>          
        </div>
        <div className="md:hidden">
        <div className={`md:hidden ${isOpen ? 'flex' : 'hidden'} absolute flex-col space-y-5 items-center bg-gray-50 font-bold drop-shadow-lg border border-gray-300 py-8 left-6 right-6`}>
        <a href="#" className="hover:text-slate-500">Dashboard</a>
        <a href="#" className="hover:text-slate-500">Team</a>
        <a href="#" className="hover:text-slate-500">Projects</a>
        <a href="#" className="hover:text-slate-500">Calendar</a>
        <a href="#" className="hover:text-slate-500">Reports</a>
        <a href="#" className="bg-blue-900 text-white hover:text-gray-200 hover:bg-blue-500 py-2 px-3 rounded-full font-medium fadeIn">Call me</a>
      </div> 
          </div>
      </nav>
      <section id="hero">
        <div className="container flex flex-col-reverse md:flex-row mx-auto  p-6">
          <div className="md:w-1/2 flex flex-col space-y-6 p-4 justify-center rounded-b-3xl md:rounded-none text-center md:text-left bg-slate-200 md:w-1/2  fadeInUp">
            <h1 className="font-bold text-3xl md:text-5xl">Rapidly build modern websites without ever leaving your HTML.</h1>
            <p>
              A utility-first CSS framework packed with classes like flex, pt-4, text-center, and rotate-90 that can be composed to build any design, directly in your markup.
            </p>
            <a href="#" className="self-center md:self-start text-white bg-blue-700 hover:text-gray-200 hover:bg-blue-500 py-2 px-3 rounded-full font-medium">Get Started <i className="ri-arrow-right-line"></i></a>
          </div>
          <div className="md:w-1/2 " style={{ animationDelay: '2s' }}>
            <img src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Website Logo" />
          </div>
        </div>
      </section>

      <section id="author">
          < div className="container  mx-auto my-32 text-center p-6 ">
          <h2 className='  text-4xl font-bold mb-10'>“Best practices” don’t actually work.</h2>
         <div>
         <p className=" mb-8">
          I’ve written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way.
          </p>
         </div>
          <div className="mt-10 flex flex-col  md:flex-row space-x-0 md:space-x-3 space-y-5 md:space-y-0 my-3 md:my-0">

      <div className="bg-slate-200 md:w-1/3 items-center flex flex-col p-6 space-y-2 rounded-lg border-slate-200">
        <img className=' w-16 rounded-full -mt-12'  src="https://nourhomsi.net/tailwind/dist/images/adam.jpg" alt="Adam" />
        <h5 className='font-bold text-lg text-slate-900'>Adam Sandeler</h5>
        <p className='leading-5 text-sm'>The way I wrote it changed frequently. It’s not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you’ll realize semantic CSS was a 20 year mistake.</p>
      </div>
      <div className="bg-slate-200 md:w-1/3 items-center  flex flex-col p-6 space-y-2 rounded-lg border-slate-200">
        <img className=' w-16 rounded-full -mt-12'  src="https://nourhomsi.net/tailwind/dist/images/madeline.jpg" alt="Adam" />
        <h5 className='font-bold text-lg text-slate-900'>Madeline Bauer
</h5>
        <p className='leading-5 text-sm'>I have no design skills and with Tailwind I can actually make good looking websites with ease and it's everything I ever wanted in a CSS framework.
</p>
      </div>
      <div className="bg-slate-200 md:w-1/3 items-center  flex flex-col p-6 space-y-2 rounded-lg border-slate-200">
        <img className=' w-16 rounded-full -mt-12'  src="https://nourhomsi.net/tailwind/dist/images/marcel.jpg" alt="Adam" />
        <h5 className='font-bold text-lg text-slate-900'>Marcel Khalifa
</h5>
        <p className='leading-5 text-sm'>I started using @tailwindcss. I instantly fell in love with their responsive modifiers, thorough documentation, and how easy it was customizing color palettes.
</p>
      </div>
          </div>
          </div>
      </section>

      <section>
        <div className=' bg-blue-800  py-10 flex justify-around'>
          <h1 className="font-bold text-4xl text-white">Move even faster with Tailwind UI.</h1>
          <a href="#" className="self-center md:self-start bg-white text-blue-700 hover:text-gray-200 hover:bg-slate-900 py-2 px-3 rounded-full font-medium">Get Started <i className="ri-arrow-right-line"></i></a>
        </div>
      </section>
    <footer className="bg-slate-900">
      <div className="container mx-auto text-white px-5 py-10 flex flex-col-reverse md:flex-row justify-between space-y-8 md:space-y-0">

        <div className="flex flex-col items-center justify-between space-y-12 md:space-y-2 md:items-start">
        <div className="hidden md:block">
          Copyright © 2024, All Rights Reserved for Hatem

          </div>
          <div>
            <img className="h-8 " src="https://nourhomsi.net/tailwind/dist/images/logo-dark.png" alt="" />
          </div>


          <div className="flex space-x-4">
          <a href="#"><i className="ri-facebook-box-fill text-3xl"></i></a>
          <a href="#"><i className="ri-instagram-fill text-3xl"></i></a>
          <a href="#"><i className="ri-youtube-fill text-3xl"></i></a>
          <a href="#"><i className="ri-linkedin-fill text-3xl"></i></a>
          <a href="#"><i className="ri-twitter-fill text-3xl"></i></a>
          </div>
        </div>
        <div className="flex md:flex-row justify-around space-x-32 ">
          <div className="flex flex-col  space-y-2">
            <a href="#" className="hover:text-slate-300">Home</ a >
            <a href="#" className="hover:text-slate-300">About</ a >
            <a href="#" className="hover:text-slate-300">Contact</ a >
          </div>
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:text-slate-300">Imprint</ a >
            <a href="#" className="hover:text-slate-300">Privacy</ a >
            <a href="#" className="hover:text-slate-300">Credits</ a >
          </div>    
          
            </div>
        <div className="flex flex-col justify-between">
          <form action="#">
            <input type="text" placeholder="Subscribe to Newsletter" className="flex-1 py-2 px-6 rounded-full"/>
            <button className="bg-blue-500 hover:bg-slate-500 rounded-full px-4 py-2">Go</button>
          </form>
          <div className="hidden md:block">
          Copyright © 2024, All Rights Reserved for Hatem

          </div>
        </div>

      </div>
    </footer>
   <script>
    
   </script>
    </div>
  )
}

export default App;