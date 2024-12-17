"use client";

import { useEffect, useState } from "react";
import styles from "./bmiForm.module.scss";

interface Input {
  id: string;
  unit: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function BmiForm() {
  const [bmi, setBmi] = useState("");
  const [isMetric, setIsMetric] = useState(true);
  const [idealMinWeight, setIdealMinWeight] = useState(0);
  const [idealMaxWeight, setIdealMaxWeight] = useState(0);
  const [heightCmValue, setHeightCmValue] = useState(0);
  const [heightFtValue, setHeightFtValue] = useState(0);
  const [heightInValue, setHeightInValue] = useState(0);
  const [weightKgValue, setWeightKgValue] = useState(0);
  const [weightStValue, setWeightStValue] = useState(0);
  const [weightLbsValue, setWeightLbsValue] = useState(0);

  const heightInputs: Input[] = isMetric
    ? [
        {
          id: "heightMetric",
          unit: "cm",
          onChange: (e) => setHeightCmValue(Number(e.target.value)),
        },
      ]
    : [
        {
          id: "heightImperialFt",
          unit: "ft",
          onChange: (e) => setHeightFtValue(Number(e.target.value)),
        },
        {
          id: "heightImperialIn",
          unit: "in",
          onChange: (e) => setHeightInValue(Number(e.target.value)),
        },
      ];

  const weightInputs: Input[] = isMetric
    ? [
        {
          id: "weightMetric",
          unit: "kg",
          onChange: (e) => setWeightKgValue(Number(e.target.value)),
        },
      ]
    : [
        {
          id: "weightImperialSt",
          unit: "st",
          onChange: (e) => setWeightStValue(Number(e.target.value)),
        },
        {
          id: "weightImperialLbs",
          unit: "lbs",
          onChange: (e) => setWeightLbsValue(Number(e.target.value)),
        },
      ];

  const enforceMinMax = (value: number, unit: string) => {
    switch (unit) {
      case "cm":
        return Math.min(Math.max(value, 0), 300);
      case "ft":
        return Math.min(Math.max(value, 0), 10);
      case "in":
        return Math.min(Math.max(value, 0), 11);
      case "kg":
        return Math.min(Math.max(value, 0), 500);
      case "st":
        return Math.min(Math.max(value, 0), 99);
      case "lbs":
        return Math.min(Math.max(value, 0), 13);
      default:
        return value;
    }
  };

  const handleUnitChange = () => {
    setIsMetric(!isMetric);
    setBmi("");
    setHeightCmValue(0);
    setHeightFtValue(0);
    setHeightInValue(0);
    setWeightKgValue(0);
    setWeightStValue(0);
    setWeightLbsValue(0);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    unit: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  ) => {
    if (e.target.value.length > 0) {
      const validatedValue = enforceMinMax(Number(e.target.value), unit);
      e.target.value = validatedValue.toString();
    }
    onChange?.(e);
  };

  const convertToLbs = (st: number, lbs: number): number => {
    return st * 14 + lbs;
  };

  const convertToIn = (ft: number, inches: number): number => {
    return ft * 12 + inches;
  };

  const calculateBmi = (isMetric: boolean) => {
    let bmi = 0;
    const totalLbs = convertToLbs(weightStValue, weightLbsValue);
    const totalIn = convertToIn(heightFtValue, heightInValue);
    if (isMetric) {
      bmi = weightKgValue / (heightCmValue / 100) ** 2;
      setIdealMinWeight(18.5 * (heightCmValue / 100) ** 2);
      setIdealMaxWeight(24.9 * (heightCmValue / 100) ** 2);
      return bmi;
    }
    bmi = (totalLbs / totalIn ** 2) * 703;
    setIdealMinWeight((18.5 / 703) * totalIn ** 2);
    setIdealMaxWeight((24.9 / 703) * totalIn ** 2);
    return bmi;
  };

  const safeBmiValue = (bmi: number): string => {
    if (bmi < 10) return "10 -";
    if (bmi > 60) return "60 +";
    return bmi.toFixed(2);
  };

  useEffect(() => {
    const computedBmi = calculateBmi(isMetric);
    if (computedBmi === 0 || isNaN(computedBmi)) {
      setBmi("");
      return;
    }
    setBmi(safeBmiValue(computedBmi));
  }, [
    isMetric,
    heightCmValue,
    heightFtValue,
    heightInValue,
    weightKgValue,
    weightStValue,
    weightLbsValue,
    calculateBmi,
  ]);

  return (
    <div className={styles.bmiCalc}>
      <h2 className={styles.bmiCalc__title}>Enter your details below</h2>
      <fieldset className={styles.bmiCalc__units}>
        <legend>Unit selection</legend>
        <label htmlFor="metric" className={styles.bmiCalc__units_label}>
          <input
            type="radio"
            name="unit"
            id="metric"
            className={styles.bmiCalc__units_input}
            onChange={handleUnitChange}
            checked={isMetric}
          />
          <span
            className={styles.bmiCalc__units_checked}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setIsMetric(true);
              }
            }}
            aria-label="Metric"
          ></span>
          Metric
        </label>
        <label htmlFor="imperial" className={styles.bmiCalc__units_label}>
          <input
            type="radio"
            name="unit"
            id="imperial"
            className={styles.bmiCalc__units_input}
            onChange={handleUnitChange}
            checked={!isMetric}
          />
          <span
            className={styles.bmiCalc__units_checked}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setIsMetric(false);
              }
            }}
            aria-label="Imperial"
          ></span>
          Imperial
        </label>
      </fieldset>
      <div
        className={`${styles.bmiCalc__details} ${
          isMetric
            ? `${styles.bmiCalc__details_metric}`
            : `${styles.bmiCalc__details_imperial}`
        }`}
      >
        <div className={styles.bmiCalc__details_inputGroup}>
          <span>Height</span>
          <div className={styles.bmiCalc__details_inputWrapper}>
            {heightInputs.map((input) => (
              <label
                htmlFor={input.id}
                key={input.unit}
                className={styles.bmiCalc__details_label}
              >
                <input
                  type="number"
                  id={input.id}
                  maxLength={5}
                  placeholder="0"
                  className={styles.bmiCalc__details_input}
                  autoComplete="off"
                  onChange={(e) =>
                    handleInputChange(e, input.unit, input.onChange)
                  }
                />
                <span className={styles.bmiCalc__details_inputUnit}>
                  {input.unit}
                </span>
              </label>
            ))}
          </div>
        </div>
        <div className={styles.bmiCalc__details_inputGroup}>
          <span>Weight</span>
          <div className={styles.bmiCalc__details_inputWrapper}>
            {weightInputs.map((input) => (
              <label
                htmlFor={input.id}
                key={input.unit}
                className={styles.bmiCalc__details_label}
              >
                <input
                  type="number"
                  id={input.id}
                  maxLength={5}
                  placeholder="0"
                  className={styles.bmiCalc__details_input}
                  autoComplete="off"
                  onChange={(e) =>
                    handleInputChange(e, input.unit, input.onChange)
                  }
                />
                <span className={styles.bmiCalc__details_inputUnit}>
                  {input.unit}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
      <BmiFormMessage
        bmi={bmi}
        idealMaxWeight={idealMaxWeight}
        idealMinWeight={idealMinWeight}
        isMetric={isMetric}
      />
    </div>
  );
}

function BmiFormMessage(props: {
  bmi: string;
  idealMinWeight: number;
  idealMaxWeight: number;
  isMetric: boolean;
}) {
  const { bmi } = props;
  let weightClassification = "";
  if (bmi.length > 0) {
    if (Number(bmi) < 18.5 || bmi === "10 -") {
      weightClassification = "underweight";
    } else if (Number(bmi) < 24.9) {
      weightClassification = "a healthy weight";
    } else if (Number(bmi) < 29.9) {
      weightClassification = "overweight";
    } else {
      weightClassification = "obese";
    }
  }

  return bmi.length > 0 ? (
    <div className={styles.bmiCalc__result}>
      <div className={styles.bmiCalc__result_bmi}>
        <p className={styles.bmiCalc__result_text}>Your BMI is...</p>
        <p className={styles.bmiCalc__result_value}>{bmi}</p>
      </div>
      <p className={styles.bmiCalc__result_message}>
        Your BMI suggests you&apos;re {weightClassification}. Your ideal weight
        is between{" "}
        <span className={styles.bmiCalc__result_ideal}>
          {props.idealMinWeight.toFixed(2)} - {props.idealMaxWeight.toFixed(2)}{" "}
          {props.isMetric ? "kg" : "lbs"}.
        </span>
      </p>
    </div>
  ) : (
    <div
      className={`${styles.bmiCalc__result} ${styles.bmiCalc__result_noData}`}
    >
      <div className={styles.bmiCalc__result_bmi}>
        <h3 className={styles.bmiCalc__result_welcome}>Welcome</h3>
      </div>
      <p className={styles.bmiCalc__result_message}>
        Enter your height and weight and you&apos;ll see your BMI result here.
      </p>
    </div>
  );
}
