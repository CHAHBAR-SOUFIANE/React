var n = 0
function counter(n) {
    return n.toString().padStart(2,'0')
}
function render(){
    const items = [
        "Tache 1",
        "Tache 2",
        "Tache 3",
        "Tache 4"
    ]

    const title = <div>
        <h1 className = "titre" id="titre">Bonjour, monde ! <span> {n%2 ? counter(n) : null}</span></h1>
        <ul>{items.map((item,k)=><li key={k}>{item}</li>)}</ul>
    </div>



    ReactDOM.render(title,document.querySelector("#id01"))
}

render()
window.setInterval(() => {
    n++
    render()
},1000)


















