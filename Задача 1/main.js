window.addEventListener('DOMContentLoaded', function () {
   const topButton = document.querySelector('.topbutton');

   if (topButton) {
      topButton.addEventListener('click', function name() {
         window.scrollTo({
            top: 0,
            behavior: 'smooth',
         });
      });

      window.addEventListener('scroll', function () {
         const scrolled = window.pageYOffset || document.documentElement.scrollTop;

         if (scrolled >= 800) {
            topButton.classList.add('show');
         } else {
            topButton.classList.remove('show');
         }
      });
   }
});