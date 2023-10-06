
import { logDOM } from "@testing-library/react";
import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react"

const reactFacts = [
    {
        id: 1,
        fact: "React is a Library, not a Framework",
        detail: "React has always been most times seen as a framework, but infact, is actually a library. A framework is an external file which allows access for external files to make use of its contents, a library on the other hand, is a storage, which mutates or makes writing vanilla and crude codes easier, by implementing declarative and simple codes.",
        showDetail: true,
        likes: 12,
        likeStatus: false
    },
    {
        id: 2,
        fact: "React's ecosystem is the largest currently",
        detail: "Ever since react was intoduced, it has greatly improved the speed at which jobs get done, by avoiding the manipulation of the virtual DOM, react gives the developer full access to its abilities",
        showDetail: true,
        likes: 4,
        likeStatus: false
    },
    {
        id: 3,
        fact: "We use JSX in React not HTML",
        detail: "A common misconception is that, React allows writing HTML, but NO, React allows writing of JSX, which stands for Javascript XML, although they have similar structure, they are actually quite different, in the fact that one can write Javascript logic directly in his or her JSX",
        showDetail: true,
        likes: 9,
        likeStatus: false
    },
    {
        id: 4,
        fact: "Just Use React",
        detail: "If you want fast, reusable, flexible and declarative code, where you don't always have to tell Javascript how to do something, to get it done, in other words, you don't actually fancy imperative code, just use React.",
        showDetail: true,
        likes: 21,
        likeStatus: false
    }
]

const reactFact = reactFacts.slice()






export default function App() {

    const [array, setArray] = useState(reactFact)
    const [selected, setSelected] = useState(0);

    function handleSetArray(updatedValue, likeStat) {
        setArray(array.map((obj) => selected+1 === obj.id ? {...obj, likes: updatedValue, likeStatus: likeStat} : obj))
      }

      function handleSetDetail(detail) {
        setArray(array.map((obj) => selected+1 === obj.id ? {...obj, showDetail: detail} : obj))
      }
    

      function handleSetSelected(num) {
        setSelected(num)
      }
      
    
    return(
        <div className="mx-0 px-4 grid">
            <div className="flex gap-4">
                {reactFact.map((fact, i) => <Tab id={fact.id} onSetSelected={handleSetSelected} selected={selected} key={i}/>)}
            </div>
            <div>
                <TabContent selected={selected} array={array} onSetArray={handleSetArray} onSetDetail={handleSetDetail}/>
            </div>

        </div>
    )
}

function Tab({id, onSetSelected, selected}) {

    

    
    const isClicked = reactFact.map((fact) => fact.id === selected + 1)[id-1]


    const clicked = reactFact.includes((fact) => fact.id === selected + 1)
    
    // console.log(id);

    // console.log(clicked);
    

    


    

    return(
        <button className={`border border-blue-500 px-6 py-2 rounded-xl font-bold  my-4  ${isClicked ? 'bg-blue-600 text-white' : 'bg-slate-100 text-sky-700'}`} onClick={() => onSetSelected(id-1)}>Tab {id}</button>
    )
}

function TabContent({selected, array, onSetArray, onSetDetail}) {

   const curTab = array[selected]

    
    
    
    console.log(array[selected].showDetail);
   
    return(
        <div className="w-3/4 max-w-xl  border-2 border-blue-600  p-4 rounded-xl bg-sky-200">
            <div className="mb-5">
            <h1 className="font-bold text-2xl mb-5 text-sky-700">{curTab.fact}</h1>
            {curTab.showDetail && <p>{curTab.detail}</p>}
            </div>
            <p className="underline text-purple-700 mb-4 cursor-pointer" onClick={() => onSetDetail(!curTab.showDetail)}>{curTab.showDetail ? 'Hide details' : 'Show details'}</p>
            <div className="grid gap-4 grid-cols-3">
                <Button>Check out article</Button>
                <Button>Follow page</Button>
                <LikeComp array={array} onSetArray={onSetArray} selected={selected}/>
                
            </div>
        </div>
    )
}

function LikeComp({selected, array, onSetArray}) {
    const likes = array[selected].likes
    const likeStatus = array[selected].likeStatus

    
    

    // const isClicked = reactFact.map((fact) => fact.id === tab + 1)
    

    
    



    function handleLikeStatus() {
        likeStatus ? onSetArray(likes-1, !likeStatus) : onSetArray(likes+1, !likeStatus)
    }

    

    
   

    return(
        <div className="flex items-center gap-2"><span className={`text-3xl cursor-pointer ${likeStatus ? 'text-red-400' : 'text-white' }`} onClick={handleLikeStatus}>&hearts;</span><span>{likes}</span></div>
    )
}

function Button({children}) {
    return(
        <button className="border border-purple-700 px-2 py-1 rounded-lg bg-sky-500 text-white">{children}</button>
    )
}