import styles from "./page.module.css";
import { HomeContent } from "@/modules/home/contents/HomeContent";

export default function Home() {
  // const router = useRouter();

  return (
    <main className={styles.main}>
      <HomeContent />
    </main>
  );
}
