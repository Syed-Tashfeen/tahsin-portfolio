import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.resolve(__dirname, '../public/resume');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const outputPath = path.join(targetDir, 'Tashfeen_Resume.pdf');
const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 36, bottom: 36, left: 40, right: 40 }
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

// Colors
const primaryColor = '#0F172A';
const secondaryColor = '#334155';
const mutedColor = '#64748B';
const accentColor = '#2563EB';

// Header
doc.font('Helvetica-Bold').fontSize(22).fillColor(primaryColor).text('Syed Tashfeenul Haque', { align: 'center' });
doc.moveDown(0.3);

doc.font('Helvetica').fontSize(9.5).fillColor(secondaryColor)
  .text('+91 7763029413   |   stashfeenulhaque@gmail.com   |   github.com/Syed-Tashfeen   |   linkedin.com/in/syed-tashfeenul-haque-b724aa2b5', { align: 'center' });

doc.moveDown(0.6);

// Helper for horizontal line
function drawSectionHeader(title) {
  doc.moveDown(0.4);
  doc.font('Helvetica-Bold').fontSize(11).fillColor(primaryColor).text(title.toUpperCase(), { characterSpacing: 1 });
  doc.strokeColor('#CBD5E1').lineWidth(0.75)
    .moveTo(doc.page.margins.left, doc.y + 2)
    .lineTo(doc.page.width - doc.page.margins.right, doc.y + 2)
    .stroke();
  doc.moveDown(0.5);
}

// Summary
drawSectionHeader('Summary');
doc.font('Helvetica').fontSize(9.5).fillColor(secondaryColor).lineGap(2)
  .text('ECE undergraduate with a solid foundation in C++ and Python, a strong inclination towards mathematics and analytical thinking. Actively studying LLM and transformer architectures — building models from scratch and applying concepts across real-world projects with a structured problem-solving mindset.');

// Projects
drawSectionHeader('Projects');

// Project 1: Smart Solar Grass Cutter
doc.font('Helvetica-Bold').fontSize(10).fillColor(primaryColor).text('Smart Solar Grass Cutter', { continued: true });
doc.font('Helvetica').fontSize(9.5).fillColor(mutedColor).text(' | Arduino ATmega328p, HC-SR04, IR Sensors, Bluetooth (HC-05), Proteus', { continued: true });
doc.font('Helvetica').fontSize(9).fillColor(secondaryColor).text('Sep 2025 – Oct 2025', { align: 'right' });

doc.font('Helvetica').fontSize(9).fillColor(secondaryColor).lineGap(1.5);
const p1Bullets = [
  'Designed and built an autonomous solar-powered grass cutter integrating a 20W solar panel with an ATmega328p microcontroller; achieved 6+ hours of uninterrupted operation per charge cycle with zero external power dependency.',
  'Implemented real-time obstacle detection using ultrasonic and IR sensors with a 30 cm detection threshold, cutting false-trigger rate to under 5% in field tests.',
  'Enabled wireless Android app control over Bluetooth with an effective range of ~10 m, reducing direct manual intervention by 80% compared to conventional mowers.',
  'Simulated and validated complete circuit in Proteus; recognized as the best project in the batch and highest-budget build at ₹6,000.'
];
p1Bullets.forEach(b => {
  doc.text(`•  ${b}`, { indent: 10 });
});

doc.moveDown(0.4);

// Project 2: Agentic AI Loan Assistant
doc.font('Helvetica-Bold').fontSize(10).fillColor(primaryColor).text('Agentic AI Loan Assistant', { continued: true });
doc.font('Helvetica').fontSize(9.5).fillColor(mutedColor).text(' | FastAPI, Streamlit, Google GenAI (Gemini), Python, asyncio', { continued: true });
doc.font('Helvetica').fontSize(9).fillColor(secondaryColor).text('EY Techathon', { align: 'right' });

const p2Bullets = [
  'Architected a 5-agent orchestration pipeline (Conversation -> KYC -> Credit -> Offer -> Document) with a FastAPI backend and Streamlit frontend themed for Tata Capital.',
  'Integrated Google GenAI (Gemini 2.5 Flash) via an asyncio.to_thread wrapper, achieving average agent response latency of ~2-3 s; reduced simulated loan intake cycle from ~25 min to under 9 min end-to-end.',
  'Implemented in-memory session persistence (optional Redis) and automated PDF sanction letter generation, cutting document turnaround from hours to <10 s.',
  'Built a real-time Agent Logs panel in the Streamlit UI with timestamps and color-coded badges for live orchestration monitoring across all 5 agents.'
];
p2Bullets.forEach(b => {
  doc.text(`•  ${b}`, { indent: 10 });
});

doc.moveDown(0.4);

// Project 3: myChotuLLM
doc.font('Helvetica-Bold').fontSize(10).fillColor(primaryColor).text('myChotuLLM', { continued: true });
doc.font('Helvetica').fontSize(9.5).fillColor(mutedColor).text(' | Python, PyTorch, Transformer Architecture', { continued: true });
doc.font('Helvetica-Oblique').fontSize(9).fillColor(secondaryColor).text('In Progress', { align: 'right' });

const p3Bullets = [
  'Building a decoder-only transformer from scratch in PyTorch — implementing scaled dot-product multi-head self-attention, learned positional encodings, and autoregressive text generation with greedy and top-k sampling.',
  'Experimenting with model scales from 1M to 15M parameters; targeting a character-level perplexity of <45 on a curated text corpus with ~10M tokens.',
  'Profiling training throughput and memory utilization to optimize batch size vs. sequence length trade-offs, achieving ~3x training speed-up with gradient accumulation on a single GPU.'
];
p3Bullets.forEach(b => {
  doc.text(`•  ${b}`, { indent: 10 });
});

// Education
drawSectionHeader('Education');
doc.font('Helvetica-Bold').fontSize(10).fillColor(primaryColor).text('Abdul Kalam Technical University (AKTU) / Galgotias College of Eng. & Tech.', { continued: true });
doc.font('Helvetica').fontSize(9).fillColor(secondaryColor).text('Aug 2024 – May 2028 (Expected)', { align: 'right' });
doc.font('Helvetica-Oblique').fontSize(9.5).fillColor(secondaryColor).text('B.Tech – Electronics and Communication Engineering');
doc.font('Helvetica').fontSize(9).fillColor(mutedColor).text('Relevant Coursework: Data Structures & Algorithms, Digital Electronics, Signals & Systems, Embedded Systems, Engineering Mathematics, Microcontrollers');

// Skills
drawSectionHeader('Skills');
const skillsList = [
  { label: 'Languages', items: 'Python, C++, JavaScript, TypeScript, SQL, C' },
  { label: 'ML & AI', items: 'PyTorch, Transformers, LLM Architecture, Google GenAI (Gemini), Multimodal AI' },
  { label: 'Backend & Frameworks', items: 'Node.js, Express, FastAPI, REST APIs, WebSockets' },
  { label: 'Frontend', items: 'React, HTML, CSS, Tailwind CSS, Vite' },
  { label: 'Databases', items: 'MongoDB, MySQL, Drizzle ORM' },
  { label: 'Tools', items: 'Git, GitHub, Postman, Proteus, VS Code, Linux' }
];

skillsList.forEach(s => {
  doc.font('Helvetica-Bold').fontSize(9).fillColor(primaryColor).text(`•  ${s.label}: `, { continued: true, indent: 8 });
  doc.font('Helvetica').fontSize(9).fillColor(secondaryColor).text(s.items);
});

doc.end();

writeStream.on('finish', () => {
  console.log('Successfully generated Tashfeen_Resume.pdf at', outputPath);
});
