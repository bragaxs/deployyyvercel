"use client";

import { useState, useEffect } from "react";

export default function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) return null;

    return {
      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return <h2 style={{ textAlign: "center", fontSize: "28px" }}>🎉 Parabéns, chegou o grande dia da nossa formatura! 🎉</h2>;
  }

  return (
    <div style={{ textAlign: "center", fontSize: "24px", margin: "20px 0" }}>
      {timeLeft.dias} dias {timeLeft.horas} h {timeLeft.minutos} m {timeLeft.segundos} s
    </div>
  );
}
