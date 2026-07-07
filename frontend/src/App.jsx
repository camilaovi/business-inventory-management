import './App.css'
import Hero from './components/Hero'
import SummaryCard from './components/SummaryCard'
import FeatureCard from './components/FeatureCard'

function App() {
  const features = [
    {
      title: 'Product management',
      description:
        'Register, update, and organize products with information such as category, price, available quantity, and production cost.',
    },
    {
      title: 'Inventory control',
      description:
        'Monitor available stock, identify low inventory levels, and support better decisions for purchasing and production.',
    },
    {
      title: 'Sales registration',
      description:
        'Record sales, calculate totals, and update inventory automatically after each transaction.',
    },
    {
      title: 'Business reports',
      description:
        'Display basic indicators related to sales, customers, products, and inventory behavior.',
    },
  ]

  return (
    <main className="app">
      <section className="hero">
        <Hero />
        <SummaryCard />
      </section>

      {/* Main feature cards for the future system modules */}
      <section className="features">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </section>
    </main>
  )
}

export default App