function Speakers() {
    const speakers  = [
        { imageSrc: "speaker-1124", name: "Douglas Crockford"},
        { imageSrc: "speaker-1530", name: "Tamara Baker"},
        { imageSrc: "speaker-10803", name: "Eugene Chuvrov"},
    ];

    function SpeakersRenderProps(props) {
        return props.children();
    }

    return (
        <SpeakersRenderProps>
            {
                () => {
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
            }
        </SpeakersRenderProps>
    );
}

export default Speakers;
