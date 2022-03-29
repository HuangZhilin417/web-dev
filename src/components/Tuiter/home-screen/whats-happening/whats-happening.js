import React, {useState} from "react";
import styles from "./styles";
import {useDispatch}
    from "react-redux";
const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        });
    }
    return (
        <div className="container-flow" style={styles.wdPaddingBottom}>
            <div style={styles.wdDisplayFlex}>
            <div style={styles.wd10}>
                <img style={styles.wdAvatar} src={"./myPic.jpg"} alt=""/>
            </div>

            <div style={styles.wd90}>
                <textarea className="form-control bg-transparent text-white" id="exampleFormControlTextarea1" rows="3" value={whatsHappening}
                    onChange={(event) =>
                        setWhatsHappening(event.target.value)}>
                </textarea>
            <div>
                <i className="far fa-image" style={styles.wdPaddingRight}></i>
                <i className="fas fa-chart-line" style={styles.wdPaddingRight}></i>
                <i className="fas fa-smile" style={styles.wdPaddingRight}></i>
                <i className="fas fa-calendar" style={styles.wdPaddingRight}></i>
                <button type="button" className="btn btn-primary" style={styles.wdTuitButton} onClick={tuitClickHandler}>
                    Tuit
                </button>
            </div>
            </div>
        </div>

        </div>
    );
}
export default WhatsHappening;