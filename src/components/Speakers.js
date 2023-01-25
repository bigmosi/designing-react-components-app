import SpeakersToolbar from "./SpeakersToolbar";
import SpeakerList from "./SpeakerList";

function Speakers({data,theme, setTheme}) {
    return (
        <>
         <SpeakersToolbar theme={theme} setTheme={setTheme} /> 
         <SpeakerList data={data} />
        </>
    );
}

export default Speakers;
