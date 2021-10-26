import { useEffect, useState } from "react"
import "./activity.css"

export interface IActivity {
    [x: string]: any;
    projectId: string;
    activityName?: string;
    commentDetails?: string;
    performer: {
        avatar?: string
        userId: string,
        userName: string
    };
}


export function ActivityPage(props: any) {

    // const path = props.location.pathname

    const [activities, setActivities] = useState<IActivity[]>([])
    const [yesterActivities, setYesterActivities] = useState<IActivity[]>([])

    useEffect(() => {
        const token = localStorage.getItem('token')
        console.log(token)

        fetch(`https://jaraaa.herokuapp.com/users/${props.project}/activities`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json', "authorization": `${token}` }
        }).then(res => res.json())
            .then(data => {
                if (data.msg) {
                    console.log("Major:", data)
                } else {
                    console.log(data, 'data')
                    setActivities(data.activities)
                }
                // window.location.href = "/success"
            })
            .catch(err => {
                console.log(err);
            })

        fetch(`https://jaraaa.herokuapp.com/users/${props.project}/previous-activities`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json', "authorization": `${token}` }
        }).then(res => res.json())
            .then(data => {
                if (data.msg) {
                    console.log("Major:", data)
                } else {
                    console.log(data, 'data')
                    setYesterActivities(data.activities)
                }
                // window.location.href = "/success"
            })
            .catch(err => {
                console.log(err);
            })
    }, [])


    return (
        <div className="main-activity-container">
            <div className="activity-container">
                <div className="daily-activity">
                    <h5>TODAY</h5>

                    {activities.length > 0 ? activities.map(activity => {
                        let displayTime
                        const time = activity.createdAt.split('T')[1].split(':').slice(0, 2)
                        time[0] = Number(time[0]) + 1
                        if (time[0] >= 12) {
                            time[0] = time[0] - 12
                            displayTime = time.join(':') + " " + "PM"
                        } else {
                            displayTime = time.join(':') + " " + "AM"
                        }
                        if (activity.commentDetails) {
                            return (
                                <div key = {activity.id} className="each-activity">
                                    <div className="comment-div">
                                        <div className="comment">
                                            <img src="/IconComment-icon.png" alt="" />
                                        </div>
                                        <div className="comment-content">
                                            <div className="comment-content1"><p>{activity.activityName}</p></div>
                                            <div><p className="time">{displayTime}</p></div>
                                        </div>
                                    </div>

                                    <div className="comment-details">
                                        {activity.performer.avatar ? <img src={activity.performer.avatar} alt="" /> : <img src="/Avatar.png" alt="" />}
                                        <div className="comment-details-item">
                                            <p>{activity.commentDetails}</p>
                                        </div>
                                    </div>

                                </div>
                            )
                        } else {
                            return (
                                <div key = {activity.id} className="each-activity">
                                    <div className="comment-div">
                                        <div className="task-activity">
                                            <img src="/Iconmark.png" alt="" />
                                        </div>
                                        <div className="comment-content">
                                            <div className="comment-content1"><p>{activity.activityName}</p></div>
                                            <div><p className="time">{displayTime}</p></div>
                                        </div>
                                    </div>

                                </div>
                            )
                        }
                    }) : <div>No activities yet today</div>}

                </div>


                <div className="daily-activity">
                    <h5>YESTERDAY</h5>

                    {yesterActivities.length > 0 ? yesterActivities.map(activity => {
                        let displayTime
                        const time = activity.createdAt.split('T')[1].split(':').slice(0, 2)
                        time[0] = Number(time[0]) + 1
                        if (time[0] >= 12) {
                            time[0] = time[0] - 12
                            displayTime = time.join(':') + " " + "PM"
                        } else {
                            displayTime = time.join(':') + " " + "AM"
                        }
                        if (activity.commentDetails) {
                            return (
                                <div key = {activity.id} className="each-activity">
                                    <div className="comment-div">
                                        <div className="comment">
                                            <img src="/IconComment-icon.png" alt="" />
                                        </div>
                                        <div className="comment-content">
                                            <div className="comment-content1"><p>{activity.activityName}</p></div>
                                            <div><p className="time">{displayTime}</p></div>
                                        </div>
                                    </div>

                                    <div className="comment-details">
                                        {activity.performer.avatar ? <img src={activity.performer.avatar} alt="" /> : <img src="/Avatar.png" alt="" />}
                                        <div className="comment-details-item">
                                            <p>{activity.commentDetails}</p>
                                        </div>
                                    </div>

                                </div>
                            )
                        } else {
                            return (
                                <div key = {activity.id} className="each-activity">
                                    <div className="comment-div">
                                        <div className="task-activity">
                                            <img src="/Iconmark.png" alt="" />
                                        </div>
                                        <div className="comment-content">
                                            <div className="comment-content1"><p>{activity.activityName}</p></div>
                                            <div><p className="time">{displayTime}</p></div>
                                        </div>
                                    </div>

                                </div>
                            )
                        }
                    }) : <div>No activities created yesterday</div>}

                </div>

            </div>

        </div>
    )
}