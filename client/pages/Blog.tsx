import { useState } from "react";

const blogs = [
  {
    id: 1,
    slug: "why-every-business-needs-digital-marketing-2026",
    category: "Digital Marketing",
    date: "June 2026",
    readTime: "5 min read",
    title: "Why Every Business Needs Digital Marketing in 2026",
    excerpt:
      "In today's digital-first world, customers no longer rely solely on traditional advertising. A professional website, effective SEO, and active social media presence work together to drive growth.",
    content: [
      {
        type: "intro",
        text: "In today's digital-first world, customers no longer rely solely on traditional advertising to discover businesses. Whether someone is looking for a local service, a product, or professional expertise, their journey almost always begins online.\n\nFor businesses that want to grow, having a strong digital presence is no longer optional—it is essential. A professional website, effective SEO strategy, and active social media presence work together to attract customers, build trust, and increase revenue.\n\nLet's explore why these three elements are the foundation of business growth in 2026.",
      },
      {
        type: "heading",
        text: "1. A Website is Your Digital Storefront",
      },
      {
        type: "text",
        text: "Imagine a customer hearing about your business and searching for you online. If they cannot find a professional website, they may question your credibility and move to a competitor.\n\nA well-designed website helps businesses build trust and credibility, showcase products and services, generate leads and inquiries, provide 24/7 accessibility, and improve customer experience.\n\nUnlike social media platforms, a website is fully owned and controlled by your business. It serves as the central hub for all your online marketing activities.",
      },
      {
        type: "checklist",
        heading: "Key Benefits of a Professional Website",
        items: [
          "Professional brand image",
          "Better customer engagement",
          "Mobile-friendly user experience",
          "Increased conversions and sales",
          "Strong online visibility",
        ],
      },
      {
        type: "heading",
        text: "2. SEO Helps Customers Find Your Business",
      },
      {
        type: "text",
        text: "Having a website is only the first step. If customers cannot find your website on search engines like Google, you are missing valuable opportunities.\n\nSearch Engine Optimization (SEO) improves your website's visibility when people search for products or services related to your business.\n\nFor example, when someone searches \"Best digital marketing agency in Chennai\" or \"Website development company near me\", SEO helps your business appear in those search results.",
      },
      {
        type: "checklist",
        heading: "Benefits of SEO",
        items: [
          "Higher Google rankings",
          "Increased website traffic",
          "More qualified leads",
          "Better brand awareness",
          "Long-term marketing results",
        ],
      },
      {
        type: "text",
        text: "Unlike paid advertisements that stop generating traffic once the budget ends, SEO continues to deliver value over time.",
      },
      {
        type: "heading",
        text: "3. Social Media Builds Relationships and Trust",
      },
      {
        type: "text",
        text: "Modern customers want to interact with brands before making purchasing decisions. Social media platforms such as Instagram, Facebook, LinkedIn, and X allow businesses to engage directly with their audience.\n\nAn active social media presence helps businesses increase brand awareness, build customer trust, showcase expertise, share updates and promotions, and generate leads and inquiries.\n\nBusinesses that consistently create valuable content often become the first choice when customers are ready to buy. Customers trust businesses that are visible and active online. Regular posting, audience engagement, and strategic content marketing help establish authority within your industry.",
      },
      {
        type: "heading",
        text: "The Power of Combining Website, SEO, and Social Media",
      },
      {
        type: "text",
        text: "Many businesses focus on only one aspect of digital marketing. However, the real growth happens when all three work together.",
      },
      {
        type: "trio",
        items: [
          { label: "Website", desc: "Provides information and converts visitors into customers." },
          { label: "SEO", desc: "Brings targeted visitors from search engines." },
          { label: "Social Media", desc: "Builds relationships and drives engagement." },
        ],
      },
      {
        type: "text",
        text: "Together, they create a complete digital marketing ecosystem that supports sustainable business growth.",
      },
      {
        type: "heading",
        text: "How Groot X Media Helps Businesses Grow",
      },
      {
        type: "text",
        text: "At Groot X Media, we help businesses establish a strong digital presence through professional, responsive, and user-friendly Website Development designed to convert visitors into customers; strategic SEO solutions that improve search rankings and drive organic traffic; and Social Media Management including content creation, audience engagement, and platform management that helps businesses build trust and grow their online community.",
      },
      {
        type: "conclusion",
        text: "The digital landscape continues to evolve, but one fact remains constant: businesses that invest in their online presence achieve greater visibility, stronger customer relationships, and higher growth potential.\n\nWhether you are a startup, local business, or established company, investing in a professional website, SEO, and social media marketing is one of the smartest decisions you can make in 2026.",
      },
    ],
  },
  {
    id: 2,
    slug: "personal-branding-ultimate-guide-2026",
    category: "Personal Branding",
    date: "June 2026",
    readTime: "8 min read",
    title: "Personal Branding: The Ultimate Guide to Building Your Digital Identity in 2026",
    excerpt:
      "People are no longer buying products and services; they're buying trust, expertise, and authenticity. Your personal brand is one of your most valuable assets in today's competitive digital world.",
    content: [
      {
        type: "intro",
        text: "People are no longer buying products and services; they're buying trust, expertise, and authenticity in today's digital world. As an entrepreneur, freelancer, business owner, corporate professional, content creator, or student, your personal brand is one of your most valuable assets.\n\nPeople tend to look up the names of other people before working with them, hiring them, collaborating with them, or buying from them. The outcomes of that search can have a great impact on their decision.\n\nPersonal branding is not an option in 2026. For anyone looking to get noticed in the hyper-competitive digital world, it's become essential.",
      },
      {
        type: "heading",
        text: "What is Personal Branding?",
      },
      {
        type: "text",
        text: "Personal branding is a conscious branding strategy designed to build your image and reputation. It requires expressing skills, values, knowledge, personality, and professional experience in a memorable way.\n\nIn other words, your personal brand is your reputation in the minds of others when your name is mentioned.\n\nHaving a strong personal brand makes people understand who you are, what you do, what you represent, why they should believe you, and how you can help them. Everyone already has a personal brand; successful people simply manage and enhance it.",
      },
      {
        type: "heading",
        text: "Why Personal Branding Matters Today",
      },
      {
        type: "checklist",
        heading: "",
        items: [
          "The Internet has revolutionized people's buying behavior",
          "Employers check out candidates before hiring",
          "Clients research service providers before purchasing",
          "Investors look at founders before investing in a startup",
          "Buying decisions are based on customers' reviews of businesses and business owners",
        ],
      },
      {
        type: "text",
        text: "Because of this, your internet identity can be the initial impression you make. Trust is one of the most crucial aspects of any business and professional success. Constantly exposed to your work accomplishments, recommendations, and knowledge, people start to believe in you. Trust can translate to opportunities, partnerships, and sales.",
      },
      {
        type: "heading",
        text: "5 Key Benefits of a Strong Personal Brand",
      },
      {
        type: "numbered",
        items: [
          {
            title: "Builds Trust and Credibility",
            desc: "Consistently sharing knowledge, work accomplishments, and expertise builds trust that translates to opportunities, partnerships, and sales.",
          },
          {
            title: "Creates Career Opportunities",
            desc: "A good personal brand attracts job offers, freelance projects, speaking engagements, media interviews, and business partnerships.",
          },
          {
            title: "Differentiates You from Competition",
            desc: "Nobody can replicate your unique combination of story, personality, experiences, and perspective.",
          },
          {
            title: "Expands Your Network",
            desc: "Building a strong personal brand attracts industry contacts, mentors, clients, and collaborators who support your success.",
          },
          {
            title: "Increases Business Growth",
            desc: "People value purchasing from individuals they trust. A strong personal brand boosts the credibility and visibility of your business.",
          },
        ],
      },
      {
        type: "heading",
        text: "Elements of a Solid Personal Brand",
      },
      {
        type: "numbered",
        items: [
          {
            title: "Clarity",
            desc: "Be clear about what you're recognized for, what expertise you offer, and what value you provide. If you don't know what you're trying to say, your message becomes confused.",
          },
          {
            title: "Consistency",
            desc: "All platforms should reflect your message, content style, profile picture, communication tone, and values. Consistency builds recognition and trust over time.",
          },
          {
            title: "Authenticity",
            desc: "Don't attempt to copy others. Be honest about your experiences, learning, challenges, and successes. Authenticity creates more engagement with your audience.",
          },
          {
            title: "Visibility",
            desc: "Consistently sharing valuable content boosts visibility and builds authority. The most perfect knowledge is silent if no one knows it.",
          },
          {
            title: "Value Creation",
            desc: "Don't just promote yourself — create content that educates, inspires, or solves problems. If you offer value over time, people listen.",
          },
        ],
      },
      {
        type: "heading",
        text: "Step-by-Step Guide to Building Your Personal Brand",
      },
      {
        type: "steps",
        items: [
          {
            step: "01",
            title: "Define Your Niche",
            desc: "A niche helps people know what you're an expert in — Digital Marketing, Web Development, Finance, Entrepreneurship, Design, Fitness, Technology. Narrowing down enables you to develop authority more effectively.",
          },
          {
            step: "02",
            title: "Optimize Your Online Presence",
            desc: "Ensure your digital profiles clearly show a professional photo, clear bio, skills and expertise, contact information, and website link. Maintain a consistent look across LinkedIn, Instagram, Facebook, X, and your personal website.",
          },
          {
            step: "03",
            title: "Create Valuable Content",
            desc: "Share industry insights, tips and tutorials, success stories, case studies, personal experiences, educational videos, and blog articles. Well-formulated content shows knowledge and fosters commitment.",
          },
          {
            step: "04",
            title: "Build a Personal Website",
            desc: "A personal website is your headquarters in the digital world. It gives you full control of your online image and can feature your biography, portfolio, achievements, blog articles, testimonials, and contact information.",
          },
          {
            step: "05",
            title: "Engage with Your Audience",
            desc: "Respond to comments, answer questions, participate in discussions, and develop authentic connections. Gaining engagement helps build trust and community.",
          },
        ],
      },
      {
        type: "heading",
        text: "Personal Branding and SEO",
      },
      {
        type: "text",
        text: "A lot of people are unaware of the connection between personal branding and SEO. When your name appears across blogs, website pages, social media profiles, guest articles, and interviews throughout the web, your credibility increases significantly.\n\nSEO can make your expertise visible to people who are searching for information online. A strong SEO campaign ensures your personal brand can be seen and heard.",
      },
      {
        type: "heading",
        text: "The Future of Personal Branding",
      },
      {
        type: "text",
        text: "With increased competition in the online world, personal branding will be even more essential. Although Artificial Intelligence can help automate numerous tasks, authenticity, trust, and the human touch will still be invaluable.\n\nConsumers will continue to stay loyal to individuals and companies that they know and trust. Anybody who invests in their personal brand this year will be at a clear advantage going forward.",
      },
      {
        type: "conclusion",
        text: "One of the best investments you can make in your career, business, and future is your personal brand. It allows you to make connections, get opportunities, earn trust, and be successful long-term.\n\nRemember, your personal brand is not created overnight. It is created through effort, valuable content, genuine communication, and a dedication to helping others. The sooner you start, the more opportunities you'll unlock for yourself and your business.",
      },
    ],
  },
];

