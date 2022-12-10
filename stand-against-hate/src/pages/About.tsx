import { Link } from "react-router-dom";

function About() {
  return (
    <div className="flex mt-7">
      <div className="h-max mt-16 w-screen text-center flex flex-col justify-center items-center gap-4 mb-10 ">
        <header className=" text-6xl text-center text-white-800">
          Why We Stand
        </header>

        <p className="mt-2 mb-5 text-center text-white-800 whitespace-wrap w-7/12 text-3xl border-2 border-blue-500 rounded-lg p-4">
          Hate crimes are acts of violence or discrimination that are motivated
          by prejudice against someone's race, religion, sexual orientation,
          gender identity, or other characteristic. These crimes can have a
          devastating impact on individuals and communities, and it is important
          for everyone to work together to combat them.
        </p>

        <p className="mt-2 mb-5 text-center text-white-800 whitespace-wrap w-7/12 text-3xl border-2 border-blue-500 rounded-lg p-4">
          Fighting against hate crimes in America requires a multifaceted
          approach that involves individuals, communities, and authorities
          working together. Some steps that can be taken to combat hate crimes
          include:
        </p>

        <p className="mt-2 mb-5 text-center text-white-800 whitespace-wrap w-7/12 text-3xl border-2 border-blue-500 rounded-lg p-4">
          1. Reporting hate crimes: If you witness a hate crime or are a victim
          of one, it is important to report it to the authorities. This can help
          to hold the perpetrators accountable for their actions and prevent
          them from committing further crimes.
          <br></br>
          <br></br>
          2. Educating yourself and others: Educating yourself and others about
          the issue of hate crimes can help to raise awareness and build support
          for efforts to combat them. This can include learning about the
          different types of hate crimes, the impact they have on victims and
          communities, and the laws that are in place to protect against them.
          <br></br>
          <br></br>
          3. Supporting organizations that combat hate crimes: There are many
          organizations that work to combat hate crimes and provide support to
          victims. Supporting these organizations can help to amplify their
          efforts and provide additional resources to help them in their work.
          <br></br>
          <br></br>
          4. Taking action in your community: Communities can play a crucial
          role in combating hate crimes. This can include working together to
          create programs that promote understanding and acceptance, supporting
          victims and their families, and standing up against hate and
          discrimination when it is witnessed.
        </p>

        <p className="mt-2 mb-5 text-center text-white-800 whitespace-wrap w-7/12 text-3xl border-2 border-blue-500 rounded-lg p-4">
          Overall, combating hate crimes is a complex and ongoing challenge, but
          by working together and taking action, we can create safer and more
          inclusive communities for everyone. It is important for individuals,
          communities, and authorities to come together and take a stand against
          hate and discrimination in all its forms. Click the button below to
          learn more about hate crimes and how you can take actionable steps to
          help the fight against hate.
        </p>

        <div className="flex flex-col justify-center items-center">
          <Link to="/resources">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
