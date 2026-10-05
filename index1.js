const container=document.getElementById('root');
console.log(container);
const root =ReactDOM.createRoot(container);// r eact dom creating root for 
const h2=React.createElement('h2',{style:{color:'red'}},'PORTFOLIO');
const h1=React.createElement('h1',{style:{color:'brown',backgroundColor:'white'}},"ABES Engineering College")
// const img=React.createElement('img',{src:'https://plus.unsplash.com/premium_photo-1781034651731-10902364135a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',style:{height:'300px',width:'100px',borderRadius:'10%'}})
const nam=React.createElement('nam',{style:{color:blue}},"Name-Subham kumar");
const year=React.createElement('year',{},"Curr Sem-3rd year 5th sem ")
const pr=React.createElement('pr',{},"programming language-C++,javascript");
const div=React.createElement('div',{style:{border:'2px dotted black',height:'250px',width:'400px'}},h1,h2,nam,year,pr);
root.render(div);