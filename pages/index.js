import Head from 'next/head';
import { useTarget } from '../lib/context/TargetContext';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import HeroSection from '../components/Hero/HeroSection';
import BeginnerContent from '../components/Content/BeginnerContent';
import ExperiencedContent from '../components/Content/ExperiencedContent';
import GiftContent from '../components/Content/GiftContent';
import ProductSection from '../components/Products/ProductSection';
import ComparisonTable from '../components/Common/ComparisonTable';
import TargetSelectModal from '../components/Modal/TargetSelectModal';
import FloatingButton from '../components/Common/FloatingButton';

export default function Home() {
  const { targetType, TARGET_TYPES } = useTarget();

  const renderContent = () => {
    switch (targetType) {
      case TARGET_TYPES.BEGINNER:
        return <BeginnerContent />;
      case TARGET_TYPES.EXPERIENCED:
        return <ExperiencedContent />;
      case TARGET_TYPES.GIFT:
        return <GiftContent />;
      default:
        return <BeginnerContent />;
    }
  };

  return (
    <>
      <Head>
        <title>スキンダイビング スターターセット | 初心者向け装備ガイド</title>
        <meta name="description" content="スキンダイビング初心者に最適な厳選スターターセット。プロが選んだマスク・スノーケル・フィンのセットを紹介。失敗しない装備選びのポイントも解説。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        <HeroSection />
        {renderContent()}
        <ProductSection />
        <ComparisonTable />
        
        <section className="section faq-section">
          <div className="container">
            <h2 className="section-title">よくある質問</h2>
            <div className="faq-list">
              <details className="faq-item">
                <summary>セットで買うメリットは？</summary>
                <p>装備同士の相性が考慮されており、個別購入より15-20%お得です。初心者の方でも失敗なく必要な装備が揃います。</p>
              </details>
              <details className="faq-item">
                <summary>メンテナンス方法は？</summary>
                <p>使用後は真水でよく洗い、直射日光を避けて乾燥させてください。定期的にシリコン部分にはグリスを塗布すると長持ちします。</p>
              </details>
              <details className="faq-item">
                <summary>サイズが合わなかったら？</summary>
                <p>商品到着後30日以内であれば、無料でサイズ交換を承っております。未使用品に限りますのでご注意ください。</p>
              </details>
              <details className="faq-item">
                <summary>他に必要な装備は？</summary>
                <p>基本3点セット以外には、ウェットスーツ、メッシュバッグ、曇り止めなどがあると便利です。段階的に揃えていきましょう。</p>
              </details>
            </div>
          </div>
        </section>

        <section className="section newsletter-section" id="newsletter-section">
          <div className="container">
            <div className="newsletter-card">
              <div className="newsletter-icon">
                <span className="material-icons">mail_outline</span>
              </div>
              <div className="newsletter-content">
                <h3>初心者向け装備選びチェックリスト</h3>
                <p>今なら無料ダウンロード！失敗しない装備選びのポイントをまとめました。</p>
                <form className="newsletter-form">
                  <input 
                    type="email" 
                    placeholder="メールアドレス" 
                    required 
                  />
                  <button type="submit" className="btn">
                    無料ダウンロード
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <TargetSelectModal />
      <FloatingButton />
      
      {/* スマホ用スティッキーCTA */}
      <div className="sticky-cta">
        <button className="btn sticky-cta-button">
          最適なセットを選ぶ
        </button>
      </div>

      <style jsx>{`
        .faq-section {
          background: var(--bg-light);
        }

        .faq-list {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-item {
          background: white;
          margin-bottom: 1rem;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: var(--shadow-sm);
        }

        .faq-item summary {
          font-weight: 600;
          cursor: pointer;
          list-style: none;
          position: relative;
          padding-right: 2rem;
        }

        .faq-item summary::after {
          content: '+';
          position: absolute;
          right: 0;
          top: 0;
          font-size: 1.5rem;
          color: var(--primary-color);
        }

        .faq-item[open] summary::after {
          content: '−';
        }

        .faq-item p {
          margin-top: 1rem;
          color: var(--text-light);
          line-height: 1.6;
        }

        .newsletter-card {
          background: white;
          padding: 3rem;
          border-radius: 20px;
          box-shadow: var(--shadow-md);
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .newsletter-icon .material-icons {
          font-size: 4rem;
          color: var(--primary-color);
        }

        .newsletter-content h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .newsletter-content p {
          color: var(--text-light);
          margin-bottom: 1.5rem;
        }

        .newsletter-form {
          display: flex;
          gap: 1rem;
        }

        .newsletter-form input {
          flex: 1;
          padding: 1rem;
          border: 2px solid var(--bg-light);
          border-radius: 50px;
          font-size: 1rem;
        }

        .newsletter-form input:focus {
          outline: none;
          border-color: var(--primary-color);
        }

        .final-section {
          background: var(--bg-light);
          text-align: center;
        }

        .final-text {
          font-size: 1.2rem;
          color: var(--text-light);
          margin-bottom: 2rem;
          line-height: 1.8;
        }

        .final-cta {
          font-size: 1.2rem;
          padding: 1.2rem 3rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .footer {
          background: var(--text-dark);
          color: white;
          padding: 3rem 0;
        }

        .footer-content {
          text-align: center;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 2rem;
        }

        .footer-logo .material-icons {
          font-size: 2rem;
        }

        .footer-nav {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .footer-nav a {
          color: white;
          opacity: 0.8;
        }

        .footer-nav a:hover {
          opacity: 1;
        }

        .footer-copy {
          opacity: 0.6;
          font-size: 0.9rem;
        }

        .sticky-cta {
          display: none;
        }

        @media (max-width: 767px) {
          .newsletter-card {
            flex-direction: column;
            padding: 2rem;
            text-align: center;
          }

          .newsletter-form {
            flex-direction: column;
          }

          .newsletter-form input,
          .newsletter-form button {
            width: 100%;
          }

          .sticky-cta {
            display: block;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: white;
            padding: 1rem;
            box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
            z-index: 99;
          }

          .sticky-cta-button {
            width: 100%;
            font-size: 1.1rem;
            padding: 1rem;
          }
        }
      `}</style>
    </>
  );
}