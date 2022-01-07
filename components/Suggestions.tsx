import { useEffect, useState } from "react"
var faker = require('faker');
faker.locale = "pt_BR"

const Suggestions = () => {
    const [suggestions, setSuggestions] = useState([]) as any

    useEffect(() => {
        const suggestions = [...Array(5)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i
        }))

        setSuggestions(suggestions)
    }, [])
    return (
        <div className="mt-4 ml-10">
            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
                <button className="text-gray-600 font-semibold">See All</button>
            </div>
        
            {suggestions.map((profile) => (
                <div key={profile.id} className="flex items-center justify-between mt-3">
                    <img 
                        className='w-10 h-10 rounded-full border p-[2px]' 
                        src='https://media-exp1.licdn.com/dms/image/C4D03AQHzRFdH1kbhYA/profile-displayphoto-shrink_800_800/0/1640409632280?e=1646870400&v=beta&t=4tLfdBWPbfE4v78HS7TYfq8SPdWqPVM85g0vQRyNRKc' 
                    />

                    <div className="flex-1 ml-4">
                        <h2 className="font-semibold text-sm">{profile.username}</h2>
                        <h3 className="text-xs text-gray-400">Works at {profile.company.name}</h3>

                    </div>
                    <button className="text-blue-400 text-sm font-semibold">Follow</button>
                </div>
                ))
            }
        </div>
    )
}

export default Suggestions
