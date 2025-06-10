import { LuMapPin } from "react-icons/lu";
import styles from "./styles.module.css";
import type { HeaderProps } from "@customTypes/header";

export default function Header({ geoInfo }: HeaderProps) {
  return (
    <header className={styles.header} data-testid="header">
      <h1>Rise and shine</h1>
      {geoInfo ? (
        <p data-testid="header-location">
          <LuMapPin />
          {geoInfo.city}, {geoInfo.country}
        </p>
      ) : (
        <p data-testid="header-location-unavailable">Location Unavailable</p>
      )}
    </header>
  );
}
