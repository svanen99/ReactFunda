import { ChuckJokes } from "@/utils/types"

const ChuckNorris= ({ value, icon }: ChuckJokes) => {
    return (
        <div className="chuck__content">
            <div className={`chuck__content--image chuck__content--image-${icon}`}>
                <img src={icon} alt="chuck norris joke"/>
            </div>
        </div>
    )
}

export default ChuckNorris;