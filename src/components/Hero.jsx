import React from 'react';
import { motion } from 'framer-motion';

/**
 * Use your uploaded image as hero illustration.
 * Local path (will be transformed by the dev tooling): 
 * /mnt/data/d3fc6abf-64a9-411b-91d5-8c883d15203c.png
 */
const HERO_IMG = '/Contest_Image.png';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="container-lg my-4"
    >
      <div
        className="row align-items-center gx-4 gy-3 p-4 rounded-4"
        style={{
          background:
            'linear-gradient(90deg, rgba(8,16,30,0.6), rgba(5,13,28,0.55))',
          border: '1px solid rgba(255,255,255,0.06)',
          boxShadow: '0 10px 30px rgba(124,58,237,0.08)',
        }}
      >
        {/* Left column: Text + CTAs */}
        <div className="col-lg-7">
          <div className="mb-2 d-flex align-items-center gap-2">
            <span className="badge bg-gradient rounded-pill" style={{ background: 'linear-gradient(90deg,#7c3aed,#4f46e5)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" className="me-1" style={{ verticalAlign: 'middle' }}>
                <path d="M12 2v20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M5 7h14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Featured
            </span>

            <small className="text-white-50">Live • Top hacks & contests</small>
          </div>

          <h1 className="display-5 fw-bold mb-3" style={{ color: 'var(--bs-white)' }}>
            Campus Contests & Hackathons
          </h1>

          <p className="lead text-white-50 mb-3" style={{ maxWidth: 680 }}>
            Win cool rewards — T-shirts, mugs, certificates, premium subscriptions and more. Collaborate, learn and show your skills. Register quickly and compete for visibility and prizes.
          </p>

          <div className="d-flex flex-wrap gap-2 gap-md-3">
            <a
              href="#events-grid"
              className="btn btn-lg btn-primary d-inline-flex align-items-center"
              style={{ paddingLeft: 18, paddingRight: 18 }}
            >
              {/* subtle icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-rocket-fill me-2" viewBox="0 0 16 16">
                <path d="M6.72 12.6c.37.01.76.06 1.15.15.53.12 1.06-.1 1.41-.51l3.15-3.58c.45-.5.64-1.18.5-1.83-.15-.65-.63-1.19-1.25-1.42L9.6 3.79C9.34 3.66 9 3.72 8.83 3.95L6.26 7.79c-.18.28-.15.63.05.88l.41.44c-.03.23-.07.46-.11.69-.08.43-.17.85-.24 1.28l-.2.76c-.15.6.21 1.22.8 1.32z"/>
                <path d="M4.73 13.72c-.34.26-.87.08-1.03-.35-.06-.14-.13-.28-.2-.42-.4-.79-1.36-1.57-2.02-1.88 1.36.1 2.9.41 4.28 1.3l-1.03 1.35z"/>
              </svg>
              Explore Contests
            </a>

            <a
              href="#how-it-works"
              className="btn btn-lg btn-outline-light d-inline-flex align-items-center"
              style={{ paddingLeft: 18, paddingRight: 18 }}
            >
              How it works
            </a>

            <div className="d-flex align-items-center ms-0 ms-md-3 mt-2 mt-md-0">
              <small className="text-white-50 me-3">Prizes</small>
              <div className="d-flex gap-2">
                <span className="badge rounded-pill bg-light text-dark">T-shirt</span>
                <span className="badge rounded-pill bg-light text-dark">Certificate</span>
                <span className="badge rounded-pill bg-warning text-dark">LinkedIn Premium</span>
              </div>
            </div>
          </div>

          {/* subtle feature list */}
          <div className="mt-4 d-flex flex-wrap gap-3">
            <div className="d-flex align-items-center gap-2">
              <div style={{ width: 10, height: 10, borderRadius: 3, background: '#34d399' }} />
              <small className="text-white-50">Mentors & judges</small>
            </div>
            <div className="d-flex align-items-center gap-2">
              <div style={{ width: 10, height: 10, borderRadius: 3, background: '#60a5fa' }} />
              <small className="text-white-50">Certificates & internships</small>
            </div>
            <div className="d-flex align-items-center gap-2">
              <div style={{ width: 10, height: 10, borderRadius: 3, background: '#f97316' }} />
              <small className="text-white-50">Team & solo categories</small>
            </div>
          </div>
        </div>

        {/* Right column: Illustration card */}
        <div className="col-lg-5 text-center">
          <motion.div
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="p-3 rounded-4"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.035))',
              border: '1px solid rgba(255,255,255,0.04)'
            }}
          >
            <img
              src={HERO_IMG}
              alt="Contests hero"
              className="img-fluid rounded-3 shadow-sm"
              style={{ maxHeight: 280, objectFit: 'cover' }}
            />

            <div className="mt-3 d-flex justify-content-center gap-2">
              <div className="text-center">
                <div className="h4 mb-0 fw-bold">150+</div>
                <small className="text-white-50">Participants</small>
              </div>
              <div className="text-center">
                <div className="h4 mb-0 fw-bold">60</div>
                <small className="text-white-50">Teams</small>
              </div>
              <div className="text-center">
                <div className="h4 mb-0 fw-bold">Prizes</div>
                <small className="text-white-50">Worth ₹50k+</small>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
