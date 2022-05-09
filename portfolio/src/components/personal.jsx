const infoContainerStyle = "ml-28 w-1/2";
const infoAboutStyle = "pt-2.5 text-sm";

export default function Personal(){
    return(
        <div className={infoContainerStyle}>
            <h1>Personal</h1>
            <hr/>
            <p className={infoAboutStyle}>
                I love my dog. Ella is, quite literally, more important to me than most things.
            </p>
            <p className={infoAboutStyle}>
                I also play video games sometimes.
            </p>
            <p className={infoAboutStyle}>
                This is all you need to know about me.
            </p>
        </div>
    )
}