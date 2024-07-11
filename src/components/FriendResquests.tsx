import Image from 'next/image';
import Link from 'next/link';

const FriendResquests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* top */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>

      {/* user */}
      <div className="flex items-center justify-between">
        <div className='flex items-center gap-4'>
          <Image
            src="https://images.pexels.com/photos/17945881/pexels-photo-17945881.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt="user"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className='font-semibold'>user name</span>
        </div>

        <div className='flex justify-end gap-3'>
          <Image src="/accept.png" alt="accept" width={20} height={20} className="cursor-pointer" />
          <Image src="/reject.png" alt="reject" width={20} height={20} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default FriendResquests;
