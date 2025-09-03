import Section from "@/components/wiki/section";
import Aside from "@/components/wiki/aside";

export default function Home() {
  return (
    <div className="flex">
      <main className="flex-1 pr-60">
        <Section header="Random Number Generation">
          Random number generation involves producing sequences of numbers or symbols in such a way that no future value
          can be predicted better than by chance. These sequences may exhibit patterns when retrospectively analyzed,
          but they are <mark>inherently unpredictable</mark>.
        </Section>
        <Section header="Types of Random Number Generators">
          <p>
            There are <em>two</em> primary types of random number generators
          </p>
          <ol className="list-decimal list-inside pl-2 pt-2">
            <li>
              <strong>true random number generators (TRNGs)</strong>
              <p className="ml-5">
                TRNGs derive randomness from physical processes, such as electronic noise or radioactive decay.
              </p>
            </li>
            <li>
              <strong>pseudorandom number generators (PRNGs)</strong>
              <p className="ml-5">
                PRNGs use mathematical algorithms to produce sequences that approximate the properties of random
                numbers.
              </p>
            </li>
          </ol>
        </Section>
        <Section header="PRNG Family: Variants & Examples">
          <ul className="list-disc list-inside pl-2 pt-2">
            <li>
              <strong>Linear Congruential Generators (LCGs)</strong>
              <div className="ml-5">
                <p>One of the earliest and simplest PRNG types, running on the formula:</p>{" "}
                <code>Xₖ₊₁ = (a × Xₖ) mod m</code>
                <p>
                  An example is the Lehmer RNG (also known as Park–Miller), used in systems like the Sinclair ZX81 and
                  CRAY's RANF.{" "}
                  <a
                    className="text-blue-600 underline"
                    href="https://en.wikipedia.org/wiki/Lehmer_random_number_generator?utm_source=chatgpt.com"
                    target="_blank"
                  >
                    Source
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
                  Source
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
                  Source
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
                  Source
                </a>
              </p>
            </li>
          </ul>
        </Section>
        <Section>
          Overall, random number generation is a fundamental concept with wide-ranging applications in technology and
          science.
        </Section>
      </main>
      <Aside />
    </div>
  );
}
