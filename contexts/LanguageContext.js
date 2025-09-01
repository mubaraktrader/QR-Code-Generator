import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      language: 'Language'
    },
    home: {
      title: 'QR Code Generator',
      subtitle: 'Create professional QR codes instantly',
      description: 'Generate high-quality QR codes for your business, personal use, or marketing campaigns. Support for multiple sizes and formats.',
      textLabel: 'Text or URL',
      textPlaceholder: 'Enter text or URL to generate QR code',
      sizeLabel: 'QR Code Size',
      generateBtn: 'Generate QR Code',
      downloadPng: 'Download PNG',
      downloadPdf: 'Download PDF',
      errorTooLong: 'Content too long for {size} mm QR code. Please shorten or pick a larger size.',
      errorGenerate: 'Failed to generate QR code.',
      features: {
        title: 'Why Choose Our QR Generator?',
        fast: {
          title: 'Lightning Fast',
          description: 'Generate QR codes instantly with our optimized engine'
        },
        quality: {
          title: 'High Quality',
          description: 'Professional-grade QR codes with perfect scanning reliability'
        },
        formats: {
          title: 'Multiple Formats',
          description: 'Download as PNG or PDF in various sizes'
        },
        free: {
          title: 'Completely Free',
          description: 'No registration required, no watermarks, unlimited use'
        }
      }
    },
    about: {
      title: 'About QR Generator Pro',
      subtitle: 'Professional QR Code Generation Made Simple',
      mission: {
        title: 'Our Mission',
        description: 'We believe in making QR code generation accessible, fast, and professional for everyone. Whether you\'re a business owner, marketer, or individual user, our tool provides the quality and reliability you need.'
      },
      features: {
        title: 'What Makes Us Different',
        items: [
          {
            title: 'Professional Quality',
            description: 'Our QR codes are generated with the highest standards to ensure perfect scanning across all devices and applications.'
          },
          {
            title: 'Multiple Formats',
            description: 'Export your QR codes as PNG images or PDF documents in various sizes to suit your specific needs.'
          },
          {
            title: 'Privacy Focused',
            description: 'Your data stays private. We don\'t store your content or track your usage. Generate codes with complete confidence.'
          },
          {
            title: 'Mobile Optimized',
            description: 'Fully responsive design that works perfectly on all devices, from desktop computers to mobile phones.'
          },
          {
            title: 'Multilingual Support',
            description: 'Available in multiple languages to serve users worldwide with localized experiences.'
          },
          {
            title: 'No Registration',
            description: 'Start generating QR codes immediately without creating an account or providing personal information.'
          }
        ]
      },
      technology: {
        title: 'Technology Stack',
        description: 'Built with modern web technologies for optimal performance and user experience.',
        stack: ['Next.js', 'React', 'Tailwind CSS', 'QRCode.js', 'jsPDF']
      },
      contact: {
        title: 'Get in Touch',
        description: 'Have questions or suggestions? We\'d love to hear from you.'
      }
    },
    footer: {
      rights: 'All rights reserved.',
      description: 'Professional QR code generation for modern businesses and individuals.'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Acerca de',
      language: 'Idioma'
    },
    home: {
      title: 'Generador de Códigos QR',
      subtitle: 'Crea códigos QR profesionales al instante',
      description: 'Genera códigos QR de alta calidad para tu negocio, uso personal o campañas de marketing. Soporte para múltiples tamaños y formatos.',
      textLabel: 'Texto o URL',
      textPlaceholder: 'Ingresa texto o URL para generar código QR',
      sizeLabel: 'Tamaño del Código QR',
      generateBtn: 'Generar Código QR',
      downloadPng: 'Descargar PNG',
      downloadPdf: 'Descargar PDF',
      errorTooLong: 'Contenido demasiado largo para código QR de {size} mm. Por favor acorta o elige un tamaño mayor.',
      errorGenerate: 'Error al generar código QR.',
      features: {
        title: '¿Por Qué Elegir Nuestro Generador QR?',
        fast: {
          title: 'Súper Rápido',
          description: 'Genera códigos QR instantáneamente con nuestro motor optimizado'
        },
        quality: {
          title: 'Alta Calidad',
          description: 'Códigos QR de grado profesional con perfecta confiabilidad de escaneo'
        },
        formats: {
          title: 'Múltiples Formatos',
          description: 'Descarga como PNG o PDF en varios tamaños'
        },
        free: {
          title: 'Completamente Gratis',
          description: 'Sin registro requerido, sin marcas de agua, uso ilimitado'
        }
      }
    },
    about: {
      title: 'Acerca de QR Generator Pro',
      subtitle: 'Generación Profesional de Códigos QR Hecha Simple',
      mission: {
        title: 'Nuestra Misión',
        description: 'Creemos en hacer la generación de códigos QR accesible, rápida y profesional para todos. Ya seas propietario de un negocio, mercadólogo o usuario individual, nuestra herramienta proporciona la calidad y confiabilidad que necesitas.'
      },
      features: {
        title: 'Lo Que Nos Hace Diferentes',
        items: [
          {
            title: 'Calidad Profesional',
            description: 'Nuestros códigos QR se generan con los más altos estándares para asegurar un escaneo perfecto en todos los dispositivos y aplicaciones.'
          },
          {
            title: 'Múltiples Formatos',
            description: 'Exporta tus códigos QR como imágenes PNG o documentos PDF en varios tamaños para satisfacer tus necesidades específicas.'
          },
          {
            title: 'Enfocado en Privacidad',
            description: 'Tus datos se mantienen privados. No almacenamos tu contenido ni rastreamos tu uso. Genera códigos con completa confianza.'
          },
          {
            title: 'Optimizado para Móviles',
            description: 'Diseño completamente responsive que funciona perfectamente en todos los dispositivos, desde computadoras de escritorio hasta teléfonos móviles.'
          },
          {
            title: 'Soporte Multiidioma',
            description: 'Disponible en múltiples idiomas para servir a usuarios de todo el mundo con experiencias localizadas.'
          },
          {
            title: 'Sin Registro',
            description: 'Comienza a generar códigos QR inmediatamente sin crear una cuenta o proporcionar información personal.'
          }
        ]
      },
      technology: {
        title: 'Stack Tecnológico',
        description: 'Construido con tecnologías web modernas para rendimiento óptimo y experiencia de usuario.',
        stack: ['Next.js', 'React', 'Tailwind CSS', 'QRCode.js', 'jsPDF']
      },
      contact: {
        title: 'Ponte en Contacto',
        description: '¿Tienes preguntas o sugerencias? Nos encantaría escucharte.'
      }
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      description: 'Generación profesional de códigos QR para negocios modernos e individuos.'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      language: 'Langue'
    },
    home: {
      title: 'Générateur de Code QR',
      subtitle: 'Créez des codes QR professionnels instantanément',
      description: 'Générez des codes QR de haute qualité pour votre entreprise, usage personnel ou campagnes marketing. Support pour plusieurs tailles et formats.',
      textLabel: 'Texte ou URL',
      textPlaceholder: 'Entrez le texte ou URL pour générer le code QR',
      sizeLabel: 'Taille du Code QR',
      generateBtn: 'Générer Code QR',
      downloadPng: 'Télécharger PNG',
      downloadPdf: 'Télécharger PDF',
      errorTooLong: 'Contenu trop long pour le code QR de {size} mm. Veuillez raccourcir ou choisir une taille plus grande.',
      errorGenerate: 'Échec de la génération du code QR.',
      features: {
        title: 'Pourquoi Choisir Notre Générateur QR?',
        fast: {
          title: 'Ultra Rapide',
          description: 'Générez des codes QR instantanément avec notre moteur optimisé'
        },
        quality: {
          title: 'Haute Qualité',
          description: 'Codes QR de qualité professionnelle avec une fiabilité de scan parfaite'
        },
        formats: {
          title: 'Formats Multiples',
          description: 'Téléchargez en PNG ou PDF dans diverses tailles'
        },
        free: {
          title: 'Entièrement Gratuit',
          description: 'Aucune inscription requise, pas de filigranes, utilisation illimitée'
        }
      }
    },
    about: {
      title: 'À Propos de QR Generator Pro',
      subtitle: 'Génération Professionnelle de Codes QR Simplifiée',
      mission: {
        title: 'Notre Mission',
        description: 'Nous croyons à rendre la génération de codes QR accessible, rapide et professionnelle pour tous. Que vous soyez propriétaire d\'entreprise, marketeur ou utilisateur individuel, notre outil fournit la qualité et la fiabilité dont vous avez besoin.'
      },
      features: {
        title: 'Ce Qui Nous Rend Différents',
        items: [
          {
            title: 'Qualité Professionnelle',
            description: 'Nos codes QR sont générés selon les plus hauts standards pour assurer un scan parfait sur tous les appareils et applications.'
          },
          {
            title: 'Formats Multiples',
            description: 'Exportez vos codes QR en images PNG ou documents PDF en diverses tailles pour répondre à vos besoins spécifiques.'
          },
          {
            title: 'Axé sur la Confidentialité',
            description: 'Vos données restent privées. Nous ne stockons pas votre contenu ni ne suivons votre utilisation. Générez des codes en toute confiance.'
          },
          {
            title: 'Optimisé Mobile',
            description: 'Design entièrement responsive qui fonctionne parfaitement sur tous les appareils, des ordinateurs de bureau aux téléphones mobiles.'
          },
          {
            title: 'Support Multilingue',
            description: 'Disponible en plusieurs langues pour servir les utilisateurs du monde entier avec des expériences localisées.'
          },
          {
            title: 'Pas d\'Inscription',
            description: 'Commencez à générer des codes QR immédiatement sans créer de compte ou fournir d\'informations personnelles.'
          }
        ]
      },
      technology: {
        title: 'Stack Technologique',
        description: 'Construit avec des technologies web modernes pour des performances optimales et une expérience utilisateur excellente.',
        stack: ['Next.js', 'React', 'Tailwind CSS', 'QRCode.js', 'jsPDF']
      },
      contact: {
        title: 'Contactez-nous',
        description: 'Des questions ou suggestions? Nous aimerions vous entendre.'
      }
    },
    footer: {
      rights: 'Tous droits réservés.',
      description: 'Génération professionnelle de codes QR pour entreprises modernes et particuliers.'
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      about: 'Über uns',
      language: 'Sprache'
    },
    home: {
      title: 'QR-Code Generator',
      subtitle: 'Erstellen Sie professionelle QR-Codes sofort',
      description: 'Generieren Sie hochwertige QR-Codes für Ihr Unternehmen, den persönlichen Gebrauch oder Marketingkampagnen. Unterstützung für mehrere Größen und Formate.',
      textLabel: 'Text oder URL',
      textPlaceholder: 'Text oder URL eingeben um QR-Code zu generieren',
      sizeLabel: 'QR-Code Größe',
      generateBtn: 'QR-Code Generieren',
      downloadPng: 'PNG Herunterladen',
      downloadPdf: 'PDF Herunterladen',
      errorTooLong: 'Inhalt zu lang für {size} mm QR-Code. Bitte kürzen oder größere Größe wählen.',
      errorGenerate: 'QR-Code Generierung fehlgeschlagen.',
      features: {
        title: 'Warum Unseren QR-Generator Wählen?',
        fast: {
          title: 'Blitzschnell',
          description: 'Generieren Sie QR-Codes sofort mit unserer optimierten Engine'
        },
        quality: {
          title: 'Hohe Qualität',
          description: 'Professionelle QR-Codes mit perfekter Scan-Zuverlässigkeit'
        },
        formats: {
          title: 'Mehrere Formate',
          description: 'Als PNG oder PDF in verschiedenen Größen herunterladen'
        },
        free: {
          title: 'Völlig Kostenlos',
          description: 'Keine Registrierung erforderlich, keine Wasserzeichen, unbegrenzte Nutzung'
        }
      }
    },
    about: {
      title: 'Über QR Generator Pro',
      subtitle: 'Professionelle QR-Code-Generierung Leicht Gemacht',
      mission: {
        title: 'Unsere Mission',
        description: 'Wir glauben daran, QR-Code-Generierung für jeden zugänglich, schnell und professionell zu machen. Ob Sie Geschäftsinhaber, Vermarkter oder Privatnutzer sind, unser Tool bietet die Qualität und Zuverlässigkeit, die Sie benötigen.'
      },
      features: {
        title: 'Was Uns Unterscheidet',
        items: [
          {
            title: 'Professionelle Qualität',
            description: 'Unsere QR-Codes werden nach höchsten Standards generiert, um perfektes Scannen auf allen Geräten und Anwendungen zu gewährleisten.'
          },
          {
            title: 'Mehrere Formate',
            description: 'Exportieren Sie Ihre QR-Codes als PNG-Bilder oder PDF-Dokumente in verschiedenen Größen, um Ihren spezifischen Anforderungen gerecht zu werden.'
          },
          {
            title: 'Datenschutz-Fokussiert',
            description: 'Ihre Daten bleiben privat. Wir speichern Ihre Inhalte nicht und verfolgen Ihre Nutzung nicht. Generieren Sie Codes mit vollem Vertrauen.'
          },
          {
            title: 'Mobil Optimiert',
            description: 'Vollständig responsives Design, das perfekt auf allen Geräten funktioniert, von Desktop-Computern bis zu Mobiltelefonen.'
          },
          {
            title: 'Mehrsprachige Unterstützung',
            description: 'Verfügbar in mehreren Sprachen, um Benutzer weltweit mit lokalisierten Erfahrungen zu bedienen.'
          },
          {
            title: 'Keine Registrierung',
            description: 'Beginnen Sie sofort mit der QR-Code-Generierung, ohne ein Konto zu erstellen oder persönliche Informationen anzugeben.'
          }
        ]
      },
      technology: {
        title: 'Technologie-Stack',
        description: 'Gebaut mit modernen Web-Technologien für optimale Leistung und Benutzererfahrung.',
        stack: ['Next.js', 'React', 'Tailwind CSS', 'QRCode.js', 'jsPDF']
      },
      contact: {
        title: 'Kontakt',
        description: 'Haben Sie Fragen oder Vorschläge? Wir würden gerne von Ihnen hören.'
      }
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.',
      description: 'Professionelle QR-Code-Generierung für moderne Unternehmen und Einzelpersonen.'
    }
  },
  zh: {
    nav: {
      home: '首页',
      about: '关于我们',
      language: '语言'
    },
    home: {
      title: '二维码生成器',
      subtitle: '立即创建专业二维码',
      description: '为您的业务、个人使用或营销活动生成高质量二维码。支持多种尺寸和格式。',
      textLabel: '文本或网址',
      textPlaceholder: '输入文本或网址来生成二维码',
      sizeLabel: '二维码尺寸',
      generateBtn: '生成二维码',
      downloadPng: '下载PNG',
      downloadPdf: '下载PDF',
      errorTooLong: '{size} mm 二维码内容过长。请缩短内容或选择更大尺寸。',
      errorGenerate: '二维码生成失败。',
      features: {
        title: '为什么选择我们的二维码生成器？',
        fast: {
          title: '闪电般快速',
          description: '使用我们优化的引擎即时生成二维码'
        },
        quality: {
          title: '高质量',
          description: '专业级二维码，具有完美的扫描可靠性'
        },
        formats: {
          title: '多种格式',
          description: '以各种尺寸下载为PNG或PDF'
        },
        free: {
          title: '完全免费',
          description: '无需注册，无水印，无限使用'
        }
      }
    },
    about: {
      title: '关于 QR Generator Pro',
      subtitle: '专业二维码生成变得简单',
      mission: {
        title: '我们的使命',
        description: '我们相信为每个人提供易用、快速、专业的二维码生成服务。无论您是企业主、营销人员还是个人用户，我们的工具都能提供您所需的质量和可靠性。'
      },
      features: {
        title: '我们的优势',
        items: [
          {
            title: '专业品质',
            description: '我们的二维码按最高标准生成，确保在所有设备和应用程序上完美扫描。'
          },
          {
            title: '多种格式',
            description: '将您的二维码导出为PNG图像或PDF文档，有多种尺寸可满足您的特定需求。'
          },
          {
            title: '注重隐私',
            description: '您的数据保持私密。我们不存储您的内容或跟踪您的使用情况。完全安心地生成代码。'
          },
          {
            title: '移动优化',
            description: '完全响应式设计，在所有设备上完美运行，从桌面电脑到移动电话。'
          },
          {
            title: '多语言支持',
            description: '提供多种语言版本，为全球用户提供本地化体验。'
          },
          {
            title: '无需注册',
            description: '立即开始生成二维码，无需创建账户或提供个人信息。'
          }
        ]
      },
      technology: {
        title: '技术栈',
        description: '使用现代网络技术构建，实现最佳性能和用户体验。',
        stack: ['Next.js', 'React', 'Tailwind CSS', 'QRCode.js', 'jsPDF']
      },
      contact: {
        title: '联系我们',
        description: '有问题或建议吗？我们很乐意听取您的意见。'
      }
    },
    footer: {
      rights: '版权所有。',
      description: '为现代企业和个人提供专业二维码生成服务。'
    }
  },
  ja: {
    nav: {
      home: 'ホーム',
      about: '概要',
      language: '言語'
    },
    home: {
      title: 'QRコードジェネレーター',
      subtitle: 'プロフェッショナルなQRコードを瞬時に作成',
      description: 'ビジネス、個人利用、マーケティングキャンペーン用の高品質QRコードを生成します。複数のサイズと形式をサポート。',
      textLabel: 'テキストまたはURL',
      textPlaceholder: 'QRコードを生成するテキストまたはURLを入力',
      sizeLabel: 'QRコードサイズ',
      generateBtn: 'QRコード生成',
      downloadPng: 'PNGダウンロード',
      downloadPdf: 'PDFダウンロード',
      errorTooLong: '{size} mm QRコードにはコンテンツが長すぎます。短縮するかより大きなサイズを選択してください。',
      errorGenerate: 'QRコードの生成に失敗しました。',
      features: {
        title: '当社のQRジェネレーターを選ぶ理由',
        fast: {
          title: '超高速',
          description: '最適化されたエンジンでQRコードを即座に生成'
        },
        quality: {
          title: '高品質',
          description: '完璧なスキャン信頼性を持つプロフェッショナルグレードのQRコード'
        },
        formats: {
          title: '複数フォーマット',
          description: '様々なサイズでPNGまたはPDFとしてダウンロード'
        },
        free: {
          title: '完全無料',
          description: '登録不要、透かしなし、無制限使用'
        }
      }
    },
    about: {
      title: 'QR Generator Pro について',
      subtitle: 'プロフェッショナルなQRコード生成をシンプルに',
      mission: {
        title: '私たちのミッション',
        description: '私たちは、すべての人にとってQRコード生成をアクセシブル、高速、そしてプロフェッショナルにすることを信念としています。企業オーナー、マーケター、個人ユーザーであろうと、私たちのツールは必要な品質と信頼性を提供します。'
      },
      features: {
        title: '私たちの違い',
        items: [
          {
            title: 'プロフェッショナル品質',
            description: '私たちのQRコードは最高基準で生成され、すべてのデバイスとアプリケーションで完璧なスキャンを保証します。'
          },
          {
            title: '複数フォーマット',
            description: 'QRコードをPNG画像またはPDF文書として様々なサイズでエクスポートし、特定のニーズに対応します。'
          },
          {
            title: 'プライバシー重視',
            description: 'あなたのデータはプライベートに保たれます。コンテンツを保存したり使用状況を追跡したりしません。完全な信頼でコードを生成してください。'
          },
          {
            title: 'モバイル最適化',
            description: 'デスクトップコンピューターから携帯電話まで、すべてのデバイスで完璧に動作する完全レスポンシブデザイン。'
          },
          {
            title: '多言語サポート',
            description: '世界中のユーザーにローカライズされた体験を提供する複数言語対応。'
          },
          {
            title: '登録不要',
            description: 'アカウント作成や個人情報提供なしで、すぐにQRコード生成を開始できます。'
          }
        ]
      },
      technology: {
        title: 'テクノロジースタック',
        description: '最適なパフォーマンスとユーザーエクスペリエンスのため現代的なウェブ技術で構築。',
        stack: ['Next.js', 'React', 'Tailwind CSS', 'QRCode.js', 'jsPDF']
      },
      contact: {
        title: 'お問い合わせ',
        description: 'ご質問やご提案がございましたら、ぜひお聞かせください。'
      }
    },
    footer: {
      rights: '全著作権所有。',
      description: '現代的企業と個人のためのプロフェッショナルQRコード生成。'
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let translation = translations[language];
    
    for (const k of keys) {
      if (translation && typeof translation === 'object') {
        translation = translation[k];
      } else {
        // Fallback to English if translation not found
        translation = translations['en'];
        for (const fallbackKey of keys) {
          if (translation && typeof translation === 'object') {
            translation = translation[fallbackKey];
          }
        }
        break;
      }
    }
    
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
