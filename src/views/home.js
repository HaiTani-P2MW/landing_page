import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import IconContainer11 from '../components/icon-container11'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Togthr template</title>
        <meta property="og:title" content="Togthr template" />
      </Helmet>
      <div className="home-heading">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <img
            alt="logo"
            src="/external/salinan%20logo_haitani%20(1)%201-1500h-1500h.png"
            className="home-image"
          />
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <span className="home-text01"><a href='#home'>Home</a></span>
              <span className="home-text02"><a href='#about'>About</a></span>
              <span className="home-text03"><a href='#visi'>Visi & Misi</a></span>
              <span className="home-text04"><a href='#faqs'>FAQs</a></span>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <img
                  alt="image"
                  src="/external/salinan%20logo_haitani%20(1)%201-1500h-1500h.png"
                  className="home-logo"
                />
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <span className="home-text05"><a href='#home'>Home</a></span>
                <span className="home-text06"><a href='#about'>About</a></span>
                <span className="home-text07"><a href='#visi'>Visi & Misi</a></span>
                <span className="home-text08"><a href='#faqs'></a>FAQs</span>
              </nav>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home-header">
        <div className="home-hero">
          <div className="home-content">
            <h1 className="home-title">#Revolution Your Harvest.</h1>
            <span className="home-caption">
              Tingkatkan hasil panen anda dengan aplikasi HaiTani
            </span>
            <div className="home-hero-buttons">
              <div className="home-android-btn">
                <img
                  alt="pastedImage"
                  src="/external/pastedimage-ld65.svg"
                  className="home-android"
                />
                <a href='https://play.google.com/store/apps/details?id=com.rzl.haitani&pcampaignid=web_share'><span className="home-caption1">Download for Android</span></a>
              </div>
            </div>
          </div>
          <div className="home-images">
            <div className="home-column">
              <img
                alt="pastedImage"
                src="/external/profile-ahli-tani-1500h.webp"
                className="home-pasted-image"
              />
            </div>
            <div className="home-column1">
              <img
                alt="pastedImage"
                src="/external/ai-camera1-1500h.webp"
                className="home-pasted-image1"
              />
              <img
                alt="pastedImage"
                src="/external/login-1500h.webp"
                className="home-pasted-image2"
              />
            </div>
            <div className="home-column2">
              <img
                alt="pastedImage"
                src="/external/beranda-1500h.webp"
                className="home-pasted-image3"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="home-video">
        <div className="home-content01">
          <div className="home-video-container">
            <video
              src="https://youtu.be/XS0B7vdo5Ag?si=C-ajIHB6ayF-oydB"
              loop
              muted="true"
              poster="/external/growth-1500h-900h-200h.webp"
              autoPlay
              controls="true"
              className="home-video1"
            ></video>
            <div className="home-heading-container">
              <div className="home-container1">
                <span className="home-text10">
                  &quot;HaiTani menghadirkan inovasi melalui sebuah aplikasi
                  yang dirancang khusus untuk mengubah paradigma pertanian&quot;
                </span>
                <span className="home-text11">
                  Dengan fokus pada integrasi teknologi canggih, HaiTani hadir
                  sebagai solusi komprehensif bagi para petani, penghobi
                  tanaman, dan semua individu yang tertarik dalam pertanian
                  modern yang efisien.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="home-statistics">
        <section className="home-data">
          <div className="home-header-container">
            <div className="home-header01">
              <div className="home-row">
                <h2 id="visi" className="home-heading1">
                  <span>Visi &amp; Misi HaiTani</span>
                  <br className="home-text13"></br>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </h2>
              </div>
            </div>
            <p className="home-content02">
              Kami bermimpi tentang dunia di mana pertanian tidak hanya
              berfungsi sebagai sumber pangan,tetapi menghadirkan masa depan
              pertanian yang cerdas, berkelanjutan, dan terhubung. Di
              HaiTani,kami bercita-cita melihat dunia di mana setiap petani,
              penghobi tanaman, dan individu yang peduli terhadap pertanian
              memiliki akses ke teknologi mutakhir yang mendorong pertumbuhan
              tanaman yang optimal dan keberlanjutan.Kami percaya bahwa dengan
              inovasi dan kolaborasi, kita dapat menghadirkan kesejahteraan
              melalui pertanian yang berkelanjutan dan berdaya saing tinggi.
            </p>
          </div>
        </section>
        <div className="home-content03">
          <div className="home-accordion">
            <h3 className="home-heading2">
              Dengan tekad dan komitmen yang kuat, kami menjalankan misi untuk:
            </h3>
            <div
              data-role="accordion-container"
              className="accordion home-element"
            >
              <div className="home-content04">
                <h3 className="home-header02">
                  1. Transformasi Digital Pertanian 
                </h3>
                <p
                  data-role="accordion-content"
                  className="home-content05 accordion-content"
                >
                  <span className="home-text17">
                    <span>
                      Kami bertekad untuk terus mendorong batas-batas inovasi di
                      dunia pertanian. Melalui teknologi AI, kami akan terus
                      mengembangkan solusi yang memfasilitasi deteksi dini
                      penyakit, pemantauan pertumbuhan, dan peningkatan hasil
                      panen.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </p>
              </div>
              <IconContainer11 rootClassName="icon-container11-root-class-name"></IconContainer11>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div className="home-content06">
                <h3 className="home-header03">2. Pemberdayaan</h3>
                <p
                  data-role="accordion-content"
                  className="home-content07 accordion-content"
                >
                  Memberdayakan para petani dengan pengetahuan, dan dukungan
                  yang mereka butuhkan untuk mencapai kesuksesan dalam
                  pertanian. Kami ingin menjadi mitra setia yang memandu mereka
                  dalam mengatasi tantangan dan mengoptimalkan hasil pertanian.
                </p>
              </div>
              <IconContainer11 rootClassName="icon-container11-root-class-name1"></IconContainer11>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div className="home-content08">
                <h3 className="home-header04">3. Pertanian Berkelanjutan</h3>
                <p
                  data-role="accordion-content"
                  className="home-content09 accordion-content"
                >
                  <span>
                    Memberdayakan para petani dengan alat, pengetahuan, dan
                    dukungan yang mereka butuhkan untuk mencapai kesuksesan
                    dalam pertanian. Kami ingin menjadi mitra setia yang memandu
                    mereka dalam mengatasi tantangan dan mengoptimalkan hasil
                    pertanian.
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </p>
              </div>
              <IconContainer11 rootClassName="icon-container11-root-class-name2"></IconContainer11>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div className="home-content10">
                <h3 className="home-header05">4. Akses Untuk Semua</h3>
                <p
                  data-role="accordion-content"
                  className="home-content11 accordion-content"
                >
                  <span>
                    Kami memegang prinsip bahwa teknologi pertanian harus dapat
                    diakses oleh semua kalangan. Kami akan terus berupaya untuk
                    menjadikan HaiTani terjangkau dan mudah diakses oleh setiap
                    individu yang ingin terlibat dalam pertanian modern.
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </p>
              </div>
              <IconContainer11 rootClassName="icon-container11-root-class-name3"></IconContainer11>
            </div>
            <div className="home-div">
              <Script
                html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
              ></Script>
            </div>
          </div>
        </div>
      </section>
      <section className="home-create">
        <div className="home-content12">
          <div className="home-header06">
            <h2 className="home-heading3">
              <span>Gabung di Gerakan Tanaman Sehat Indonesia </span>
              <br></br>
            </h2>
          </div>
          <button className="home-button button">
            <a href='https://forms.gle/3BZaw7ZfDMD4rqXw9'><span>Gabung</span></a>
          </button>
        </div>
      </section>
      <div className="home-footer">
        <section className="home-faq">
          <div className="home-header07"></div>
          <h2  id='faqs'className="home-heading4">
            <span>
              FAQs
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
          <div className="home-content13">
            <div className="home-column3">
              <div className="home-element4">
                <h3 className="home-header08">Apa itu HaiTani?</h3>
                <p className="home-content14">
                  <span>
                    HaiTani adalah sebuah aplikasi inovatif yang dirancang untuk
                    memperbaiki pertanian dan kebun perkotaan melalui teknologi
                    AI dan solusi pertanian berbasis teknologi.
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </p>
              </div>
              <div className="home-element5">
                <h3 className="home-header09">Bagaimana HaiTani berfungsi?</h3>
                <p className="home-content15">
                  HaiTani menggunakan teknologi AI untuk mendeteksi penyakit
                  tanaman, memberikan konsultasi ahli pertanian, serta
                  menyediakan platform e-commerce untuk peralatan pertanian
                </p>
              </div>
              <div className="home-element6">
                <h3 className="home-header10">
                  Siapa yang bisa menggunakan HaiTani?
                </h3>
                <p className="home-content16">
                  HaiTani dapat digunakan oleh petani, penghobi tanaman, dan
                  siapa saja yang tertarik pada pertanian modern dan efisien.
                </p>
              </div>
            </div>
            <div className="home-column4">
              <div className="home-element7">
                <h3 className="home-header11">
                  Apakah deteksi penyakit tanaman akurat?
                </h3>
                <p className="home-content17">
                  Ya, deteksi penyakit tanaman HaiTani memiliki akurasi yang
                  tinggi karena mengandalkan teknologi AI terkini.
                </p>
              </div>
              <div className="home-element8">
                <h3 className="home-header12">
                  Siapakah konsultan yang memberikan layanan konsultasi?
                </h3>
                <p className="home-content18">
                  <span>
                    Tim ahli kami terdiri dari para profesional pertanian
                    berpengalaman yang siap memberikan panduan dan jawaban atas
                    pertanyaan Anda.
                  </span>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="home-content19">
          <div className="home-main">
            <div className="home-branding">
              <img
                alt="image"
                src="/external/salinan%20logo_haitani%20(1)%201-1500h-1500h.png"
                className="home-image1"
              />
            </div>
            <div className="home-links2">
              <div className="home-column5">
                <span className="home-header13">Social</span>
                <div className="home-list">
                  <a href='mailto:business@haitani.id'><span className="home-text42">Gmail</span></a>
                  <a href='https://www.instagram.com/haitani.id/?igshid=OGQ5ZDc2ODk2ZA%3D%3D'><span className="home-text43">Instagram</span></a>
                  <a href='https://www.linkedin.com/company/haitani-id/'><span className="home-text42">Linkedin</span></a>
                  <a href='https://www.tiktok.com/@haitani.id?ug_source=op.auth&ug_term=Linktr.ee&utm_source=awyc6vc625ejxp86&utm_campaign=tt4d_profile_link&_r=1'><span className="home-text43">Tiktok</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="home-bottom">
            <span className="home-text44">© 2023 HaiTani</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
