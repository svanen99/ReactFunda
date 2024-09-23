'use client'
import { useState } from 'react'
import { ChuckJokes } from '@/utils/types'

const Chuck = () => {
    const [getChuck, setGetChuck] = useState<ChuckJokes | null>(null)
    
    const stealChuck = async (): Promise<void> => {
        try {
            const response = await fetch(`https://api.chucknorris.io/jokes/random`);
            const data = await response.json();

            setGetChuck({
                value: data.value,
                icon: data.icon_url
            });
        } catch (error) {
            console.log("Something went a lil wrong");
        }
    };

    return (
        <div className="chuck-container">
            <h2 className="chuck-container__header"></h2>
            <img src={getChuck ? getChuck.icon : 'https://api.chucknorris.io/img/avatar/chuck-norris.png'} alt="Chuck Norris" />
            {getChuck && <p>{getChuck.value}</p>}
            <button onClick={stealChuck} className="chuck-container__button">A lil joke</button>
        </div>
    );
};
export default Chuck;