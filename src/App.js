import Header from './components/Header';
import dae from './assets/images/dae.jpg';
import Contact from './components/Contact';
import Video from './components/Video';
import {AiFillYoutube, AiFillInstagram} from "react-icons/ai";
import {DiGoogleDrive} from "react-icons/di";

function App() {
  return (
    <main className='max-w-6xl mx-auto'>
      <div>
        <Header/>
          <div className="flex justify-center py-2 border-t border-b border-gray-400 mx-32 mt-4 mb-2">
            <a href="https://www.youtube.com/channel/UCCJCWKOR156k8oA1ewXuKHQ" target="__blank" className="text-base font-medium text-gray-500 hover:text-red-600">
              <AiFillYoutube className='h-8 sm:h-10 w-8 sm:w-10 mx-2' />
            </a>
            <a href="https://www.instagram.com/dae_drums/" target="__blank" className="text-base font-medium text-gray-500 hover:text-magenta">
              <AiFillInstagram className='h-8 sm:h-10 w-8 sm:w-10 mx-2' />
            </a>
            <a href="https://drive.google.com/drive/folders/1p6DimbX0rrjRFm1Zdhc0s-GoiYVkSYF3?usp=share_link" target="__blank" className="text-base font-medium text-gray-500 hover:text-magenta">
              <DiGoogleDrive className='h-8 sm:h-10 w-8 sm:w-10 mx-2' />
            </a>
          </div>
        <body className='sm:mx-4 flex flex-col items-center'>
          <div className='flex flex-col items-center justify-center w-3/5 md:w-1/3 lg:w-1/4 h-auto sm:mx-20 md:mx-40 md:my-8 border-lightpurple pt-16'>
            <img alt='Dae Bryant playing his kit at Hopkins Brewery 2021' src={dae} title="Shrine live at 9th and 9th Book and Music Festival"/>
          </div>
        <Contact />
        <Video />
        </body>
      </div>
    </main>
  );
}

export default App;
