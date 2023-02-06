import React, { useState } from "react";

export default function AddNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const notes = JSON.parse(localStorage.getItem("notes"));

    localStorage.setItem(
      "notes",
      JSON.stringify([
        ...notes,
        {
          title,
          description,
        },
      ])
    );

    alert("Note added successfully");
  };

  return (
    <>
      <div className="card-title">Add Note</div>
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="mb-3 row">
          <label htmlfor="title" className="col-sm-2 col-form-label fw-bold">
            Title
          </label>
          <div className="col-sm-10">
            <input
              id="title"
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label
            htmlfor="description"
            className="col-sm-2 col-form-label fw-bold"
          >
            Description
          </label>
          <div className="col-sm-10">
            <textarea
              id="description"
              type="description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlfor="image" className="col-sm-2 col-form-label fw-bold">
            Image
          </label>
          <div className="col-sm-10">
            <input class="form-control" type="file" id="image" />
          </div>
        </div>
        <button className="btn btn-lg btn-primary">Add</button>
      </form>
    </>
  );
}
