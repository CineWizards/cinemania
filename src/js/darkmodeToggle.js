// Darkmode ve Lightmode arasında geçiş yaptıran butonu aktifleştirme, "body" etiketine "lightmode" class eklenip çıkarılacak.
// Buton stili darkmode ve lightmode için değişecek.


document.addEventListener('DOMContentLoaded', function () {
  const modeToggle = document.getElementById('modeToggle');
  const body = document.body;

  console.log('Script çalıştı, buton durumu:', modeToggle.checked);  // Butonun başlangıç durumunu kontrol et')

  // Önceki ayarı kontrol et ve uygulamaya koy
  const currentMode = localStorage.getItem('mode');
  if (currentMode) {
    body.classList.toggle('lightmode', currentMode === 'light');
    modeToggle.checked = currentMode === 'light';
  }

  // Toggle işlemi
  modeToggle.addEventListener('change', function () {
    if (modeToggle.checked) {
      body.classList.add('lightmode');
      localStorage.setItem('mode', 'light');
    } else {
      body.classList.remove('lightmode');
      localStorage.setItem('mode', 'dark');
    }
  });
});





