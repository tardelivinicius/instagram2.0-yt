import { useEffect, useState } from "react";
import Story from '../components/Story'
var faker = require('faker');
faker.locale = "pt_BR"

function Stories() {
    const [suggestions, setSuggetions] = useState([]) as any

    useEffect(() => {
      const suggestions = [...Array(20)].map((_, i) => ({
        ...faker.helpers.contextualCard(),
            id: i,
        }));
        setSuggetions(suggestions);
    }, [])
    return (
      <div className="flex space-x-2 p-6 bg-white mt-8 
      border-gray-200 border rounded-sm overflow-x-scroll 
      scrollbar-thin scrollbar-thumb-black">
            {suggestions.map(profile => (
              <Story
                key={profile.id}
                img='https://media-exp1.licdn.com/dms/image/C4D03AQHzRFdH1kbhYA/profile-displayphoto-shrink_800_800/0/1640409632280?e=1646870400&v=beta&t=4tLfdBWPbfE4v78HS7TYfq8SPdWqPVM85g0vQRyNRKc'
                username={profile.username}
              />
            ))}
      </div>
    )
}

export default Stories
