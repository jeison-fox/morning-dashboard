import Skeleton from "@components/skeleton";
import styles from "./styles.module.css";

export default function Loading() {
  return (
    <main className={styles.main} data-testid="loading">
      <Skeleton height="80px" />
      <section className={styles.content}>
        <Skeleton height="95px" />
        <div className={styles.weatherContainer}>
          <Skeleton height="313px" />
          <Skeleton height="313px" />
        </div>
      </section>
    </main>
  );
}
