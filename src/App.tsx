import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { FiMenu, FiX, FiArrowUp, FiMail, FiPhone, FiMapPin, FiUsers, FiEye, FiCamera, FiInstagram } from 'react-icons/fi';
import { FaHandsHelping, FaLightbulb, FaChartLine, FaSeedling, FaGlobe } from 'react-icons/fa';
import Logo from './components/Logo';

// ==================== LOADING SCREEN ====================
const LoadingScreen: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <div className={`loading-screen ${!isLoading ? 'hidden' : ''}`}>
      <div className="text-center px-4">
        <div className="animate-scale-in">
          <Logo size={120} showText={true} />
        </div>
        <p className="text-white mt-6 text-xl font-tajawal animate-fade-in" style={{ animationDelay: '0.5s' }}>
          مبادرة يقين
        </p>
      </div>
    </div>
  );
};

// ==================== NAVBAR ====================
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'الرئيسية' },
    { href: '#about', label: 'عن يقين' },
    { href: '#vision', label: 'الرؤية' },
    { href: '#goals', label: 'الأهداف' },
    { href: '#gallery', label: 'معرض الصور' },
    { href: '#contact', label: 'تواصل معنا' },
  ];

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <Logo size={42} showText={false} />
            <span
              className="text-xl font-bold"
              style={{ fontFamily: 'Amiri, serif', color: isScrolled ? '#C9A227' : '#E8C547' }}
            >
              يقين
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-medium transition-colors ${
                  isScrolled ? 'text-[#2D2D2D] hover:text-[#00A9A5]' : 'text-white hover:text-[#E8C547]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="القائمة"
            className="lg:hidden p-2 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FiX size={24} className={isScrolled ? 'text-[#2D2D2D]' : 'text-white'} />
            ) : (
              <FiMenu size={24} className={isScrolled ? 'text-[#2D2D2D]' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu fixed top-0 right-0 w-72 max-w-[85vw] h-full bg-white shadow-2xl z-50 ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <Logo size={40} showText={false} />
            <button type="button" aria-label="إغلاق القائمة" onClick={() => setIsMobileMenuOpen(false)}>
              <FiX size={24} className="text-[#2D2D2D]" />
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#2D2D2D] hover:text-[#00A9A5] font-medium py-2.5 border-b border-gray-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}
    </nav>
  );
};

