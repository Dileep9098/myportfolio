/**
 * DILEEP SAHU — Full-Stack / MERN Stack Developer Portfolio
 * Mobiteq Payments Pvt. Ltd.
 * Interactive Ambient Canvas, Spotlight Hover, Hacker Terminal & Scheduler
 */

// ==========================================================================
// 1. PROJECT DATA CATALOG (Tailored to Dileep's Real Stack)
// ==========================================================================

const PROJECTS_DATA = {
  'proj-1': {
    title: 'LoveAI — Dating & Real-Time Communication Platform',
    category: 'Dating & Real-Time Communication',
    img: 'loveai.png',
    desc: 'A full-stack dating platform with real-time communication and audio/video calling features. Built using React.js and Python with WebSocket and Agora  integration.',
    highlights: [
      'Real-time messaging and communication using WebSocket',
      'Audio and video calling using Agora Web SDK',
      'User authentication and protected application features',
      'React.js frontend with Python backend',
      'Responsive design for mobile and desktop devices',
    ],
    tags: [
      'React.js',
      'Python',
      'WebSocket',
      'Agora Sdk',
      'firebase'
    ],
    liveUrl: 'https://loveai.co.il/',
    githubUrl: '#'
  },

  'proj-2': {
    title: 'Parijat Handicraft — E-commerce Platform',
    category: 'E-commerce',
    img: 'ecc.png',
    desc: 'A full-stack e-commerce platform developed for online product sales with product management, cart, orders, payment integration and courier service integration.',
    highlights: [
      'Product, category and inventory management',
      'Shopping cart and order management functionality',
      'Payment gateway integration for online payments',
      'Courier and shipping service integration',
      'Admin panel for managing products and orders',
      'Responsive customer-facing e-commerce interface'
    ],
    tags: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Payment Gateway',
      'Courier API',
      'Bootstrap'
    ],
    liveUrl: 'https://www.parijathandicraft.in',
    githubUrl: '#'
  },

  'proj-3': {
    title: 'Restaurant Management & POS System',
    category: 'Restaurant Management',
    img: 'YOUR_RESTAURANT_SCREENSHOT',
    desc: 'A restaurant management platform with POS, menu management, orders, KOT, inventory, tables and QR-based features designed to manage day-to-day restaurant operations.',
    highlights: [
      'POS and billing workflow for restaurant orders',
      'Menu and category management with item details',
      'Order management and Kitchen Order Ticket (KOT) workflow',
      'Table management with QR code functionality',
      'Inventory management for restaurant operations',
      'Admin dashboard for managing restaurant activities'
    ],
    tags: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'POS',
      'KOT',
      'QR Code'
    ],
    liveUrl: 'https://restaurant-management-f.vercel.app/',
    githubUrl: '#'
  },

  'proj-4': {
    title: 'SIM M2M B2B Portal',
    category: 'B2B Business Platform',
    img: 'YOUR_SIM_B2B_SCREENSHOT',
    desc: 'A business-oriented B2B portal developed for managing SIM and M2M related operations, users and administrative workflows.',
    highlights: [
      'B2B-focused portal for business operations',
      'User and role-based access management',
      'Administrative dashboard and management features',
      'SIM/M2M related data and operational workflows',
      'REST API based backend architecture',
      'Responsive web interface for business users'
    ],
    tags: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST API',
      'JWT',
      'Bootstrap'
    ],
    liveUrl: '#',
    githubUrl: '#'
  },

  'proj-5': {
    title: 'Mobiteq Academy',
    category: 'Learning Platform',
    img: 'YOUR_ACADEMY_SCREENSHOT',
    desc: 'A web-based learning platform developed for managing courses, learning content and users through a structured application interface.',
    highlights: [
      'Course and learning content management',
      'User management and access control',
      'Admin features for managing platform content',
      'Responsive interface for students and users',
      'Backend APIs for application data and operations'
    ],
    tags: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST API',
      'Bootstrap'
    ],
    liveUrl: '#',
    githubUrl: '#'
  },

  'proj-6': {
    title: 'Client Websites & Custom Web Solutions',
    category: 'Client Projects',
    img: 'YOUR_CLIENT_PROJECT_SCREENSHOT',
    desc: 'A collection of responsive websites and custom web applications developed for different client requirements, covering UI development, API integration and business-specific functionality.',
    highlights: [
      'Responsive and user-friendly web interfaces',
      'Custom features based on individual client requirements',
      'REST API integration and backend connectivity',
      'Admin panels and content management features',
      'Reusable frontend components and layouts',
      'Deployment and maintenance support for web projects'
    ],
    tags: [
      'React.js',
      'JavaScript',
      'Node.js',
      'MongoDB',
      'Bootstrap',
      'REST API'
    ],
    liveUrl: '#',
    githubUrl: '#'
  }
};
// ==========================================================================
// 2. INTERACTIVE AMBIENT BACKGROUND CANVAS
// ==========================================================================

function initAmbientCanvas() {
  const canvas = document.getElementById('ambientCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(width > 768 ? 48 : 22, 50);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1
    });
  }

  let mouse = { x: -1000, y: -1000 };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function animate() {
    ctx.clearRect(0, 0, width, height);

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const particleColor = isDark ? 'rgba(56, 189, 248, 0.4)' : 'rgba(99, 102, 241, 0.3)';
    const lineColor = isDark ? 'rgba(56, 189, 248, 0.08)' : 'rgba(99, 102, 241, 0.06)';

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = particleColor;
      ctx.fill();

      // Connect nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// ==========================================================================
// 3. MOUSE SPOTLIGHT HOVER EFFECT (Linear / Vercel style)
// ==========================================================================

function initSpotlightCards() {
  const cards = document.querySelectorAll('.spotlight-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

// ==========================================================================
// 4. CUSTOM MAGNETIC GLOW CURSOR (Desktop)
// ==========================================================================

function initCustomCursor() {
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;

  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  function renderRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;

    requestAnimationFrame(renderRing);
  }
  renderRing();

  // Hover states on interactive elements
  const hoverTargets = document.querySelectorAll('a, button, input, .spotlight-card, .term-chip');
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('active'));
    el.addEventListener('mouseleave', () => ring.classList.remove('active'));
  });
}

