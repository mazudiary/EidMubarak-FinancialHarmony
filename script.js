window.addEventListener('DOMContentLoaded', function () {
  const mobileBg = 'assets/bg_mobile.webp';
  const desktopBg = 'assets/bg_desktop.webp';

  const isMobile = window.innerWidth <= 768;
  document.body.style.backgroundImage = `url('${isMobile ? mobileBg : desktopBg}')`;
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundAttachment = 'fixed';
  document.body.style.fontSize = "0.6em";
});
