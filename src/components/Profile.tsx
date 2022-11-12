import React from "react";
import my_way from '../img/my-way.png';
import classes from './Profile.module.css';
type ProfileType = {
    title: string
}


const Profile = (props:ProfileType) => {
    return (
        <div className={classes.content}>
            <div><img src={my_way} alt={"main pic"}/></div>
            <h3>
                {props.title}
            </h3>
            <div>
                My posts
            </div>
            <div>
                New posts
            </div>
            <div className={classes.posts}>
                <div className={classes.item}>
                    Post 1
                </div>
                <div className={classes.item}>
                    Post 2
                </div>
            </div>
        </div>
    )
}
export default Profile;