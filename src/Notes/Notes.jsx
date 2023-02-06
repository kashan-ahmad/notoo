import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Notes() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")));

  const editHandler = (i) => {
    navigate("/edit", {
      state: i,
    });
  };

  const trashHandler = (i) => {
    const _notes = notes.splice();
    _notes.splice(i, 1);
    setNotes(_notes);

    localStorage.setItem("notes", JSON.stringify(_notes));
  };

  return (
    <>
      <div className="card-title">Notes</div>
      <table className="table">
        <thead>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
        </thead>
        <tbody>
          {notes.map((note, i) => (
            <tr key={i}>
              <td>{1 + i}</td>
              <td>{note.title}</td>
              <td>{note.description}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => trashHandler(i)}
                >
                  <i class="bi bi-trash3-fill"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
