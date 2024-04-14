import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link component
import PercheroComp from '../percheroComp/PercheroComp'
import styles from './LengOptions.module.css'; // Import CSS module
import { useDispatch, useSelector } from "react-redux";
import { getVitrina, setLenguaje } from "../../../redux/actions";
import FormWifi from "../formWifi/FormWifi";

function LengOptions() {

    const [showBanner, setShowBanner] = useState(true);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setLenguaje('ES') )
        dispatch(getVitrina())
    }, [/* Dependencies */]);


    const onPressHandler = (SET) => {
        // Dispatch action
        dispatch(setLenguaje(SET));
    };

    const currentLenguaje = useSelector(state => state.currentLenguaje);
    const vitrinaImg = useSelector(state => state.vitrina);

    return (
        <div className={styles.centerColumn}>
            <PercheroComp 
                className={styles.percheroElement}
                src="https://res.cloudinary.com/denjiview/image/upload/v1710822553/Untitled-1-02_zml2ay.png" 
                alt="Your Image Alt Text" 
                imageWidth="40px"
            />
            <Link to="/menuprojectocafe"> {/* Use Link component */}
                <PercheroComp 
                    className={styles.percheroElement}
                    src="https://res.cloudinary.com/denjiview/image/upload/v1710822094/PERCHERO_02-01_mvlvyz.png" 
                    alt="Your Image Alt Text" 
                    buttonText={"ESPAÑOL"}
                    value='ES'
                    onClick={()=>{
                        dispatch(setLenguaje('ES'))
                    }}
                    imageWidth="40px"
                />
            </Link>
            <Link to="/menuprojectocafe"> {/* Use Link component */}
                <PercheroComp 
                    className={styles.percheroElement}
                    src="https://res.cloudinary.com/denjiview/image/upload/v1710822094/PERCHERO_02-01_mvlvyz.png" 
                    alt="Your Image Alt Text" 
                    buttonText={"ENGLISH"}
                    value='EN'
                    onClick={()=>{
                        dispatch(setLenguaje('EN'))
                    }}
                    imageWidth="40px"
                />
                              
            </Link>
                <PercheroComp 
                    className={styles.percheroElement}
                    src="https://res.cloudinary.com/denjiview/image/upload/v1710996709/PERCHERO_02-02_g4pqcy.png" 
                    alt="Your Image Alt Text" 
                    // buttonText={"ENGLISH"}
                    value='EN'
                    // onClick={()=>{
                    //     dispatch(setLenguaje('EN'))
                    // }}
                    imageWidth="40px"
                    vitrina={`${vitrinaImg.URL}`}
                />

                
                     
                     

                              

                {/* <FormWifi/> */}


                {/* {showBanner && (
    <div className={`${styles.popup} max-w-sm p-3 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700`}>
        <div>
            <h2>¡Bienvenid@ a Proyecto Café!</h2>
            <button 
            className={styles.button}
            onClick={() => setShowBanner(false)}>¡MENú!</button>
            <p>
                Horario/Schedule: <br></br>
                <br></br>
                Lunes/Monday - Sabado/Saturday: 8:00am - 7:30pm <br></br>
                <br></br>
                Domingo/Sunday: 9:00am - 2:00 pm <br></br>
               
            </p>
        <div className="flex flex-col justify-center items-center	">
            <img 
            className={`${styles.imageVitrina}`}
            src={`${vitrinaImg.URL}`}
            alt=""></img>
            <br></br>
            {`${vitrinaImg.description}`}
        </div>
        </div>
    </div>
)} */}


        </div>
    );
}

export default LengOptions;
