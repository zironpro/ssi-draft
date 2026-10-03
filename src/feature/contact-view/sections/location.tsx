import { MapPin, Phone, Mail, Clock } from"lucide-react";

export function ContactLocation() {
 return (
 <section className="py-24 md:py-32 bg-[var(--color-deep-forest)] text-[var(--color-warm-ivory)] relative overflow-hidden">
 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none" />
 
 <div className="container-master mx-auto px-4 md:px-0 relative z-10">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
 
 {/* Details */}
 <div>
 <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-arch-sand)] mb-4">Headquarters</h2>
 <h3 className="text-[28px] md:text-[40px] lg:text-[48px] font-heading font-semibold tracking-[0.15em] uppercase leading-tight mb-12">
 Our Location & Details
 </h3>

 <div className="space-y-10">
 <div className="flex items-start gap-6 group">
 <div className="w-14 h-14 rounded-full bg-[var(--color-arch-sand)]/20 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-arch-sand)] transition-colors">
 <MapPin className="size-6 text-[var(--color-warm-ivory)] group-hover:text-[var(--color-deep-forest)] transition-colors" />
 </div>
 <div>
 <h4 className="text-xl font-bold mb-2">Address</h4>
 <p className="text-[var(--color-warm-ivory)]/70 leading-relaxed max-w-xs">
 Solar Safety Films Inc.<br />
 123 Architectural Avenue<br />
 Business Bay, Dubai, UAE
 </p>
 </div>
 </div>

 <div className="flex items-start gap-6 group">
 <div className="w-14 h-14 rounded-full bg-[var(--color-arch-sand)]/20 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-arch-sand)] transition-colors">
 <Phone className="size-6 text-[var(--color-warm-ivory)] group-hover:text-[var(--color-deep-forest)] transition-colors" />
 </div>
 <div>
 <h4 className="text-xl font-bold mb-2">Phone</h4>
 <p className="text-[var(--color-warm-ivory)]/70 leading-relaxed">
 +971 4 123 4567<br />
 +971 50 987 6543 (Mobile)
 </p>
 </div>
 </div>

 <div className="flex items-start gap-6 group">
 <div className="w-14 h-14 rounded-full bg-[var(--color-arch-sand)]/20 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-arch-sand)] transition-colors">
 <Mail className="size-6 text-[var(--color-warm-ivory)] group-hover:text-[var(--color-deep-forest)] transition-colors" />
 </div>
 <div>
 <h4 className="text-xl font-bold mb-2">Email</h4>
 <p className="text-[var(--color-warm-ivory)]/70 leading-relaxed">
 info@solarsafetyfilms.com<br />
 sales@solarsafetyfilms.com
 </p>
 </div>
 </div>

 <div className="flex items-start gap-6 group">
 <div className="w-14 h-14 rounded-full bg-[var(--color-arch-sand)]/20 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-arch-sand)] transition-colors">
 <Clock className="size-6 text-[var(--color-warm-ivory)] group-hover:text-[var(--color-deep-forest)] transition-colors" />
 </div>
 <div>
 <h4 className="text-xl font-bold mb-2">Working Hours</h4>
 <p className="text-[var(--color-warm-ivory)]/70 leading-relaxed">
 Monday - Friday: 8:00 AM - 6:00 PM<br />
 Saturday: 9:00 AM - 2:00 PM
 </p>
 </div>
 </div>
 </div>
 </div>

 {/* Map Placeholder */}
 <div className="w-full aspect-square md:aspect-[4/3] rounded-lg overflow-hidden bg-white/5 relative border border-white/10 group cursor-pointer">
 {/* A stylized map representation using an image for now */}
 <img 
 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
 alt="Map Location" 
 className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
 />
 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
 <div className="w-16 h-16 bg-[var(--color-arch-sand)] rounded-full flex items-center justify-center -[0_0_30px_rgba(229,231,235,0.5)] animate-pulse">
 <MapPin className="size-8 text-[var(--color-deep-forest)]" />
 </div>
 </div>
 </div>

 </div>
 </div>
 </section>
 );
}
