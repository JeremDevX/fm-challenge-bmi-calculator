import BmiForm from "@/components/bmiForm/bmiForm";
import styles from "./page.module.scss";
import Image from "next/image";
import BmiTipsCard from "@/components/bmiTips/bmiTipsCard";
import BmiLimitations from "@/components/bmiLimitations/bmiLimitations";

const bmiTipsData = [
  {
    icon: "/images/icon-eating.svg",
    altText: "Healthy eating icon which represents a bowl",
    title: "Healthy eating",
    description:
      "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
  },
  {
    icon: "/images/icon-exercise.svg",
    altText: "Regular exercise icon which represents a dumbbell",
    title: "Regular exercise",
    description:
      "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
  },
  {
    icon: "/images/icon-sleep.svg",
    altText: "Adequate sleep icon which represents a crescent moon",
    title: "Adequate sleep",
    description:
      "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
  },
];

export default function Page() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.hero__heading}>
          <Image
            src="/images/logo.svg"
            alt=""
            className={styles.hero__logo}
            width={40}
            height={40}
          />
          <h1 className={styles.hero__title}>
            Body Mass <span>Index Calculator</span>
          </h1>
          <p className={styles.hero__description}>
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>
        <BmiForm />
      </section>
      <section className={styles.bmiInfo}>
        <img
          src="/images/image-man-eating.webp"
          alt="Man eating a sushi roll"
          className={styles.bmiInfo__image}
        />
        <div className={styles.bmiInfo__content}>
          <h2 className={styles.bmiInfo__content_title}>
            What your BMI result means
          </h2>
          <p className={styles.bmiInfo__content_description}>
            A BMI range of 18.5 to 24.9 is considered a &apos;healthy
            weight.&apos; Maintaining a healthy weight may lower your chances of
            experiencing health issues later on, such as obesity and type 2
            diabetes. Aim for a nutritious diet with reduced fat and sugar
            content, incorporating ample fruits and vegetables. Additionally,
            strive for regular physical activity, ideally about 30 minutes daily
            for five days a week.
          </p>
        </div>
      </section>
      <section className={styles.bmiTipsSection}>
        {bmiTipsData.map((tip, index) => (
          <BmiTipsCard
            key={index}
            iconSrc={tip.icon}
            altText={tip.altText}
            title={tip.title}
            description={tip.description}
          />
        ))}
      </section>
      <BmiLimitations />
    </main>
  );
}