// ==================== HERO SECTION ====================
const HeroSection: React.FC = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${(i * 17 + 7) % 100}%`,
    top: `${(i * 23 + 11) % 100}%`,
    size: (i % 5) + 3,
    delay: (i % 5) * 0.8,
    duration: 4 + (i % 3),
  }));

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #00A9A5 0%, #007A77 50%, #005A57 100%)' }}
      />

      {/* Animated particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}

      {/* Sun rays decorative element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] opacity-10 pointer-events-none">
        <div className="animate-rotate-slow w-full h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-1 h-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/30 rounded-full"
              style={{ transform: `translate(-50%, -50%) rotate(${i * 30}deg)` }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
        <div className="animate-scale-in mb-6">
          <Logo size={150} showText={false} className="animate-float mx-auto" />
        </div>
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-in-up"
          style={{ fontFamily: 'Amiri, serif', color: '#E8C547', animationDelay: '0.3s' }}
        >
          يقين
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          يقين عطاءٌ يصنع الأثر
        </p>
        <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <a
            href="#about"
            className="px-8 py-3 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-white/30 hover:border-white/60"
          >
            تعرّف علينا
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

// ==================== ABOUT SECTION ====================
const AboutSection: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00A9A5] mb-4" style={{ fontFamily: 'Tajawal' }}>
              نبذة عن يقين
            </h2>
            <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #C9A227, #E8C547)' }} />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #00A9A5, #007A77)' }}
                >
                  <FaSeedling className="text-white text-xl" />
                </div>
                <p className="text-[#2D2D2D] leading-relaxed text-base sm:text-lg">
                  <strong className="text-[#00A9A5]">يقين</strong> هي مبادرة تطوعية شبابية تأسست بهدف إحداث أثر إيجابي ومستدام في المجتمع. نؤمن بأن الشباب هم طاقة التغيير الحقيقية، وأن العطاء ليس خياراً بل هو يقين راسخ في نفوسنا.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #C9A227, #E8C547)' }}
                >
                  <FaHandsHelping className="text-white text-xl" />
                </div>
                <p className="text-[#2D2D2D] leading-relaxed text-base sm:text-lg">
                  نسعى لتمكين الشباب وتوجيه طاقاتهم نحو خدمة المجتمع من خلال مبادرات متنوعة تشمل التعليم، الصحة، البيئة، والتنمية الاجتماعية. نعمل بروح الفريق الواحد لتحقيق رؤية مجتمع متكافل ومزدهر.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="w-full max-w-xl mx-auto lg:max-w-none">
              <div className="rounded-2xl overflow-hidden border-2 sm:border-4 border-[#C9A227]/30 shadow-lg bg-white p-5 sm:p-8 flex items-center justify-center aspect-[4/3]">
                <img
                  src="/gallery/Logo.png"
                  alt="شعار مبادرة يقين"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== VISION SECTION ====================
const VisionSection: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="vision" className="py-16 sm:py-20 lg:py-28" style={{ backgroundColor: '#E8F5F5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5"
              style={{ background: 'linear-gradient(135deg, #C9A227, #E8C547)' }}
            >
              <FiEye className="text-white text-2xl" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00A9A5] mb-4">
              رؤيتنا
            </h2>
            <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #C9A227, #E8C547)' }} />
          </div>

          {/* Vision Card */}
          <div className="w-full max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-6 sm:p-10 md:p-12 border-2 border-[#C9A227]/20 shadow-lg text-center">
              <div className="text-4xl sm:text-5xl mb-5">🌟</div>
              <p className="text-lg sm:text-xl md:text-2xl text-[#2D2D2D] leading-relaxed font-medium">
                أن نكون المبادرة الشبابية الرائدة في بناء مجتمع متكافل، حيث يصبح العطاء ثقافة راسخة والتطوع أسلوب حياة لكل شاب وشابة يسعى لصنع الفرق.
              </p>
              <div className="mt-7 flex justify-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#00A9A5]" />
                <span className="w-3 h-3 rounded-full bg-[#C9A227]" />
                <span className="w-3 h-3 rounded-full bg-[#00A9A5]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== GOALS SECTION ====================
const GoalsSection: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const goals = [
    {
      icon: <FaHandsHelping className="text-3xl" />,
      title: 'تمكين الشباب',
      description: 'تطوير مهارات الشباب القيادية والاجتماعية وتأهيلهم ليكونوا فاعلين في مجتمعاتهم',
    },
    {
      icon: <FiUsers className="text-3xl" />,
      title: 'بناء الشراكات',
      description: 'تعزيز التعاون مع المؤسسات والجهات الحكومية والخاصة لتحقيق أثر أوسع',
    },
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: 'الابتكار الاجتماعي',
      description: 'تقديم حلول مبتكرة للتحديات المجتمعية من خلال مشاريع إبداعية ومستدامة',
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: 'الاستدامة',
      description: 'بناء مبادرات ذات أثر طويل المدى تضمن استمرارية العطاء والتنمية',
    },
    {
      icon: <FaGlobe className="text-3xl" />,
      title: 'التوسع والتأثير',
      description: 'نشر ثقافة التطوع والعطاء على مستوى أوسع والوصول لأكبر عدد من المستفيدين',
    },
  ];

  return (
    <section id="goals" className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00A9A5] mb-4">
              الأهداف الاستراتيجية
            </h2>
            <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #C9A227, #E8C547)' }} />
          </div>

          {/* Goals Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {goals.map((goal, index) => (
              <div
                key={index}
                className="goal-card bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-md text-center flex flex-col items-center justify-start"
              >
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5 text-[#00A9A5]"
                  style={{ backgroundColor: '#E8F5F5' }}
                >
                  {goal.icon}
                </div>
                <h3 className="text-xl font-bold text-[#007A77] mb-3">{goal.title}</h3>
                <p className="text-[#2D2D2D]/80 leading-relaxed text-sm sm:text-base">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== GALLERY SECTION ====================
const GallerySection: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const galleryItems = [
    { id: 1, label: 'اطفال', color: 'from-[#00A9A5]/20 to-[#007A77]/20', image: '/gallery/اطفال.jpg' },
    { id: 2, label: 'افطار رمضان', color: 'from-[#C9A227]/20 to-[#E8C547]/20', image: '/gallery/افطار رمضان.jpg' },
    { id: 3, label: 'تنظيم احتفال', color: 'from-[#007A77]/20 to-[#00A9A5]/20', image: '/gallery/تنظيم احتفال.jpg' },
    { id: 4, label: 'تنظيم حفل تخرج', color: 'from-[#E8C547]/20 to-[#C9A227]/20', image: '/gallery/تنظيم حفل تخرج.jpg' },
    { id: 5, label: 'تنظيم مبادرة', color: 'from-[#00A9A5]/20 to-[#C9A227]/20', image: '/gallery/تنظيم مبادرة.jpg' },
    { id: 6, label: 'فعالية اطفال', color: 'from-[#007A77]/20 to-[#E8C547]/20', image: '/gallery/فعالية اطفال.jpg' },
    { id: 7, label: 'مبادرة اطفال', color: 'from-[#C9A227]/20 to-[#00A9A5]/20', image: '/gallery/مبادرة اطفال.JPG' },
    { id: 8, label: 'مبادرة اطفال2', color: 'from-[#00A9A5]/20 to-[#007A77]/20', image: '/gallery/مبادرة اطفال2.jpg' },
    { id: 9, label: 'متطوعين يقين 3', color: 'from-[#E8C547]/20 to-[#007A77]/20', image: '/gallery/متطوعين يقين 3.jpg' },
    { id: 10, label: 'متطوعين يقين', color: 'from-[#00A9A5]/20 to-[#007A77]/20', image: '/gallery/متطوعين يقين.JPG' },
    { id: 11, label: 'متطوعين يقين2', color: 'from-[#C9A227]/20 to-[#E8C547]/20', image: '/gallery/متطوعين يقين2.jpg' },
    { id: 12, label: 'متطوعين يقين4', color: 'from-[#007A77]/20 to-[#00A9A5]/20', image: '/gallery/متطوعين يقين4.jpg' },
    { id: 13, label: 'متطوعين يقين5', color: 'from-[#E8C547]/20 to-[#C9A227]/20', image: '/gallery/متطوعين يقين5.jpg' },
    { id: 14, label: 'وقف ثريد', color: 'from-[#00A9A5]/20 to-[#C9A227]/20', image: '/gallery/وقف ثريد.jpg' },
    { id: 15, label: 'يوم الغذاء العالمي', color: 'from-[#007A77]/20 to-[#E8C547]/20', image: '/gallery/يوم الغذاء العالمي.jpg' },
  ];

  const selectedItem = galleryItems.find((i) => i.id === lightboxImage) || null;

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-28" style={{ backgroundColor: '#007A77' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Amiri, serif', color: '#E8C547' }}>
              لحظات من يقين
            </h2>
            <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #C9A227, #E8C547)' }} />
            <p className="text-white/75 mt-4 text-base sm:text-lg">لقطات من مبادراتنا وأنشطتنا</p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
            {galleryItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setLightboxImage(item.id)}
                className="gallery-item relative w-full rounded-xl overflow-hidden cursor-pointer border-2 border-[#C9A227]/30 hover:border-[#C9A227]/70 transition-all duration-300 group text-right"
              >
                <div className={`w-full aspect-square bg-gradient-to-br ${item.color} relative overflow-hidden`}>
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.label}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4">
                      <FiCamera className="text-3xl text-white/40 mb-2" />
                      <p className="text-white/60 text-sm font-medium">{item.label}</p>
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 bg-[#005A57]/0 group-hover:bg-[#005A57]/35 transition-all duration-300 flex items-center justify-center pointer-events-none">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-11 h-11 rounded-full bg-black/35 flex items-center justify-center">
                      <FiCamera className="text-white text-lg" />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div
          className="lightbox-overlay fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              aria-label="إغلاق الصورة"
              className="absolute -top-11 left-0 text-white/85 hover:text-white text-3xl transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <FiX />
            </button>
            <div className="w-full max-h-[75vh] rounded-xl overflow-hidden border-2 border-[#C9A227]/40 bg-black/40 flex items-center justify-center">
              {selectedItem.image ? (
                <img
                  src={selectedItem.image}
                  alt={selectedItem.label}
                  className="max-h-[75vh] w-full object-contain"
                />
              ) : (
                <div className="aspect-video w-full flex items-center justify-center">
                  <p className="text-white/70 text-xl">{selectedItem.label}</p>
                </div>
              )}
            </div>
            <p className="text-white/90 text-center mt-4 text-base sm:text-lg font-medium">
              {selectedItem.label}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

// ==================== STATS SECTION ====================
const StatsSection: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [counters, setCounters] = useState({ volunteers: 0, initiatives: 0, beneficiaries: 0, partners: 0 });
  const hasAnimated = useRef(false);

  const targets = { volunteers: 250, initiatives: 45, beneficiaries: 5000, partners: 30 };

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const eased = 1 - Math.pow(1 - progress, 3);

        setCounters({
          volunteers: Math.round(targets.volunteers * eased),
          initiatives: Math.round(targets.initiatives * eased),
          beneficiaries: Math.round(targets.beneficiaries * eased),
          partners: Math.round(targets.partners * eased),
        });

        if (step >= steps) clearInterval(timer);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [inView]);

  const stats = [
    { label: 'متطوع ومتطوعة', value: counters.volunteers, suffix: '+' },
    { label: 'مبادرة منفذة', value: counters.initiatives, suffix: '+' },
    { label: 'مستفيد', value: counters.beneficiaries, suffix: '+' },
    { label: 'شريك', value: counters.partners, suffix: '+' },
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#007A77]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2"
                style={{ color: '#E8C547', fontFamily: 'Tajawal' }}
              >
                <span className="counter-number">{stat.value.toLocaleString('ar-SA')}</span>
                <span>{stat.suffix}</span>
              </div>
              <p className="text-white/85 text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== CONTACT SECTION ====================
const ContactSection: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00A9A5] mb-4">
              تواصل معنا
            </h2>
            <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #C9A227, #E8C547)' }} />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex items-center gap-4 bg-[#FAFAF7] p-4 sm:p-5 rounded-xl border border-gray-100">
                <div
                  className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #00A9A5, #007A77)' }}
                >
                  <FiMail className="text-white text-lg" />
                </div>
                <div className="min-w-0">
                  <p className="text-[#2D2D2D]/60 text-xs mb-0.5">البريد الإلكتروني</p>
                  <p className="text-[#2D2D2D] font-medium text-sm break-all">info@yaqeen-initiative.org</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-[#FAFAF7] p-4 sm:p-5 rounded-xl border border-gray-100">
                <div
                  className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #C9A227, #E8C547)' }}
                >
                  <FiPhone className="text-white text-lg" />
                </div>
                <div className="min-w-0">
                  <p className="text-[#2D2D2D]/60 text-xs mb-0.5">رقم الهاتف</p>
                  <p className="text-[#2D2D2D] font-medium text-sm" dir="ltr">50 000 0000</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-[#FAFAF7] p-4 sm:p-5 rounded-xl border border-gray-100">
                <div
                  className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #00A9A5, #007A77)' }}
                >
                  <FiMapPin className="text-white text-lg" />
                </div>
                <div className="min-w-0">
                  <p className="text-[#2D2D2D]/60 text-xs mb-0.5">الموقع</p>
                  <p className="text-[#2D2D2D] font-medium text-sm">الأردن</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-2">
              <p className="text-[#2D2D2D] font-medium mb-8">تابعنا على</p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/yaqen._jo?fqnt=MTh2MWt0Ymg3bWExaQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="حساب مبادرة يقين على إنستغرام"
                  className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-[#C9A227]/30 text-[#C9A227] hover:bg-[#C9A227] hover:text-white transition-all duration-300"
                >
                  <FiInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== FOOTER ====================
const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#007A77' }}>
      <div className="h-1" style={{ background: 'linear-gradient(90deg, transparent, #C9A227, #E8C547, #C9A227, transparent)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center text-white/80 text-sm">
          مبادرة يقين — جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
};

// ==================== APP ====================
const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div dir="rtl" className="min-h-screen w-full overflow-x-hidden">
      <LoadingScreen isLoading={isLoading} />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <VisionSection />
        <GoalsSection />
        <GallerySection />
        <StatsSection />
        <ContactSection />
      </main>
      <Footer />

      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="العودة للأعلى"
          className="fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
          style={{ background: 'linear-gradient(135deg, #00A9A5, #007A77)' }}
        >
          <FiArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default App;