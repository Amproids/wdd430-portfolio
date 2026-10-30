interface InfoCardProps {
  title: string;
  description: string;
}

export default function InfoCard({ title, description }: InfoCardProps) {
  return (
    <div className="bg-gray-50 border-l-4 border-blue-600 rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
