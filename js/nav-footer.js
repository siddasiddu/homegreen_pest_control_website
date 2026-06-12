// nav-footer.js — injects shared navbar + footer + WhatsApp button into every page

(function () {
  const navHTML = `
  <nav class="navbar">
    <a href="index.html" class="nav-logo">
        <img src="images/logo.jpg" alt="Home Green Pest Control Logo" class="logo-img">
        <div class="nav-logo-text">
        <span>Home Green</span>
        <span>Pest Control Services</span>
      </div>
    </a>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="services.html">Services</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="contact.html" class="nav-cta">📞 Book Now</a></li>
    </ul>
    <button class="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="mobile-nav">
    <a href="index.html">🏠 Home</a>
    <a href="services.html">🛡️ Services</a>
    <a href="about.html">ℹ️ About Us</a>
    <a href="contact.html">📞 Contact</a>
  </div>`;

  const footerHTML = `
  <footer>
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo-text">Home <span>Green</span><br>Pest Control</div>
        <p>Experts in Pre-Termite Treatment, Cockroach Control, Bed Bug Control & more. Serving Hyderabad with professional, safe & effective pest management.</p>
        <div class="footer-social">
          <a href="https://wa.me/918143208911" class="social-btn" target="_blank" title="WhatsApp">💬</a>
          <a href="https://youtube.com/@siddusidda6081" class="social-btn" target="_blank" title="YouTube">▶️</a>
          <a href="https://maps.app.goo.gl/H79Dakn17jv8Vs8BA" class="social-btn" target="_blank" title="Location">📍</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <a href="services.html">Pre-Termite Treatment</a>
        <a href="services.html">Cockroach Control</a>
        <a href="services.html">Bed Bug Control</a>
        <a href="services.html">Mosquito Control</a>
        <a href="services.html">Rodent Control</a>
        <a href="services.html">General Pest Control</a>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <a href="tel:+918143208911">📞 81432 08911</a>
        <a href="mailto:siddasiddu251@gmail.com">✉️ siddasiddu251@gmail.com</a>
        <p>📍 Kukatpally, Hyderabad – 500055</p>
        <a href="contact.html">🗓️ Book Inspection</a>
      </div>
    </div>
    <div class="footer-bottom">© 2024 Home Green Pest Control Services, Hyderabad. All rights reserved.</div>
  </footer>
  <a href="https://wa.me/918143208911?text=Hello%20Home%20Green%20Pest%20Control!%20I%20need%20pest%20control%20services." 
     class="whatsapp-float" target="_blank" title="Chat on WhatsApp">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </a>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
