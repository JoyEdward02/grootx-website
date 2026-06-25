import { useEffect, useRef, useState } from "react";
import { ChevronRight, Linkedin } from "lucide-react";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export default function Index() {
  const [navActive, setNavActive] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [scrolled, setScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [inHero, setInHero] = useState(true);
  const lastScrollY = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      setNavHidden(currentY > lastScrollY.current && currentY > 80);
      setInHero(currentY < window.innerHeight * 0.85);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    observeFade();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    observeFade();
  }, [activeFilter]);

  const observeFade = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          }
        });
      },
      { threshold: 0.1 },
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
  };


  const services = [
    {
      
      title: "Social Media Management",
      desc: "Strategic content planning, design, scheduling, and community management across Instagram, Facebook, and LinkedIn.",
      tags: ["Content Creation", "Reels & Stories", "Community Reply"],
      img: "/team/ssm.jpg",
    },
    {
      icon: "🎯",
      num: "02",
      title: "Lead Generation",
      desc: "Targeted campaigns that attract your ideal customers and convert them into enquiries, calls, and bookings.",
      tags: ["Meta Lead Ads", "Landing Pages", "Funnel Setup"],
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      icon: "📢",
      num: "03",
      title: "Paid Advertising",
      desc: "ROI-focused ad campaigns on Meta and Google designed to maximise your budget and drive real conversions.",
      tags: ["Meta Ads", "Google Ads", "Remarketing"],
      img: "/team/pa.jpg",
    },
    {
      icon: "🔍",
      num: "04",
      title: "SEO & Content",
      desc: "Improve your search visibility and attract organic traffic with targeted SEO strategies and quality content.",
      tags: ["On-Page SEO", "Blog Writing", "Local SEO"],
      img: "/team/seo.jpg",
    },
    {
      icon: "✏️",
      num: "05",
      title: "Brand Identity",
      desc: "Logo design, brand colors, typography, and visual guidelines that make your brand look professional and consistent.",
      tags: ["Logo Design", "Brand Guide", "Visual Assets"],
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    },
    {
      icon: "🌐",
      num: "06",
      title: "Website Development",
      desc: "Clean, fast, mobile-first websites built to impress visitors and turn them into leads for your business.",
      tags: ["Landing Pages", "Business Websites", "Maintenance"],
      img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    },
    {
      icon: "📧",
      num: "07",
      title: "Email Marketing",
      desc: "Targeted email campaigns that nurture leads, retain customers, and drive repeat business with personalised messaging. ",
      tags: ["Campaigns", "Automation", "Drip Sequences"],
      img: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80",
    },
    {
      icon: "🎬",
      num: "08",
      title: "Video & Reels Production",
      desc: "High-impact video content including brand films, product showcases, and short-form reels crafted to boost engagement across all platforms. ",
      tags: ["Reels", "Brand Films", "YouTube Ads"],
      img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    },
  ];

  const projects = [
    {
      cat: "Social Media",
      title: "FreshBite Restaurant",
      desc: "Developed a full Instagram and Facebook strategy including reels, stories, and customer engagement campaigns.",
      result: ["Content Strategy", "Reels Production", "Community Mgmt"],
      emoji: "🍽️",
      bg: "from-orange-100 to-orange-50",
    },
    {
      cat: "Lead Generation",
      title: "Skyline Real Estate",
      desc: "Built a targeted Meta lead generation funnel for a new residential project with landing page and CRM integration.",
      result: ["Meta Lead Ads", "Landing Page", "CRM Setup"],
      emoji: "🏢",
      bg: "from-blue-100 to-blue-50",
    },
    {
      cat: "Paid Ads",
      title: "TechPro E-Commerce",
      desc: "Managed Meta and Google Shopping campaigns with creative A/B testing and weekly optimisation cycles.",
      result: ["Meta Ads", "Google Shopping", "A/B Testing"],
      emoji: "🛒",
      bg: "from-green-100 to-green-50",
    },
    {
      cat: "SEO",
      title: "HealthFirst Clinic",
      desc: "Local SEO audit, Google Business optimisation, and blog content strategy to improve organic appointments.",
      result: ["Local SEO", "Google Business", "Blog Strategy"],
      emoji: "🏥",
      bg: "from-pink-100 to-pink-50",
    },
    {
      cat: "Social Media",
      title: "Urban Threads Fashion",
      desc: "Created a cohesive brand feed, reels series, and influencer collaboration plan for a new fashion label.",
      result: ["Feed Design", "Reels Series", "Influencer Outreach"],
      emoji: "👗",
      bg: "from-purple-100 to-purple-50",
    },
    {
      cat: "Lead Generation",
      title: "EduPath Coaching",
      desc: "Designed a complete lead funnel with ad creative, landing page, and WhatsApp follow-up automation for student enrolment.",
      result: ["Funnel Design", "WhatsApp Automation", "Ad Creative"],
      emoji: "🎓",
      bg: "from-yellow-100 to-yellow-50",
    },
  ];

  
  const testimonials = [
    {
      stars: "★★★★★",
      text: "Working with YGS has been a great experience. They understood our goals from day one and delivered a social media strategy that genuinely connects with our audience.",
      name: "Priya R.",
      role: "Owner, FreshBite",
      init: "PR",
    },
    {
      stars: "★★★",
      text: "The lead generation campaign they set up for our project was exactly what we needed. Professional, responsive, and results-focused team.",
      name: "Karthik M.",
      role: "Director, Skyline Real Estate",
      init: "KM",
    },
    {
      stars: "★★★★",
      text: "As a startup, we needed a team that could handle our full digital presence. YGS does exactly that — highly recommend them to any growing business.",
      name: "Johnson S.",
      role: "Founder, TechPro",
      init: "AS",
    },
  ];

  const teamMembers = [
    {
      name: "Saravanan",
      role: "CEO & Founder",
      img: "/team/saro.jpeg",
      blobColor: "#869dc2",
      blobStyle: { borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%", bottom: "-8px", left: "-12px" },
    },
    {
      name: "Yasar Arafath",
      role: "Marketing Strategist",
      img: "/team/yasar.png",
      blobColor: "#f59e0b",
      blobStyle: { borderRadius: "42% 58% 35% 65% / 50% 60% 40% 50%", bottom: "-10px", right: "-10px" },
    },
    {
      name: "Joy Edward",
      role: "Technical Lead",
      img: "/team/joy_image.png",
      blobColor: "#78716c",
      blobStyle: { borderRadius: "55% 45% 60% 40% / 45% 55% 45% 55%", bottom: "-8px", left: "-10px" },
    },
    {
      name: "Vijayalakshmi",
      role: "Operations Manager",
      img: "/team/viji.JPG",
      blobColor: "#b45309",
      blobStyle: { borderRadius: "38% 62% 50% 50% / 60% 40% 60% 40%", bottom: "-12px", right: "-8px" },
    },
    {
      name: "Anitha Daffeni",
      role: "Finance Manager",
      img: "/team/anitha1.JPG",
      blobColor: "#b1d270",
      blobStyle: { borderRadius: "50% 50% 42% 58% / 48% 52% 48% 52%", bottom: "-8px", left: "-12px" },
    },
    
  ];

  const categories = [
    "All",
    "Social Media",
    "Lead Generation",
    "Paid Ads",
    "SEO",
    
  ];
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.cat === activeFilter);

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const btn = form.querySelector(".cf-submit") as HTMLButtonElement;
    const successMsg = form.querySelector(".cf-success") as HTMLDivElement;
    if (btn) btn.textContent = "Sending...";
    if (btn) btn.disabled = true;
    setTimeout(() => {
      if (successMsg) successMsg.style.display = "block";
      if (btn) btn.textContent = "Send Enquiry →";
      if (btn) btn.disabled = false;
      form.reset();
    }, 1000);
  };

  return (
    <div className="bg-white text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 relative ${
          navHidden ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled
            ? "bg-white/95 backdrop-blur border-b border-slate-200"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wider">
            <span className="text-amber-500">Groot</span>x<span className="text-amber-500">Media</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {["Home", "About", "Services", "Team", "Our Work","Our Clients","Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-semibold text-slate-600 hover:text-amber-500 transition-colors uppercase tracking-wide"
                >
                  {item}
                </a>
              ),
            )}
            <a
              href="/blog"
              className="text-sm font-semibold text-slate-600 hover:text-amber-500 transition-colors uppercase tracking-wide"
            >
              Blog
            </a>
          </div>

          {/* Desktop Button */}
          <a
            href="#contact"
            className="hidden md:block px-6 py-2 bg-slate-900 text-white text-sm font-semibold hover:bg-amber-500 transition-colors uppercase tracking-wide"
          >
            Get Started
          </a>

          {/* Mobile Button */}
          <div className="md:hidden relative">
            <button
              onClick={() => setNavActive(!navActive)}
              className="flex flex-col gap-1.5"
            >
              <span
                className={`w-6 h-0.5 bg-slate-900 transition-all ${
                  navActive ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-slate-900 transition-all ${
                  navActive ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-slate-900 transition-all ${
                  navActive ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>

            {/* MOBILE MENU DROPDOWN */}
            {navActive && (
              <div className="absolute right-0 top-full mt-3 w-48 bg-white border border-slate-200 shadow-lg px-6 py-4 flex flex-col gap-4 z-50">
                {["Home", "About", "Services", "Projects", "Our Work", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-sm font-semibold text-slate-700 hover:text-amber-500 uppercase tracking-wide"
                      onClick={() => setNavActive(false)}
                    >
                      {item}
                    </a>
                  ),
                )}
                <a
                  href="/blog"
                  className="text-sm font-semibold text-slate-700 hover:text-amber-500 uppercase tracking-wide"
                  onClick={() => setNavActive(false)}
                >
                  Blog
                </a>
                <a
                  href="#contact"
                  className="mt-2 px-6 py-2 bg-slate-900 text-white text-sm font-semibold text-center hover:bg-amber-500 transition-colors uppercase tracking-wide"
                  onClick={() => setNavActive(false)}
                >
                  Get Started
                </a>
              </div>
            )}
          </div>
        </div>

      </nav>

      
{/* Hero Section */}
<section
  id="home"
  className="pt-12 pb-36 bg-slate-950 relative overflow-hidden rounded-br-[180px] md:pt-14 md:pb-40 md:rounded-br-[260px]"
>
  <div className="absolute inset-0">
    <img
      src="/alter_hero1.jpg"
      alt=""
      aria-hidden="true"
      className="w-full h-full object-cover object-center object-[center_72%] opacity-[0.3] scale-[1.02]"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/94 via-slate-900/86 to-[#7c2d12]/70" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(251,191,36,0.18),transparent_22%),radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.08),transparent_18%)]" />
  </div>
  <div className="absolute -top-24 left-[-8%] h-80 w-80 rounded-full bg-white/6 blur-3xl"></div>
  <div className="absolute right-[6%] top-16 h-96 w-96 rounded-full bg-amber-400/16 blur-3xl"></div>
  {/* Glow Effect */}
  <div className="absolute top-20 left-0 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl"></div>

  <div className="absolute right-0 bottom-0 w-[48%] hidden md:hidden z-0">
    <img
      src="/images/heroo.png"   // 👉 place your image in public/images
      alt="Digital Marketing"
      className="w-full h-auto object-contain opacity-90"
    />
  </div>

  {/* Content */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
      <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
        Lets Grow Together
      </h1>

      <p className="text-lg text-slate-200 leading-relaxed mb-8 max-w-xl">
       Grow your business with data-driven digital marketing strategies.
       We help you reach the right audience, increase engagement, and drive conversions.
       From SEO to paid ads, we deliver results that scale your brand.
       Let’s build a strong online presence that drives real growth.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">

        {/* Get a Quote → Contact Section */}
        <a
          href="#contact"
          className="flex items-center gap-4 bg-white text-slate-900 pl-6 pr-2 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
        >
          <span>Get a quote</span>
          <div className="w-10 h-10 flex items-center justify-center bg-amber-500 text-white rounded-full">
            →
          </div>
        </a>

        {/* Explore → Services Section */}
        <a
          href="#services"
          className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-colors text-center"
        >
          Explore More
        </a>

      </div>
    </div>

  {/* CURVED BOTTOM */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
    <svg
      className="relative block w-[calc(100%+1.3px)] h-[280px]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 280"
      preserveAspectRatio="none"
    >
      <path
        d="M0,215 C170,272 332,278 520,252 C760,220 980,156 1188,102 C1300,72 1382,54 1440,48 L1440,280 L0,280 Z"
        className="fill-white"
      ></path>
    </svg>
  </div>
</section>

{/* About Section */}
<section id="about" className="relative mt-8 md:mt-12 pt-8 pb-16 md:pt-12 md:pb-24 px-6 overflow-hidden bg-white">

  {/* Wave background */}
  <div className="absolute inset-0 pointer-events-none">
    <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 220" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,160 C200,220 400,80 600,140 C800,200 1000,60 1200,120 C1320,155 1380,140 1440,130 L1440,220 L0,220 Z" fill="#e2e8f0" opacity="0.5"/>
      <path d="M0,180 C180,130 360,200 540,170 C720,140 900,200 1080,165 C1260,130 1380,175 1440,160 L1440,220 L0,220 Z" fill="#cbd5e1" opacity="0.3"/>
    </svg>
  </div>

  <div className="relative max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row gap-0 items-center fade-in">

      {/* LEFT: Bold Heading */}
      <div className="w-full md:w-2/5 mb-8 md:mb-20 md:pr-12 md:translate-y-10 flex items-center justify-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight text-center md:text-center">
          Boost Your Business With{" "}
          <span className="text-slate-900">Groot</span>
          <span className="text-amber-500">X</span>
          <span className="text-slate-900">Media</span>
          
        </h2>
      </div>

      {/* Vertical Divider */}
      <div className="hidden md:block w-px self-stretch bg-amber-400 mx-4 shrink-0" style={{ minHeight: "120px" }} />

      {/* RIGHT: Description */}
      <div className="w-full md:w-3/5 md:pl-12">
        <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4">
          GrootXMedia is already pleased to have you here! As you're here to meet your coveted marketing goals and expand your online business, we hereby commit to providing the best among the rest of the solutions. With high innovation, smart approaches and multi-task skills, GrootXMedia is always the optimal choice to make for your marketing &amp; advertising needs.
        </p>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
          We believe in facilitating business roles in diverse aspects so as to help business owners and entrepreneurs to achieve organisational milestones every then and now.
        </p>
      </div>

    </div>
  </div>
</section>

{/* Why We're the Perfect Choice Section */}
<style>{`
  @keyframes float-badge {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  @keyframes spin-dashed {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes pop-dot {
    0%, 100% { transform: scale(1); opacity: 0.6; }
    50% { transform: scale(1.4); opacity: 1; }
  }
  .float-badge { animation: float-badge 3s ease-in-out infinite; }
  .spin-dashed { animation: spin-dashed 18s linear infinite; }
  .pop-dot { animation: pop-dot 2.5s ease-in-out infinite; }
`}</style>

<section className="hidden py-14 md:py-24 px-6 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* LEFT: Text */}
      <div className="fade-in order-2 md:order-1">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
          Why We're the{" "}
          <span className="text-amber-500">Perfect Choice</span>{" "}
          for You?
        </h2>
        <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-8 text-justify">
          Our digital marketing services are superior at helping your company improve and grow its online presence and build your business. Through our{" "}
          <strong>S(Search Engine Optimization)</strong> services, we can help your website rank higher in order to receive organic traffic and customers. Through{" "}
          <strong>Social Media Marketing (SMM)</strong>, we can help create impactful social media strategies to raise awareness and increase engagement across all of the major platforms.
        </p>
        <a
          href="#services"
          className="inline-block px-8 py-3 bg-amber-500 text-white font-semibold text-sm uppercase tracking-wide hover:bg-slate-900 transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          View More →
        </a>
      </div>

      {/* RIGHT: Image with blob + badge + decorative dots */}
      <div className="fade-in order-1 md:order-2 relative flex items-center justify-center min-h-[320px] md:min-h-[420px]">

        {/* Decorative dots */}
        <div className="pop-dot absolute top-4 left-8 w-3 h-3 rounded-full bg-amber-400 opacity-60" style={{ animationDelay: "0s" }} />
        <div className="pop-dot absolute top-16 right-6 w-2 h-2 rounded-full bg-slate-300 opacity-60" style={{ animationDelay: "0.8s" }} />
        <div className="pop-dot absolute bottom-10 left-4 w-2 h-2 rounded-full bg-amber-300 opacity-60" style={{ animationDelay: "1.4s" }} />
        <div className="pop-dot absolute bottom-4 right-16 w-4 h-4 rounded-full bg-slate-200 opacity-80" style={{ animationDelay: "0.4s" }} />

        {/* Outer spinning dashed ring */}
        <div
          className="spin-dashed absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full border-2 border-dashed border-amber-400/50"
        />

        {/* Blob image container */}
        <div
          className="relative w-[240px] h-[240px] md:w-[340px] md:h-[340px] overflow-hidden shadow-2xl"
          style={{ borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%" }}
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
            alt="Team working together"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent" />
        </div>

      </div>
    </div>
  </div>
</section>

{/* Services Section */}
<style>{`
  .services-bg {
    background-color: #f8fafc;
    position: relative;
    overflow: hidden;
  }
  .services-wave-svg {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none;
    opacity: 0.4;
  }
  .service-card {
    background: #ffffff;
    border-radius: 10px;
    border: 1px solid #e2e8f0;
    transition: background 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease;
    cursor: pointer;
    width: 100%;
  }
  .service-card:hover {
    background: #0f172a;
    box-shadow: 0 16px 40px rgba(0,0,0,0.14);
    transform: translateY(-6px);
    border-color: #0f172a;
  }
  .service-icon-wrap {
    width: 76px;
    height: 76px;
    border-radius: 50%;
    background: #fff7ed;
    border: 2px solid #f59e0b;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.35s ease, border-color 0.35s ease;
  }
  .service-card:hover .service-icon-wrap {
    background: #f59e0b;
    border-color: #f59e0b;
  }
  .service-icon-wrap svg {
    color: #f59e0b;
    transition: color 0.35s ease;
  }
  .service-card:hover .service-icon-wrap svg {
    color: #ffffff;
  }
  .service-title {
    color: #0f172a;
    transition: color 0.35s ease;
    font-size: 1.1rem;
  }
  .service-card:hover .service-title {
    color: #ffffff;
  }
  .service-desc {
    color: #64748b;
    transition: color 0.35s ease;
    font-size: 0.95rem;
    line-height: 1.65;
  }
  .service-card:hover .service-desc {
    color: #94a3b8;
  }
  .service-arch {
    position: absolute;
    top: -44px;
    left: 50%;
    transform: translateX(-50%);
    width: 88px;
    height: 88px;
    background: #ffffff;
    border-radius: 50% 50% 0 0 / 55% 55% 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.35s ease;
    box-shadow: 0 -4px 16px rgba(0,0,0,0.06);
  }
  .service-card:hover .service-arch {
    background: #0f172a;
  }
`}</style>

<section id="services" className="services-bg py-12 md:py-20 px-4">

  {/* Subtle dot background SVG */}
  <svg className="services-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 500" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="dots" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.2" fill="#f59e0b" opacity="0.3"/>
      </pattern>
      <mask id="wave-mask">
        <path d="M0,180 C200,100 400,260 600,180 C800,100 1000,240 1200,160 C1320,120 1390,140 1440,130 L1440,500 L0,500 Z" fill="white"/>
      </mask>
    </defs>
    <rect width="1440" height="500" fill="url(#dots)" mask="url(#wave-mask)"/>
    <path d="M0,180 C200,100 400,260 600,180 C800,100 1000,240 1200,160 C1320,120 1390,140 1440,130" fill="none" stroke="#f59e0b" strokeWidth="1.2" opacity="0.2"/>
  </svg>

  <div className="max-w-7xl mx-auto relative z-10">

    {/* Heading */}
    <div className="mb-16 fade-in text-center">
      <div className="text-amber-500 text-sm font-semibold tracking-widest mb-3">WHAT WE OFFER</div>
      <h2 className="text-4xl md:text-6xl font-bold mb-4 text-slate-900">
        OUR <span className="text-slate-300">SERVICES</span>
      </h2>
      <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
        Everything your brand needs to grow online — handled by one dedicated team.
      </p>
    </div>

    {/* Service Cards — 4 in a row, 2 rows */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
      {services.map((service, i) => {
        const icons = [
          <svg key="sm" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>,
          <svg key="lg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
          <svg key="pa" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 10l3 3 4-4 3 3"/></svg>,
          <svg key="seo" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>,
          <svg key="bi" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
          <svg key="wd" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><polyline points="8 10 12 14 16 10"/></svg>,
          <svg key="em" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>,
          <svg key="vd" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>,
        ];
        return (
          <div key={i} className="service-card relative pt-16 pb-8 px-5 text-center mt-10" style={{minHeight: "300px"}}>
            {/* Arch bump at top */}
            <div className="service-arch">
              <div className="service-icon-wrap">
                {icons[i] || icons[0]}
              </div>
            </div>
            <h3 className="service-title font-bold mb-3 mt-1 leading-snug">{service.title}</h3>
            <p className="service-desc">
              {service.desc.split(".").slice(0, 2).join(". ")}.
            </p>
          </div>
        );
      })}
    </div>

  </div>
</section>

{/* Why We're Better Section */}
<section className="py-14 md:py-24 px-6 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-16 items-center">

      {/* LEFT: Text Content */}
      <div className="fade-in">
       

        {/* Heading */}
        <h2 className="text-3xl md:text-[2.6rem] font-bold leading-tight text-slate-900 mb-8">
          We Know How to Grow<br />Your Business Digitally
        </h2>

        {/* Feature 1 */}
        <div className="flex items-start gap-5 mb-6">
          <div className="w-14 h-14 min-w-[56px] rounded-full bg-slate-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-base mb-1">Results-Driven Marketing</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              We provide tailored strategies and data-backed campaigns that drive real growth for your business online.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-start gap-5 mb-10">
          <div className="w-14 h-14 min-w-[56px] rounded-full bg-slate-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l1.17-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-base mb-1">24/7 Customer Support</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              Round-the-clock dedicated assistance and comprehensive support to keep your campaigns running smoothly.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="px-7 py-3.5 bg-slate-900 text-white font-semibold text-sm rounded-full hover:bg-amber-500 transition-colors duration-300"
          >
            Get Started
          </a>
          <a
            href="#services"
            className="w-12 h-12 flex items-center justify-center border border-slate-200 rounded-full text-slate-500 hover:border-amber-500 hover:text-amber-500 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </a>
        </div>
      </div>

      {/* RIGHT: Two overlapping images — exact reference match */}
      <div className="fade-in relative h-[420px] md:h-[500px]">

        {/* Gray rounded bg card — sits bottom-right, slightly inset */}
        <div className="absolute bottom-0 right-0 w-[86%] h-[88%] rounded-[2rem] overflow-hidden bg-slate-100">
          <img
            src="team/team1.jpg"   // 👉 place your image in public/images
            alt="Team strategy"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Front portrait image — overlaps top-left of back image, thick white border */}
        <div
          className="absolute top-0 left-0 w-[55%] h-[80%] rounded-[2rem] overflow-hidden"
          style={{ border: "7px solid #ffffff", boxShadow: "0 12px 48px rgba(0,0,0,0.16)" }}
        >
          <img
            src="team/team2.png"
            alt="Team collaborating"
            className="w-full h-full object-cover object-center"
          />
        </div>

      </div>

    </div>
  </div>
</section>

     

      {/* Projects CTA Banner Section */}
      

      <section id="our work" className="py-12 md:py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Card 1 — Projects */}
            <div
              className="cta-card-left cta-shimmer rounded-2xl p-10 md:p-14 flex flex-col items-start text-left relative overflow-hidden"
              style={{ background: "linear-gradient(145deg, #1e293b 0%, #0f172a 50%, #1e3a2f 100%)" }}
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-white text-3xl md:text-4xl font-extrabold mb-3 leading-tight z-10">
                Projects That Speak for Us
              </h3>
              <span className="cta-u h-[3px] bg-amber-400 rounded-full mb-6 z-10" />
              <p className="text-slate-400 text-base leading-relaxed mb-10 z-10">
                Take a look at some of our recent projects and see how we help businesses grow online with smart digital solutions.
              </p>
              <a
                href="#projects"
                className="cta-pill z-10 px-8 py-3.5 bg-amber-500 text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-amber-400 transition-colors duration-300 shadow-lg"
              >
                OUR PORTFOLIO →
              </a>
            </div>

            {/* Card 2 — Start Your Success */}
            <div
              className="cta-card-right cta-shimmer rounded-2xl p-10 md:p-14 flex flex-col items-start text-left relative overflow-hidden"
              style={{ background: "linear-gradient(145deg, #1e293b 0%, #0f172a 50%, #2d1e3a 100%)" }}
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-white text-3xl md:text-4xl font-extrabold mb-3 leading-tight z-10">
                Start Your Success Story
              </h3>
              <span className="cta-u h-[3px] bg-amber-400 rounded-full mb-6 z-10" />
              <p className="text-slate-400 text-base leading-relaxed mb-10 z-10">
                Your business deserves smart solutions that work. Let's create something amazing together.
              </p>
              <a
                href="#contact"
                className="cta-pill z-10 px-8 py-3.5 bg-amber-500 text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-amber-400 transition-colors duration-300 shadow-lg"
              >
                KICKSTART YOUR PROJECT →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section id="our clients" className="py-12 md:py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-14 fade-in">
            <div className="text-amber-500 text-sm font-semibold tracking-widest mb-3 uppercase">Trusted By</div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
              Our <span className="text-slate-300">Clients</span>
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-5" />
          </div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            {[
              { name: "Decathlon", img: "/team/decathlon.png" },
              // { name: "Luxe Walls", img: "/team/luxewalls.png" },
              { name: "Aria", img: "/team/aria.png" },
              { name: "Car Castle", img: "/team/carcastle.png" },
              { name: "Best Cars", img: "/team/bestcars.png" },
            ].map((client) => (
              <div
                key={client.name}
                className="fade-in group flex items-center justify-center w-full p-8 border border-slate-100 hover:border-amber-400 hover:shadow-lg transition-all duration-300 bg-white"
                style={{ minHeight: "160px" }}
              >
                <img
                  src={client.img}
                  alt={client.name}
                  className="max-h-36 max-w-full object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <style>{`
        @keyframes spin-ring {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(245,158,11,0); }
          50%       { box-shadow: 0 0 22px 6px rgba(245,158,11,0.35); }
        }
        .team-img-wrap:hover .team-ring-spin {
          animation: spin-ring 3s linear infinite;
        }
        .team-img-wrap:hover .team-photo {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>

      <section id="team" className="relative overflow-hidden">
        {/* White top: heading area */}
        <div className="bg-white text-center px-6 pt-12 md:pt-20 pb-24 md:pb-40">
          <div className="text-amber-500 text-sm font-semibold tracking-widest mb-4 fade-in">
            THE PEOPLE BEHIND GrootXMedia
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
            OUR <span className="text-slate-300">TEAM</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto fade-in">
            A passionate team of strategists, creators, and digital experts committed to growing your brand.
          </p>
        </div>

        {/* Slate-900 bottom: cards overlap the boundary */}
        <div className="bg-slate-600 pb-10 md:pb-20">
          {/* Desktop: 5 in a row */}
          <div className="max-w-6xl mx-auto px-6 -mt-28 hidden md:grid md:grid-cols-5 gap-6">
            {teamMembers.map((member, i) => (
              <div key={i} className="fade-in flex flex-col items-center text-center group cursor-pointer">
                {/* Photo + blob wrapper */}
                <div className="team-img-wrap relative w-36 h-36 mb-6">

                  {/* Blob — morphs & rotates on hover */}
                  <div
                    className="absolute w-32 h-32 transition-all duration-700 group-hover:scale-115 group-hover:rotate-12"
                    style={{ backgroundColor: member.blobColor, ...member.blobStyle }}
                  />

                  {/* Outer spinning dashed ring */}
                  <div
                    className="team-ring-spin absolute rounded-full border-2 border-dashed border-amber-500/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ inset: "-10px" }}
                  />

                  {/* Inner solid amber ring that scales in */}
                  <div
                    className="absolute rounded-full border-2 border-amber-400 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400 z-20"
                    style={{ inset: "-4px" }}
                  />

                  {/* Amber gradient overlay shimmer */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/0 via-amber-500/20 to-amber-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10" />

                  {/* Photo — lifts, scales, glows */}
                  <img
                    src={member.img}
                    alt={member.name}
                    className="team-photo absolute inset-0 mt-6 w-full h-full rounded-full object-cover shadow-xl z-10 transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-105"
                  />
                </div>

                {/* Name slides up on hover */}
                <div className="text-white font-semibold text-base transition-transform duration-300 group-hover:-translate-y-1">
                  {member.name}
                </div>
                {/* Role fades to amber */}
                <div className="text-slate-400 text-sm mt-1 transition-colors duration-300 group-hover:text-amber-400">
                  {member.role}
                </div>
                {/* Expanding amber underline */}
                <div className="mt-3 h-0.5 bg-amber-500 mx-auto opacity-0 w-0 group-hover:opacity-100 group-hover:w-12 transition-all duration-500" />
              </div>
            ))}
          </div>

          {/* Mobile: 2 columns grid */}
          <div className="md:hidden max-w-sm mx-auto px-6 -mt-24 grid grid-cols-2 gap-x-6 gap-y-10">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className={`fade-in flex flex-col items-center text-center group ${
                  i === 4 ? "col-span-2" : ""
                }`}
              >
                {/* Photo + blob wrapper */}
                <div className="team-img-wrap relative w-28 h-28 mb-4">
                  <div
                    className="absolute w-24 h-24 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{ backgroundColor: member.blobColor, ...member.blobStyle }}
                  />
                  {/* Spinning ring */}
                  <div
                    className="team-ring-spin absolute rounded-full border-2 border-dashed border-amber-500/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ inset: "-8px" }}
                  />
                  {/* Inner ring */}
                  <div
                    className="absolute rounded-full border-2 border-amber-400 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400 z-20"
                    style={{ inset: "-3px" }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/0 to-amber-500/25 opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10" />
                  <img
                    src={member.img}
                    alt={member.name}
                    className="team-photo absolute inset-0 w-full h-full rounded-full object-cover shadow-xl z-10 transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-105"
                  />
                </div>
                <div className="text-white font-semibold text-sm transition-colors duration-300 group-hover:text-white">
                  {member.name}
                </div>
                <div className="text-slate-400 text-xs mt-1 transition-colors duration-300 group-hover:text-amber-400">
                  {member.role}
                </div>
                <div className="mt-2 h-0.5 bg-amber-500 mx-auto w-0 group-hover:w-10 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
    <section id="contact" className="py-12 md:py-24 px-6">
  <div className="max-w-7xl mx-auto">

    <div className="grid md:grid-cols-2 gap-16 items-start">

      {/* LEFT SIDE */}
      <div className="fade-in space-y-6 md:space-y-10">

        {/* Heading */}
        <div>
          <div className="text-amber-500 text-sm font-semibold tracking-widest mb-4">
            LET'S CONNECT
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            START A <span className="text-slate-300">PROJECT</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Have a project in mind? Fill out the form and we'll respond within 24 hours.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-2 gap-6 ">

          {/* Email */}
          <div>
            <div className="text-[16px] font-semibold text-amber-500 tracking-widest mb-2">
              EMAIL
            </div>
            <div className="text-[14px] font-semibold text-slate-900">
              support@grootxmedia.com
            </div>
          </div>

          {/* Phone */}
          <div>
            <div className="text-[15px] font-semibold text-amber-500 tracking-widest mb-2">
              PHONE / WHATSAPP
            </div>
            <div className="text-[14px] font-semibold text-slate-900">
              +91 7397794418
            </div>
          </div>

          {/* Location */}
          <div>
            <div className="text-[15px] font-semibold text-amber-500 tracking-widest mb-2">
              LOCATION
            </div>
            <div className="text-[14px] font-semibold text-slate-900">
              Tamil Nadu, India
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <div className="text-[15px] font-semibold text-amber-500 tracking-widest mb-2">
              WORKING HOURS
            </div>
            <div className="text-[14px] font-semibold text-slate-900">
              Mon – Sat | 9 AM – 7 PM IST
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-200" />

        {/* Social Icons */}
<div className="flex gap-3 mt-6">
  <a
    href="https://www.instagram.com/groot_x_media/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-colors"
  >
    <Instagram size={18} />
  </a>

          <a
            href="#"
            className="w-10 h-10 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-colors"
          >
            <Facebook size={18} />
          </a>

          <a
            href="#"
            className="w-10 h-10 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-colors"
          >
            <Twitter size={18} />
          </a>

          <a
            href="#"
            className="w-10 h-10 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-colors"
          >
            <Youtube size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/saravanan-loganathan-677a00417/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-colors"
          >
            <Linkedin size={18} />
          </a>          
        </div>

      </div>

      {/* RIGHT SIDE FORM (UNCHANGED) */}
      <form onSubmit={handleContactSubmit} className="fade-in space-y-6 mt-0 md:mt-[60px]">
        {/* Mobile-only Contact Us heading */}
        <div className="md:hidden mb-2">
          <div className="text-amber-500 text-sm font-semibold tracking-widest mb-2">GET IN TOUCH</div>
          <h3 className="text-3xl font-bold text-slate-900">CONTACT <span className="text-slate-300">US</span></h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="px-4 py-3 bg-slate-100 border border-slate-200 focus:border-slate-900 focus:outline-none transition-colors"
          />
          <input
            type="email"
            placeholder="you@email.com"
            required
            className="px-4 py-3 bg-slate-100 border border-slate-200 focus:border-slate-900 focus:outline-none transition-colors"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="tel"
            placeholder="+91"
            className="px-4 py-3 bg-slate-100 border border-slate-200 focus:border-slate-900 focus:outline-none transition-colors"
          />
          <input
            type="text"
            placeholder="Your Business"
            className="px-4 py-3 bg-slate-100 border border-slate-200 focus:border-slate-900 focus:outline-none transition-colors"
          />
        </div>

        <select
          required
          className="w-full px-4 py-3 bg-slate-100 border border-slate-200 focus:border-slate-900 focus:outline-none transition-colors"
        >
          <option value="">— Select a Service —</option>
          <option>Social Media Management</option>
          <option>Lead Generation</option>
          <option>Paid Advertising (Meta / Google)</option>
          <option>SEO & Content Marketing</option>
          <option>Brand Identity & Design</option>
          <option>Website Development</option>
          <option>Full Digital Marketing Package</option>
        </select>

        <select className="w-full px-4 py-3 bg-slate-100 border border-slate-200 focus:border-slate-900 focus:outline-none transition-colors">
          <option value="">— Select Industry —</option>
          <option>Restaurant / Food & Beverage</option>
          <option>Real Estate</option>
          <option>Retail / E-Commerce</option>
          <option>Healthcare / Clinic</option>
          <option>Education / Coaching</option>
          <option>Fashion / Lifestyle</option>
          <option>Automobile</option>
          <option>Finance</option>
          <option>Other</option>
        </select>

        <textarea
          placeholder="What does your business do? What are your goals? Any current digital marketing challenges?"
          required
          className="w-full px-4 py-3 bg-slate-100 border border-slate-200 focus:border-slate-900 focus:outline-none transition-colors min-h-32"
        />

        <button
          type="submit"
          className="cf-submit w-full md:w-auto px-8 py-3 bg-slate-900 text-white font-semibold hover:bg-amber-500 transition-colors flex items-center gap-2 uppercase tracking-wide"
        >
          Send Enquiry →
        </button>

        <div className="cf-success hidden bg-green-50 border border-green-300 text-green-700 px-4 py-3 text-sm">
          ✓ Message received! We'll reach out within 24 hours.
        </div>
      </form>

    </div>
  </div>
</section>
  {/* Footer */}
      <footer className="bg-slate-900 text-white border-t-4 border-amber-500">

        {/* Main Footer Grid */}
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1: About Us */}
          <div>
            <h3 className="text-amber-500 text-lg font-extrabold uppercase tracking-widest mb-5">About Us</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              GrootXMedia Media is one of the premier digital marketing agencies in India, delivering innovative strategies and impactful solutions to help businesses grow and succeed online.
            </p>
            <div className="text-2xl font-bold tracking-wider">
              Groot<span className="text-amber-500">X</span>Media
            </div>
          </div>

          {/* Col 2: Contact Us */}
          <div>
            <h3 className="text-amber-500 text-lg font-extrabold uppercase tracking-widest mb-5">Contact Us</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 text-amber-400">📍</span>
                <span>GrootXMedia Digital, Tamil Nadu, India – 642109</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="shrink-0 text-amber-400">📞</span>
                <a href="tel:+917397794418" className="hover:text-amber-400 transition-colors">+91 7397794418</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="shrink-0 text-amber-400">✉️</span>
                <a href="mailto:support@grootxmedia.com" className="hover:text-amber-400 transition-colors">support@grootxmedia.com</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="shrink-0 text-amber-400">💬</span>
                <a href="https://wa.me/7397794418" className="hover:text-amber-400 transition-colors">+91 73977 94418</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div>
            <h3 className="text-amber-500 text-lg font-extrabold uppercase tracking-widest mb-5">Our Services</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              {["Social Media Management", "Lead Generation", "Paid Advertising", "SEO & Content", "Brand Identity", "Website Development"].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-amber-400 transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div>
            <h3 className="text-amber-500 text-lg font-extrabold uppercase tracking-widest mb-5">Resources</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              {["News", "Media Coverage", "Guest Post", "Blog", "Case Studies", "Careers"].map((r) => (
                <li key={r}>
                  <a href={r === "Blog" ? "/blog" : "#"} className="hover:text-amber-400 transition-colors">{r}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 px-6 py-5">
          <div className="max-w-7xl mx-auto text-center text-sm text-slate-400">
            © 2026 GrootXMedia Digital Marketing. All rights reserved.
          </div>
        </div>

      </footer>

      {/* Floating WhatsApp & Mail Buttons — visible only in hero section */}
      <div
        className="fixed right-6 bottom-10 flex flex-col gap-4 z-50 transition-all duration-300"
        style={{ opacity: inHero ? 1 : 0, pointerEvents: inHero ? "auto" : "none" }}
      >
        {/* Mail — orange background, black icon */}
        <a
          href="mailto:support@grootxmedia.com"
          title="Send us an email"
          className="flex items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110"
          style={{ backgroundColor: "#f59e0b", width: "52px", height: "52px" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
        </a>

        {/* WhatsApp — green background, white icon */}
        <a
          href="https://wa.me/7397794418"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
          className="flex items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110"
          style={{ backgroundColor: "#25D366", width: "52px", height: "52px" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
          </svg>
        </a>
      </div>

    </div>
  );
}
