import React from 'react'

export default function Middle({ text, button }) {
    return (
        <div style={{ width: "60%" }}>

            <div>
            {
                text &&
                <div className="box2" >
                    text
                </div>
            }
            {
                button &&
                <div className="box2" >
                    Button
                </div>
            }
            </div>
        </div>
    )
}
