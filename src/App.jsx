import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import logo from './logo.png'
import { useState, useEffect } from 'react'
import itemStacker from './assets/item_stacker.PNG'
import settingLangEN from './assets/setting_lang_EN.PNG'
import settingLangTH from './assets/setting_lang_TH.PNG'
import crafterSetting from './assets/crafter_setting.PNG'
import mobStacker from './assets/mob_stacker.PNG'
import promptPayLogo from './assets/prompt-pay-logo.png'
import asset1 from './assets/asset1.PNG'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'

function App() {
  const [language, setLanguage] = useState('th')
  const [downloadProgress, setDownloadProgress] = useState(0)
  const [isDownloading, setIsDownloading] = useState(false)
  const [donationAmount, setDonationAmount] = useState(10) // Default amount

  useEffect(() => {
    AOS.init({ 
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  const handleDownload = async (url, filename) => {
    try {
      setIsDownloading(true)
      setDownloadProgress(0)

      const response = await fetch(url)
      const contentLength = response.headers.get('content-length')
      const total = parseInt(contentLength, 10)
      let loaded = 0

      const reader = response.body.getReader()
      const chunks = []

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        chunks.push(value)
        loaded += value.length
        const progress = Math.round((loaded / total) * 100)
        setDownloadProgress(progress)
      }

      const blob = new Blob(chunks)
      const downloadUrl = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = downloadUrl
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(downloadUrl)

      setIsDownloading(false)
      setDownloadProgress(0)
    } catch (error) {
      console.error('Download failed:', error)
      setIsDownloading(false)
      setDownloadProgress(0)
    }
  }

  const content = {
    en: {
      title: "EntityStacker",
      subtitle: "Stack Your Entities!",
      description: "Transform your Minecraft experience with EntityStacker - the ultimate solution for efficient item and mob management. Automatically stack nearby items and compatible mobs with customizable settings to suit your gameplay style.",
      features: [
        {
          title: "Smart Item Stacking",
          description: "Automatically detects and stacks nearby items, saving you time and inventory space."
        },
        {
          title: "Intelligent Mob Management",
          description: "Groups compatible mobs based on type and properties, making mob farms more efficient."
        },
        {
          title: "Customizable Settings",
          description: "Fine-tune stacking distances and behaviors to match your specific needs."
        },
        {
          title: "User-Friendly Interface",
          description: "Easy-to-use in-game settings menu accessible through the Settings Item."
        },
        {
          title: "Multilingual Support",
          description: "Switch between English and Thai languages for a personalized experience."
        }
      ],
      download: "Download",
      downloadNow: "Download Now",
      learnMore: "Learn More",
      recommended: "Download .mcaddon (Recommended)",
      resourcePack: "Resource Pack (.mcpack)",
      behaviorPack: "Behavior Pack (.mcpack)",
      version: "Version 2.0",
      rights: "All Rights Reserved.",
      gallery: {
        title: "Feature Showcase",
        itemStacker: {
          title: "Smart Item Stacking",
          description: "Watch as nearby items automatically stack together, keeping your world organized."
        },
        mobStacker: {
          title: "Efficient Mob Stacking",
          description: "Groups compatible mobs effectively, enhancing your farm productivity."
        },
        crafterSetting: {
          title: "Advanced Configuration",
          description: "Customize stacking behavior with our intuitive settings menu."
        },
        settingLangEN: {
          title: "English Interface",
          description: "Seamless experience in English with clear instructions and tooltips."
        },
        settingLangTH: {
          title: "Thai Interface",
          description: "Native Thai language support for local players."
        }
      },
      donate: {
        title: "Support Us",
        buttonText: "Donate",
        description: "If you find EntityStacker useful, consider supporting its development. Your contribution helps us maintain and improve the addon!",
        selectAmountLabel: "Select Amount (THB):"
      }
    },
    th: {
      title: "EntityStacker",
      subtitle: "รวมเอนทิตี้ของคุณ!",
      description: "เปลี่ยนประสบการณ์ Minecraft ของคุณด้วย EntityStacker - โซลูชันขั้นสูงสำหรับการจัดการไอเทมและม็อบ อัตโนมัติในการรวมไอเทมและม็อบที่อยู่ใกล้กัน พร้อมการตั้งค่าที่ปรับแต่งได้ตามสไตล์การเล่นของคุณ",
      features: [
        {
          title: "การรวมไอเทมอัจฉริยะ",
          description: "ตรวจจับและรวมไอเทมที่อยู่ใกล้กันโดยอัตโนมัติ ช่วยประหยัดเวลาและพื้นที่ในกระเป๋า"
        },
        {
          title: "การจัดการม็อบอัจฉริยะ",
          description: "จัดกลุ่มม็อบที่เข้ากันได้ตามประเภทและคุณสมบัติ ทำให้ฟาร์มม็อบมีประสิทธิภาพมากขึ้น"
        },
        {
          title: "การตั้งค่าที่ปรับแต่งได้",
          description: "ปรับแต่งระยะทางและพฤติกรรมการรวมให้เหมาะกับความต้องการของคุณ"
        },
        {
          title: "อินเทอร์เฟซที่ใช้งานง่าย",
          description: "เมนูตั้งค่าในเกมที่ใช้งานง่าย ผ่านไอเทม Settings"
        },
        {
          title: "รองรับหลายภาษา",
          description: "สลับระหว่างภาษาอังกฤษและภาษาไทยได้ตามต้องการ"
        }
      ],
      download: "ดาวน์โหลด",
      downloadNow: "ดาวน์โหลดเลย",
      learnMore: "ดูเพิ่มเติม",
      recommended: "ดาวน์โหลด .mcaddon (แนะนำ)",
      resourcePack: "Resource Pack (.mcpack)",
      behaviorPack: "Behavior Pack (.mcpack)",
      version: "เวอร์ชัน 2.0",
      rights: "สงวนลิขสิทธิ์",
      gallery: {
        title: "แสดงคุณสมบัติ",
        itemStacker: {
          title: "การรวมไอเทมอัจฉริยะ",
          description: "ดูการรวมไอเทมที่อยู่ใกล้กันโดยอัตโนมัติ ทำให้โลกของคุณเป็นระเบียบ"
        },
        mobStacker: {
          title: "การรวมม็อบอย่างมีประสิทธิภาพ",
          description: "จัดกลุ่มม็อบที่เข้ากันได้อย่างมีประสิทธิภาพ เพิ่มผลผลิตฟาร์มของคุณ"
        },
        crafterSetting: {
          title: "การตั้งค่าขั้นสูง",
          description: "ปรับแต่งพฤติกรรมการรวมผ่านเมนูตั้งค่าที่ใช้งานง่าย"
        },
        settingLangEN: {
          title: "อินเทอร์เฟซภาษาอังกฤษ",
          description: "ประสบการณ์ที่ราบรื่นในภาษาอังกฤษ พร้อมคำแนะนำและคำอธิบายที่ชัดเจน"
        },
        settingLangTH: {
          title: "อินเทอร์เฟซภาษาไทย",
          description: "รองรับภาษาไทยสำหรับผู้เล่นในประเทศ"
        }
      },
      donate: {
        title: "สนับสนุนเรา",
        buttonText: "บริจาค",
        description: "หากคุณพบว่า EntityStacker มีประโยชน์ โปรดพิจารณาสนับสนุนการพัฒนา การบริจาคของคุณช่วยให้เราดูแลและปรับปรุง Addon ต่อไปได้!",
        selectAmountLabel: "เลือกจำนวนเงิน (บาท):"
      }
    }
  }

  const currentContent = content[language]

  const downloadLinks = {
    resourcePack: "https://raw.githubusercontent.com/moszer/EntityStackerV2/main/ENTTY_STACKER_RECOMEND/EntityStacker.mcaddon",
    behaviorPack: "https://raw.githubusercontent.com/moszer/EntityStackerV2/main/ENTTY_STACKER_RECOMEND/EntityStacker.mcaddon",
    addonFile: "https://raw.githubusercontent.com/moszer/EntityStackerV2/main/ENTTY_STACKER_RECOMEND/EntityStacker.mcaddon"
  }

  const donationAmounts = [10, 20, 50, 100, 1000, 5000, 10000]

  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-light">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top border-bottom border-warning">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img 
              src={logo} 
              alt="EntityStacker Logo" 
              height="40" 
              className="me-2"
            />
            <span className="fw-bold">{currentContent.title}</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#gallery">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#download">{currentContent.download}</a>
              </li>
              <li className="nav-item ms-lg-2 mb-2 mb-lg-0">
                <a href="#donate" className="btn btn-success btn-sm">
                  {currentContent.donate.buttonText}
                </a>
              </li>
              <li className="nav-item ms-2">
                <div className="btn-group">
                  <button 
                    className={`btn btn-sm ${language === 'en' ? 'btn-warning' : 'btn-outline-warning'}`}
                    onClick={() => setLanguage('en')}
                  >
                    EN
                  </button>
                  <button 
                    className={`btn btn-sm ${language === 'th' ? 'btn-warning' : 'btn-outline-warning'}`}
                    onClick={() => setLanguage('th')}
                  >
                    TH
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-5" data-aos="fade-in">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
              <div className="d-flex align-items-center mb-4">
                <img 
                  src={logo} 
                  alt="EntityStacker Logo" 
                  height="80" 
                  className="me-3"
                />
                <div>
                  <h1 className="display-4 fw-bold mb-0">
                    {currentContent.title}
                  </h1>
                  <span className="text-warning h4">{currentContent.subtitle}</span>
                </div>
              </div>
              <p className="lead mb-4">
                {currentContent.description}
              </p>
              <div className="d-grid gap-2 d-md-flex">
                <a href="#download" className="btn btn-warning btn-lg px-4 me-md-2">
                  {currentContent.downloadNow}
                </a>
                <a href="#features" className="btn btn-outline-warning btn-lg px-4">
                  {currentContent.learnMore}
                </a>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block" data-aos="fade-left" data-aos-delay="200">
              <img
                src={itemStacker}
                alt="EntityStacker Preview"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5 bg-dark" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center mb-5">Features</h2>
          <div className="row g-4">
            {currentContent.features.map((feature, index) => (
              <div key={index} className="col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card bg-secondary text-light h-100 border-warning card-hover">
                  <div className="card-body">
                    <div className="d-flex align-items-start">
                      <svg className="bi text-warning me-2 mt-1" width="24" height="24" fill="currentColor">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                      </svg>
                      <div>
                        <h5 className="card-title text-warning">{feature.title}</h5>
                        <p className="card-text mb-0">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center mb-5">{currentContent.gallery.title}</h2>
          <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3 align-items-stretch">
            <div className="col" data-aos="fade-up" data-aos-delay="0">
              <div className="card bg-secondary text-light border-warning h-100 card-hover">
                <img src={itemStacker} className="card-img-top" alt="Item Stacker" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-warning">{currentContent.gallery.itemStacker.title}</h5>
                  <p className="card-text">{currentContent.gallery.itemStacker.description}</p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-up" data-aos-delay="100">
              <div className="card bg-secondary text-light border-warning h-100 card-hover">
                <img src={mobStacker} className="card-img-top" alt="Mob Stacker" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-warning">{currentContent.gallery.mobStacker.title}</h5>
                  <p className="card-text">{currentContent.gallery.mobStacker.description}</p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-up" data-aos-delay="200">
              <div className="card bg-secondary text-light border-warning h-100 card-hover">
                <img src={crafterSetting} className="card-img-top" alt="Crafter Settings" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-warning">{currentContent.gallery.crafterSetting.title}</h5>
                  <p className="card-text">{currentContent.gallery.crafterSetting.description}</p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-up" data-aos-delay="300">
              <div className="card bg-secondary text-light border-warning h-100 card-hover">
                <img src={settingLangEN} className="card-img-top" alt="English Settings" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-warning">{currentContent.gallery.settingLangEN.title}</h5>
                  <p className="card-text">{currentContent.gallery.settingLangEN.description}</p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-up" data-aos-delay="400">
              <div className="card bg-secondary text-light border-warning h-100 card-hover">
                <img src={settingLangTH} className="card-img-top" alt="Thai Settings" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-warning">{currentContent.gallery.settingLangTH.title}</h5>
                  <p className="card-text">{currentContent.gallery.settingLangTH.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center mb-5">{currentContent.download}</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card bg-secondary text-light border-warning">
                <div className="card-body text-center">
                  <h3 className="card-title mb-4 text-warning">{currentContent.version}</h3>
                  {isDownloading && (
                    <div className="mb-4">
                      <div className="progress" style={{ height: '20px' }}>
                        <div 
                          className="progress-bar progress-bar-striped progress-bar-animated bg-warning" 
                          role="progressbar" 
                          style={{ width: `${downloadProgress}%` }}
                          aria-valuenow={downloadProgress} 
                          aria-valuemin="0" 
                          aria-valuemax="100"
                        >
                          {downloadProgress}%
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="d-grid gap-3">
                    <button
                      onClick={() => handleDownload(downloadLinks.addonFile, "EntityStacker_v2.0.mcaddon")}
                      className="btn btn-warning btn-lg"
                      disabled={isDownloading}
                    >
                      {isDownloading ? `${downloadProgress}%` : currentContent.recommended}
                    </button>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                      <button
                        onClick={() => handleDownload(downloadLinks.resourcePack, "EntityStacker_RP_v2.0.mcpack")}
                        className="btn btn-outline-warning"
                        disabled={isDownloading}
                      >
                        {currentContent.resourcePack}
                      </button>
                      <button
                        onClick={() => handleDownload(downloadLinks.behaviorPack, "EntityStacker_BP_v2.0.mcpack")}
                        className="btn btn-outline-warning"
                        disabled={isDownloading}
                      >
                        {currentContent.behaviorPack}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-5 bg-dark" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center mb-4">{currentContent.donate.title}</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card bg-secondary text-light border-warning">
                <div className="card-body d-flex flex-column align-items-center text-center">
                  <p className="lead mb-4">{currentContent.donate.description}</p>
                  
                  <div className="mb-3" style={{ maxWidth: '250px' }}>
                    <label htmlFor="donationAmountSelect" className="form-label fw-bold">{currentContent.donate.selectAmountLabel}</label>
                    <select 
                      id="donationAmountSelect"
                      className="form-select form-select bg-dark text-light border-warning"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(e.target.value)}
                    >
                      {donationAmounts.map(amount => (
                        <option key={amount} value={amount}>
                          {amount.toLocaleString()} THB
                        </option>
                      ))}
                    </select>
                  </div>

                  <img 
                    src={`https://promptpay.io/0644916714/${donationAmount}.png`} 
                    alt={`PromptPay QR Code for ${donationAmount} THB Donation`}
                    className="img-fluid rounded mb-2"
                    style={{ maxWidth: '300px' }} 
                  />
                  <img 
                    src={promptPayLogo}
                    alt="PromptPay Logo"
                    className="img-fluid mb-2"
                    style={{ maxWidth: '150px' }}
                  />
                  <p className="text-muted small">Scan the QR code to donate {donationAmount.toLocaleString()} THB via PromptPay.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light py-4 mt-auto border-top border-warning">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <img 
                src={logo} 
                alt="EntityStacker Logo" 
                height="40" 
                className="mb-3"
              />
              <p className="mb-0">
                &copy; {new Date().getFullYear()} EntityStacker. {currentContent.rights}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
