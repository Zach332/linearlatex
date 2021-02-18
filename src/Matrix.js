import React from 'react'
import { display } from './math'

export default function Matrix( { matrix }) {
    return (
        <div>
            {matrix.map((row => (
                <div className="d-flex justify-content-center">
                    {row.map(num => (
                        <div className="p-2" style={{width: 75}}>{display(num)}</div>
                    ))}
                </div>
            )))}
        </div>
    )
}
