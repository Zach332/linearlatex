import React from 'react'
import { display } from './math'

export default function Matrix( { matrix }) {
    return (
        <div>
            {matrix.map((row => (
                <div className="d-flex justify-content-center">
                    {row.map(num => (
                        <div class="p-2">{display(num)}</div>
                    ))}
                </div>
            )))}
        </div>
    )
}
