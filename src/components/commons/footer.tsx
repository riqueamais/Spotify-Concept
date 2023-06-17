import { Laptop2, LayoutList, Maximize2, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume1 } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="px-6 py-4 flex items-center justify-between border-t border-zinc-700 ">
          <div className="flex items-center gap-3">
            <img id="single" className="w-full ml-0.5 rounded-md" src="/single.png" alt="single"/>
            <div className="flex flex-col gap-2">
              <strong className="font-normal">Conexões de Máfia (feat. Rich The Kid)</strong>
              <span id="feat" className="text-xs">Matuê, Rich The Kid</span>
            </div>
          </div>
          <div>
            <div className="flex flex-grow justify-center items-center gap-6">
              <Shuffle size={20} className="text-green-400"/>
              <SkipBack size={20} className="text-zinc-200" />
              <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
              <Play />
              </button>
              <SkipForward size={20} className="text-zinc-200" />
              <Repeat size={20} className="text-zinc-200"/>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-400">0:10</span>
                <div className="h-1 rounded-full w-96 bg-zinc-600">
                  <div className="bg-zinc-200 w-5 h-1 rounded-full"></div>
                </div>              
                <span className="text-xs text-zinc-400">3:41</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Mic2 size={20} className=" ml-40" />
            <LayoutList size={20} />
            <Laptop2 size={20} />
            <div className="flex items-center justify-center gap-2">
            <Volume1 size={20} />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
                <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
            </div> 
            </div>
            <Maximize2 size={20} />
          </div>
        </footer>
    )
}