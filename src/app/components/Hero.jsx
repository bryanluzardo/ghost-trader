import './Hero.css'

export function Hero () {
    return (
        <div className="video-container">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="background-video"
                src="/assets/video-hero.mp4"
            />

        <div className="video-overlay" />

        <div className="overlay-content">
            <h1 className='title'>Ghost Trader</h1>
            <h3 className='subtitle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti repudiandae corporis dolor quas quidem aspernatur sequi reprehenderit rerum nemo voluptates eum unde blanditiis odio doloribus numquam, eaque ratione quo voluptate.</h3>
        </div>
        </div>
    )
}