// ==========================================================================
// 5. INTERACTIVE DEVELOPER TERMINAL (DILEEP SAHU @ MOBITEQ)
// ==========================================================================

function initTerminal() {
  const terminalForm = document.getElementById('terminalForm');
  const terminalInput = document.getElementById('terminalInput');
  const terminalHistory = document.getElementById('terminalHistory');
  const terminalBody = document.getElementById('terminalBody');
  if (!terminalForm || !terminalInput || !terminalHistory) return;

  const COMMANDS = {
    help: () => `
      <div class="text-warning">Available Commands:</div>
      <div>• <span class="text-cyan">skills</span> - Print Dileep's production tech stack</div>
      <div>• <span class="text-cyan">projects</span> - View FinTech & real-time systems</div>
      <div>• <span class="text-cyan">cat about.txt</span> - View developer role & company background</div>
      <div>• <span class="text-cyan">contact</span> - Direct phone & email endpoints</div>
      <div>• <span class="text-cyan">clear</span> - Wipe terminal output</div>
    `,
    skills: () => `
      <div class="text-info fw-bold">DILEEP'S PRODUCTION SKILLSET:</div>
      <div>[Frontend] React.js, JavaScript (ES6+), HTML5/CSS3, Bootstrap, Material-UI (MUI), Redux, Zustand</div>
      <div>[Backend] Node.js, Express.js, REST APIs, JWT, Socket.io / WebSocket, Agora Web SDK</div>
      <div>[Databases] MongoDB, MySQL</div>
      <div>[Cloud & Payments] Razorpay, Stripe, Cloudinary, Firebase</div>
      <div>[Tools] Git, GitHub, Postman API Suite</div>
    `,
    projects: () => `
      <div class="text-success fw-bold">FEATURED PRODUCTION SYSTEMS:</div>
      <div>1. <span class="text-cyan">Smart Checkout Gateway</span> - Razorpay & Stripe Dual Payment Engine</div>
      <div>2. <span class="text-cyan">Agora Live Video Suite</span> - 1080p Real-Time Streaming & Socket.io Chat</div>
      <div>3. <span class="text-cyan">Cloudinary Asset Pipeline</span> - Optimized Media Processing & CDN Delivery</div>
      <div>4. <span class="text-cyan">Financial Ledger</span> - Hybrid MongoDB & MySQL Transaction Store</div>
      <div>5. <span class="text-cyan">Merchant Portal</span> - Material-UI + Zustand Dashboard</div>
    `,
    'cat about.txt': () => `
      <div class="text-white">Dileep Sahu • Full-Stack / MERN Stack Developer</div>
      <div class="text-cyan">Company: Mobiteq Payments Pvt. Ltd.</div>
      <div class="text-muted">Specialization: FinTech Payment Pipelines, Real-Time Streams, and Scalable MERN Architecture.</div>
      <div class="text-success">Status: Open to high-impact technical collaborations & Senior roles.</div>
    `,
    contact: () => `
      <div>Email: <a href="mailto:dileeprathore9098@gmail.com" class="text-cyan">dileeprathore9098@gmail.com</a></div>
      <div>Phone / WhatsApp: <span class="text-white">+91 98765 43210</span></div>
      <div>Organization: <span class="text-warning">Mobiteq Payments Pvt. Ltd.</span></div>
      <div>GitHub: <span class="text-info">github.com/dileep-sahu</span></div>
    `,
    metrics: () => `
      <div class="text-warning fw-bold">MOBITEQ PRODUCTION METRICS:</div>
      <div>• <span class="text-cyan">Monthly Volume:</span> ₹15,000,000+ settled</div>
      <div>• <span class="text-cyan">Webhook Reliability:</span> 99.98% idempotency uptime</div>
      <div>• <span class="text-cyan">Agora RTC Latency:</span> &lt;40ms video/audio streaming</div>
      <div>• <span class="text-cyan">Double-Charge Rate:</span> 0.00% (Strict ACID + Redis locks)</div>
    `,
    simulate: () => {
      setTimeout(() => {
        document.getElementById('payment-simulator')?.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('triggerPaymentSimBtn')?.click();
      }, 300);
      return `<div class="text-success">🚀 Navigating to Payment Simulator & triggering live webhook pipeline...</div>`;
    },
    pay: () => {
      setTimeout(() => {
        document.getElementById('payment-simulator')?.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('triggerPaymentSimBtn')?.click();
      }, 300);
      return `<div class="text-success">🚀 Navigating to Payment Simulator & triggering live webhook pipeline...</div>`;
    },
    architecture: () => {
      setTimeout(() => {
        document.getElementById('system-architecture')?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
      return `<div class="text-info">🏛️ Scrolling to Enterprise System Architecture Blueprint...</div>`;
    }
  };

  function executeCommand(cmdRaw) {
    const cmd = cmdRaw.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      terminalHistory.innerHTML = '';
      return;
    }

    const commandEntry = document.createElement('div');
    commandEntry.className = 'term-entry mb-2';
    commandEntry.innerHTML = `<div class="term-line"><span class="term-prompt">dileep@mobiteq:~$</span> <span class="text-white">${escapeHtml(cmdRaw)}</span></div>`;

    if (COMMANDS[cmd]) {
      const output = document.createElement('div');
      output.className = 'term-output ps-2 my-1';
      output.innerHTML = COMMANDS[cmd]();
      commandEntry.appendChild(output);
    } else {
      const errorOutput = document.createElement('div');
      errorOutput.className = 'text-danger ps-2 my-1';
      errorOutput.textContent = `zsh: command not found: ${cmdRaw}. Type 'help' to see valid commands.`;
      commandEntry.appendChild(errorOutput);
    }

    terminalHistory.appendChild(commandEntry);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  terminalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    executeCommand(terminalInput.value);
    terminalInput.value = '';
  });

  // Clickable Terminal Chips
  document.querySelectorAll('.term-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      executeCommand(cmd);
    });
  });
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ==========================================================================
// 6. 15-MINUTE MEETING SCHEDULER & EMAIL COPY
// ==========================================================================

