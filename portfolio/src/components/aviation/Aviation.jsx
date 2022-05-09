const infoContainerStyle = "ml-28 w-1/2";
const infoAboutStyle = "pt-2.5 text-sm";


export default function Aviation(){
    return(
        <div className={infoContainerStyle}>
            <h1>Aviation</h1>
            <hr/>
            <p className={infoAboutStyle}>I am currently finishing up my B.S in Aviation (Professional Flight) at SJSU.
                While my focus is on flight and becoming a pilot, the coursework for my degree was very diverse.
                My education ranged from business and statistics to flying and aerodynamics.</p>
            <p className={infoAboutStyle}>I am an instrument rated pilot with just over 250 flight hours.
                I am pursuing my commercial license and will be finished with that soon.</p>
            <p className={infoAboutStyle}>I have recently decided to make the transition into professional programming
                so flying has take the spot of a hobby for the time being. I am very excited to find interesting, new
                ways to combine my two passions for programming and aviation.</p>
        </div>
    )
}