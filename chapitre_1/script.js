var n = 0
function render(){
    const title =React.createElement("h1",{},"Bonjour, monde !",
             React.createElement("span",{}, n))
    ReactDOM.render(title,document.querySelector("#id01"))
}

render()
window.setInterval(() => {
    n++
    render()
},1000)


















