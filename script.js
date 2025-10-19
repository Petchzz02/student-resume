// script.js - simple interaction for Resume
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('actionBtn');
  btn.addEventListener('click', showMessage);
});

function showMessage(){
  alert('สวัสดี! ขอบคุณที่เยี่ยมชมเรซูเม่ของฉัน.');
}
