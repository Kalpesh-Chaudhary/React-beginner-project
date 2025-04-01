import React from 'react'

const Menucard = ({menuData}) => {

  return (
    <>
    <section className='main-card-container'>
       {menuData.map((curElem)=>{
       const {id,name,Image,description} = curElem
      return(
        <>
        <div className="card-container" key={id}>
        <div className="card">
          <div className="card-body">
            <span className="card-number">{id}</span>
            <span className="subtitle"> {name}</span>
            <h2 className="card-title">{name}</h2>
            <span className="pre">
                {description}
            </span>
            <div className="card-read">Read</div>
            <img src={Image} alt=""  className="crad-media" />
                <span className="card-tag">Order Now</span>
          </div>
        </div>
      </div>
      </>
     )
    })}

        </section>
    </>
  )
}

export default Menucard

