import './App.css';
import React,{useState,useEffect,useRef} from 'react';

const App=()=>{
const[Quote,setQuote]=useState("");
const textRef=useRef();
let colors=["#0000ff","#8b0000","#000080","#006400","#282c34"];
const Getquote=()=>{
	fetch("https://type.fit/api/quotes")
	.then((res)=>res.json())
	.then((data)=>{
		let randomnum = Math.floor(Math.random() * data.length);
		setQuote(data[randomnum]);
	});
}
useEffect(()=>{
	Getquote();
},[]);
useEffect(()=>{
textRef.current.style.color=colors[Math.floor(Math.random()*colors.length)];
},[Quote]);
	return(
		<div><h2 id="header">RANDOM CODE GENERATOR</h2>
<div className='quote-box'>
<p ref={textRef}id="text">"{Quote.text}"<br></br></p>
<p ref={textRef}id="author"><b>-{Quote.author}</b><br></br></p>
<br></br>
<button id="new-quote"className="button"onClick={Getquote}>NEW QUOTE</button>
<a id="tweetquote"className="button" href={`https://twitter.com/intent/tweet`} target="_blank">
<img border="0" alt="W3Schools" src="https://static.vecteezy.com/system/resources/thumbnails/018/930/745/small/twitter-logo-twitter-icon-transparent-free-free-png.png" width="100" height="100"></img>
</a>

</div>
<br></br>
<h2 id="footer">DONE BY RATHIKA</h2>
</div>
	);
}
export default App;