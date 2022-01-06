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
        </div>
        
        {suggestions.map((profile) => (
            <div key={profile.id} className="flex items-center justify-between mt-3">
                <img src={profile.avatar} /<
            </div>
            ))
        }
    )
}

export default Suggestions
