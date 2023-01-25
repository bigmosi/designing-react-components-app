import { data } from "../../SpeakerData";
import SpeakerList from "./SpeakerList";

 function Speakers() {
    return (
        <div className="container-fluid">
           <Header />  
          <SpeakerList data={data} />
        </div>
    );
 }

 export default Speakers;