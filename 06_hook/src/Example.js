import React, { useState, useEffect } from 'react'
import useLastRes from './Test'

function Example() {
    const [count, setCount] = useState(0)
    const res = useLastRes(0)
    const [times, setTimes] = useState(res)
    useEffect(() => {
        document.title = `Test ${times}`
    }, [times])
    return (
        <div>
            <p>You clicked {count} times</p>
            <button
                onClick={() => setCount(count + 1)}
            >Click me</button>
            <button
                onClick={() => setTimes(Math.random() * 10)}
            >times click</button>
            <p>Test {times}</p>
        </div>
    )
}

export default Example;
