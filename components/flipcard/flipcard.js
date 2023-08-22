import Image from 'next/image';
import styles from './FlipCard.module.css';
import HebehIcon from "../../images/icono-hebeh.svg";
import HebehIconWhite from "../../images/icono-hebeh-bco.svg";

const FlipCard = (props) => {

  const { invertColors } = props;
  
  return (
    <div className={invertColors ? styles.flipCardNegative : styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <Image src={invertColors ? HebehIconWhite : HebehIcon}/>
          <p>{props.title}</p>
        </div>
        <div className={styles.flipCardBack}>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  )
  
}

export default FlipCard;