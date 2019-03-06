import React from 'react'
import ReactDOM from 'react-dom'
import Graffiti from './components/Graffiti'

import './styles/styles.scss'
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<Graffiti />,document.getElementById("app"))

registerServiceWorker();
console.log("app is running!")
