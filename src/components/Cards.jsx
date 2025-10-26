import React, { useEffect, useRef, useState } from 'react'
import mutualfund from '../assets/mutualfund.jpg'
import etf from '../assets/ETF.png'
import portfolio from '../assets/portfolio.jpg'
import nps from '../assets/NPS.png'
import insurance from '../assets/insurance.jpg'
import loan from '../assets/loan.png'

const cardData = [
    { image: mutualfund, title: "Mutual Funds", description: "A mutual fund is a professionally managed investment vehicle that pools money from investors to invest in different asset classes." },
    { image: etf, title: "Equity and ETFs", description: "Equities offer direct company ownership, while ETFs provide diversified exposure through a basket of securities." },
    { image: portfolio, title: "PMS", description: "PMS offers HNIs customized wealth management solutions, tailored to goals, risk, and investment horizons in India." },
    { image: nps, title: "NPS", description: "The NPS is a government-backed retirement scheme offering flexibility, savings, and potential returns for a secure future." },
    { image: insurance, title: "Insurance", description: "Protection against financial risks by covering losses of the insured during unforeseen and adverse circumstances." },
    { image: loan, title: "Loan Against Mutual Funds", description: "A loan against mutual funds lets investors borrow using their holdings as collateral, providing liquidity without selling assets." },
    {image: "https://www.zeebiz.com/iifl/wp-content/uploads/2022/12/A-Basic-Guide-To-Stock-Trading.jpg" ,title:"Stock Trading and Training", description:"Stock Trading and Training"},
    {image: "https://intellectual-property-helpdesk.ec.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2022-07/BITS_university_logo.gif?itok=HsgoJfIs",title:"title 2",description:"description 2"},
    {image: "https://intellectual-property-helpdesk.ec.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2022-07/BITS_university_logo.gif?itok=HsgoJfIs",title:"title 3",description:"description 3"},
];

const Cards = () => {
    const cardRefs = useRef([]);
    const [visibleCards, setVisibleCards] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = cardRefs.current.indexOf(entry.target);
                    if (entry.isIntersecting && !visibleCards.includes(index)) {
                        setVisibleCards((prev) => {
                            if (!prev.includes(index)) {
                                return [...prev, index];
                            }
                            return prev;
                        });
                    }
                });
            },
            { threshold: 0 }
        );

        cardRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            cardRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []); // empty deps = only run on mount

    return (
        <div className=' flex flex-col items-center lg:flex-row lg:justify-around lg:flex-wrap bg-lightblue'>
            {cardData.map((card, index) => (
                <div
                    key={index}
                    ref={(el) => (cardRefs.current[index] = el)}
                    className={`m-10 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 ${visibleCards.includes(index)
                        ? 'animate-fade-left animate-once animate-duration-1000 animate-ease-linear'
                        : ''
                        }`}
                >
                    <div className="card hover:bg-gold hover:delay-75 bg-champagne rounded-2xl m-5 w-96 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img src={card.image} alt={card.title} className="rounded-xl shadow-2xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-black mt-4 font-bold text-3xl ">{card.title}</h2>
                            <p className='mt-4 mb-4 px-4 text-black'>{card.description}</p>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;
