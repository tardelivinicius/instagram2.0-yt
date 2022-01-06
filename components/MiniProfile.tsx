function MiniProfile() {
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img 
                className='w-16 h-16 rounded-full border pp-[2px]'
                src='https://media-exp1.licdn.com/dms/image/C4D03AQHzRFdH1kbhYA/profile-displayphoto-shrink_800_800/0/1640409632280?e=1646870400&v=beta&t=4tLfdBWPbfE4v78HS7TYfq8SPdWqPVM85g0vQRyNRKc' 
                alt='profile pic' 
            />

            <div className="flex-1 mx-4">
                <h2 className='font-bold'>vinidellavalle</h2>
                <h3 className="text-sm text-gray-400">Welcome to instagram!</h3>
            </div>

            <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
        </div>
    )
}

export default MiniProfile
