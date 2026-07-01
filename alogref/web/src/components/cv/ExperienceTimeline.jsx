import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { profile } from '@/content/profile';

const ExperienceTimeline = () => {
	return (
		<section id="experience" className="py-20 bg-background">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Experience</h2>
					<p className="text-muted-foreground mb-12">Career timeline across APAC and Middle East</p>
				</motion.div>

				<div className="relative border-l-2 border-primary/20 ml-3 space-y-10">
					{profile.experience.map((job, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: -16 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.05 }}
							className="relative pl-8"
						>
							<span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />

							<div className="bg-card rounded-xl p-6 shadow-sm border border-border">
								<div className="flex items-start gap-3 mb-3">
									<Briefcase className="w-5 h-5 text-primary shrink-0 mt-0.5" />
									<div>
										<h3 className="text-lg font-semibold text-foreground">{job.role}</h3>
										<p className="text-primary font-medium">{job.company}</p>
										<p className="text-sm text-muted-foreground">
											{job.location} · {job.period}
										</p>
									</div>
								</div>

								<ul className="space-y-1.5 mb-4">
									{job.highlights.map((item, i) => (
										<li key={i} className="text-sm text-muted-foreground flex gap-2">
											<span className="text-primary shrink-0">·</span>
											{item}
										</li>
									))}
								</ul>

								{job.achievements?.length > 0 && (
									<div className="border-t border-border pt-3">
										<p className="text-xs font-semibold uppercase tracking-wide text-accent mb-2">Key achievements</p>
										<ul className="space-y-1">
											{job.achievements.map((item, i) => (
												<li key={i} className="text-sm text-foreground font-medium flex gap-2">
													<span className="text-accent shrink-0">✓</span>
													{item}
												</li>
											))}
										</ul>
									</div>
								)}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ExperienceTimeline;
