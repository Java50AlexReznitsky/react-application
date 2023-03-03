import React from "react"

const styles: React.CSSProperties = { backgroundColor: "lightblue", fontSize: "2em" }

export const Timer: React.FC = () => {
    setTimeout(tic, 1000);
    const [time, setTime] = React.useState(new Date())
    function tic() {
        setTime(new Date())
    }
    return <div>
        <h2>Current Time</h2>
        <p style={styles}>{time.toLocaleTimeString()}</p>
    </div>
}