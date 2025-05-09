import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyD2kh52vMSvA8CccTcBGdyrK2Kiv7KmYKQ';
const genAI = new GoogleGenerativeAI(API_KEY);

// Pre-defined translations for better reliability
export const translations = {
  en: {
    hero: {
      title: "Your Health, Our Priority",
      subtitle: "Experience the future of healthcare management",
      doctorButton: "I am a Doctor",
      patientButton: "I am a Patient"
    },
    howItWorks: {
      title: "How It Works",
      steps: [
        {
          title: "Create Account",
          desc: "Sign up and complete your medical profile",
          icon: "🏥"
        },
        {
          title: "Connect with Doctors",
          desc: "Find and consult with qualified healthcare professionals",
          icon: "👨‍⚕️"
        },
        {
          title: "Manage Health",
          desc: "Track records, appointments, and medications",
          icon: "📊"
        }
      ]
    },
    benefits: {
      title: "Benefits",
      items: [
        {
          title: "24/7 Access",
          desc: "Access your medical records anytime, anywhere"
        },
        {
          title: "Secure Platform",
          desc: "Your data is protected with enterprise-grade security"
        },
        {
          title: "Easy Communication",
          desc: "Direct messaging and video calls with healthcare providers"
        },
        {
          title: "Smart Analytics",
          desc: "AI-powered health insights and recommendations"
        }
      ]
    },
    whoCanBenefit: {
      title: "Who Can Benefit?",
      items: [
        {
          title: "Patients",
          desc: "Manage your health journey with ease",
          icon: "🧑"
        },
        {
          title: "Healthcare Providers",
          desc: "Streamline patient care and management",
          icon: "👨‍⚕️"
        },
        {
          title: "Healthcare Institutions",
          desc: "Improve operational efficiency",
          icon: "🏥"
        },
        {
          title: "Rural Communities",
          desc: "Access quality healthcare remotely",
          icon: "🌾"
        },
        {
          title: "Elderly Care",
          desc: "Easy access to healthcare from home",
          icon: "👴"
        },
        {
          title: "Emergency Services",
          desc: "Quick response and immediate care",
          icon: "🚑"
        }
      ]
    }
  },
  hi: {
    hero: {
      title: "आपका स्वास्थ्य, हमारी प्राथमिकता",
      subtitle: "स्वास्थ्य प्रबंधन का भविष्य अनुभव करें",
      doctorButton: "मैं एक डॉक्टर हूं",
      patientButton: "मैं एक मरीज हूं"
    },
    howItWorks: {
      title: "यह कैसे काम करता है",
      steps: [
        {
          title: "खाता बनाएं",
          desc: "साइन अप करें और अपनी चिकित्सा प्रोफ़ाइल पूरी करें",
          icon: "🏥"
        },
        {
          title: "डॉक्टरों से जुड़ें",
          desc: "योग्य स्वास्थ्य पेशेवरों को खोजें और उनसे परामर्श करें",
          icon: "👨‍⚕️"
        },
        {
          title: "स्वास्थ्य प्रबंधन",
          desc: "रिकॉर्ड, अपॉइंटमेंट और दवाओं का ट्रैक रखें",
          icon: "📊"
        }
      ]
    },
    benefits: {
      title: "लाभ",
      items: [
        {
          title: "24/7 पहुंच",
          desc: "कभी भी, कहीं भी अपने चिकित्सा रिकॉर्ड तक पहुंचें"
        },
        {
          title: "सुरक्षित प्लेटफॉर्म",
          desc: "आपका डेटा एंटरप्राइज-ग्रेड सुरक्षा के साथ सुरक्षित है"
        },
        {
          title: "आसान संचार",
          desc: "स्वास्थ्य सेवा प्रदाताओं के साथ सीधा मैसेजिंग और वीडियो कॉल"
        },
        {
          title: "स्मार्ट एनालिटिक्स",
          desc: "AI-संचालित स्वास्थ्य अंतर्दृष्टि और सिफारिशें"
        }
      ]
    },
    whoCanBenefit: {
      title: "कौन लाभ उठा सकता है?",
      items: [
        {
          title: "मरीज",
          desc: "आसानी से अपनी स्वास्थ्य यात्रा का प्रबंधन करें",
          icon: "🧑"
        },
        {
          title: "स्वास्थ्य सेवा प्रदाता",
          desc: "रोगी देखभाल और प्रबंधन को सुव्यवस्थित करें",
          icon: "👨‍⚕️"
        },
        {
          title: "स्वास्थ्य संस्थान",
          desc: "परिचालन दक्षता में सुधार",
          icon: "🏥"
        },
        {
          title: "ग्रामीण समुदाय",
          desc: "दूर से गुणवत्तापूर्ण स्वास्थ्य सेवा तक पहुंच",
          icon: "🌾"
        },
        {
          title: "वरिष्ठ नागरिक देखभाल",
          desc: "घर से आसान स्वास्थ्य सेवा पहुंच",
          icon: "👴"
        },
        {
          title: "आपातकालीन सेवाएं",
          desc: "त्वरित प्रतिक्रिया और तत्काल देखभाल",
          icon: "🚑"
        }
      ]
    }
  },
  kn: {
    hero: {
      title: "ನಿಮ್ಮ ಆರೋಗ್ಯ, ನಮ್ಮ ಆದ್ಯತೆ",
      subtitle: "ಆರೋಗ್ಯ ನಿರ್ವಹಣೆಯ ಭವಿಷ್ಯವನ್ನು ಅನುಭವಿಸಿ",
      doctorButton: "ನಾನು ವೈದ್ಯ",
      patientButton: "ನಾನು ರೋಗಿ"
    },
    howItWorks: {
      title: "ಇದು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ",
      steps: [
        {
          title: "ಖಾತೆ ರಚಿಸಿ",
          desc: "ಸೈನ್ ಅಪ್ ಮಾಡಿ ಮತ್ತು ನಿಮ್ಮ ವೈದ್ಯಕೀಯ ಪ್ರೊಫೈಲ್ ಪೂರ್ಣಗೊಳಿಸಿ",
          icon: "🏥"
        },
        {
          title: "ವೈದ್ಯರೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಿ",
          desc: "ಯೋಗ್ಯ ಆರೋಗ್ಯ ವೃತ್ತಿಪರರನ್ನು ಹುಡುಕಿ ಮತ್ತು ಸಲಹೆ ಪಡೆಯಿರಿ",
          icon: "👨‍⚕️"
        },
        {
          title: "ಆರೋಗ್ಯ ನಿರ್ವಹಣೆ",
          desc: "ರೆಕಾರ್ಡ್‌ಗಳು, ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್‌ಗಳು ಮತ್ತು ಔಷಧಿಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",
          icon: "📊"
        }
      ]
    },
    benefits: {
      title: "ಆನುಭೂತಿಗಳು",
      items: [
        {
          title: "24/7 ಪ್ರವೇಶ",
          desc: "ಯಾವುದೇ ಸಮಯದಲ್ಲಿ, ಎಲ್ಲಿಯಾದರೂ ನಿಮ್ಮ ವೈದ್ಯಕೀಯ ದಾಖಲೆಗಳಿಗೆ ಪ್ರವೇಶ ಪಡೆಯಿರಿ"
        },
        {
          title: "ಸುರಕ್ಷಿತ ವೇದಿಕೆ",
          desc: "ನಿಮ್ಮ ಡೇಟಾ ಎಂಟರ್ಪ್ರೈಸ್-ಗ್ರೇಡ್ ಸುರಕ್ಷತೆಯೊಂದಿಗೆ ರಕ್ಷಿಸಲಾಗಿದೆ"
        },
        {
          title: "ಸುಲಭ ಸಂವಹನ",
          desc: "ಆರೋಗ್ಯ ಸೇವಾ ಪೂರೈಕೆದಾರರೊಂದಿಗೆ ನೇರ ಸಂದೇಶ ಮತ್ತು ವೀಡಿಯೊ ಕರೆಗಳು"
        },
        {
          title: "ಸ್ಮಾರ್ಟ್ ವಿಶ್ಲೇಷಣೆ",
          desc: "AI-ಚಾಲಿತ ಆರೋಗ್ಯ ಒಳನೋಟಗಳು ಮತ್ತು ಶಿಫಾರಸುಗಳು"
        }
      ]
    },
    whoCanBenefit: {
      title: "ಯಾರು ಲಾಭ ಪಡೆಯಬಹುದು?",
      items: [
        {
          title: "ರೋಗಿಗಳು",
          desc: "ಸುಲಭವಾಗಿ ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರಯಾಣವನ್ನು ನಿರ್ವಹಿಸಿ",
          icon: "🧑"
        },
        {
          title: "ಆರೋಗ್ಯ ಸೇವಾ ಪೂರೈಕೆದಾರರು",
          desc: "ರೋಗಿ ಆರೈಕೆ ಮತ್ತು ನಿರ್ವಹಣೆಯನ್ನು ಸುಗಮಗೊಳಿಸಿ",
          icon: "👨‍⚕️"
        },
        {
          title: "ಆರೋಗ್ಯ ಸಂಸ್ಥೆಗಳು",
          desc: "ಕಾರ್ಯಾಚರಣಾ ದಕ್ಷತೆಯನ್ನು ಸುಧಾರಿಸಿ",
          icon: "🏥"
        },
        {
          title: "ಗ್ರಾಮೀಣ ಸಮುದಾಯಗಳು",
          desc: "ದೂರದಿಂದ ಗುಣಮಟ್ಟದ ಆರೋಗ್ಯ ಸೇವೆಗೆ ಪ್ರವೇಶ",
          icon: "🌾"
        },
        {
          title: "ವೃದ್ಧರ ಆರೈಕೆ",
          desc: "ಮನೆಯಿಂದ ಸುಲಭ ಆರೋಗ್ಯ ಸೇವೆ ಪ್ರವೇಶ",
          icon: "👴"
        },
        {
          title: "ಅತ್ಯವಶ್ಯಕ ಸೇವೆಗಳು",
          desc: "ತ್ವರಿತ ಪ್ರತಿಕ್ರಿಯೆ ಮತ್ತು ತ್ವರಿತ ಆರೈಕೆ",
          icon: "🚑"
        }
      ]
    }
  }
}; 