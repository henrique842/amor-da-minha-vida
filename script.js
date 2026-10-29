const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const photoModal = document.getElementById('photoModal');
const uploadImg = document.getElementById('uploadImg');
const coupleImg = document.getElementById('coupleImg');

// Abrir a janela modal ao clicar no botão
openModalBtn.addEventListener('click', () => {
  photoModal.style.display = 'flex';
});

// Fechar a janela modal ao clicar no botão 'X'
closeModalBtn.addEventListener('click', () => {
  photoModal.style.display = 'none';
});

// Fechar a janela modal ao clicar fora da caixa do conteúdo
window.addEventListener('click', (event) => {
  if (event.target === photoModal) {
    photoModal.style.display = 'none';
  }
});

// Carregar nova foto do dispositivo
uploadImg.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      coupleImg.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});