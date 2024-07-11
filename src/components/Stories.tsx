import Image from "next/image"

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        {/* story */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src='https://images.pexels.com/photos/17945881/pexels-photo-17945881.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Ricky</span>
        </div>

         {/* story */}
         <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src='https://images.pexels.com/photos/17945881/pexels-photo-17945881.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Ricky</span>
        </div>
         {/* story */}
         <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src='https://images.pexels.com/photos/17945881/pexels-photo-17945881.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Ricky</span>
        </div>
         {/* story */}
         <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src='https://images.pexels.com/photos/17945881/pexels-photo-17945881.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Ricky</span>
        </div>
         {/* story */}
         <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src='https://images.pexels.com/photos/17945881/pexels-photo-17945881.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Ricky</span>
        </div>
         {/* story */}
         <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src='https://images.pexels.com/photos/17945881/pexels-photo-17945881.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Ricky</span>
        </div>
      </div>
    </div>
  )
}

export default Stories