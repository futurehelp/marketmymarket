"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronDown, Quote } from "lucide-react";
import { articles, reviews, values } from "@/lib/site-content";
import { ArrowLink } from "@/components/ui/arrow-link";
import { cardMotion } from "@/components/ui/motion-presets";

/** Testimonial carousel with local portraits and Framer Motion controls. */
export function TestimonialsSection() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const review = reviews[reviewIndex];

  return (
    <section className="testimonial" aria-label="Client testimonials">
      <Quote size={42} />
      <div>
        <div className="eyebrow">WHAT OUR CLIENTS SAY</div>
        <blockquote>&ldquo;{review.quote}&rdquo;</blockquote>
        <p>{review.author} | {review.company}</p>
      </div>
      <div className="review-nav">
        <span>0{reviewIndex + 1} / 0{reviews.length}</span>
        <div>
          <motion.button type="button" aria-label="Previous testimonial" onClick={() => setReviewIndex((current) => (current + reviews.length - 1) % reviews.length)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><ArrowLeft size={16} /></motion.button>
          <motion.button type="button" aria-label="Next testimonial" onClick={() => setReviewIndex((current) => (current + 1) % reviews.length)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><ArrowRight size={16} /></motion.button>
        </div>
        <Image className="review-avatar" src={review.image} width={64} height={64} alt={review.author} />
      </div>
    </section>
  );
}

/** Values list preserves the original sequence while adding pointer feedback. */
export function ValuesSection() {
  return (
    <section className="values" id="resources">
      <div className="value-copy">
        <div className="eyebrow">OUR CORE VALUES</div>
        <h2>Do what<br /><em>you say.</em></h2>
        <p>Honesty, accountability, and a commitment to always do better shape every client relationship.</p>
      </div>
      <div className="value-list">
        {values.map((value) => (
          <motion.div key={value.number} whileHover={{ x: 8 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
            <Image src={value.image} width={50} height={50} alt="" />
            <span>{value.number}</span>
            <h3>{value.title}</h3>
            <ArrowRight size={16} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/** Thought leadership section uses the downloaded podcast art as a focal point. */
export function PodcastSection() {
  return (
    <section className="podcast">
      <div>
        <div className="eyebrow">LEGAL MASTERMIND PODCAST</div>
        <h2>Ideas worth<br /><em>hearing.</em></h2>
        <p>Our marquee podcast showcases experts from across legal marketing and business development. More than 250 episodes of practical conversations.</p>
        <ArrowLink className="button light" href="#resources">Listen now</ArrowLink>
      </div>
      <div className="podcast-art">
        <div className="podcast-phone"><Image src="/images/podcast-phone.jpg" fill sizes="220px" alt="Legal Mastermind Podcast on a phone" /></div>
        <Image className="podcast-earphones" src="/images/podcast-earphones.png" width={380} height={223} alt="Podcast earphones" />
      </div>
    </section>
  );
}

/** Editorial cards provide a native replacement for the source site's resource carousel. */
export function ArticlesSection() {
  return (
    <section className="articles">
      <div className="section-heading">
        <div><div className="eyebrow">RESOURCES</div><h2>Ideas for<br /><em>what is next.</em></h2></div>
        <ArrowLink href="#contact">View all resources</ArrowLink>
      </div>
      <div className="article-grid">
        {articles.map((article) => (
          <motion.a className="article" href={article.href} key={article.title} {...cardMotion}>
            <div className="article-image"><Image src={article.image} fill sizes="(max-width: 800px) 86vw, 29vw" alt="" /></div>
            <div><h3>{article.title}</h3><p>{article.description}</p><span>READ MORE <ArrowRight size={14} /></span></div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

/** FAQ accordion keeps the page interactive without relying on a remote widget. */
export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const questions = [
    "How does Market My Market help businesses grow?",
    "What industries do you specialize in?",
    "How do you report on campaign performance?",
    "How soon can we expect results?",
  ];

  return (
    <section className="faq">
      <div><div className="eyebrow">QUESTIONS, ANSWERED</div><h2>Clarity is<br /><em>a strategy.</em></h2></div>
      <div className="faq-list">
        {questions.map((question, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.button className="faq-row" type="button" key={question} onClick={() => setOpenIndex(isOpen ? null : index)} whileHover={{ x: 5 }} whileTap={{ scale: 0.99 }}>
              <span>{question}</span>
              <ChevronDown size={18} className={isOpen ? "rotated" : ""} />
              {isOpen && <p>Our team will walk you through the answer, the next step, and what it means for your growth plan.</p>}
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