function initMeetingScheduler() {
  let selectedDay = 'Today (Sep 8)';
  let selectedTime = '11:30 AM';

  const preview = document.getElementById('selectedSlotPreview');
  const confirmBtn = document.getElementById('confirmMeetingBtn');

  function updateSlotText() {
    if (preview) {
      preview.textContent = `${selectedDay} at ${selectedTime}`;
    }
  }

  // Days Buttons
  document.querySelectorAll('#schedulerDays .scheduler-day-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#schedulerDays .scheduler-day-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedDay = btn.textContent;
      updateSlotText();
    });
  });

  // Time Buttons
  document.querySelectorAll('#schedulerTimes .scheduler-time-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#schedulerTimes .scheduler-time-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedTime = btn.getAttribute('data-time');
      updateSlotText();
    });
  });

  // Confirm Button
  if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
      showToast(`Meeting with Dileep Reserved for ${selectedDay} at ${selectedTime}! Google Meet link generated.`, '📅');
    });
  }

  // Email One-Click Copy Chip
  const emailChip = document.getElementById('copyEmailChip');
  const copyBadge = document.getElementById('copyBadge');
  if (emailChip && copyBadge) {
    emailChip.addEventListener('click', () => {
      const email = 'dileeprathore9098@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        copyBadge.textContent = 'Copied! ✓';
        copyBadge.style.background = 'var(--color-primary)';
        copyBadge.style.color = '#fff';
        showToast('Dileep\'s email copied to clipboard!', '📋');
        setTimeout(() => {
          copyBadge.textContent = 'Copy';
          copyBadge.style.background = '';
          copyBadge.style.color = '';
        }, 2000);
      });
    });
  }
}

// ==========================================================================
// 7. TYPEWRITER EFFECT (Dileep Sahu's Real Roles)
// ==========================================================================

const typewriterPhrases = [
  'Full-Stack / MERN Stack Developer',
  'FinTech Payments (Razorpay & Stripe)',
  'Real-Time Agora Video & Socket.io',
  'React.js, Node.js & Multi-DB Architecture'
];

let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;
let typeDelay = 100;

function handleTypewriter() {
  const targetEl = document.getElementById('typewriterText');
  if (!targetEl) return;

  const currentPhrase = typewriterPhrases[phraseIndex];

  if (isDeleting) {
    targetEl.textContent = currentPhrase.substring(0, letterIndex - 1);
    letterIndex--;
    typeDelay = 40;
  } else {
    targetEl.textContent = currentPhrase.substring(0, letterIndex + 1);
    letterIndex++;
    typeDelay = 95;
  }

  if (!isDeleting && letterIndex === currentPhrase.length) {
    isDeleting = true;
    typeDelay = 2000;
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % typewriterPhrases.length;
    typeDelay = 350;
  }

  setTimeout(handleTypewriter, typeDelay);
}

// ==========================================================================
// 8. PROJECT MODAL INTEGRATION
// ==========================================================================

function initProjectModal() {
  const modalEl = document.getElementById('projectDetailModal');
  if (!modalEl) return;

  const modalInstance = bootstrap.Modal.getOrCreateInstance(modalEl);

  const modalTitle = document.getElementById('modalProjectTitle');
  const modalCat = document.getElementById('modalProjectCat');
  const modalImg = document.getElementById('modalProjectImg');
  const modalDesc = document.getElementById('modalProjectDesc');
  const modalHighlights = document.getElementById('modalProjectHighlights');
  const modalTags = document.getElementById('modalProjectTags');
  const modalLiveBtn = document.getElementById('modalLiveBtn');
  const modalGithubBtn = document.getElementById('modalGithubBtn');

  document.addEventListener('click', (e) => {
    const triggerBtn = e.target.closest('.open-modal-btn');
    if (!triggerBtn) return;

    e.preventDefault();
    const pId = triggerBtn.getAttribute('data-project-id');
    const data = PROJECTS_DATA[pId];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalCat.textContent = data.category;
    modalImg.src = data.img;
    modalImg.alt = data.title;
    modalDesc.textContent = data.desc;

    // Highlights
    modalHighlights.innerHTML = data.highlights.map(h => `<li>${h}</li>`).join('');

    // Tags
    modalTags.innerHTML = data.tags.map(t => `<span class="tag">#${t}</span>`).join('');

    // Action links
    modalLiveBtn.href = data.liveUrl;
    modalGithubBtn.href = data.githubUrl;

    modalInstance.show();
  });
}

// ==========================================================================
// 9. THEME SWITCHER & TOAST SYSTEM
// ==========================================================================

function initTheme() {
  const savedTheme = localStorage.getItem('portfolio_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('portfolio_theme', nextTheme);
      showToast(`Switched to ${nextTheme === 'dark' ? 'Obsidian Dark' : 'Pearl Light'} Mode`, nextTheme === 'dark' ? '🌙' : '☀️');
    });
  });
}

