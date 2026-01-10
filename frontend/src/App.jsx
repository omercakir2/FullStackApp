import { useEffect, useState } from 'react'

function App() {
  const [mesaj, setMesaj] = useState("Yükleniyor...")

  useEffect(() => {
    // Django'nun adresine istek atıyoruz
    fetch('http://localhost:8000/api/test/')
      .then(res => res.json())
      .then(data => setMesaj(data.mesaj))
      .catch(err => setMesaj("Django'ya ulaşılamadı!"))
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'sans-serif' }}>
      <h1>React + Django Bağlantısı</h1>
      <div style={{ padding: '20px', border: '1px solid #ddd', display: 'inline-block' }}>
        <p>Backend'den gelen cevap:</p>
        <h2 style={{ color: '#007bff' }}>{mesaj}</h2>
      </div>
    </div>
  )
}

export default App