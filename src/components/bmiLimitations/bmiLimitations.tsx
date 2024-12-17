import Image from "next/image";
import styles from "./bmiLimitations.module.scss";

export default function BmiLimitations() {
  return (
    <section className={styles.bmiLimitationsSection}>
      <div className={styles.bmiLimitationsSection__heading}>
        <h2 className={styles.bmiLimitationsSection__heading_title}>
          Limitations of BMI
        </h2>
        <p className={styles.bmiLimitationsSection__heading_description}>
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>
      <div className={styles.bmiLimitationsSection__content}>
        <div
          className={`${styles.bmiLimitationsCard} ${styles.bmiLimitationsCard__one}`}
        >
          <div className={styles.bmiLimitationsCard__header}>
            <Image
              src="/images/icon-gender.svg"
              alt="Gender Icon"
              width={32}
              height={32}
              className={styles.bmiLimitationsCard__header_icon}
            />
            <h3 className={styles.bmiLimitationsCard_header_title}>Gender</h3>
          </div>
          <p className={styles.bmiLimitationsCard__description}>
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child&apos;s age and gender are considered when
            evaluating their BMI.
          </p>
        </div>
        <div
          className={`${styles.bmiLimitationsCard} ${styles.bmiLimitationsCard__two}`}
        >
          <div className={styles.bmiLimitationsCard__header}>
            <Image
              src="/images/icon-age.svg"
              alt="Age Icon"
              width={32}
              height={32}
              className={styles.bmiLimitationsCard__header_icon}
            />
            <h3 className={styles.bmiLimitationsCard_header_title}>Age</h3>
          </div>
          <p className={styles.bmiLimitationsCard__description}>
            In aging individuals, increased body fat and muscle loss may cause
            BMI to underestimate body fat content.
          </p>
        </div>
        <div
          className={`${styles.bmiLimitationsCard} ${styles.bmiLimitationsCard__three}`}
        >
          <div className={styles.bmiLimitationsCard__header}>
            <Image
              src="/images/icon-muscle.svg"
              alt="Muscle Icon"
              width={32}
              height={32}
              className={styles.bmiLimitationsCard__header_icon}
            />
            <h3 className={styles.bmiLimitationsCard_header_title}>Muscle</h3>
          </div>
          <p className={styles.bmiLimitationsCard__description}>
            BMI may misclassify muscular individuals as overweight or obese, as
            it doesn&apos;t differentiate muscle from fat.
          </p>
        </div>

        <div
          className={`${styles.bmiLimitationsCard} ${styles.bmiLimitationsCard__four}`}
        >
          <div className={styles.bmiLimitationsCard__header}>
            <Image
              src="/images/icon-pregnancy.svg"
              alt="Pregnancy Icon"
              width={32}
              height={32}
              className={styles.bmiLimitationsCard__header_icon}
            />
            <h3 className={styles.bmiLimitationsCard_header_title}>
              Pregnancy
            </h3>
          </div>
          <p className={styles.bmiLimitationsCard__description}>
            Expectant mothers experience weight gain due to their growing baby.
            Maintaining a healthy pre-pregnancy BMI is advisable to minimise
            health risks for both mother and child.
          </p>
        </div>
        <div
          className={`${styles.bmiLimitationsCard} ${styles.bmiLimitationsCard__five}`}
        >
          <div className={styles.bmiLimitationsCard__header}>
            <Image
              src="/images/icon-race.svg"
              alt="Race Icon"
              width={32}
              height={32}
              className={styles.bmiLimitationsCard__header_icon}
            />
            <h3 className={styles.bmiLimitationsCard_header_title}>Race</h3>
          </div>
          <p className={styles.bmiLimitationsCard__description}>
            Certain health concerns may affect individuals of some Black and
            Asian origins at lower BMIs than others. To learn more, it is
            advised to discuss this with your GP or practice nurse.
          </p>
        </div>
      </div>
    </section>
  );
}
