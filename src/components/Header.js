
export default function Header() {
  return (
      <div className="pt-2 sticky top-0 bg-white">
        <div className="flex items-center justify-between py-4  px-4 sm:py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="text-lg md:text-xl lg:text-3xl font-bold text-darkpurple">Dae Bryant</span>
            </a>
          </div>
          <div id="nav" className="-mr-2 -my-2">
            <a href="#contact" className="sm:text-l lg:text-xl drop-shadow-lg font-bold text-softblack hover:drop-shadow-xl hover:text-darkpurple hover:underline underline-offset-4 px-2">Contact</a>
            <a href="#video" className="sm:text-l lg:text-xl drop-shadow-lg font-bold text-softblack hover:drop-shadow-lg hover:text-darkpurple hover:underline underline-offset-4 px-2">Videos</a>
          </div>
        </div>
        <div className="w-full h-2 bg-white drop-shadow-md" />
      </div>
  )
};