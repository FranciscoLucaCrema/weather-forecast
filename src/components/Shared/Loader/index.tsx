import styles from "./Loader.module.scss";

function Loader() {
  return (
    <div className={styles.contain_loader}>
      <div className={styles.loader}></div>
      <p className={styles.loader_text}>Loading</p>
    </div>
  );
}

export default Loader;
