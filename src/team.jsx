import t1 from "./assets/t1.jpg";
import t2 from "./assets/t2.jpg";
import t3 from "./assets/t3.jpg";
import t4 from "./assets/t4.jpg";
const people = [
  {
    name: "A'laa ELksass",
    role: "Co-Founder / CEO",
    imageUrl: t1,
  },
  {
    name: "Rozane Ebrahim",
    role: "Co-Founder / CEO",
    imageUrl: t3,
  },
  {
    name: "Shahnda Hassan ",
    role: "Co-Founder / CEO",
    imageUrl: t2,
  },
  {
    name: "Nadia Elsaied",
    role: "Co-Founder / CEO",
    imageUrl: t4,
  },
  // More people...
];

export default function Team() {
  return (
    <div className=" py-24 sm:py-32  rounded-lg">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-white sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg/8 text-white">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="size-24 rounded-full"
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-white">
                    {person.name}
                  </h3>
                  <p className="text-sm/6 font-semibold text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
