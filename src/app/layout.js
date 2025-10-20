export const metadata = {
  title: 'Contador de Formatura - Vitorio Braga',
  description: 'Contador regressivo para a formatura da turma 2025',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{
        margin: 0,
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#6c63ff',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px'
      }}>
        {children}
      </body>
    </html>
  )
}