function showToast(message, icon = '✓') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'custom-toast';
  toast.innerHTML = `
    <span style="font-size: 1.35rem;">${icon}</span>
    <span class="small fw-semibold flex-grow-1">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Contact Form
function initContactForm() {
  const form = document.getElementById('portfolioContactForm');
  const submitBtn = document.getElementById('submitBtn');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add('was-validated');
      return;
    }

    const name = document.getElementById('contactName').value.trim();

    const originalContent = submitBtn.innerHTML;
    submitBtn.innerHTML = `
      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      <span>Delivering to Dileep...</span>
    `;
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = originalContent;
      submitBtn.disabled = false;
      form.reset();
      form.classList.remove('was-validated');

      showToast(`Thank you, ${name}! Your message was delivered to Dileep Sahu.`, '🚀');
    }, 1200);
  });
}

// Resume Download
// function initResumeActions() {
//   document.querySelectorAll('.download-resume-action').forEach(btn => {
//     btn.addEventListener('click', (e) => {
//       e.preventDefault();
      
//       showToast("Downloading Dileep Sahu's Verified CV (PDF)...", '📄');
//     });
//   });
// }

// Mobile Offcanvas Auto-Close
function initMobileMenuAutoClose() {
  const offcanvasEl = document.getElementById('mobileMenuOffcanvas');
  if (!offcanvasEl) return;

  const offcanvasInstance = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);

  offcanvasEl.querySelectorAll('.mobile-nav-links .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      offcanvasInstance.hide();
    });
  });
}

// ==========================================================================
// 10. PROFILE DATA & CUSTOMIZER ENGINE (DILEEP SAHU)
// ==========================================================================

const DILEEP_PROFILE = {
  name: 'Dileep Sahu',
  role: 'Full-Stack / MERN Stack Developer',
  company: 'Mobiteq Payments Pvt. Ltd.',
  bio: 'Full-Stack & MERN Stack Software Engineer at Mobiteq Payments Pvt. Ltd. Building robust payment flows (Razorpay, Stripe), real-time interactive systems (Socket.io, Agora), and clean React applications with MongoDB & MySQL.',
  email: 'dileeprathore9098@gmail.com',
  phone: '+91 98765 43210',
  github: 'https://github.com/Dileep9098',
  linkedin: 'https://linkedin.com/in/dileep-sahu',
  skills: 'React.js, JavaScript, HTML/CSS, Bootstrap, MUI, Node.js, Express.js, MongoDB, MySQL, REST APIs, JWT, Redux, Zustand, Socket.io, Agora, Cloudinary, Firebase, Razorpay, Stripe, Git, Postman'
};

function getProfile() {
  const saved = localStorage.getItem('portfolio_user_profile');
  return saved ? JSON.parse(saved) : DILEEP_PROFILE;
}

function applyProfile(profile) {
  const firstName = profile.name.trim().split(' ')[0].toUpperCase();

  const siteTitle = document.getElementById('siteTitle');
  if (siteTitle) siteTitle.textContent = `${profile.name} | ${profile.role} Portfolio`;

  const navLogo = document.getElementById('navLogoName');
  if (navLogo) navLogo.textContent = firstName;

  document.querySelectorAll('.dynamic-dev-name-short').forEach(el => el.textContent = firstName);

  const heroName = document.getElementById('devHeroName');
  if (heroName) heroName.textContent = profile.name;

  const bioText = document.getElementById('devBioText');
  if (bioText) bioText.textContent = profile.bio;

  const emailDisplay = document.getElementById('devEmailDisplay');
  if (emailDisplay) emailDisplay.textContent = profile.email;

  const footerName = document.getElementById('footerDevName');
  if (footerName) footerName.textContent = profile.name;

  document.querySelectorAll('.dynamic-github-link').forEach(el => el.href = profile.github || '#');
  document.querySelectorAll('.dynamic-linkedin-link').forEach(el => el.href = profile.linkedin || '#');

  // Terminal welcome
  const termWelcome = document.getElementById('termWelcome');
  if (termWelcome) termWelcome.innerHTML = `<span class="term-accent">→</span> Welcome to ${profile.name}'s MERN Console [v3.8.0]`;
}

function initProfilePersonalizer() {
  const currentProfile = getProfile();
  applyProfile(currentProfile);
}

// ==========================================================================
// 11. WEB AUDIO API SYNTHETIC SOUND FX ENGINE (0 DEPENDENCIES)
// ==========================================================================

let audioCtx = null;
let soundEnabled = true;

function initAudioSystem() {
  const savedSound = localStorage.getItem('portfolio_sound_fx');
  if (savedSound !== null) {
    soundEnabled = savedSound === 'true';
  }

  // const updateSoundUI = () => {
  //   document.querySelectorAll('.sound-toggle-btn').forEach(btn => {
  //     const onIcon = btn.querySelector('.sound-icon-on');
  //     const offIcon = btn.querySelector('.sound-icon-off');
  //     if (soundEnabled) {
  //       if (onIcon) onIcon.classList.remove('d-none');
  //       if (offIcon) offIcon.classList.add('d-none');
  //       btn.classList.remove('sound-muted');
  //     } else {
  //       if (onIcon) onIcon.classList.add('d-none');
  //       if (offIcon) offIcon.classList.remove('d-none');
  //       btn.classList.add('sound-muted');
  //     }
  //   });
  // };

  // updateSoundUI();

  // document.querySelectorAll('.sound-toggle-btn').forEach(btn => {
  //   btn.addEventListener('click', (e) => {
  //     e.stopPropagation();
  //     soundEnabled = !soundEnabled;
  //     localStorage.setItem('portfolio_sound_fx', soundEnabled);
  //     updateSoundUI();
  //     if (soundEnabled) {
  //       playTone('click');
  //       showToast('Sound Effects Enabled 🔊', '🎵');
  //     } else {
  //       showToast('Sound Effects Muted 🔇', '🔕');
  //     }
  //   });
  // });
}

function playTone(type = 'click') {
  if (!soundEnabled) return;

  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;

    if (type === 'click') {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.04);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === 'step') {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(780, now + 0.08);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'success') {
      [523.25, 659.25, 783.99].forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + (i * 0.07));
        gain.gain.setValueAtTime(0.08, now + (i * 0.07));
        gain.gain.exponentialRampToValueAtTime(0.001, now + (i * 0.07) + 0.25);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + (i * 0.07));
        osc.stop(now + (i * 0.07) + 0.25);
      });
    } else if (type === 'switch') {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(950, now);
      osc.frequency.exponentialRampToValueAtTime(1400, now + 0.05);
      gain.gain.setValueAtTime(0.07, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    }
  } catch (err) {
    // Gracefully handle browser autoplay restriction before first interaction
  }
}

// ==========================================================================
// 12. MULTI-ACCENT PALETTE ENGINE
// ==========================================================================

