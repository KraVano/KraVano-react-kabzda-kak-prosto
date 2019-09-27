import React, {useState} from "react";
import classes from "./ProfileInfo.module.css";

export default function ProfileStatus(props) {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={() => setEditMode(true)}>{status}</span>
            </div>
            }
            {editMode &&
            <div>
                <input type="text" autoFocus={true} onBlur={() => setEditMode(false)}
                       onChange={(e) => setStatus(e.target.value)} value={status}/>
                <button onClick={() => setEditMode(false)}>Save</button>
            </div>
            }
        </div>
    );
}