import Image from "next/image";
import Link from "next/link";

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* top */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>

      {/* bottom */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">user name</span>
          <span className="text-sm">@username</span>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        </p>

        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="address" width={16} height={16} />
          <span>Living in</span>
        </div>

        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="school" width={16} height={16} />
          <span>
            Went to <b>Edgar High School</b>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="work" width={16} height={16} />
          <span>
            Works at <b>Apple Inc.</b>
          </span>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="link" width={16} height={16} />
            <Link href="https://github.com/yunyoungsik" className="text-blue-500 font-medium">
              github.com/yunyoungsik
            </Link>
          </div>

          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="date" width={16} height={16} />
            <span>Joined November 2024</span>
          </div>
        </div>

        <button className='bg-blue-500 text-white text-sm rounded-md p-2'>Follow</button>
        <span className='text-red-400 self-end text-xs cursor-pointer'>Block User</span>
      </div>
    </div>
  );
};

export default UserInfoCard;
