import styles from "./styles.module.css";
import type { SkeletonProps } from "@customTypes/skeleton";

export default function Skeleton({ width = "100%", height = "10px" }: SkeletonProps) {
  return <div className={styles.skeleton} style={{ width, height }} data-testid="skeleton" />;
}
