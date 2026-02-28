interface StaffCardProps {
  name: string;
  role: string;
  bio: string;
  photo: string;
  featured?: boolean;
}

export default function StaffCard({ name, role, bio, photo, featured = false }: StaffCardProps) {
  if (featured) {
    return (
      <div className="bg-white rounded-xl overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1 col-span-full flex flex-row min-h-[400px]">
        <div
          className="w-[35%] min-h-full bg-gray-200 bg-cover bg-center flex-shrink-0"
          style={{ backgroundImage: `url('${photo}')`, backgroundPosition: 'center top' }}
        />
        <div className="w-[65%] p-12 flex flex-col justify-center">
          <h3
            className="text-[2.5rem] mb-4 text-black"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {name}
          </h3>
          <p className="text-[#f47f44] text-[1.1rem] font-bold uppercase mb-6 tracking-wider">
            {role}
          </p>
          <p className="text-[1.1rem] text-gray-600">{bio}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1 flex flex-col">
      <div
        className="w-full h-[300px] bg-gray-200 bg-cover bg-center"
        style={{ backgroundImage: `url('${photo}')`, backgroundPosition: 'center top' }}
      />
      <div className="p-6 flex-1 flex flex-col">
        <h3
          className="text-[1.4rem] mb-2 text-black"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {name}
        </h3>
        <p className="text-[#f47f44] text-[0.9rem] font-bold uppercase mb-4 tracking-wider">
          {role}
        </p>
        <p className="text-[0.95rem] text-gray-600">{bio}</p>
      </div>
    </div>
  );
}
