export default function Record({current, max}) {
    return (
        <div className="record">
            <div className="instructions">
                Get points by clicking the image only once!
            </div>
            <div className="score">
                <div className="current">Current Score: {current}</div>
                <div className="max">Max Score: {max}</div>
            </div>
        </div>
    )
}