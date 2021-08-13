import { useState } from "react";

const HookObject = () => {
  const [user, setUser] = useState({ firsName: "", lastName: "" });

  const firstHandler = (e) => {
    setUser({ ...user, firsName: e.target.value });
  };

  const lastHandler = (e) => {
    setUser({ ...user, lastName: e.target.value });
  };

  return (
    <form>
      <input type="text" value={user.firsName} onChange={firstHandler} />
      <input type="text" value={user.lastName} onChange={lastHandler} />

      <h1>firs name - {user.firsName}</h1>
      <h1>last name - {user.lastName}</h1>
      <div>{JSON.stringify(user)}</div>
    </form>
  );
};

export default HookObject;
