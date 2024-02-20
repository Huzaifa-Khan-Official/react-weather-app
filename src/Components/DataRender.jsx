import React from 'react'

export default function DataRender({ data }) {
    return (
        <div>
            <div className="cityNameHeading d-flex justify-content-center">
                <h1>
                    {data.name}
                </h1>
            </div>

            <div className="tempDiv">
                <h3>
                    {
                        data.main.temp && data.main.temp
                    }
                </h3>
            </div>
        </div>
    )
}