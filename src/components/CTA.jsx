import expertImg from '../assets/images/experts-img.png'
export default function CTA() {
  return (
    <section className="py-20 bg-white max-w-[120rem]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* CTA Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl shadow-xl">
          
          {/* LEFT IMAGE */}
          <div className="h-full">
            <img
              src={expertImg}
              alt="Professional consultant"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative bg-[#0b3f3c] text-white p-10 md:p-14 flex flex-col ">
            
            {/* subtle background pattern */}
            {/* <div className="absolute right-0 bottom-0 opacity-20">
              <svg width="180" height="180" viewBox="0 0 200 200">
                <path
                  d="M0 100 C50 80, 150 120, 200 100"
                  stroke="#5eead4"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M0 130 C60 110, 140 150, 200 130"
                  stroke="#5eead4"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div> */}

            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Ready to Transform Your IT?
            </h2>

            <p className="text-teal-100 mb-8 max-w-md leading-relaxed">
              Let’s discuss how we can help your business grow with the right
              technology.
            </p>

            <button onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})} className="w-fit bg-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-400 transition shadow-md">
              Talk to Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
