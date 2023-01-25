import Speaker from "./Speaker";
import ReactPlaceholder from "react-placeholder";
import useRequestDelay, { STATUS } from "../hooks/useRequestDelay";
import { data } from "../../SpeakerData";

function SpeakerList({ showSessions }) {

    const {
        data:speakerData,
        requestStatus,
        error,
        updateRecord,
    } = useRequestDelay(2000, data);

    if (requestStatus === STATUS.FAILURE) {
        return (
            <div className="text-danger">
                 Error: <b>loading Speaker Data Failed {error}</b>
            </div>
        );
    }

    // if (isLoading === true) return <div>Loading...</div>;

    return (
        <ReactPlaceholder 
         type="media" 
         rows={15}
         className="speakerslist-placeholder"
         ready={requestStatus === STATUS.SUCCESS}
         >
            <div className="container speaker-list">
            <div className="row">
                {
                    speakerData.map(function (speaker) {

                        return (
                            <Speaker
                                key={speaker.id}
                                speaker={speaker}
                                showSessions={showSessions}
                                onFavoriteToggle={() => {
                                    updateRecord({
                                        ...speaker,
                                        favorite: !speaker.favorite,
                                    });
                                }} />
                        );
                    })
                }
            </div>
        </div>
        </ReactPlaceholder>
    );
}

export default SpeakerList;