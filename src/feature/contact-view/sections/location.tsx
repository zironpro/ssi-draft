export function ContactLocation() {
  return (
    <section className="w-full h-[50vh] md:h-[70vh] bg-gray-100 relative">
      <iframe
        src="https://maps.google.com/maps?q=X4QF%2BVR4%20Dubai%20-%20United%20Arab%20Emirates&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 transition-all duration-700"
      ></iframe>
    </section>
  );
}
