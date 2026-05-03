import styles from './Header.module.css';

export const Header = ({nome}) => {
    return (

        
        <header className={styles.header}>
            <h2>{nome}</h2>
        </header>
        
            
            
        
    )
}
