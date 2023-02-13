import React from "react";
import './color.css';


export default function Colors(): React.ReactElement {

    return (
        <div className="colors-wrapper">

            <div className="color-container">
                <h3 className="color-title">Red</h3>
                <div className="colors">
                    <div className="color" style={{ backgroundColor: 'var(--r-500)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--r-400)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--r-300)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--r-200)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--r-100)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--r-75)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--r-50)' }} />
                </div>
            </div>
            <div className="color-container">
                <h3 className="color-title">Yellow</h3>
                <div className="colors">
                    <div className="color" style={{ backgroundColor: 'var(--y-500)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--y-400)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--y-300)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--y-200)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--y-100)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--y-75)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--y-50)' }} />
                </div>
            </div>
            <div className="color-container">
                <h3 className="color-title">Green</h3>
                <div className="colors">
                    <div className="color" style={{ backgroundColor: 'var(--g-500)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--g-400)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--g-300)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--g-200)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--g-100)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--g-75)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--g-50)' }} />
                </div>
            </div>
            <div className="color-container">
                <h3 className="color-title">Teal</h3>
                <div className="colors">
                    <div className="color" style={{ backgroundColor: 'var(--t-500)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--t-400)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--t-300)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--t-200)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--t-100)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--t-75)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--t-50)' }} />
                </div>
            </div>
            <div className="color-container">
                <h3 className="color-title">Blue</h3>
                <div className="colors">
                    <div className="color" style={{ backgroundColor: 'var(--b-500)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--b-400)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--b-300)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--b-200)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--b-100)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--b-75)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--b-50)' }} />
                </div>
            </div>
            <div className="color-container">
                <h3 className="color-title">Purple</h3>
                <div className="colors">
                    <div className="color" style={{ backgroundColor: 'var(--p-500)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--p-400)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--p-300)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--p-200)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--p-100)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--p-75)' }} />
                    <div className="color" style={{ backgroundColor: 'var(--p-50)' }} />
                </div>
            </div>

            <div className="color-container dark">
                <fieldset className="color-title">
                    <legend>Neutral (Dark)</legend>
                    <div className="colors dark">
                        <div className="color" style={{ backgroundColor: 'var(--n-900)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--n-800)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--n-700)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--n-600)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--n-500)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--n-400)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--n-300)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--n-200)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--n-100)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--n-90)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--n-80)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--n-70)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--n-60)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--n-50)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--n-40)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--n-30)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--n-20)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--n-10)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--n-0)' }} />
                    </div>
                </fieldset>
            </div>
            <div className="color-container dark">
                <fieldset>
                    <legend>Neutral (Shadow-Alphaaa) </legend>
                    <div className="colors dark">
                        <div className="color" style={{ backgroundColor: 'var(--nsa-900)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--nsa-800)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--nsa-700)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--nsa-600)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--nsa-500)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--nsa-400)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--nsa-300)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--nsa-200)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--nsa-100)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--nsa-90)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--nsa-80)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--nsa-70)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--nsa-60)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--nsa-50)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--nsa-40)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--nsa-30)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--nsa-20)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--nsa-10)' }} />
                        <div className="color" style={{ backgroundColor: 'var(--nsa-0)' }} />
                    </div>
                </fieldset>
            </div>
        </div>
    )
} 