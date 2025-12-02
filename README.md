# Kinetic Log

**A Completely Free, Highly Private Mood Tracking Application for Rapid Mixed Cycling**

---

## 🔒 Privacy-First Architecture

Kinetic Log is built from the ground up with **absolute privacy** as the core principle:

- **Zero Cloud Storage**: All data stays on your device. Forever.
- **Encrypted Database**: Uses Realm with 256-bit AES encryption
- **Secure Key Storage**: Encryption keys stored in device keychain (iOS Keychain / Android Keystore)
- **No Analytics**: No tracking, no telemetry, no third-party SDKs
- **No PHI Transmission**: Your Protected Health Information never leaves your device
- **Open Source**: Full transparency - audit the code yourself

---

## 🎯 Core Features

### Multi-Entry Daily Logging
Track rapid mood fluctuations throughout the day with:
- **Energy Scale**: -5 (Severe Depression) to +5 (Manic)
- **Anxiety Levels**: 0 to 10
- **Mixed State Tracking**: Flag episodes with both depressive and manic symptoms
- **Custom Tags**: Add context to entries (triggers, medications, sleep, etc.)

### Automated LMHC Reporting
Generate comprehensive PDF reports for your Licensed Mental Health Counselor:
- **Aggregated Statistics**: Weekly/monthly summaries
- **Visual Charts**: Energy and anxiety fluctuations over time
- **Intra-Day Patterns**: See mood cycling within 24-hour periods
- **Export via Email**: Native share functionality for easy delivery

### Security Features
- **Biometric Lock**: Face ID / Touch ID / Fingerprint protection
- **Local-Only**: No internet connection required or used
- **Secure Deletion**: Cryptographic key destruction ensures data is unrecoverable

---

## 🛠️ Tech Stack

- **Framework**: React Native (Cross-platform iOS & Android)
- **Language**: Vanilla JavaScript
- **Database**: Realm (Client-side encrypted)
- **Security**: 
  - `react-native-keychain` for key storage
  - `react-native-biometrics` for app locking
- **Navigation**: React Navigation
- **Charts**: `react-native-chart-kit`
- **PDF Generation**: `react-native-pdf-lib`
- **CI/CD**: GitHub Actions with Release Please

---

## ⚠️ Important Legal Disclaimers

**Kinetic Log is NOT a medical device and is NOT intended to diagnose, treat, cure, or prevent any disease.**

This application is designed as a **personal tracking tool** to assist individuals and their mental health professionals in understanding mood patterns. It:

- Does NOT provide medical advice
- Does NOT replace professional mental health care
- Is NOT HIPAA compliant (because it doesn't transmit or store PHI on servers)
- Should be used alongside, not instead of, professional treatment

**In Crisis?**
- 🇺🇸 **988 Suicide & Crisis Lifeline**: Call or text 988
- 🇺🇸 **Crisis Text Line**: Text HOME to 741741
- 🌍 Find international resources at https://findahelpline.com

---

## 🚀 Development Status

Currently in **Phase 0: Professional Repository & CI/CD Setup**

See [Project Roadmap](./ROADMAP.md) for detailed development timeline.

---

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🤝 Contributing

This is a personal project focused on privacy and mental health support. Contributions are welcome, but must adhere to:
- **Privacy-first principles** (no telemetry, analytics, or cloud features)
- **Accessibility standards** (WCAG 2.1 AA minimum)
- **Security best practices** (code review required for all crypto/storage changes)

---

## 💙 Philosophy

Mental health tracking should be:
1. **Private** - Your data, your device, your control
2. **Free** - No subscriptions, no ads, no upsells
3. **Useful** - Designed for real clinical collaboration
4. **Respectful** - No dark patterns, no data harvesting

If you're struggling with rapid cycling, mixed episodes, or any mental health challenge: **You are not alone, and your privacy matters.**
