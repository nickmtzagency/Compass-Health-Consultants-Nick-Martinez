import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SelfEmployedInsurancePage() {
  return (
    <div className="bg-white text-gray-800 px-6 py-10 max-w-6xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Health Insurance Built for the Self-Employed, Not Corporations</h1>
        <p className="text-lg mb-6">Affordable, flexible, and easy-to-understand coverage designed for your solo business.</p>
        <Button size="lg">Get an Instant Quote</Button>
      </header>

      <section className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          "Affordable Monthly Rates – Designed to fit variable incomes",
          "Simple, Transparent Plans – No hidden fees, no confusing fine print",
          "Nationwide Provider Access – So you're covered wherever work takes you",
          "Telehealth Included – 24/7 virtual doctor access",
          "Tax-Friendly – Premiums may be deductible for self-employed individuals",
        ].map((text, i) => (
          <Card key={i} className="rounded-2xl shadow-md">
            <CardContent className="p-4 text-base">✅ {text}</CardContent>
          </Card>
        ))}
      </section>

      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Not sure what you need?</h2>
        <p className="mb-4">Take our 1-minute quiz to find the best plan for your business.</p>
        <Button variant="outline">Find My Plan</Button>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-4">
            <p className="italic">“As a freelance designer, I used to dread health insurance. Now I know exactly what I’m paying for — and it actually works.”</p>
            <p className="mt-2 font-semibold">— Marissa G., Austin, TX</p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-4">
            <p className="italic">“The application was so easy, and I love that I can talk to a real human if I need help.”</p>
            <p className="mt-2 font-semibold">— Jason R., Web Developer</p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-center mb-6">Compare Us</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">Feature</th>
                <th className="px-4 py-2">Us</th>
                <th className="px-4 py-2">Marketplace</th>
                <th className="px-4 py-2">Big Insurance</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Made for Self-Employed", "✅", "❌", "❌"],
                ["Predictable Pricing", "✅", "❌", "❌"],
                ["No Corporate Jargon", "✅", "❌", "❌"],
                ["Real Human Support", "✅", "✅", "❌"],
              ].map(([feature, us, marketplace, big], i) => (
                <tr key={i} className="border-t border-gray-200">
                  <td className="px-4 py-2 font-medium">{feature}</td>
                  <td className="px-4 py-2">{us}</td>
                  <td className="px-4 py-2">{marketplace}</td>
                  <td className="px-4 py-2">{big}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-xl font-semibold mb-2">Self-Employed Essentials Plan</h2>
        <p>$0 telehealth visits · $1,000 deductible · Low monthly premium</p>
        <Button className="mt-4">View Details</Button>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">FAQs</h2>
        <ul className="space-y-4">
          <li><strong>Q: Can I deduct this on my taxes?</strong> <br /> A: Yes — self-employed individuals may deduct premiums. Ask your CPA or check our free tax guide.</li>
          <li><strong>Q: What if my income changes?</strong> <br /> A: No problem. You can change plans or pause coverage anytime.</li>
          <li><strong>Q: How fast can I enroll?</strong> <br /> A: In as little as 5 minutes. No long forms or calls needed.</li>
        </ul>
      </section>

      <footer className="text-center">
        <h2 className="text-2xl font-bold mb-4">Stop Stressing About Health Insurance</h2>
        <p className="mb-4">Join thousands of self-employed professionals who finally found coverage that fits.</p>
        <Button size="lg">Get a Personalized Quote</Button>
        <p className="mt-2 text-sm">Or talk to a human: Call us at (123) 456-7890</p>
      </footer>
    </div>
  );
}
