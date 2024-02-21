import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function HistoryPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // const data = JSON.parse(localStorage.getItem("history")) || [];
        // setData(data);
    }, []);

    console.log(data);
    return (
        <div className="container">
            <div className="historyBtn d-flex justify-content-end my-4">
                <Link to={"/"}>
                    <button>
                        Home
                    </button>
                </Link>
            </div>
        </div>
    )
}