function initThemeAccents() {
  const savedAccent = localStorage.getItem('portfolio_accent') || 'violet';
  document.documentElement.setAttribute('data-accent', savedAccent);

  const updateActiveButtons = (accent) => {
    document.querySelectorAll('.accent-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-accent') === accent);
    });
  };

  updateActiveButtons(savedAccent);

  document.querySelectorAll('.accent-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const accent = btn.getAttribute('data-accent');
      document.documentElement.setAttribute('data-accent', accent);
      localStorage.setItem('portfolio_accent', accent);
      updateActiveButtons(accent);
      playTone('switch');
      const names = {
        violet: 'Royal Violet',
        emerald: 'FinTech Emerald',
        cyan: 'Cyber Cyan',
        amber: 'Amber Gold'
      };
      showToast(`Accent set to ${names[accent] || accent}`, '🎨');
    });
  });
}

// ==========================================================================
// 13. FINTECH PAYMENT & WEBHOOK PIPELINE SIMULATOR
// ==========================================================================

function initPaymentSimulator() {
  let isSimulating = false;
  let activeGateway = 'razorpay';

  const gatewayBtns = document.querySelectorAll('.sim-gateway-btn');
  const currencySymbol = document.getElementById('simCurrencySymbol');
  const amountInput = document.getElementById('simAmountInput');
  const triggerBtn = document.getElementById('triggerPaymentSimBtn');
  const statusPill = document.getElementById('simStatusPill');
  const latencyBadge = document.getElementById('simLatencyBadge');
  const consoleLogs = document.getElementById('simConsoleLogs');
  const jsonDisplay = document.getElementById('simJsonDisplay');
  const copyJsonBtn = document.getElementById('copyWebhookJsonBtn');
  const idempotencyCheckbox = document.getElementById('simIdempotencyReplay');
  const categorySelect = document.getElementById('simCategorySelect');

  if (!triggerBtn) return;

  // Gateway Selector
  gatewayBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (isSimulating) return;
      playTone('click');
      gatewayBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeGateway = btn.getAttribute('data-gateway');

      if (activeGateway === 'razorpay') {
        if (currencySymbol) currencySymbol.textContent = '₹';
        if (amountInput) amountInput.value = '2499';
      } else {
        if (currencySymbol) currencySymbol.textContent = '$';
        if (amountInput) amountInput.value = '49';
      }
    });
  });

  // Log helper
  const appendLog = (msg, colorClass = 'text-cyan') => {
    if (!consoleLogs) return;
    const div = document.createElement('div');
    div.className = colorClass;
    div.textContent = `> ${msg}`;
    consoleLogs.appendChild(div);
    consoleLogs.scrollTop = consoleLogs.scrollHeight;
  };

  // Trigger Simulation
  triggerBtn.addEventListener('click', () => {
    if (isSimulating) return;
    isSimulating = true;
    playTone('click');

    const amount = amountInput ? amountInput.value : '2499';
    const isReplay = idempotencyCheckbox ? idempotencyCheckbox.checked : false;
    const category = categorySelect ? categorySelect.value : 'ecommerce';
    const currSym = activeGateway === 'razorpay' ? '₹' : '$';
    const currCode = activeGateway === 'razorpay' ? 'INR' : 'USD';

    // Reset steps
    for (let i = 1; i <= 5; i++) {
      const stepEl = document.getElementById(`step-${i}`);
      if (stepEl) {
        stepEl.classList.remove('active', 'completed');
      }
    }

    if (consoleLogs) consoleLogs.innerHTML = '';
    if (statusPill) {
      statusPill.textContent = 'PROCESSING...';
      statusPill.className = 'badge bg-warning font-monospace text-dark';
    }
    if (latencyBadge) latencyBadge.textContent = 'Latency: measuring...';

    triggerBtn.disabled = true;
    triggerBtn.innerHTML = `
      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      <span>Orchestrating FinTech Webhook...</span>
    `;

    appendLog(`[HTTP] POST /api/v1/checkout/orders [Gateway: ${activeGateway.toUpperCase()}]`);

    // STEP 1: Order Generation
    setTimeout(() => {
      const step1 = document.getElementById('step-1');
      step1?.classList.add('active');
      playTone('step');
      const orderId = activeGateway === 'razorpay' 
        ? `order_${Math.random().toString(36).substring(2, 11)}` 
        : `pi_${Math.random().toString(36).substring(2, 14)}`;
      appendLog(`Order created: ${orderId} | Amount: ${currSym}${amount} (${currCode})`, 'text-success');

      // STEP 2: Client Auth Handshake
      setTimeout(() => {
        step1?.classList.remove('active');
        step1?.classList.add('completed');
        const step2 = document.getElementById('step-2');
        step2?.classList.add('active');
        playTone('step');
        appendLog(`Client Handshake verified: TLS 1.3 | HMAC SHA-256 session armed`, 'text-white');

        // STEP 3: Webhook Ingestion
        setTimeout(() => {
          step2?.classList.remove('active');
          step2?.classList.add('completed');
          const step3 = document.getElementById('step-3');
          step3?.classList.add('active');
          playTone('step');
          const eventType = activeGateway === 'razorpay' ? 'payment.captured' : 'payment_intent.succeeded';
          appendLog(`Webhook received: ${eventType} from ${activeGateway.toUpperCase()} IPN`, 'text-warning');

          // STEP 4: HMAC Signature
          setTimeout(() => {
            step3?.classList.remove('active');
            step3?.classList.add('completed');
            const step4 = document.getElementById('step-4');
            step4?.classList.add('active');
            playTone('step');
            appendLog(`Validating crypto signature: crypto.createHmac('sha256', secret)...`, 'text-cyan');
            appendLog(`HMAC digest verified against req.headers['x-${activeGateway}-signature'] -> MATCH [PASS]`, 'text-success');

            // STEP 5: Dual DB Settlement
            setTimeout(() => {
              step4?.classList.remove('active');
              step4?.classList.add('completed');
              const step5 = document.getElementById('step-5');
              step5?.classList.add('active');

              if (isReplay) {
                appendLog(`[IDEMPOTENCY GUARD] Order ${orderId} already exists in MongoDB idempotency store!`, 'text-danger');
                appendLog(`Prevented double-ledger entry! Returning HTTP 200 OK (Event Idempotent)`, 'text-warning');
              } else {
                appendLog(`MySQL: START TRANSACTION -> Ledger entry ${currSym}${amount} credit -> COMMIT`, 'text-emerald');
                appendLog(`MongoDB: Stored merchant audit telemetry document & broadcasted via Socket.io`, 'text-emerald');
              }

              setTimeout(() => {
                step5?.classList.remove('active');
                step5?.classList.add('completed');
                playTone('success');

                const latencyMs = Math.floor(Math.random() * 15) + 24;
                if (latencyBadge) latencyBadge.textContent = `Latency: ${latencyMs}ms (P99 < 50ms)`;

                if (statusPill) {
                  statusPill.textContent = isReplay ? 'IDEMPOTENT REPLAY GUARDED' : 'SETTLED & CONFIRMED ✓';
                  statusPill.className = isReplay ? 'badge bg-warning font-monospace text-dark' : 'badge bg-success font-monospace text-white';
                }

                triggerBtn.disabled = false;
                triggerBtn.innerHTML = `<span>🚀 Execute Payment Simulation</span>`;
                isSimulating = false;

                // Build Mock JSON Payload
                const mockPayload = {
                  event: activeGateway === 'razorpay' ? 'payment.captured' : 'payment_intent.succeeded',
                  timestamp: Math.floor(Date.now() / 1000),
                  gateway: activeGateway,
                  status: 'settled',
                  data: {
                    id: orderId,
                    amount: parseInt(amount, 10) * 100,
                    currency: currCode,
                    category: category,
                    customer: {
                      name: 'Dileep Sahu (Client)',
                      merchant_id: 'mobiteq_merch_7781'
                    },
                    audit: {
                      hmac_sha256_verified: true,
                      idempotency_lock: isReplay ? 'DUPLICATE_CAUGHT' : 'ACQUIRED',
                      mysql_ledger_tx: 'TX_99812_COMMITTED',
                      mongo_audit_id: '659b8a09f482c91a0c',
                      latency_ms: latencyMs
                    }
                  }
                };

                if (jsonDisplay) {
                  jsonDisplay.innerHTML = `<code>${JSON.stringify(mockPayload, null, 2)}</code>`;
                }

                showToast(
                  isReplay 
                    ? `Duplicate Webhook caught! Idempotency guard protected ledger.` 
                    : `Payment of ${currSym}${amount} settled in ${latencyMs}ms!`, 
                  isReplay ? '🛡️' : '💳'
                );
              }, 400);
            }, 600);
          }, 600);
        }, 600);
      }, 600);
    }, 400);
  });

  // Copy JSON Payload
  if (copyJsonBtn) {
    copyJsonBtn.addEventListener('click', () => {
      playTone('click');
      const text = jsonDisplay ? jsonDisplay.innerText : '';
      if (!text || text.includes('Click "Execute')) {
        showToast('Please execute a simulation first!', '⚠️');
        return;
      }
      navigator.clipboard.writeText(text).then(() => {
        showToast('Webhook JSON Payload copied to clipboard!', '📋');
      }).catch(() => {
        showToast('Failed to copy JSON.', '❌');
      });
    });
  }
}

