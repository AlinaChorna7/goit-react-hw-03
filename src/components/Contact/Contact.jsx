import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from './Contact.module.css';

const Contact = ({name,number,onDelete})=> {
    return(<li className={styles.contactItem}>
        <div>
      <p className={styles.contactName}>  <FontAwesomeIcon icon={faUser} /> {name}</p>
      <p  className={styles.contactNumber}>  <FontAwesomeIcon icon={faPhone} /> {number}</p>
      </div>
<button className={styles.deleteButton} onClick={onDelete}>Delete</button>    
</li>        )
}
export default Contact;

