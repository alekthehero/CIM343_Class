import Section from "@/components/wiki/section";
import Aside from "@/components/wiki/aside";

export default function Home() {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-[1fr_20rem] min-h-screen">
      <main className="p-4">
        <Section header="Random Number Generation" uk-scrollspy="cls: uk-animation-fade; delay: 300; repeat: true">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              Random number generation involves producing sequences of numbers or symbols in such a way that no future
              value can be predicted better than by chance. These sequences may exhibit patterns when retrospectively
              analyzed, but they are <mark>inherently unpredictable</mark>.
            </div>
            <div>
              <ul className="list-disc list-inside">
                <li>Used in cryptography</li>
                <li>Simulations</li>
                <li>Games</li>
                <li>Statistics</li>
              </ul>
            </div>
          </div>
        </Section>
        <hr className="uk-divider-icon" />
        <Section header="Types of Random Number Generators" uk-scrollspy="cls: uk-animation-fade; delay: 300; repeat: true">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <strong>True Random Number Generators (TRNGs)</strong>
              <p>Derive randomness from physical processes, such as electronic noise or radioactive decay.</p>
            </div>
            <div>
              <strong>Pseudorandom Number Generators (PRNGs)</strong>
              <p>Use mathematical algorithms to produce sequences that approximate the properties of random numbers.</p>
            </div>
            <div>
              <strong>Hybrid RNGs</strong>
              <p>Combine physical and algorithmic sources for improved randomness.</p>
            </div>
          </div>
        </Section>
        <hr className="uk-divider-icon" />
        <Section header="PRNG Family: Variants & Examples" uk-scrollspy="cls: uk-animation-fade; delay: 300; repeat: true">
          <ul className="list-disc list-inside pl-2 pt-2">
            <li>
              <strong>Linear Congruential Generators (LCGs)</strong>
              <div className="ml-5">
                <p>One of the earliest and simplest PRNG types, running on the formula:</p>
                <code>Xₖ₊₁ = (a × Xₖ) mod m</code>
                <p>
                  An example is the Lehmer RNG (also known as Park–Miller), used in systems like the Sinclair ZX81 and
                  CRAY's RANF.{" "}
                  <a
                    className="text-blue-600 underline"
                    href="https://en.wikipedia.org/wiki/Lehmer_random_number_generator?utm_source=chatgpt.com"
                    target="_blank"
                  >
                    <cite>Source</cite>
                  </a>
                </p>
              </div>
            </li>
            <li>
              <strong>ACORN (Additive Congruential RNG)</strong>
              <p className="ml-5">
                Introduced in 1989, ACORN remains robust even decades later. It belongs to the family of additive
                congruential PRNGs and offers reliable uniform distribution.{" "}
                <a
                  className="text-blue-600 underline"
                  href="https://en.wikipedia.org/wiki/ACORN_%28random_number_generator%29"
                  target="_blank"
                >
                  <cite>Source</cite>
                </a>
              </p>
            </li>
            <li>
              <strong>Counter-Based RNGs (CBRNGs)</strong>
              <p className="ml-5">
                These generators use a simple, incrementing counter as state, enabling independent number
                generation—ideal for parallel computing. Examples include Threefry, Philox, and ARS.{" "}
                <a
                  className="text-blue-600 underline"
                  href="https://en.wikipedia.org/wiki/Counter-based_random_number_generator"
                  target="_blank"
                >
                  <cite>Source</cite>
                </a>
              </p>
            </li>
            <li>
              <strong>Mersenne Twister (MT19937)</strong>
              <p className="ml-5">
                A widely adopted general-purpose PRNG, created in 1997, it uses a Mersenne prime period (2¹⁹⁹³⁷–1).
                MT19937 offers excellent statistical properties and is broadly used across programming languages and
                libraries—from Python to MATLAB—though it is not cryptographically secure.{" "}
                <a
                  className="text-blue-600 underline"
                  href="https://en.wikipedia.org/wiki/Mersenne_Twister"
                  target="_blank"
                >
                  <cite>Source</cite>
                </a>
              </p>
            </li>
          </ul>
        </Section>
        <Section uk-scrollspy="cls: uk-animation-fade; delay: 300; repeat: true">
          Overall, random number generation is a fundamental concept with wide-ranging applications in technology and
          science.
        </Section>
      </main>
      <Aside />
    </div>
      </>
  );
}
