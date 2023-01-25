import Speaker from "./Speaker";
import ReactPlaceholder from "react-placeholder";
import useRequestSpeakers, { STATUS } from "../hooks/useRequestSpeakers";

function SpeakerList({ showSessions }) {

    const {
        speakerData,
        requestStatus,
        error,
        onFavoriteToggle
    } = useRequestSpeakers(2000);

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
                                    onFavoriteToggle(speaker.id)
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