import React from 'react'

// styles & images
import './AchievementList.css'

function AchievementList({ achievements }) {
    return (
        <div>
            {achievements.length === 0 && <p>No achievements yet!</p>}
            {achievements.map(a => (
                <div className="achievement-main border-shadow" key={a.id}>
                    <div className="flex-center">
                        <h3>{a.title}</h3>
                    </div>
                    <div className="flex-row-space-bw border-style">
                        <h4>{a.oname}</h4>
                        <div className="achievement-inline">Location: 
                            <h4>{a.location}</h4>
                        </div>
                    </div>
                    <div className="flex-row-space-bw border-style">
                        <p className="margin-r-8"><b>Start Date:</b> {a.setDate.toDate().toDateString()}</p>
                        <p className="margin-l-8"><b>End Date:</b> {a.endDate.toDate().toDateString()}</p>
                    </div>
                    <div className="border-style">
                        <h4>Description:</h4>
                        <p>{a.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AchievementList;