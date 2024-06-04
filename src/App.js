import "./App.css";

var tagData = [
  { tagId: 1, color: "#E84F33", tagName: "JavaScript", level: "beginner" },
  { tagId: 2, color: "#C3DCAF", tagName: "HTML+CSS", level: "beginner" },
  {
    tagId: 3,
    color: "green",
    tagName: "Git and Github",
    level: "intermediate",
  },
  { tagId: 4, color: "purple", tagName: "React", level: "beginner" },
  { tagId: 5, color: "Orange", tagName: "Svelte", level: "advanced" },
];

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

      {tagData.map((tag) => (
        <Tag
          color={tag.color}
          tagName={tag.tagName}
          level={tag.level}
          key={tag.tagId}
        />
      ))}

      {/* method 2
       {tagData.map((tag) => (
        <Tag theColor={tag.color} theTagName={tag.tagName} />
      ))} */}

      {/* method 3     
      <Tag color="red" tagName="HTML+CSS" />
      <Tag color="gray" tagName="JavaScript" />
      <Tag color="green" tagName="Git and Github" />
      <Tag color="purple" tagName="React" />
      <Tag color="orange" tagName="Svelte" /> */}
    </div>
  );
}

function Tag({ color, tagName, level }) {
  return (
    <div style={{ backgroundColor: color }} className="tagBox">
      <span>{tagName}</span>
      <span>{level === "beginner" && <span>-{level}</span>}</span>
      <span>{level === "intermediate" && <span>-{level}</span>}</span>
      <span>{level === "advanced" && <span>-{level}</span>}</span>
    </div>
  );
}

// function Tag(props) {
//   return (
//     <span style={{ backgroundColor: props.theColor }} className="tagBox">
//       {props.theTagName}
//     </span>
//   );
// }

export default App;
