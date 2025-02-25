import Image from 'next/image';

const features = [
  {
    title: "No sign up needed",
    description:
      "RegenAI helps you generate resumes without signing up",
    icon: "lock",
    image: "https://images.unsplash.com/photo-1569144157591-c60f3f82f137",
  },
  {
    title: "Structured ATS friendly templates",
    description:
      "Regen AI helps you build resume in ATS friendly manner",
    icon: "shield",
    image: "https://images.unsplash.com/photo-1599134842279-fe807d23316e",
  },
  {
    title: "Download Option",
    description:
      "After creation you can directly download your resume in the format you want to.",
    icon: "document",
    image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e",
  },
];

export default function FeaturesSection() {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-32 space-y-24">
      {features.map((feature, index) => (
        <div key={index} className="relative">
          <div className={`lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8 ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
            <div className={`mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-8 w-8 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">{feature.title}</h2>
                  <p className="mt-4 text-lg text-gray-600">{feature.description}</p>
                 
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className={`relative lg:m-0 lg:h-full lg:px-0 ${index % 2 === 0 ? '-mr-48 pl-6 md:-mr-16' : '-ml-48 pr-6 md:-ml-16'}`}>
                <Image
                  className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  src={feature.image}
                  alt={feature.title}
                  width={647}
                  height={486}
                  layout="intrinsic"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}