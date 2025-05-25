export default function ExperiencedContent() {
  const comparison = {
    rental: {
      title: 'レンタル装備',
      pros: [
        '初期費用がかからない',
        'メンテナンス不要',
        '保管場所が不要'
      ],
      cons: [
        '毎回レンタル料がかかる',
        'サイズが合わないことも',
        '清潔面での不安'
      ]
    },
    owned: {
      title: 'マイ装備',
      pros: [
        '自分にぴったりフィット',
        '長期的にはコスパ良好',
        '愛着が湧いて楽しい'
      ],
      cons: [
        '初期投資が必要',
        'メンテナンスが必要',
        '保管場所の確保'
      ]
    }
  };

  const upgradePoints = [
    {
      icon: '🎯',
      title: '素材のグレードアップ',
      description: 'シリコン製マスクやカーボンフィンなど、より高品質な素材で快適性アップ'
    },
    {
      icon: '⚡',
      title: '機能性の向上',
      description: 'ドライトップスノーケルや可変ブレードフィンなど、便利な機能を追加'
    },
    {
      icon: '🎨',
      title: 'デザインにこだわる',
      description: '自分好みのカラーやデザインで、モチベーションもアップ'
    }
  ];

  return (
    <div className="experienced-content">
      <section className="section comparison-section">
        <div className="container">
          <h2 className="section-title">レンタルと購入の比較</h2>
          <div className="comparison-grid">
            <div className="comparison-card fade-in">
              <h3>{comparison.rental.title}</h3>
              <div className="comparison-content">
                <div className="pros">
                  <h4>メリット</h4>
                  <ul>
                    {comparison.rental.pros.map((pro, i) => (
                      <li key={i}>
                        <span className="material-icons">check_circle</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="cons">
                  <h4>デメリット</h4>
                  <ul>
                    {comparison.rental.cons.map((con, i) => (
                      <li key={i}>
                        <span className="material-icons">cancel</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="comparison-card owned fade-in">
              <h3>{comparison.owned.title}</h3>
              <div className="comparison-content">
                <div className="pros">
                  <h4>メリット</h4>
                  <ul>
                    {comparison.owned.pros.map((pro, i) => (
                      <li key={i}>
                        <span className="material-icons">check_circle</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="cons">
                  <h4>デメリット</h4>
                  <ul>
                    {comparison.owned.cons.map((con, i) => (
                      <li key={i}>
                        <span className="material-icons">cancel</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section upgrade-section">
        <div className="container">
          <h2 className="section-title">装備グレードアップのポイント</h2>
          <div className="upgrade-grid">
            {upgradePoints.map((point, index) => (
              <div key={index} className="upgrade-card fade-in">
                <div className="upgrade-icon">{point.icon}</div>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}