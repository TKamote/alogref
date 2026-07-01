import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { profile } from '@/content/profile';
import { assetUrl } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const CvHero = () => {
	const { identity } = profile;

	return (
		<section id="hero" className="relative min-h-[90vh] flex items-center bg-slate-950 text-white overflow-hidden">
			<div
				className="absolute inset-0 bg-cover bg-center opacity-20"
				style={{ backgroundImage: `url(${assetUrl('hero-background.png')})` }}
			/>
			<div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />

			<div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="flex flex-col md:flex-row items-center md:items-start gap-10"
				>
					<img
						src={assetUrl('logo.png')}
						alt={identity.name}
						className="w-36 h-36 md:w-44 md:h-44 object-contain shrink-0 drop-shadow-2xl"
					/>

					<div className="text-center md:text-left space-y-5 flex-1">
						<div>
							<p className="text-sky-400 text-sm font-medium uppercase tracking-widest mb-2">
								{identity.targetRole}
							</p>
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
								{identity.name}
							</h1>
							<p className="text-xl md:text-2xl text-slate-300 mt-2 font-medium">
								{identity.title}
							</p>
						</div>

						<p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
							{identity.tagline}
						</p>

						<div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-slate-400">
							<span className="flex items-center gap-1.5">
								<MapPin className="w-4 h-4 text-sky-400" />
								{identity.location}
							</span>
							<span className="flex items-center gap-1.5">
								<Mail className="w-4 h-4 text-sky-400" />
								{identity.email}
							</span>
							<span className="flex items-center gap-1.5">
								<Phone className="w-4 h-4 text-sky-400" />
								{identity.phone}
							</span>
						</div>

						<div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2">
							<Button asChild size="lg" className="bg-sky-600 hover:bg-sky-500 text-white">
								<a href={`mailto:${identity.email}`}>
									<Mail className="w-4 h-4 mr-2" />
									Get in touch
								</a>
							</Button>
							<Button asChild variant="outline" size="lg" className="border-slate-600 text-slate-200 hover:bg-slate-800">
								<a href="#contact">
									<Download className="w-4 h-4 mr-2" />
									Download CV
								</a>
							</Button>
						</div>

						<p className="inline-flex items-center gap-2 text-emerald-400 text-sm font-medium">
							<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
							{identity.availability}
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default CvHero;
