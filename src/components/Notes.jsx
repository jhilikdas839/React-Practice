import React, { useState } from "react";

const Notes = () => {
  // All UseStates are here

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, settask] = useState([]);
  const DeleteHandeler = (idx) => {
    const Copytask = [...task];
    console.log(Copytask);
    Copytask.splice(idx,1)
    settask(Copytask)
console.log("Delete", idx);
  };

  // Form Handeling Part
  const SubmitHandeler = (e) => {
    e.preventDefault();
    const Copytask = [...task];
    Copytask.push({ title, details });
    settask(Copytask);

    setTitle("");
    setDetails("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          SubmitHandeler(e);
        }}
      >
        {/* Notes Heading Part */}
        <input
          type="text"
          placeholder="Enter Your notes Heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* Notes title Part */}
        <textarea
          name=""
          id=""
          placeholder="Enter Your Notes"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        ></textarea>
        <button>Submit Your Notes</button>
      </form>
      {/* Show Task */}
      <div id="alltasks">
        <h1>All Tasks</h1>
        <div id="tasks-wrap">
          {task.map((elem, idx) => {
            return (
              <div key={idx} id="tasks">
                {/* Cross Button */}
                <div id="cdiv">
                  <div id="cross">
                    <button
                      onClick={() => {
                        DeleteHandeler(idx);
                      }}
                      id="btn"
                    >
                      {" "}
                      -{" "}
                    </button>
                  </div>

                  {/* using map show Title and notes */}
                  <h1>{elem.title}</h1>
                </div>
                <p>{elem.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Notes;
