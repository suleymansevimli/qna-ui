import './elevation.css'

export default function ElevationCard() {

    return (
        <div className='elevation-container'>
            <div className={`elevation-card elevation-100`}/>
            <div className={`elevation-card elevation-200`}/>
            <div className={`elevation-card elevation-300`}/>
            <div className={`elevation-card elevation-400`}/>
            <div className={`elevation-card elevation-500`}/>
        </div>
    )
}