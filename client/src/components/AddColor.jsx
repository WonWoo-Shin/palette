import { useState } from "react";

function AddColor() {
  const [nameValue, setNameValue] = useState("");
  const [codeValue, setCodeValue] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        postDefaultColor(nameValue, codeValue);
        setNameValue("");
        setCodeValue("");
      }}
    >
      <input
        name="name"
        type="text"
        placeholder="Color name"
        value={nameValue}
        onChange={(event) => setNameValue(event.target.value)}
        required
      />
      <input
        name="code"
        type="text"
        placeholder="Color code"
        value={codeValue}
        onChange={(event) => setCodeValue(event.target.value)}
        required
      />
      <input type="submit" value="Add" />
    </form>
  );
}
