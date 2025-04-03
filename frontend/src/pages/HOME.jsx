import { useState, useEffect } from 'react';
import api from "../api";
import Note from '../components/Note';
import { useNavigate } from 'react-router-dom';


function HOME() {

  const [notes, setNotes] = useState([]);
  const [filnotes, setFilnotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [kewo, setKewo] = useState("");


  const [add, setAdd] = useState("hidden");
  const [cNN, setCNN] = useState("");
  const [nList, setNList] = useState("");
  const [search, setSearch] = useState("hidden");
  const [editWindow, setEditWindow] = useState("hidden");
  const [nId, setnId] = useState(0);


  useEffect(() => {
    getNotes();

  }, []);

  const navigate = useNavigate()

  // get all notes
  const getNotes = () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };
  // add new note
  const addNew = () => {
    setContent("")
    setTitle("")
    if (add === "hidden") { setAdd(""), setCNN("hidden"); }
    else { setAdd("hidden"), setCNN(""); }

  };

  // add new note
  const searchWindow = () => {
    search === "hidden" ? setSearch("") : setSearch("hidden");

  };



  const createNote = (e) => {
    e.preventDefault();
    setAdd("hidden");
    editWindow === "" ? setEditWindow("hidden") : "";

    notes.map((note) => {
      nId != 0 && nId === note.id ? deleteNote(nId) : "";
      setnId(0);
    });

    console.log("are you working");

    api.post("api/notes/", { content, title }).then((res) => {
      if (res.status === 201) console.log("note created!");
      else alert("note creation failed!!");
      setTitle("");
      setContent("");
      addNew();
      getNotes();
    })
      .catch((err) => alert(err));

  };
  // delete note
  const deleteNote = (id) => {
    api.delete(`/api/notes/delete/${id}/`).then((res) => {


      if (res.status === 204) {
        console.log("Note deleted!!!");
      }
      else {
        alert("failed");

      }
      getNotes();
    }).catch((err) => {

      alert(err);

    });


  };
  // search note
  const searchTitle = (title) => {
    // e.preventDefault()
    setSearch("");
    setNList("hidden")
    api.get(`/api/notes/filter/?title=${title}`)
      .then((data) => {
        setFilnotes(data.data);
        console.log(data);
      })
      .catch((err) => alert(err));


  };



  const editOption = (note) => {
    
    addNew()
    setTitle(note.title);
    setContent(note.content);
    setnId(note.id);



    //  setEditWindow("hidden");
  };

  const clrFlt = () => {
    setSearch("hidden")
    setNList("")
    setKewo("")
  }

  const logOut = () => {
    
    navigate('/logout')
  }


  return (
    <div className='bg-gray-800 h-svh '>
      <div className=" bg-cyan-950 h-1/12 w-full flex ">
        <div className='h-full w-1/5 p-2 text-center text-white text-2xl'>Simple Notes</div>
        <div className='h-full w-3/5 p-2 flex '>
          <input id="search" className='h-full w-2/3 border-2 text-white bg-cyan-600 rounded-xl p-2' type="text" value={kewo}
          placeholder="Search.." onChange={(e) => setKewo(e.target.value)} onKeyDown={(e) => {
            if (e.key === "Enter") { 
              searchTitle(kewo);
            }

          }} />
          <div className={`z-10 absolute sm:right-162 top-5 right-44 sm:top-4 ${kewo!=""? "" : "hidden"}`} >
          <ion-icon name="close-outline" size="large" onClick={clrFlt}></ion-icon>
          
          </div>
        </div>
        <div className='text-white flex justify-end h-full w-1/5'>
          
          
          <button onClick={logOut}><i className="fa-solid fa-arrow-right-from-bracket fa-xl p-4"></i></button>
          
          
        </div>
      </div>

      
      <div className="  " >
        <div className='p-5 w-full flex justify-center items-center'>
          <div className={`h-15 w-1/3 bg-cyan-900 text-white text-center rounded-2xl drop-shadow-lg ${cNN}`} onClick={addNew}>Create a New Note</div>




          <form onSubmit={createNote}
            className={` w-100  flex flex-col space-x-2  bg-gray-700 
                           items-center justify-center border-2 shadow-2xl text-white
                           rounded-xl   p-2 ${add}`}>

            <div className='w-full flex flex-row justify-end'><ion-icon name="close-outline" onClick={addNew} ></ion-icon></div>

            
            <input type="text"
              id='title'
              required
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Title'
              value={title}
              className='w-full drop-shadow-lg p-0.5 mb-2' />

            
            <textarea type="text"
              id='content'
              required
              onChange={(e) => setContent(e.target.value)}
              placeholder='write down a note'
              value={content} className=' p-0.5 w-full resize-x h-48' />

            <input type="submit" value="submit" className='border-2 p-0.5 rounded-xl mt-2 bg-cyan-600 text-white' />


          </form>
        </div>

        <div className={`bg-gray-800 p-15 flex flex-wrap ${nList}`}>
          {notes.map((note) => (
            <Note note={note} dbclick={editOption} onDelete={deleteNote} key={note.id} />
          ))}
        </div>

        <div className={`bg-gray-800 p-15 flex flex-wrap ${search}`}>
          {filnotes.map((note) => (
            <Note note={note} dbclick={editOption} onDelete={deleteNote} key={note.id} />
          ))}
        </div>
      </div>


    </div>
  );
}

export default HOME;