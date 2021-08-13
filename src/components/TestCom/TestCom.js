const TestCom = (Props) => {
  return (
    <div>
      <h6>name : {Props.name}</h6>
      <p>family : {Props.family}</p>
      {Props.children}
    </div>
  );
};

export default TestCom;
