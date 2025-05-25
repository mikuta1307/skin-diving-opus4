export default function GiftContent() {
  const giftPoints = [
    {
      icon: '📏',
      title: 'サイズ選び',
      description: 'フィンは靴のサイズ、マスクは顔の大きさに合わせて。交換保証があると安心です。'
    },
    {
      icon: '💴',
      title: '予算設定',
      description: '初心者なら2〜3万円、経験者なら3〜5万円が相場。セットなら単品より15%お得。'
    },
    {
      icon: '🎊',
      title: 'シーン別選び方',
      description: '誕生日・記念日なら特別感のあるセット、実用重視ならスタンダードセットがおすすめ。'
    }
  ];

  const wrappingOptions = [
    {
      name: 'スタンダードラッピング',
      price: '無料',
      features: ['リボン付きギフトボックス', 'メッセージカード']
    },
    {
      name: 'プレミアムラッピング',
      price: '¥1,000',
      features: ['特製ギフトボックス', '写真入りメッセージカード', 'ラッピングペーパー']
    },
    {
      name: 'スペシャルラッピング',
      price: '¥2,000',
      features: ['木製ギフトボックス', 'オリジナルメッセージ刻印', '海モチーフの装飾']
    }
  ];

  return (
    <div className="gift-content">
      <section className="section gift-points-section">
        <div className="container">
          <h2 className="section-title">ギフト選びのコツ</h2>
          <div className="gift-points-grid">
            {giftPoints.map((point, index) => (
              <div key={index} className="gift-point-card fade-in">
                <div className="gift-point-icon">{point.icon}</div>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section wrapping-section">
        <div className="container">
          <h2 className="section-title">ギフトラッピングオプション</h2>
          <div className="wrapping-grid">
            {wrappingOptions.map((option, index) => (
              <div key={index} className="wrapping-card fade-in">
                <h3>{option.name}</h3>
                <p className="wrapping-price">{option.price}</p>
                <ul className="wrapping-features">
                  {option.features.map((feature, i) => (
                    <li key={i}>
                      <span className="material-icons">check</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-secondary">選択する</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section exchange-section">
        <div className="container">
          <div className="exchange-card">
            <div className="exchange-icon">
              <span className="material-icons">swap_horizontal_circle</span>
            </div>
            <div className="exchange-content">
              <h3>サイズ交換保証</h3>
              <p>プレゼントした装備のサイズが合わなかった場合、<br />
              商品到着後30日以内なら無料で交換いたします。</p>
              <ul>
                <li>送料も当店負担</li>
                <li>未使用品に限る</li>
                <li>ギフトレシート同梱可能</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}