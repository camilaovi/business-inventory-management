function SummaryCard() {
  return (
    <div className="summaryCard">
      <h2>Dashboard summary</h2>

      <div className="summaryItem">
        <span>Products</span>
        <strong>128</strong>
      </div>

      <div className="summaryItem">
        <span>Sales</span>
        <strong>56</strong>
      </div>

      <div className="summaryItem">
        <span>Customers</span>
        <strong>34</strong>
      </div>
    </div>
  )
}

export default SummaryCard