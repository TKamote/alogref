import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '@/content/profile';

const HighlightCards = () => {
	return (
		<section id="highlights" className="py-20 bg-background">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-12"
				>
					<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Career Highlights</h2>
					<p className="text-muted-foreground">Measurable outcomes across roles and regions</p>
				</motion.div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{profile.highlights.map((item, index) => (
						<motion.div
							key={item.label}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.08 }}
							className="bg-slate-950 text-white rounded-xl p-6 text-center"
						>
							<div className="text-3xl md:text-4xl font-extrabold text-sky-400 mb-1">{item.metric}</div>
							<div className="text-sm font-semibold uppercase tracking-wide text-slate-300 mb-2">{item.label}</div>
							<p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HighlightCards;
