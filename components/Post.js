import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from "@heroicons/react/outline"
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Moment from 'react-moment';

function Post({ id, username, userImg, img, caption}) {
    const { data: session } = useSession();
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    useEffect(
        () =>
            onSnapshot(
                query(collection(db, 'posts', id, 'comments'), orderBy('timestamp', 'desc')), 
                snapshot => {
                    setComments(snapshot.docs);
                }
            ),
        [db]
    );

    const sendComment = async (e) => {
        e.preventDefault();

        const commentToSend = comment;
        setComment('');

        await addDoc(collection(db, 'posts', id, 'comments'), {
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp(),
        })
    }
    return (
        <div className="bg-white my-7 border rounded-sm">
            {/* Header */}
            <div className="flex items-center p-5">
                <img src={userImg} className='rounded-full h-12 object-containborder p-1 mr-3' alt="" />
                <p className="flex-1 font-bold">{username}</p>
                <DotsHorizontalIcon className="h-5" />
            </div>

            {/* Image */}
            <img src={img} className="object-cover w-full" />

            {/* Buttons */}
            {session && (
                <div className="flex justify-between px-4 pt-4">
                    <div className="flex space-x-4">
                        <HeartIcon className="btn" />
                        <ChatIcon className="btn" />
                        <PaperAirplaneIcon className="btn" />
                    </div>
                    <BookmarkIcon className="btn" />
                </div>
            )}

            {/* Caption */}
            <p className="p-5 truncate">
                <span className="font-bold mr-1">{username} </span>
                {caption}
            </p>

            {/* Comments */}
            {comments.length > 0 && (
                <div className="ml-10 h2- overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
                    {comments.map(comment => (
                        <div key={comment.id} className="flex items-center space-x-2 mb-3">
                            <img className="h-7 rounded-full" src={comment.data().userImage} alt="" />
                            <p className="text-sm flex-1">
                                <span className="font-bold">{comment.data().username}
                                </span>{" "}
                                {comment.data().comment}
                                </p>
                            <Moment interval={1000} fromNow className="pr-5 text-xs">
                                { comment.data().timestamp?.toDate() }
                            </Moment>
                        </div>
                    ))}
                </div>
            )}

            {/* input box */}
            {session && (
                <form className="flex items-center p-4">
                    <EmojiHappyIcon className="h-7"/>
                    <input type="text" 
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        placeholder="Add a comment..." 
                        className="border-none flex-1 focus:ring-0 outline-none" 
                    />
                    <button type="submit" 
                        disabled={!comment.trim()} 
                        onClick={sendComment}
                        className="font-semibold text-blue-400">
                        Post
                    </button>
                </form>
            )}

        </div>
    )
}

export default Post
