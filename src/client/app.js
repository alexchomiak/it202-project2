import React from 'react'
import ReactDOM from 'react-dom'
import Graffiti from './components/Graffiti'
import './styles/styles.scss'


const template = (<div>
	<p> Hello World!</p>
</div> 
)
ReactDOM.render(template,document.getElementById('app'))


ReactDOM.render(<Graffiti />,document.getElementById("app"))
console.log("app is running!")
