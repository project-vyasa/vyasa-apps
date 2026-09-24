/** Lipi default: ṚV 1.1.1, TTS 4.5.1.1 (Śrī Rudram), BG 2.47 — blank-line separated. */
export const LIPI_SEED = [
	// Ṛgveda 1.1.1 saṃhitā (vyasa-lipi RV_1_1_SAMHITA, verse number dropped)
	`अ॒ग्निमी॑ळे पु॒रोहि॑तं य॒ज्ञस्य॑ दे॒वमृ॒त्विजं॑ ।
होता॑रं रत्न॒धात॑मं ॥`,
	// Taittirīya Saṃhitā 4.5.1.1 Namakam (kyv_corpus TS_4_5_1_1)
	`नम॑स्ते रु॒द्र म॒न्यव॑ उ॒तोत॒ इष॑वे॒ नमः॑ ।
नम॑स्ते अस्तु॒ धन्व॑ने बा॒हुभ्या॑मु॒त ते॒ नमः॑ ॥`,
	// Bhagavad Gītā 2.47 (vyasa-bg mula, verse number dropped)
	`कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।
मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥`
].join('\n\n');

/** Varṇa default: first word of ṚV 1.1.1 saṃhitā — short enough to inspect akṣara by akṣara. */
export const VARNA_SEED = 'अ॒ग्निमी॑ळे';
