import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import CvHero from '@/components/cv/CvHero.jsx';
import ExperienceTimeline from '@/components/cv/ExperienceTimeline.jsx';
import SkillGrid from '@/components/cv/SkillGrid.jsx';
import HighlightCards from '@/components/cv/HighlightCards.jsx';
import TrainingGallery from '@/components/cv/TrainingGallery.jsx';
import EducationSection from '@/components/cv/EducationSection.jsx';
import ContactSection from '@/components/cv/ContactSection.jsx';
import { profile } from '@/content/profile';

const CvPage = () => {
	const { identity } = profile;

	return (
		<>
			<Helmet>
				<title>{identity.name} — {identity.title}</title>
				<meta
					name="description"
					content={`${identity.name} — ${identity.tagline}`}
				/>
			</Helmet>

			<div className="min-h-screen flex flex-col">
				<Header />
				<main className="flex-1">
					<CvHero />

					<section id="about" className="py-20 bg-background">
						<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
							<motion.div
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About</h2>
								{profile.summary.split('\n\n').map((paragraph, i) => (
									<p key={i} className="text-muted-foreground leading-relaxed mb-4">
										{paragraph}
									</p>
								))}
							</motion.div>
						</div>
					</section>

					<ExperienceTimeline />
					<SkillGrid />
					<HighlightCards />
					<TrainingGallery />
					<EducationSection />
					<ContactSection />
				</main>
				<Footer />
			</div>
		</>
	);
};

export default CvPage;
