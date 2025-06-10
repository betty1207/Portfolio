function Contact() {
  return (
    <div className="w-full max-w-6xl mx-auto p-8 sm:p-12 rounded-2xl my-12 bg-white relative overflow-hidden shadow-lg">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="text-center max-w-2xl mx-auto relative z-10 py-8 sm:py-12">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 leading-tight">
          Do you have any project idea you want to discuss about?
        </h1>

        <button className="bg-black text-white hover:bg-gray-800 transition-colors duration-200 px-8 py-4 sm:px-10 sm:py-5 rounded-2xl text-lg font-medium">
          Contact Me
        </button>
      </div>
    </div>
  )
}

export default Contact;