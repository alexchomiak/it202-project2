import React from 'react'

export default function Information() {
  return (
    <div className="container information">
      <h2 className="info-title">This application was developed by Alex Chomiak</h2>
      <h3 className="info-subtitle">It was created using React and the react-google-maps library</h3>
      <img className="info-img" src="https://image.flaticon.com/icons/png/512/25/25231.png"/>
      <h3  ><a className="info-link" href="https://github.com/alexchomiak/it202-project2"> Check out the Github Repo!</a></h3>
    </div>
  )
}
