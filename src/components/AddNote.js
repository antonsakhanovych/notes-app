import { useState } from "react";

const AddNote = ({ onAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;
  const chageHandler = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const clickHandler = () => {
    if (noteText.trim().length > 0) {
      onAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Add your note here..."
        value={noteText}
        onChange={chageHandler}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={clickHandler}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