// ==========================================================================
// 14. ENTERPRISE SYSTEM ARCHITECTURE BLUEPRINT DATA & ENGINE
// ==========================================================================

const ARCHITECTURE_DATA = {
  react_mui: {
    badge: 'Presentation & UI Store',
    perf: 'Render: <16ms (60fps)',
    icon: '⚛️',
    title: 'React 18 & Material-UI (MUI)',
    tech: 'React.js • MUI • Bootstrap 5 • CSS Grid',
    desc: 'Engineered with React 18 concurrent rendering, virtual DOM batching, and Material-UI design tokens. Delivers responsive merchant dashboards with sub-second page transitions and zero layout shifts across desktop and mobile devices.',
    code: `// Merchant Payout Widget Component in React & MUI
import React, { useMemo } from 'react';
import { Card, Typography, Chip, LinearProgress } from '@mui/material';

export const PayoutWidget = ({ volume, settlementRate }) => {
  const formattedVol = useMemo(() => 
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(volume),
    [volume]
  );

  return (
    <Card sx={{ p: 3, backdropFilter: 'blur(16px)', bgcolor: 'rgba(14,17,26,0.85)' }}>
      <Typography variant="overline" color="text.secondary">Monthly Volume</Typography>
      <Typography variant="h4" fontWeight={700} color="primary.main">{formattedVol}</Typography>
      <Chip label="99.98% Reconciliation" color="success" size="small" sx={{ mt: 1 }} />
    </Card>
  );
};`
  },
  zustand_redux: {
    badge: 'Client State Architecture',
    perf: 'State update: <1ms',
    icon: '🔄',
    title: 'Zustand & Redux Toolkit',
    tech: 'Zustand • Redux Toolkit • LocalStorage Sync',
    desc: 'Lightweight client store minimizing unnecessary component re-renders. Zustand handles ephemeral session state, audio toggles, and live WebSocket message buffers, while Redux Toolkit manages deep structured cart and authentication models.',
    code: `// Global Payment State Store with Zustand
import { create } from 'zustand';

export const usePaymentStore = create((set, get) => ({
  activeGateway: 'razorpay',
  currency: 'INR',
  transactionStatus: 'idle',
  setGateway: (gw) => set({ activeGateway: gw, currency: gw === 'razorpay' ? 'INR' : 'USD' }),
  dispatchPayment: async (payload) => {
    set({ transactionStatus: 'authorizing' });
    const response = await fetch('/api/v1/payments/charge', { method: 'POST', body: JSON.stringify(payload) });
    const data = await response.json();
    set({ transactionStatus: data.success ? 'confirmed' : 'failed' });
  }
}));`
  },
  bootstrap_responsive: {
    badge: 'Responsive Layout System',
    perf: 'Fluid 360px - 4K Ultra-HD',
    icon: '💎',
    title: 'Bootstrap 5 & Luxury Micro-CSS',
    tech: 'Bootstrap 5.3 • Flexbox • Modern Grid • Glassmorphism',
    desc: 'Hybrid styling architecture leveraging Bootstrap 5 responsive grid classes for rock-solid layout parity on mobile screens, paired with custom dark-glass CSS tokens, linear gradients, and GPU-accelerated backdrop filters.',
    code: `/* Responsive FinTech Glassmorphism Tokens */
.spotlight-card {
  position: relative;
  background: var(--bg-surface);
  border: 1px solid var(--border-medium);
  border-radius: var(--radius-lg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.spotlight-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-cyan);
}`
  },
  node_express: {
    badge: 'Clustered API Gateway',
    perf: 'P99 Latency: <45ms',
    icon: '⚡',
    title: 'Node.js & Express API Gateway',
    tech: 'Node.js LTS • Express.js • PM2 Cluster • Compression',
    desc: 'High-throughput Node.js microservices utilizing non-blocking asynchronous event loops. Routes API traffic, parses multi-currency checkout sessions, dispatches webhook notifications, and maintains connection pooling to MySQL and MongoDB.',
    code: `// Express Payment Gateway Router
const express = require('express');
const router = express.Router();
const { verifySignature, processOrder } = require('./services/paymentService');

router.post('/orders/create', async (req, res, next) => {
  try {
    const { amount, currency, merchantId } = req.body;
    const order = await paymentService.createGatewayOrder({ amount, currency, merchantId });
    res.status(201).json({ success: true, orderId: order.id, amount: order.amount });
  } catch (err) {
    next(err);
  }
});`
  },
  jwt_security: {
    badge: 'Security & Access Control',
    perf: 'Zero unauthorized breaches',
    icon: '🔒',
    title: 'JWT Auth & Rate Limiting Guard',
    tech: 'jsonwebtoken • helmet • express-rate-limit • bcrypt',
    desc: 'Stateless authentication pipeline using signed HMAC-SHA256 JWT bearer tokens with rotating refresh tokens. Protected by Helmet headers, strict CORS domain policies, and Redis-backed sliding-window rate limiters preventing DDoS attacks.',
    code: `// Express JWT Authentication Middleware
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access token required' });

  jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid or expired token' });
    req.user = user;
    next();
  });
};`
  },
  postman_ci: {
    badge: 'API Verification Suite',
    perf: '100% Endpoint Test Coverage',
    icon: '🚀',
    title: 'Postman API Automated Testing',
    tech: 'Postman • Newman CLI • JSON Schema Validation',
    desc: 'Comprehensive automated test suites covering 100% of Mobiteq REST APIs. Validates status codes, latency thresholds (<200ms), header security tokens, and strict JSON schema contracts before any staging deployment.',
    code: `// Postman Pre-request & Assertion Script
pm.test("Status code is 200 OK", function () {
    pm.response.to.have.status(200);
});

pm.test("Transaction payload matches schema", function () {
    const schema = {
        "type": "object",
        "required": ["success", "orderId", "settledAmount"],
        "properties": {
            "success": { "type": "boolean" },
            "orderId": { "type": "string" },
            "settledAmount": { "type": "number" }
        }
    };
    pm.expect(tv4.validate(pm.response.json(), schema)).to.be.true;
});`
  },
  razorpay_stripe: {
    badge: 'Core FinTech Gateway Engine',
    perf: '99.98% Webhook Success Rate',
    icon: '💳',
    title: 'Razorpay & Stripe Gateway Services',
    tech: 'Razorpay Node SDK • Stripe SDK • Webhook Signatures',
    desc: 'Production payment integration supporting instant checkout, UPI, international credit cards, recurring billing, and automated refund management. Handles asynchronous webhook reconciliation with cryptographic signature checks.',
    code: `// Cryptographic Webhook Signature Verification
const crypto = require('crypto');

function verifyRazorpayWebhook(rawBody, signature, secret) {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(rawBody)
    .digest('hex');

  return crypto.timingSafeEqual(
    Buffer.from(expectedSignature, 'utf8'),
    Buffer.from(signature, 'utf8')
  );
}`
  },
  agora_rtc: {
    badge: 'Real-Time Audio/Video Engine',
    perf: 'RTC Latency: <40ms',
    icon: '📹',
    title: 'Agora Web SDK Live Collaboration',
    tech: 'Agora RTC Web SDK 4.x • Dynamic Bitrate • WebRTC',
    desc: 'Real-time multi-peer audio/video streaming engine. Features dynamic room tokens generated securely on the Node.js backend, active speaker volume indication, automated bandwidth adaptation, and seamless screen sharing.',
    code: `// Agora Web SDK Client Initialization
import AgoraRTC from 'agora-rtc-sdk-ng';

const client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });

export async function joinMeetingRoom(appId, channelName, token, uid) {
  await client.join(appId, channelName, token, uid);
  const [microphoneTrack, cameraTrack] = await AgoraRTC.createMicrophoneAndCameraTracks();
  await client.publish([microphoneTrack, cameraTrack]);
  console.log('Agora RTC Engine Connected with Low-Latency!');
}`
  },
  socket_realtime: {
    badge: 'Duplex WebSockets Pipeline',
    perf: 'Broadcast Latency: <15ms',
    icon: '🔌',
    title: 'Socket.io Bidirectional Channels',
    tech: 'Socket.io Server & Client • Room Namespaces • Heartbeats',
    desc: 'Full-duplex WebSocket channels enabling real-time payment settlement popups, live merchant balance adjustments, and in-stream chat rooms with automated reconnection protocols and heartbeat diagnostics.',
    code: `// Socket.io Real-Time Payment Broadcast
io.on('connection', (socket) => {
  socket.on('join_merchant_room', (merchantId) => {
    socket.join(\`merchant_\${merchantId}\`);
  });
});

// Emitted when Webhook verifies payment
function broadcastPaymentSettlement(merchantId, settlementData) {
  io.to(\`merchant_\${merchantId}\`).emit('payment_success', {
    orderId: settlementData.orderId,
    amount: settlementData.amount,
    timestamp: new Date().toISOString()
  });
}`
  },
  cloudinary_media: {
    badge: 'Cloud Asset CDN Pipeline',
    perf: '78% Bandwidth Reduction',
    icon: '☁️',
    title: 'Cloudinary Enterprise CDN',
    tech: 'Cloudinary Node SDK • Signed Presets • Dynamic WebP/AVIF',
    desc: 'High-speed media storage delivering on-the-fly image transformations, face cropping, automated format conversions (WebP/AVIF), and secure signed direct uploads bypassing application server bottlenecks.',
    code: `// Cloudinary Signed Upload Generator
const cloudinary = require('cloudinary').v2;

function generateSignedUploadParams(folder = 'merchant_assets') {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const signature = cloudinary.utils.api_sign_request(
    { timestamp, folder },
    process.env.CLOUDINARY_API_SECRET
  );
  return { timestamp, signature, apiKey: process.env.CLOUDINARY_API_KEY };
}`
  },
  mysql_acid: {
    badge: 'ACID Financial Persistence',
    perf: 'Transaction isolation: Serializable',
    icon: '🐬',
    title: 'MySQL 8.0 Relational Ledger',
    tech: 'MySQL 8 • Foreign Keys • InnoDB Engine • ACID Compliance',
    desc: 'Relational database housing merchant accounts, double-entry financial ledgers, payout settlement records, and audit logs. Utilizes row-level locking and strict database transactions preventing balance overdrafts.',
    code: `// MySQL Transactional Balance Update
START TRANSACTION;

-- Lock merchant row for update
SELECT current_balance FROM merchant_ledgers 
WHERE merchant_id = 'merch_7781' FOR UPDATE;

-- Credit settled transaction amount
UPDATE merchant_ledgers 
SET current_balance = current_balance + 2499.00, updated_at = NOW()
WHERE merchant_id = 'merch_7781';

-- Insert immutable audit entry
INSERT INTO ledger_audit_log (order_id, amount, status, created_at)
VALUES ('order_mbtq_902', 2499.00, 'SETTLED', NOW());

COMMIT;`
  },
  mongo_streams: {
    badge: 'High-Velocity Event Stores',
    perf: 'Query Execution: <12ms',
    icon: '🍃',
    title: 'MongoDB & Mongoose Document Store',
    tech: 'MongoDB 6.0 • Mongoose ORM • Compound Indexing • TTL',
    desc: 'NoSQL document database optimized for high-throughput write operations, session management, raw webhook payload archives, and compound-indexed time-series analytics for merchant portals.',
    code: `// Mongoose Idempotency & Webhook Archive Schema
const WebhookEventSchema = new mongoose.Schema({
  eventId: { type: String, required: true, unique: true, index: true },
  gateway: { type: String, enum: ['razorpay', 'stripe'], required: true },
  orderId: { type: String, required: true, index: true },
  payload: { type: Object, required: true },
  processedAt: { type: Date, default: Date.now, expires: '90d' } // TTL Auto-purge
});`
  },
  firebase_cloud: {
    badge: 'Cloud Sync & Push Notifications',
    perf: 'Push Delivery: <1.2s',
    icon: '🔥',
    title: 'Firebase Realtime & Cloud Messaging (FCM)',
    tech: 'Firebase Admin SDK • FCM Notifications • Firestore Sync',
    desc: 'Instant push notification dispatch to merchant mobile and web apps upon transaction settlement, paired with lightweight realtime client sync for critical status indicators.',
    code: `// Firebase Cloud Messaging (FCM) Notification
const admin = require('firebase-admin');

async function sendMerchantPushAlert(fcmToken, orderDetails) {
  const message = {
    notification: {
      title: 'Payment Received! 💳',
      body: \`\${orderDetails.currency} \${orderDetails.amount} settled successfully via \${orderDetails.gateway}.\`
    },
    token: fcmToken
  };
  return await admin.messaging().send(message);
}`
  }
};

