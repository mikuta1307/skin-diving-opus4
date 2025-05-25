export default function Footer() {
  return (
    <>
      <section className="section final-section">
        <div className="container">
          <h2 className="section-title">スキンダイビングを安全に楽しむために</h2>
          <div className="final-content">
            <p className="final-text">
              正しい装備選びは、安全で快適なスキンダイビングの第一歩。<br />
              あなたに最適なセットを見つけて、素晴らしい海の世界を楽しんでください。
            </p>
            <button className="btn btn-accent final-cta pulse">
              最適なセットを見つける
              <span className="material-icons">search</span>
            </button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="material-icons">waves</span>
              <span>ダイビングギア</span>
            </div>
            <nav className="footer-nav">
              <a href="#company">会社情報</a>
              <a href="#privacy">プライバシーポリシー</a>
              <a href="#law">特定商取引法</a>
              <a href="#contact">お問い合わせ</a>
            </nav>
            <p className="footer-copy">
              © 2024 Diving Gear. All rights reserved.
            </p>
            <p className="footer-disclaimer">
              ※このサイトは架空のLPです。実在の団体・サービスではありません。
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}