import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Searchbar from "./components/Searchbar";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const notesFromStorage = JSON.parse(localStorage.getItem("notes-app-data"));
    if (notesFromStorage) {
      setNotes(notesFromStorage);
    }
  }, []);

  useEffect(() => {
    notes.length != 0 &&
      localStorage.setItem("notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    setNotes((prevState) => [...prevState, newNote]);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header toggleDarkMode={setDarkMode} />
        <Searchbar searchHandler={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          onAddNote={addNote}
          onDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
