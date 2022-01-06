import Image from 'next/image'
import { SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon} from '@heroicons/react/outline'
import {
    HomeIcon, MenuIcon, 
} from '@heroicons/react/solid'

function Header() {
    return (
        <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
                {/* Left */}
                <div className="relative hidden lg:inline-grid w-24">
                    <Image 
                        src="http://links.papareact.com/ocw" 
                        layout="fill" 
                        objectFit='contain'
                    />
                </div>

                <div className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
                    <Image 
                        src="http://links.papareact.com/jjm" 
                        layout="fill" 
                        objectFit='contain'
                    />
                </div>

                
                {/* Middle - Search input field */}
                <div className='max-w-xs'>
                    <div className="relative mt-1 p-3 rounded-md">
                        <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                            <SearchIcon className="h-5 w-5 text-gray-500" />
                        </div>
                        <input 
                            className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md" 
                            type="text" 
                            placeholder="Search" 
                        />
                    </div>
                </div>

                {/* Right */}
                <div className='flex items-center justify-end space-x-4'>
                    <HomeIcon className='navBtn' />
                    <MenuIcon className='h-6 md:hidden cursor-pointer' />
                    <div className='relative navBtn'>
                        <PaperAirplaneIcon className='navBtn rotate-45' />
                        <div className='absolute -top-1 -right-3 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>99</div>
                    </div>
                    <PlusCircleIcon className='navBtn' />
                    <UserGroupIcon className='navBtn' />
                    <HeartIcon className='navBtn' />

                    <img 
                        src='https://media-exp1.licdn.com/dms/image/C4D03AQHzRFdH1kbhYA/profile-displayphoto-shrink_800_800/0/1640409632280?e=1646870400&v=beta&t=4tLfdBWPbfE4v78HS7TYfq8SPdWqPVM85g0vQRyNRKc' 
                        alt='profile pic' 
                        className='h-10 rounded-full cursor-pointer'
                    />
                </div>

            </div>
        </div>
    )
}

export default Header;