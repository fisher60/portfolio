import airplaneImage from "./airplane.png";
import LoopText from "./loopText";

export default function Banner() {
    return (
        <div className="w-screen flex flex-col justify-center items-center p-12">
            <h1 className="text-9xl">Kyler Roloff</h1>
            
            <h1 className="text-4xl mt-6">
                <LoopText />
            </h1>

            <div className="avatar mt-12">
                <div className="w-64 p-3 bg-white bg-opacity-30 rounded-full">
                    <img src={airplaneImage} alt="Pixel art of a fighter jet airplane"/>
                </div>
            </div>
        </div>
    )
}