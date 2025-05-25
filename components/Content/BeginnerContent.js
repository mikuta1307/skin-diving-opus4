export default function BeginnerContent() {
  const failures = [
    {
      icon: '💸',
      title: '安さだけで選んで使いづらい',
      description: '価格だけを重視すると、フィット感や使い心地が悪く、結局買い直すことに...'
    },
    {
      icon: '🎯',
      title: '高機能すぎて持て余す',
      description: '上級者向けの装備は初心者には扱いづらく、せっかくの機能も活かせません'
    },
    {
      icon: '🧩',
      title: 'バラバラに買って相性が悪い',
      description: '個別に購入すると、装備同士の相性が悪く、快適に使えないことがあります'
    }
  ];

  const points = [
    {
      icon: '😊',
      title: 'フィット感',
      details: ['マスクの顔へのフィット', 'フィンのサイズ選び'],
      image: '/svg/icons/mask.svg'
    },
    {
      icon: '👍',
      title: '使いやすさ',
      details: ['スノーケルの排水弁の有無', 'フィンの硬さと推進力'],
      image: '/svg/icons/snorkel.svg'
    },
    {
      icon: '💰',
      title: '予算と品質のバランス',
      details: ['初心者に最適な価格帯の提示', '長く使える品質'],
      image: '/svg/icons/fins.svg'
    }
  ];

  return (
    <div className="beginner-content">
      <section className="section failure-section">
        <div className="container">
          <h2 className="section-title">装備選びの失敗あるある</h2>
          <div className="failure-grid">
            {failures.map((failure, index) => (
              <div key={index} className="failure-card">
                <div className="failure-icon">{failure.icon}</div>
                <h3>{failure.title}</h3>
                <p>{failure.description}</p>
              </div>
            ))}
          </div>
          <p className="failure-conclusion">
            だから、<strong>セット選びが重要です</strong>
          </p>
        </div>
      </section>

      <section className="section points-section">
        <div className="container">
          <h2 className="section-title">装備選びの3つのポイント</h2>
          <div className="points-list">
            {points.map((point, index) => (
              <div key={index} className="point-item fade-in">
                <div className="point-image">
                  <img src={point.image} alt={point.title} />
                </div>
                <div className="point-content">
                  <div className="point-header">
                    <span className="point-icon">{point.icon}</span>
                    <h3>ポイント{index + 1}: {point.title}</h3>
                  </div>
                  <ul className="point-details">
                    {point.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}