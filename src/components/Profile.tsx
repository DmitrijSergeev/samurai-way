import React from "react";
import my_way from '../img/my-way.png';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div><img src={my_way} alt={"main pic"}/></div>
            <div>
                ava+description
            </div>
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