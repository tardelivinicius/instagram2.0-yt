import Stories from '../components/Stories'
import Posts from '../components/Posts'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'
function Feed() {
    return (
        <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto'>
            <section className='col-span-2'>
                {/* Stories */}
                <Stories />
                {/* Posts */}
                <Posts />
            </section>
                
            <section className="hidden xl:inline-grid md:col-span-1">
                <div className='fixed top-20'>
                    <MiniProfile />
                    <Suggestions />
                </div>
                {/* Mini Profile */}
                {/* Suggestions */}
            </section>
        </main>
    )
}

export default Feed
