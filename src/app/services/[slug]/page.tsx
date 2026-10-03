export default async function ServiceDetail({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  return (
    <div className="min-h-screen pt-32 pb-16 px-4 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-heading font-semibold tracking-wider mb-4 uppercase">
          {slug.replace(/-/g, ' ')}
        </h1>
        <p className="text-lg text-[var(--color-deep-forest)]/70">Service Detail Page coming soon...</p>
      </div>
    </div>
  );
}
