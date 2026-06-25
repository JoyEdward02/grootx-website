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
    coverImage: "https://cdn.pixabay.com/photo/2016/11/19/14/16/man-1839500_1280.jpg",
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
        type: "image",
        src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80",
        alt: "Professional website design on a laptop",
        caption: "A professional website is the cornerstone of your digital presence.",
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
        type: "image",
        src: "https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png",
        alt: "SEO and search engine optimization concept",
        caption: "SEO puts your business in front of customers who are actively searching.",
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
        type: "image",
        src: "https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_1280.jpg",
        alt: "Social media marketing apps on phone",
        caption: "Social media platforms connect your brand directly with your audience.",
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
          { label: "🌐 Website", desc: "Provides information and converts visitors into customers." },
          { label: "🔍 SEO", desc: "Brings targeted visitors from search engines." },
          { label: "📱 Social Media", desc: "Builds relationships and drives engagement." },
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
    coverImage: "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg",
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
        type: "image",
        src: "https://cdn.pixabay.com/photo/2017/08/01/00/38/man-2562325_1280.jpg",
        alt: "Professional personal brand identity",
        caption: "Your personal brand is what people say about you when you're not in the room.",
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
        type: "image",
        src: "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_1280.jpg",
        alt: "Team collaborating and networking",
        caption: "A strong personal brand opens doors to collaborations, partnerships, and new opportunities.",
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
        type: "image",
        src: "https://cdn.pixabay.com/photo/2015/05/26/23/52/technology-785742_1280.jpg",
        alt: "Person working on digital content creation",
        caption: "Building a personal brand is a consistent, step-by-step process.",
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
    <div
      className="bg-white border border-slate-200 hover:border-amber-400 transition-all duration-300 group shadow-sm hover:shadow-xl cursor-pointer overflow-hidden"
      onClick={onRead}
    >
      {/* Cover Image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
        <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-widest text-white bg-amber-500 px-3 py-1">
          {blog.category}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 mb-3 text-xs text-slate-400">
          <span>{blog.date}</span>
          <span>·</span>
          <span>{blog.readTime}</span>
        </div>
        <h2 className="text-lg md:text-xl font-extrabold text-slate-900 mb-3 leading-tight group-hover:text-amber-600 transition-colors">
          {blog.title}
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed mb-5">{blog.excerpt}</p>
        <div className="flex items-center gap-2 text-sm font-semibold text-amber-500 group-hover:gap-3 transition-all uppercase tracking-wide">
          Read Article <span className="text-base">→</span>
        </div>
      </div>
    </div>
  );
}

function renderContent(blocks: typeof blogs[0]["content"]) {
  return blocks.map((block, i) => {
    if (block.type === "intro") {
      return (
        <div key={i} className="mb-8 border-l-4 border-amber-500 pl-5 bg-amber-50 py-4 pr-4 rounded-r">
          {block.text!.split("\n\n").map((para, j) => (
            <p key={j} className="text-slate-700 text-base md:text-lg leading-relaxed mb-3 last:mb-0 italic">{para}</p>
          ))}
        </div>
      );
    }
    if (block.type === "heading") {
      return (
        <h2 key={i} className="text-xl md:text-2xl font-extrabold text-slate-900 mt-12 mb-4 flex items-center gap-3">
          <span className="w-8 h-1 bg-amber-500 inline-block shrink-0" />
          {block.text}
        </h2>
      );
    }
    if (block.type === "image") {
      return (
        <figure key={i} className="my-8 rounded overflow-hidden shadow-md">
          <img
            src={(block as any).src}
            alt={(block as any).alt}
            className="w-full h-56 md:h-72 object-cover"
          />
          {(block as any).caption && (
            <figcaption className="text-xs text-slate-400 text-center bg-slate-50 py-2 px-4 italic border-t border-slate-100">
              {(block as any).caption}
            </figcaption>
          )}
        </figure>
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
        <div key={i} className="mt-12 p-7 bg-slate-900 text-white rounded relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -translate-y-8 translate-x-8" />
          <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">Conclusion</p>
          {block.text!.split("\n\n").map((para, j) => (
            <p key={j} className="leading-relaxed mb-2 text-slate-200">{para}</p>
          ))}
        </div>
      );
    }
    if (block.type === "checklist") {
      return (
        <div key={i} className="mb-6 bg-slate-50 border border-slate-100 rounded p-5">
          {(block as any).heading && (
            <p className="font-bold text-slate-800 mb-3">{(block as any).heading}</p>
          )}
          <ul className="space-y-2">
            {block.items!.map((item, j) => (
              <li key={j} className="flex items-start gap-3 text-slate-600">
                <span className="mt-0.5 w-5 h-5 shrink-0 bg-amber-500 text-white text-xs flex items-center justify-center font-bold rounded-sm">✓</span>
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
            <div key={j} className="bg-slate-900 text-white p-5 rounded relative overflow-hidden group">
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-amber-500/20 rounded-full translate-x-4 translate-y-4 group-hover:scale-150 transition-transform duration-500" />
              <p className="font-extrabold text-white mb-2 text-lg">{item.label}</p>
              <p className="text-sm text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      );
    }
    if (block.type === "numbered") {
      return (
        <div key={i} className="space-y-3 mb-6">
          {block.items!.map((item: any, j: number) => (
            <div key={j} className="flex gap-4 items-start p-4 border border-slate-100 hover:border-amber-300 hover:bg-amber-50/40 transition-colors rounded">
              <span className="shrink-0 w-8 h-8 bg-amber-500 text-white text-sm font-extrabold flex items-center justify-center rounded-sm">
                {j + 1}
              </span>
              <div>
                <p className="font-bold text-slate-900">{item.title}</p>
                <p className="text-sm text-slate-500 leading-relaxed mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      );
    }
    if (block.type === "steps") {
      return (
        <div key={i} className="space-y-4 mb-6">
          {block.items!.map((item: any, j: number) => (
            <div key={j} className="flex gap-4 items-start">
              <div className="shrink-0 flex flex-col items-center">
                <span className="w-10 h-10 bg-slate-900 text-amber-400 text-xs font-extrabold flex items-center justify-center rounded-full border-2 border-amber-500">
                  {item.step}
                </span>
                {j < 4 && <div className="w-0.5 h-6 bg-slate-200 mt-1" />}
              </div>
              <div className="pb-4">
                <p className="font-bold text-slate-900 mb-1">{item.title}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
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
      {/* Hero Cover Image */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-900/30" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-10 max-w-3xl mx-auto w-full">
          <button
            onClick={onBack}
            className="absolute top-6 left-6 text-amber-400 text-sm font-semibold uppercase tracking-wide flex items-center gap-2 hover:text-amber-300 transition-colors bg-black/30 px-3 py-1.5 rounded"
          >
            ← Back to Blog
          </button>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-white bg-amber-500 px-3 py-1">
              {blog.category}
            </span>
            <span className="text-xs text-slate-300">{blog.date} · {blog.readTime}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold leading-tight text-white drop-shadow">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        {renderContent(blog.content)}

        {/* CTA */}
        <div className="mt-12 rounded overflow-hidden shadow-lg">
          <div className="bg-amber-500 px-6 py-4">
            <p className="text-white font-extrabold text-lg uppercase tracking-wide">Ready to Grow Your Business?</p>
          </div>
          <div className="bg-slate-900 px-6 py-6">
            <p className="text-slate-300 mb-5">
              Your customers are already searching online. The question is — can they find your business?
            </p>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {["Custom Website Development", "Search Engine Optimization (SEO)", "Social Media Management", "Affordable Digital Solutions"].map((s) => (
                <span key={s} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="text-amber-400 font-bold">✓</span> {s}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-6 border-t border-slate-700 pt-4">
              <span>🌐 <a href="https://www.grootxmedia.com" className="hover:text-amber-400 transition-colors">www.grootxmedia.com</a></span>
              <span>📧 <a href="mailto:info@grootxmedia.com" className="hover:text-amber-400 transition-colors">info@grootxmedia.com</a></span>
              <span>📞 <a href="tel:+917397794418" className="hover:text-amber-400 transition-colors">+91 7397794418</a></span>
            </div>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white text-sm font-semibold hover:bg-amber-400 transition-colors uppercase tracking-wide rounded"
            >
              Contact Groot X Media →
            </a>
          </div>
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
        <nav className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-50 shadow-sm">
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
        <footer className="bg-slate-900 text-white border-t-4 border-amber-500 py-6 text-center text-sm text-slate-400">
          © 2026 GrootXMedia Digital Marketing. All rights reserved.
        </footer>
      </>
    );
  }

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Nav */}
      <nav className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="text-2xl font-bold tracking-wider">
            <span className="text-amber-500">Groot</span>x<span className="text-amber-500">Media</span>
          </a>
          <div className="flex gap-6">
            <a href="/" className="text-sm font-semibold text-slate-600 hover:text-amber-500 transition-colors uppercase tracking-wide">Home</a>
            <a href="/#services" className="text-sm font-semibold text-slate-600 hover:text-amber-500 transition-colors uppercase tracking-wide">Services</a>
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
      <section className="bg-slate-950 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://cdn.pixabay.com/photo/2018/09/04/10/27/never-stop-learning-3653430_1280.jpg"
            alt=""
            aria-hidden
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,191,36,0.18),transparent_50%)]" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">Groot X Media</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Our <span className="text-amber-500">Blog</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl leading-relaxed">
            Insights, strategies, and expert knowledge to help your business grow in the digital world.
          </p>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-extrabold text-slate-900">Latest Articles</h2>
          <span className="text-sm text-slate-400">{blogs.length} posts</span>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} onRead={() => setActiveBlog(blog)} />
          ))}
        </div>
      </section>

      {/* Newsletter / CTA Banner */}
      <section className="bg-slate-900 py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(251,191,36,0.12),transparent_50%)]" />
        <div className="max-w-3xl mx-auto text-center relative">
          <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">Grow With Us</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Build a Stronger Digital Presence?
          </h2>
          <p className="text-slate-300 mb-8 leading-relaxed">
            Whether you need a professional website, better Google rankings, or a stronger social media presence — Groot X Media is here to help you achieve measurable growth.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-white font-semibold hover:bg-amber-400 transition-colors uppercase tracking-wide text-sm"
          >
            Get a Free Consultation →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white border-t border-slate-700">
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
        <div className="border-t border-slate-800 px-6 py-5 text-center text-sm text-slate-500">
          © 2026 GrootXMedia Digital Marketing. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
