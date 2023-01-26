import React from "react";

const Speakers = ({ speakers }) => {

    
    return (
        <div>
            {
                speakers.map(({name, imageSrc}) => {
                    return <img src={`images/${imageSrc}.jpg`} alt={name} key={imageSrc} />
                })
            }
        </div>
    );
}

function withData(Component) {
    const speakers  = [
        { imageSrc: "speaker-1124", name: "Douglas Crockford"},
        { imageSrc: "speaker-1530", name: "Tamara Baker"},
        { imageSrc: "speaker-10803", name: "Eugene Chuvrov"},
    ];
   
    return function () {
        return <Component speakers={speakers}></Component>;
    }
}

const EnhancedSpeakerComponent = withData(Speakers);

export default EnhancedSpeakerComponent;