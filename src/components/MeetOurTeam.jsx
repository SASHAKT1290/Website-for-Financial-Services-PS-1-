import React, { useRef, useState, useEffect } from 'react'

const MeetOurTeam = () => {
    const cardData = [
        { image: "https://intellectual-property-helpdesk.ec.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2022-07/BITS_university_logo.gif?itok=HsgoJfIs", title: "Founder and CEO", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, minima" },
        { image: "https://intellectual-property-helpdesk.ec.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2022-07/BITS_university_logo.gif?itok=HsgoJfIs", title: "Chief Marketing Officer", description:  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, veritatis!" },
        { image: "https://intellectual-property-helpdesk.ec.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2022-07/BITS_university_logo.gif?itok=HsgoJfIs", title: "Chief Financial Officer", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, eum?" }
    ];

    const cardRefs = useRef([]);
    const [visibleCards, setVisibleCards] = useState([]);

    useEffect(() => {
        // Example: make all cards visible on mount
        setVisibleCards(cardData.map((_, idx) => idx));
    }, [cardData.length]);

    return (
        <div className='bg-beige'>
            <div className="flex flex-col items-center lg:flex-row lg:justify-around lg:flex-wrap pb-10">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        ref={el => (cardRefs.current[index] = el)}
                        className={`m-10 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 ${
                            visibleCards.includes(index)
                                ? 'animate-fade-left animate-once animate-duration-1000 animate-ease-linear'
                                : ''
                        }`}
                    >
                        <div className="card group hover:bg-gold hover:delay-7ii m-5 w-96 shadow-sm bg-offwhite">
                            <figure className="px-10 pt-10">
                                <img src={card.image} alt={card.title} className="rounded-xl shadow-2xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-black mt-4 font-bold text-3xl group-hover:text-white">{card.title}</h2>
                                <p className='mt-4 mb-4 px-4 text-black group-hover:text-white'>{card.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MeetOurTeam
