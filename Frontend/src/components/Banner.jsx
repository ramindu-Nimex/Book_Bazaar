import BannerCard from "../pages/Home/BannerCard"

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* left slide */}
        <div className="space-y-8 md:w-1/2 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black">Buy And Sell Your Books <span className="text-blue-700">For The Best Price.</span></h2>
          <p className="md:w-4/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quam eveniet officiis ducimus rerum, provident vero molestiae quibusdam ipsum, maiores quaerat in debitis placeat facere dignissimos omnis iste explicabo. Ullam!</p>
          <div>
            <input type="search" name="search" id="search" placeholder="Search a Book" className="py-2 px-2 rounded-s-sm outline-none" />
            <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">Search</button>
          </div>
        </div>
        {/* right slide */}
        <div>
          <BannerCard/>
        </div>
      </div>
    </div>
  )
}

export default Banner