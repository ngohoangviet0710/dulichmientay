function createModal() {
  // Tránh tạo trùng nếu đã có modal trên trang
  const existed = document.getElementById('contactModal');
  if (existed) {
    existed.classList.add('active');
    return existed;
  }

  // Inject CSS cho modal (chỉ 1 lần)
  if (!document.getElementById('contactModalStyle')) {
    const style = document.createElement('style');
    style.id = 'contactModalStyle';
    style.textContent = `
      .contact-modal-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.5);
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: 20px;
      }
      .contact-modal-overlay.active {
        display: flex;
      }
      .contact-modal {
        background: #fff;
        border-radius: 10px;
        max-width: 360px;
        width: 100%;
        padding: 28px 24px;
        text-align: center;
        position: relative;
        font-family: 'Be Vietnam Pro', Arial, sans-serif;
      }
      .contact-modal-close {
        position: absolute;
        top: 12px;
        right: 12px;
        width: 30px;
        height: 30px;
        border: none;
        background: #F7F7F7;
        border-radius: 50%;
        font-size: 16px;
        cursor: pointer;
        color: #666;
        line-height: 1;
      }
      .contact-modal-close:hover {
        background: rgba(212,42,42,0.08);
        color: var(--red, #D42A2A);
      }
      .contact-modal h3 {
        margin: 0 0 6px;
        font-size: 18px;
        font-weight: 700;
        color: #222;
      }
      .contact-modal p.contact-modal-sub {
        margin: 0 0 20px;
        font-size: 13.5px;
        color: #666;
      }
      .contact-modal-info {
        text-align: left;
        font-size: 14px;
        color: #222;
        margin-bottom: 18px;
      }
      .contact-modal-info div {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 0;
        border-bottom: 1px dashed #E5E5E5;
      }
      .contact-modal-info div:last-child {
        border-bottom: none;
      }
      .contact-modal-info b {
        color: var(--red, #D42A2A);
      }
      .contact-modal-qr {
        border: 1px solid #E5E5E5;
        border-radius: 8px;
        padding: 12px;
        margin-bottom: 10px;
      }
      .contact-modal-qr img {
        width: 160px;
        height: 160px;
        object-fit: contain;
        display: block;
        margin: 0 auto 8px;
      }
      .contact-modal-qr span {
        font-size: 12.5px;
        color: #666;
      }
    `;
    document.head.appendChild(style);
  }

  // Tạo overlay + modal
  const overlay = document.createElement('div');
  overlay.className = 'contact-modal-overlay';
  overlay.id = 'contactModal';

  overlay.innerHTML = `
    <div class="contact-modal">
      <button class="contact-modal-close" aria-label="Đóng">&times;</button>
      <h3>Thông tin liên hệ</h3>
      <p class="contact-modal-sub">Liên hệ ngay để được tư vấn tour phù hợp</p>
      <div class="contact-modal-info">
        <div>Điện thoại: <b><a href="tel:0934444738" style="color:inherit;text-decoration:none;">093.4444.738</a></b></div>
        <div>Email: <b><a href="mailto:ngohoangviet0710@gmail.com" style="color:inherit;text-decoration:none;">ngohoangviet0710@gmail.com</a></b></div>
      </div>
      <div class="contact-modal-qr">
        <img src="/image/contact/qr.jpg" alt="QR liên hệ Zalo">
        <span>Quét mã QR để chat Zalo</span>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  // Đóng modal
  const closeModal = () => overlay.classList.remove('active');
  overlay.querySelector('.contact-modal-close').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Hiển thị
  requestAnimationFrame(() => overlay.classList.add('active'));

  return overlay;
}