import "./App.css";
import PlayButton from "./components/playButton/PlayButton.jsx";
import Video from "./components/Videos/Video.jsx";

const App = () => {

  const mongoDB = {
    title:"Mongo Db",
    views:"30k",
    time:"4 month ago"
  }

  let obj = [
    {
      title:"React Js",
      views:"100k",
      time:"1 year ago",
      verified:true
    },
    {
      title:"Node Js",
      views:"10k",
      time:"1 month ago",
      verified:true
    },{
      ...mongoDB,
      verified:false,
    }
  ]

  return (
    <div className="App">
      <h1>Videos</h1>
    
      {
        obj.map ((o, id) => (

          <Video 
          key={id}
          {...o}
          id={id}
          />
        ))
      }

<div style={{clear:"both"}}>
      <PlayButton message={"playing"} onClick={ () => console.log("play")}>Play</PlayButton>
      <PlayButton message="pause video" onClick={ () => console.log("pause")} >Pause</PlayButton>
</div>

    </div>
  );
};

export default App;
