import React from "react";


function Note({ note, onDelete , dbclick}) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")

    return (
        <div className=" note-container flex flex-col justify-between text-black bg-yellow-200 w-48 h-48 m-2" onClick={()=>dbclick(note)}>
            <p className="note-title text-center font-bold">{note.title}</p>
            <p className="note-content grow">{note.content}</p>
            <div className="flex flex-row justify-between">
            <p className="note-date">{formattedDate}</p>
            <ion-icon name="trash-outline" className="w-4 h-4" onClick={() => onDelete(note.id)}></ion-icon>
            </div>
        </div>
    );
}

export default Note