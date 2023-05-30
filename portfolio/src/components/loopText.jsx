import { useLayoutEffect, useRef, useState } from "react";

import {gsap} from "gsap";

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

const displayValues = shuffle(["Backend", "Frontend", "Python", "Software"])
const displayValuesLen = displayValues.length

export default function LoopText() {
    const [displayTextInd, setDisplayTextInd] = useState(0)
    
    const el = useRef();
    const tl = useRef();

    function update() {
        setDisplayTextInd((displayTextInd + 1) % displayValuesLen)
    }

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            tl.current = gsap.timeline(
                {
                    repeat: -1,
                }
            )
            .from(".word1", {
                y: 100,
                duration: 1,
                ease: "power4"
            })
            .to(".word1", {
                y: -100,
                duration: 1,
                delay: 2,
                onComplete: update
            })
        }, el);
    return () => ctx.revert();
    }, [update]);

    return (
    <div ref={el} className="flex flex-row w-full overflow-hidden">
        <div className="w-40 text-right word1">{displayValues[displayTextInd]}</div>
        <div className="ml-1">Developer</div>
    </div>
    );
}