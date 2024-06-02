import "./App.css";

function App() {
  return (
    <div className="main-box">
      <img src="/logo512.png" alt="s"></img>
      <h2>Title</h2>
      <p>
        In the heart of the bustling city, the old library stood as a beacon of
        knowledge and tranquility. Its ancient stone walls were covered in ivy,
        and large, arched windows let in streams of golden sunlight that danced
        on the dust particles in the air.
      </p>
      <Tag color="red" tagName="HTML+CSS" />
      <Tag color="gray" tagName="JavaScript" />
      <Tag color="green" tagName="Git and Github" />
      <Tag color="purple" tagName="React" />
      <Tag color="orange" tagName="Svelte" />
    </div>
  );
}

function Tag(props) {
  return (
    <span style={{ backgroundColor: props.color }} className="tagBox">
      {props.tagName}
    </span>
  );
}

export default App;
