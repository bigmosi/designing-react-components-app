import { useState, useEffect } from "react";

export const STATUS = {
    LOADING: "LOADING",
    SUCCESS: "SUCCESS",
    FAILURE: "FAILURE"
}

function useRequestDelay(delayTime = 1000, initialData=[]) {

const [data, setData] = useState(initialData);
const [requestStatus, setRequestStatus] = useState(STATUS.LOADING);
const [error, setError] = useState("");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

useEffect(
    async() => {
     try {
        await delay(delayTime);
        // throw "Had Error."
        setRequestStatus(STATUS.SUCCESS);
        setData(data);
     } catch (e) {
        setRequestStatus(STATUS.FAILURE)
        setHasError(true);
        setError(e);
     }
}, [data]);

function updateRecord(recordUpdated) {
  const newRecords = data.map(function(rec){
    return rec.id === recordUpdated.id ? recordUpdated : rec;
  });

  async function delayFunction() {
    try {
        await delay(delayTime);
       setData(newRecords);
    } catch (e) {
        console.error("error thrown inside the delayFunction", e);
    }
  }

  delayFunction();
}

return {
    data, requestStatus, error, updateRecord,
}
}

export default useRequestDelay;

