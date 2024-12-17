import Image from "next/image";
import styles from "./bmiTipsCard.module.scss";

interface BmiTipCardProps {
  iconSrc: string;
  altText: string;
  title: string;
  description: string;
}

export default function BmiTipsCard(props: BmiTipCardProps) {
  const { iconSrc, altText, title, description } = props;

  return (
    <div className={styles.bmiTipsCard}>
      <Image src={iconSrc} alt={altText} width={64} height={64} />
      <div className={styles.bmiTipsCard__content}>
        <h3 className={styles.bmiTipsCard__content_title}>{title}</h3>
        <p className={styles.bmiTipsCard__content_description}>{description}</p>
      </div>
    </div>
  );
}
