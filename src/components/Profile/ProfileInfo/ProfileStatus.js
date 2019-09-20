import React, {useState} from "react";
import classes from "./ProfileInfo.module.css";

export default function ProfileStatus(props) {

    const [editMode, setEditMode] = useState(false);

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={() => setEditMode(true)}>{props.status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input type="text" value={props.status}/>
                </div>
            }
        </div>
    );
}