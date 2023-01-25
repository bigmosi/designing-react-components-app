import { useState, useEffect } from "react";
import { data } from "../../SpeakerData";

export const STATUS = {
    LOADING: "LOADING",
    SUCCESS: "SUCCESS",
    FAILURE: "FAILURE"
}

function useRequestSpeakers(delayTime = 1000) {

const [speakerData, setSpeakerData] = useState([]);
const [requestStatus, setRequestStatus] = useState(STATUS.LOADING);
const [error, setError] = useState("");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

useEffect(
    async() => {
     try {
        await delay(delayTime);
        // throw "Had Error."
        setRequestStatus(STATUS.SUCCESS);
        setSpeakerData(data);
     } catch (e) {
        setRequestStatus(STATUS.FAILURE)
        setHasError(true);
        setError(e);
     }
}, [data]);

const onFavoriteToggle = (id) => {
    const speakersRecPrevious = speakerData.find(function (rec) {
        return rec.id === id;
    });
    const speakerRecUpdated = {
        ...speakersRecPrevious,
        favorite: !speakersRecPrevious.favorite
    };

    const speakerDataNew = speakerData.map(function (rec) {
        return rec.id === id ? speakerRecUpdated : rec;
    })

    setSpeakerData(speakerDataNew);
}

return {
    speakerData, requestStatus, error, onFavoriteToggle
}
}

export default useRequestSpeakers;

