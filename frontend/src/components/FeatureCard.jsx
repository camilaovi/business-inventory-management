function FeatureCard({ title, description }) {
  return (
    <article className="featureCard">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

export default FeatureCard