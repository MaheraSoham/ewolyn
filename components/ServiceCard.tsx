import Image from "next/image";

type Props = {
  title: string;
  items: string[];
  image: string;
};

export default function ServiceCard({ title, items, image }: Props) {
  return (
    <div className="group h-full bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-accent-green/30 transition-all duration-500 flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
        <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white tracking-tight">{title}</h3>
      </div>
      <div className="p-8 flex-1 flex flex-col">
        <ul className="space-y-3 flex-1">
          {items.map((i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
              <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-accent-green" />
              <span className="leading-relaxed">{i}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 pt-6 border-t border-slate-100">
          <button className="text-sm font-bold text-accent-green flex items-center gap-1 group/btn">
            Inquire Details
            <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