function initArchitectureBlueprint() {
  const nodes = document.querySelectorAll('.arch-node');
  const badgeEl = document.getElementById('archInspectBadge');
  const perfEl = document.getElementById('archInspectPerf');
  const iconEl = document.getElementById('archInspectIcon');
  const titleEl = document.getElementById('archInspectTitle');
  const techEl = document.getElementById('archInspectTech');
  const descEl = document.getElementById('archInspectDesc');
  const codeEl = document.getElementById('archInspectCode');

  if (!nodes.length) return;

  nodes.forEach(node => {
    node.addEventListener('click', () => {
      playTone('click');
      nodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');

      const nodeKey = node.getAttribute('data-node');
      const data = ARCHITECTURE_DATA[nodeKey];
      if (!data) return;

      if (badgeEl) badgeEl.textContent = data.badge;
      if (perfEl) perfEl.textContent = data.perf;
      if (iconEl) iconEl.textContent = data.icon;
      if (titleEl) titleEl.textContent = data.title;
      if (techEl) techEl.textContent = data.tech;
      if (descEl) descEl.textContent = data.desc;
      if (codeEl) codeEl.textContent = data.code;
    });
  });

  // Set default initial view
  const defaultNode = ARCHITECTURE_DATA['react_mui'];
  if (defaultNode && codeEl) {
    codeEl.textContent = defaultNode.code;
  }
}

// ==========================================================================
// 15. ENTRYPOINT
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initThemeAccents();
  initAudioSystem();
  initProfilePersonalizer();
  initAmbientCanvas();
  initCustomCursor();
  initSpotlightCards();
  initTerminal();
  initMeetingScheduler();
  handleTypewriter();
  initProjectModal();
  initContactForm();
  initResumeActions();
  initMobileMenuAutoClose();
  initPaymentSimulator();
  initArchitectureBlueprint();

  // Add click sound to interactive buttons
  document.querySelectorAll('.btn, .nav-link, .term-chip, .scheduler-day-btn, .scheduler-time-btn').forEach(el => {
    el.addEventListener('click', () => {
      playTone('click');
    });
  });
});
