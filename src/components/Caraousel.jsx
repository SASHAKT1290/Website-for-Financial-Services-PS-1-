import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles.css"
import couple from '../assets/couple.jpg'
import money from '../assets/money.jpg'
import calculator from '../assets/calculator.jpg'
import quant from '../assets/quant.jpg'

export default () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    return (
        <>
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider h-screen">
                    <div className="keen-slider__slide number-slide1">
                        <div className="flex p-1 pb-3 rounded-2xl items-center justify-center">
                            <div className="flex rounded-2xl shadow-2xl overflow-hidden">
                                <img src={couple} className="h-80 lg:h-100 rounded-2xl" loading="eager" fetchPriority="high"/>
                            </div>
                            <div className="hidden lg:block font-bold text-4xl flex flex-col items-center justify-center lg:max-w-2xl text-center pl-35">
                                <p className="text-black text-nowrap ">Secure your family's tomorrow</p>
                                <p className="text-black text-nowrap">by making smart money moves</p>
                                <p className="text-black text-nowrap">today.</p>
                            </div>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide2">

                        <div className="flex p-1 pb-3 rounded-2xl items-center justify-center">
                            <div className="flex rounded-2xl shadow-2xl bg-white ">
                                <img src={money} className="h-80 lg:h-100 rounded-2xl"></img>
                            </div>

                            <div className="hidden lg:block font-bold text-4xl flex flex-col lg:items-center justify-center lg:max-w-2xl text-center pl-35">
                                <p className="text-black text-nowrap ">Invest in a Prosperous Future.</p>

                            </div>
                        </div>

                    </div>
                    <div className="keen-slider__slide number-slide3">
                        <div className="flex p-1 pb-3 rounded-2xl items-center justify-center">
                            <div className="flex rounded-2xl shadow-2xl bg-white ">
                                <img src={calculator} className="h-80 lg:h-100 rounded-2xl"></img>
                            </div>

                            <div className="hidden lg:block font-bold text-4xl flex flex-col lg:items-center justify-center lg:max-w-2xl text-center pl-35">
                                <p className="text-black text-nowrap ">Strategize</p>
                                <p className="text-black text-nowrap">Your Financial Success</p>

                            </div>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide4">
                        <div className="flex p-1 pb-3 rounded-2xl items-center justify-center">
                            <div className="flex rounded-2xl shadow-2xl bg-white ">
                                <img src={quant} className="h-80 lg:h-100 rounded-2xl"></img>
                            </div>

                            <div className="hidden lg:block font-bold text-4xl flex flex-col lg:items-center justify-center lg:max-w-2xl text-center pl-35">
                                <p className="text-black text-nowrap ">Navigate Markets</p>
                                <p className="text-black text-nowrap ">Confidently!</p>

                            </div>
                        </div>
                    </div>
                </div>
                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                        />

                        <Arrow
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides.length - 1
                            }
                        />
                    </>
                )}
            </div>
            {loaded && instanceRef.current && (
                <div className="dots">
                    {[
                        ...Array(instanceRef.current.track.details.slides.length).keys(),
                    ].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx)
                                }}
                                className={"dot" + (currentSlide === idx ? " active" : "")}
                            ></button>
                        )
                    })}
                </div>
            )}
        </>
    )
}

function Arrow(props) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"} ${disabled} text-black`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}

<link rel="preload" as="image" href="/src/assets/couple.jpg" />
