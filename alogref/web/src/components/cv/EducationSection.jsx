import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { profile } from '@/content/profile';

const EducationSection = () => {
	return (
		<section id="education" className="py-20 bg-background">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Education & Certifications</h2>
				</motion.div>

				<div className="space-y-6 mb-12">
					{profile.education.map((edu, index) => (
						<motion.div
							key={edu.degree}
							initial={{ opacity: 0, x: -16 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.05 }}
							className="flex gap-4 bg-card rounded-xl p-5 border border-border"
						>
							<GraduationCap className="w-6 h-6 text-primary shrink-0 mt-0.5" />
							<div>
								<h3 className="font-semibold text-foreground">{edu.degree}</h3>
								<p className="text-primary text-sm">{edu.institution}</p>
								<p className="text-muted-foreground text-sm">{edu.period}</p>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
						<Award className="w-5 h-5 text-accent" />
						Certifications & Training
					</h3>
					<ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
						{profile.certifications.map((cert) => (
							<li key={cert} className="text-sm text-muted-foreground flex gap-2">
								<span className="text-accent shrink-0">✓</span>
								{cert}
							</li>
						))}
					</ul>
				</motion.div>
			</div>
		</section>
	);
};

export default EducationSection;
