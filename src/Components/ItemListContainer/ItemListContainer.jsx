import styles from "./ListContainer.module.css";


const ItemListContainer = ( {greeting} ) => {
    return (
      <div className={styles.itemlist}>
        <h1 className={styles.titulo}>
            {greeting}
        </h1>
      </div>
    )
  }
  
  export default ItemListContainer