import Speaker from "./Speaker";
import { data } from "../../SpeakerData";
import { useState, useEffect } from "react";
import ReactPlaceholder from "react-placeholder";

function SpeakerList({ showSessions }) {

    const {
        speakerData,
        isLoading,
        hasError,
        error,
        onFavoriteToggle
    } = useRequestSpeakers(2000);

    if (hasError === true) {
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
         ready={isLoading === false}
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