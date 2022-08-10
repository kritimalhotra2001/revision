/*function App() {
  return (
    <div className="flex-container">
      <Navbar />
      <h1>your creative team</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra
        libero eget malesuada eleifend. Sed in magna sit amet ligula efficitur
        viverra. Curabitur ut nulla in sapien feugiat rhoncus. In dapibus, lacus
        nec cursus suscipit, erat purus facilisis eros, nec laoreet neque leo eu
        leo. Proin non enim magna. Pellentesque ex magna, fringilla sit amet
        accumsan nec, viverra a diam. Nulla sodales erat at pellentesque porta.
        Nulla ut rhoncus erat. Sed at urna eu ante vehicula lacinia et et risus.
        Maecenas ligula sapien, blandit quis cursus rhoncus, suscipit vitae
        libero. Nunc ultrices pretium iaculis. Mauris ultricies, sapien ac
        bibendum dictum, augue risus ultrices neque, vel dapibus mauris augue eu
        lorem. Nam lectus quam, lacinia a enim nec, congue maximus odio. Morbi
        nisl leo, tempor non massa vel, volutpat efficitur leo. Nunc sed tempor
        arcu. Quisque egestas varius ex ac gravida.
      </p>
      <button type="button" className="btn btn-primary">
        JOIN NOW
      </button>
    </div>
  );
}
export default App;



return (
    <div>
      <div className="border border-danger d-flex justify-content-between">
        <div className=" nav your logo">Your Logo</div>
        <div className=" nav d-flex gap-4">
          <p>Home</p>
          <p>Gallery</p>
          <p>Contact</p>
        </div>
      </div>

      <div className="creative-team border border-success d-flex">
        <div>
          <h1>CREATIVE TEAM</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            pharetra libero eget malesuada eleifend. Sed in magna sit amet
            ligula efficitur viverra. Curabitur ut nulla in sapien feugiat
            rhoncus. In dapibus, lacus nec cursus suscipit, erat purus facilisis
            eros, nec laoreet neque leo eu leo. Proin non enim magna.
            Pellentesque ex magna, fringilla sit amet accumsan nec, viverra a
            diam. Nulla sodales erat at pellentesque porta. Nulla ut rhoncus
            erat. Sed at urna eu ante vehicula lacinia et et risus. Maecenas
            ligula sapien, blandit quis cursus rhoncus, suscipit vitae libero.
            Nunc ultrices pretium iaculis. Mauris ultricies, sapien ac bibendum
            dictum, augue risus ultrices neque, vel dapibus mauris augue eu
            lorem. Nam lectus quam, lacinia a enim nec, congue maximus odio.
            Morbi nisl leo, tempor non massa vel, volutpat efficitur leo. Nunc
            sed tempor arcu. Quisque egestas varius ex ac gravida.
          </p>
          <button className="btn btn-primary">JOIN NOW</button>
        </div>
        <div className="image">
          <img src={image} className="image" />
        </div>
      </div>
    </div>
  );
}
// use effect ke andr axios call
// data ko page me dikhana hai
/*function App() {
    const [listdata, setListdata] = useState([]);
  
    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/todos/")
        .then((result) => setListdata(result.data))
        .catch((error) => console.log(error));
    }, []);
    return (
      <>
        <h1>to do list</h1>
        {listdata.map((item) => (
          <h1 key={item.id}>{item.title}</h1>
        ))}
      </>
    );
  }
  export default App;
  
  //function App() {
    const [activity, setActivity] = useState(" ");
    const [activitylist, setActivitylist] = useState([]);
  
    const Addactivity = () => {
      setActivitylist([...activitylist, activity]);
    };
  
    return (
      <>
        <h1>to do list</h1>
        <input
          onChange={(e) => setActivity(e.target.value)}
          placeholder="add activity"
        />
        <button onClick={Addactivity} type="submit">
          Add{" "}
        </button>
  
        {activitylist.map((todo) => (
          <p>{todo}</p>
        ))}
      </>
    );
  }
  
  /*function App() {
    const [name, setName] = useState(" ");
    const [lastnm, setLastnm] = useState(" ");
    const [num, setNum] = useState(" ");
    const [email, setEmail] = useState(" ");
  
    function submit(e) {
      e.preventDefault();
      console.log(name, lastnm, num, email);
    }
  
    const updateNumber = (e) => setNum(e.target.value);
  
    //function updateNumber(e){
    //setNum(e.target.value)
    //}
  
    return (
      <>
        <form onSubmit={submit}>
          <input onChange={(e) => setName(e.target.value)} />
          <input onChange={(e) => setLastnm(e.target.value)} />
          <input onChange={updateNumber} />
          <input onChange={(e) => setEmail(e.target.value)} />
          <button type="submit">submit</button>
        </form>
      </>
    );
  }*/

//export default App;
