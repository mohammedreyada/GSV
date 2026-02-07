document.addEventListener('DOMContentLoaded', () => {
  // Initialize EmailJS
  emailjs.init("3pmhJO5zmuq2EPNgZ");

  const contactForm = document.getElementById('sidra-contact-form');
  const alertBox = document.getElementById('form-alert');

  // حماية لو الفورم مش موجود
  if (!contactForm) return;

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // يمنع الفورم من الإرسال الطبيعي

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = "Sending...";

    // عرض رسالة مؤقتة
    alertBox.textContent = "📤 جاري إرسال الرسالة...";
    alertBox.style.color = "blue";

    emailjs.sendForm('service_wxii7xk', 'template_hgqfam7', this)
      .then(() => {
        alertBox.textContent = "✅ تم إرسال رسالتك بنجاح!";
        alertBox.style.color = "green";
        contactForm.reset();

        // إزالة الرسالة بعد 3 ثواني
        setTimeout(() => {
          alertBox.textContent = "";
        }, 3000);
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        alertBox.textContent = "❌ حدث خطأ أثناء الإرسال. تحقق من Console.";
        alertBox.style.color = "red";

        setTimeout(() => {
          alertBox.textContent = "";
        }, 3000);
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      });
  });
});
document.querySelectorAll(".strength-item").forEach(item => {
    const btn = item.querySelector(".toggle-btn");

    btn.addEventListener("click", () => {
      document.querySelectorAll(".strength-item").forEach(i => {
        if (i !== item) i.classList.remove("active");
      });

      item.classList.toggle("active");
    });
  });