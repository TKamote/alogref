import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { profile } from '@/content/profile';

const SkillGrid = () => {
	return (
		<section id="skills" className="py-20 bg-muted">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Skills & Competencies</h2>
					<p className="text-muted-foreground mb-12">Technical, commercial, and leadership capabilities</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{profile.competencies.map((group, index) => (
						<motion.div
							key={group.category}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.05 }}
							className="bg-card rounded-xl p-6 shadow-sm border border-border"
						>
							<h3 className="text-base font-semibold text-primary mb-4">{group.category}</h3>
							<div className="flex flex-wrap gap-2">
								{group.skills.map((skill) => (
									<Badge key={skill} variant="secondary" className="text-xs font-normal">
										{skill}
									</Badge>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SkillGrid;
