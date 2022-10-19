import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = ({ notes, onAddNote, onDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            date={note.date}
            onDeleteNote={onDeleteNote}
          />
        );
      })}
      <AddNote onAddNote={onAddNote} />
    </div>
  );
};

export default NotesList;
