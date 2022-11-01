import React from "react";
import css from './About.module.css';
import icss from '../../iconos/css-3.png';
import ihtml from '../../iconos/html-5.png';
import ireact from '../../iconos/react.png';
import iredux from '../../iconos/redux.png';
import ijs from '../../iconos/js.png';



export default function div () {
return (
    <div>
      <p> About</p>
            <div className={css.hola}>
            <div className={css.ll}><p className={css.p}>The main porpuse of this project was to learn about the flow of Redux in the bootcamp of Henry.</p></div>
            <div className={css.ll}><p className={css.p}>The app was built with the next technologies:</p></div>
            <div> <img src={icss} alt='icono'/> <img src={ihtml} alt='icono'/> <img src={ireact} alt='icono'/> <img src={iredux} alt='icono'/> <img src={ijs} alt='icono'/></div>
            <div className={css.ll}><p className={css.p}>Developer: </p><h1 className={css.h1}>Gomez Ulises E. E.</h1></div>
            <div className={css.ll}><p className={css.p}>The app makes requests to an external API called OMDB API to bring the movies.</p></div>
            </div>

    </div>

)
}