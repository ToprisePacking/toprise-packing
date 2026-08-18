// ===== Toprise Packing - Main JavaScript =====

document.addEventListener('DOMContentLoaded', function() {

  // ===== Mobile Menu Toggle =====
  var hamburger = document.getElementById('hamburger');
  var nav = document.querySelector('.main-nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', function() {
      nav.classList.toggle('open');
    });
    // Close menu when a link is clicked
    nav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        nav.classList.remove('open');
      });
    });
  }

  // ===== Product Filter (products.html) =====
  var filterTabs = document.getElementById('filterTabs');
  if (filterTabs) {
    var tabs = filterTabs.querySelectorAll('button');
    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        // Update active state
        tabs.forEach(function(t) { t.classList.remove('active'); });
        tab.classList.add('active');

        var cat = tab.getAttribute('data-cat');
        var cards = document.querySelectorAll('#productGrid .product-card');

        cards.forEach(function(card) {
          if (cat === 'all' || card.getAttribute('data-cat') === cat) {
            card.classList.remove('is-hidden');
          } else {
            card.classList.add('is-hidden');
          }
        });
      });
    });

    // Check URL param for category filter
    var urlParams = new URLSearchParams(window.location.search);
    var catParam = urlParams.get('cat');
    if (catParam) {
      var targetTab = filterTabs.querySelector('[data-cat="' + catParam + '"]');
      if (targetTab) {
        tabs.forEach(function(t) { t.classList.remove('active'); });
        targetTab.classList.add('active');
        targetTab.click();
      }
    }
  }

  // ===== Smooth Scroll for Anchor Links =====
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target && this.getAttribute('href') !== '#') {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ===== Header Shadow on Scroll =====
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.12)';
      } else {
        header.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
      }
    });
  }

});
