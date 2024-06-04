import React from 'react'
import forecasting from '../image/forecasting.webp'
const SpreadSheet = () => {
    return (
        <div className="m-12 flex flex-col space-y-4 lg:flex-row space-x-8">
            <div className="bg-pink-btn p-12 rounded-2xl flex items-center justify-center">
                <img src={forecasting} alt="" />
            </div>
            <div className="flex flex-col space-y-4">
                <span className="text-pink-500">Embark on a Literary Journey with Clever Book</span>
                <p>Clever Book isn't just an ordinary online bookstore; it's a gateway to a world of knowledge, adventure, and imagination. With our curated selection and innovative features, we're redefining the way you experience literature.</p>
                <span className="text-pink-500">Learn more {'->'}</span>
                <div>
                    <hr className="border-1 border-gray my-4 w-full" />
                    <span>To Kill a Mockingbird by Harper Lee</span>
                    <hr className="border-1 border-gray my-4 w-full" />
                    <span>1984 by George Orwell</span>
                    <hr className="border-1 border-gray my-4 w-full" />
                    <span>The Great Gatsby by F. Scott Fitzgerald</span>
                    <hr className="border-1 border-gray my-4 w-full" />
                    <span>Pride and Prejudice by Jane Austen</span>
                    <hr className="border-1 border-gray my-4 w-full" />
                    <span>Harry Potter and the Sorcerer's Stone by J.K. Rowling</span>
                    <hr className="border-1 border-gray my-4 w-full" />
                    <span>The Catcher in the Rye by J.D. Salinger</span>
                    <hr className="border-1 border-gray my-4 w-full" />
                </div>
                <div className="flex items-center justify-center">
                <button className="border border-pink-400 text-pink-400 w-48 rounded-full p-2 font-bold">View all features</button>
                </div>
            </div>
         
        </div>
    )
}

export default SpreadSheet
