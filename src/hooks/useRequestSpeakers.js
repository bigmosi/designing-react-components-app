import { useState, useEffect } from "react";
import { data } from "../../SpeakerData";

function useRequestSpeakers(delayTime = 1000) {

const [speakerData, setSpeakerData] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [hasError, setHasError] = useState(false);
const [error, setError] = useState("");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

useEffect(
    async() => {
     try {
        await delay(delayTime);
        // throw "Had Error."
        setIsLoading(false);
        setSpeakerData(data);
     } catch (e) {
        setIsLoading(false);
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
    speakerData, isLoading, hasError, error, onFavoriteToggle
}
}