function BlogCard({ blog, onRead }: { blog: typeof blogs[0]; onRead: () => void }) {
  return (
    <div className="bg-white border border-slate-200 hover:border-amber-400 transition-all duration-300 group shadow-sm hover:shadow-md">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-slate-200 group-hover:bg-amber-500 transition-colors duration-300" />
      <div className="p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 bg-amber-50 px-3 py-1">
            {blog.category}
          </span>
          <span className="text-xs text-slate-400">{blog.date}</span>
          <span className="text-xs text-slate-400">· {blog.readTime}</span>
        </div>
        <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3 leading-tight group-hover:text-amber-600 transition-colors">
          {blog.title}
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed mb-6">{blog.excerpt}</p>
        <button
          onClick={onRead}
          className="flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-amber-500 transition-colors uppercase tracking-wide"
        >
          Read Article <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
}

function renderContent(blocks: typeof blogs[0]["content"]) {
  return blocks.map((block, i) => {
    if (block.type === "intro") {
      return (
        <p key={i} className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 border-l-4 border-amber-500 pl-5 italic">
          {block.text!.split("\n\n").map((para, j) => (
            <span key={j}>{para}{j < block.text!.split("\n\n").length - 1 && <><br /><br /></>}</span>
          ))}
        </p>
      );
    }
    if (block.type === "heading") {
      return (
        <h2 key={i} className="text-xl md:text-2xl font-extrabold text-slate-900 mt-10 mb-4">
          {block.text}
        </h2>
      );
    }
    if (block.type === "text") {
      return (
        <div key={i} className="mb-6">
          {block.text!.split("\n\n").map((para, j) => (
            <p key={j} className="text-slate-600 leading-relaxed mb-3">{para}</p>
          ))}
        </div>
      );
    }
    if (block.type === "conclusion") {
      return (
        <div key={i} className="mt-10 p-6 bg-slate-900 text-white">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-3">Conclusion</p>
          {block.text!.split("\n\n").map((para, j) => (
            <p key={j} className="leading-relaxed mb-2 text-slate-200">{para}</p>
          ))}
        </div>
      );
    }
    if (block.type === "checklist") {
      return (
        <div key={i} className="mb-6">
          {block.heading && (
            <p className="font-bold text-slate-800 mb-3">{block.heading}</p>
          )}
          <ul className="space-y-2">
            {block.items!.map((item, j) => (
              <li key={j} className="flex items-start gap-3 text-slate-600">
                <span className="mt-1 w-4 h-4 shrink-0 bg-amber-500 text-white text-xs flex items-center justify-center font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    if (block.type === "trio") {
      return (
        <div key={i} className="grid md:grid-cols-3 gap-4 mb-6">
          {block.items!.map((item: any, j: number) => (
            <div key={j} className="bg-slate-50 border border-slate-200 p-5">
              <p className="font-extrabold text-slate-900 mb-1">{item.label}</p>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      );
    }
    if (block.type === "numbered") {
      return (
        <div key={i} className="space-y-4 mb-6">
          {block.items!.map((item: any, j: number) => (
            <div key={j} className="flex gap-4 items-start">
              <span className="shrink-0 w-7 h-7 bg-amber-500 text-white text-xs font-extrabold flex items-center justify-center">
                {j + 1}
              </span>
              <div>
                <p className="font-bold text-slate-900">{item.title}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      );
    }
    if (block.type === "steps") {
      return (
        <div key={i} className="space-y-5 mb-6">
          {block.items!.map((item: any, j: number) => (
            <div key={j} className="border-l-2 border-amber-400 pl-5">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-extrabold text-amber-500 tracking-widest">STEP {item.step}</span>
              </div>
              <p className="font-bold text-slate-900 mb-1">{item.title}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      );
    }
    return null;
  });
}

function BlogPost({ blog, onBack }: { blog: typeof blogs[0]; onBack: () => void }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header bar */}
      <div className="bg-slate-900 text-white py-8 px-6">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={onBack}
            className="text-amber-400 text-sm font-semibold uppercase tracking-wide mb-4 flex items-center gap-2 hover:text-amber-300 transition-colors"
          >
            ← Back to Blog
          </button>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/20 px-3 py-1">
              {blog.category}
            </span>
            <span className="text-xs text-slate-400">{blog.date} · {blog.readTime}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold leading-tight text-white">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        {renderContent(blog.content)}

        {/* CTA */}
        <div className="mt-12 border-t-4 border-amber-500 pt-8 bg-amber-50 px-6 py-6">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">Ready to Grow?</p>
          <p className="text-slate-700 font-semibold mb-4">
            Your customers are already searching online. Can they find your business?
          </p>
          <div className="flex flex-wrap gap-3 mb-4 text-sm text-slate-600">
            {["Custom Website Development", "Search Engine Optimization (SEO)", "Social Media Management", "Affordable Digital Solutions"].map((s) => (
              <span key={s} className="flex items-center gap-1">
                <span className="text-amber-500 font-bold">✓</span> {s}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-5">
            <span>🌐 <a href="https://www.grootxmedia.com" className="hover:text-amber-500">www.grootxmedia.com</a></span>
            <span>📧 <a href="mailto:info@grootxmedia.com" className="hover:text-amber-500">info@grootxmedia.com</a></span>
            <span>📞 <a href="tel:+917397794418" className="hover:text-amber-500">+91 7397794418</a></span>
          </div>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-semibold hover:bg-amber-500 transition-colors uppercase tracking-wide"
          >
            Contact Groot X Media →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Blog() {
  const [activeBlog, setActiveBlog] = useState<typeof blogs[0] | null>(null);

  if (activeBlog) {
    return (
      <>
        {/* Minimal Nav */}
        <nav className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <a href="/" className="text-2xl font-bold tracking-wider">
              <span className="text-amber-500">Groot</span>x<span className="text-amber-500">Media</span>
            </a>
            <div className="flex gap-6">
              <a href="/" className="text-sm font-semibold text-slate-600 hover:text-amber-500 transition-colors uppercase tracking-wide">Home</a>
              <a href="/blog" onClick={(e) => { e.preventDefault(); setActiveBlog(null); }} className="text-sm font-semibold text-amber-500 uppercase tracking-wide">Blog</a>
            </div>
          </div>
        </nav>
        <BlogPost blog={activeBlog} onBack={() => setActiveBlog(null)} />
        {/* Footer */}
        <footer className="bg-slate-900 text-white border-t-4 border-amber-500 py-6 text-center text-sm text-slate-400">
          © 2026 GrootXMedia Digital Marketing. All rights reserved.
        </footer>
      </>
    );
  }

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Nav */}
      <nav className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="text-2xl font-bold tracking-wider">
            <span className="text-amber-500">Groot</span>x<span className="text-amber-500">Media</span>
          </a>
          <div className="flex gap-6">
            <a href="/" className="text-sm font-semibold text-slate-600 hover:text-amber-500 transition-colors uppercase tracking-wide">Home</a>
            <a href="#services" className="text-sm font-semibold text-slate-600 hover:text-amber-500 transition-colors uppercase tracking-wide">Services</a>
            <a href="/blog" className="text-sm font-semibold text-amber-500 uppercase tracking-wide border-b-2 border-amber-500">Blog</a>
          </div>
          <a
            href="/#contact"
            className="hidden md:block px-6 py-2 bg-slate-900 text-white text-sm font-semibold hover:bg-amber-500 transition-colors uppercase tracking-wide"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,191,36,0.15),transparent_50%)]" />
        <div className="max-w-7xl mx-auto relative">
          <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">Groot X Media</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Blog</h1>
          <p className="text-slate-300 text-lg max-w-xl">
            Insights, strategies, and expert knowledge to help your business grow in the digital world.
          </p>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} onRead={() => setActiveBlog(blog)} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white border-t-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <div className="text-2xl font-bold tracking-wider mb-3">
              Groot<span className="text-amber-500">X</span>Media
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Your Growth Partner in the Digital World.
            </p>
          </div>
          <div>
            <h3 className="text-amber-500 text-sm font-extrabold uppercase tracking-widest mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>📞 <a href="tel:+917397794418" className="hover:text-amber-400">+91 7397794418</a></li>
              <li>✉️ <a href="mailto:info@grootxmedia.com" className="hover:text-amber-400">info@grootxmedia.com</a></li>
              <li>🌐 <a href="https://www.grootxmedia.com" className="hover:text-amber-400">www.grootxmedia.com</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-amber-500 text-sm font-extrabold uppercase tracking-widest mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="/" className="hover:text-amber-400">Home</a></li>
              <li><a href="/#services" className="hover:text-amber-400">Services</a></li>
              <li><a href="/blog" className="hover:text-amber-400">Blog</a></li>
              <li><a href="/#contact" className="hover:text-amber-400">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 px-6 py-5 text-center text-sm text-slate-400">
          © 2026 GrootXMedia Digital Marketing. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
