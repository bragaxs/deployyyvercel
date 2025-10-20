"use client";

import Countdown from "./components/countdown";

export default function Home() {
  const graduationDate = "2025-12-25T00:00:00";

  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '800px',
      width: '100%',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '36px', marginBottom: '20px' }}>
        Contador para a Formatura - Info 6B 2025
      </h1>

      <Countdown targetDate={graduationDate} />

      <p style={{ marginTop: '20px', fontSize: '20px' }}>
        Depois da formatura, pretendo curtir com meus amigos, aproveitar as férias!
      </p>


      
    </main>
  );
}
