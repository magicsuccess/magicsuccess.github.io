# 20 Prompt Labels สำหรับ ChatGPT: ใช้ให้ตรงงาน พร้อม Prompt สร้างโปสเตอร์ BOSS JACK

ภาพต้นทางเรียกคำเหล่านี้ว่า “คำสั่งลัด ChatGPT” แต่ในทางใช้งานควรมองว่าเป็น **Prompt labels** หรือป้ายกำกับเจตนา ไม่ใช่ Slash Commands อย่างเป็นทางการและไม่ใช่โหมดลับของ ChatGPT การพิมพ์ `/human` หรือ `/expert` เพียงคำเดียวจึงไม่รับประกันรูปแบบผลลัพธ์ สิ่งที่ทำให้คำตอบดีขึ้นจริงคือการระบุ **บทบาท + เป้าหมาย + บริบท + รูปแบบผลลัพธ์ + เกณฑ์ตรวจสอบ** ให้ครบ

บทความนี้คัดเฉพาะลำดับ 1–20 จากภาพ ได้แก่ `/human` ถึง `/compare` พร้อมแปลงแต่ละคำให้เป็น Prompt เต็มที่คัดลอกและปรับใช้ได้

## สูตรกลางที่ใช้กับทั้ง 20 Prompt

> Act as [role]. Your goal is to [goal]. Context: [facts, audience, constraints]. Produce [output format, length, tone]. Check the result against [accuracy, completeness, clarity, evidence, or brand rules]. If essential information is missing, ask concise questions before answering.

ให้แทนข้อความในวงเล็บด้วยข้อมูลจริงของงาน และอย่าใส่บทบาทหลายแบบที่ขัดกันใน Prompt เดียว

## 1–5: น้ำเสียง ผู้เชี่ยวชาญ ผู้บริหาร ไวรัล และ SEO

### 1. `/human` — เขียนให้เป็นธรรมชาติ

> Rewrite the text below in natural Thai for working adults. Keep the original meaning, remove robotic wording and unnecessary repetition, and use a warm professional tone. Output one polished version followed by three key edits you made. Text: [paste text]

เหมาะกับการปรับร่างที่แข็งหรือเป็นภาษาหุ่นยนต์ แต่ควรระบุผู้อ่านและน้ำเสียงด้วย คำว่า “human” ไม่ใช่หลักฐานว่าข้อความจะตรวจไม่พบว่าใช้ AI

### 2. `/expert` — ตอบแบบผู้เชี่ยวชาญเฉพาะด้าน

> Act as a [specific field] specialist. Explain [topic] for [audience level]. Separate verified facts, assumptions, risks, and recommendations. Cite primary sources for claims that may have changed. Do not invent missing information.

คำว่า Expert ต้องตามด้วยสาขา ระดับผู้อ่าน และมาตรฐานหลักฐาน ไม่เช่นนั้นโมเดลอาจตอบกว้างเกินไป

### 3. `/ceo` — วิเคราะห์แบบผู้บริหาร

> Analyze [business situation] as a CEO preparing a decision. Provide: executive summary, business impact, three options, cost and risk trade-offs, recommended option, first 30-day actions, and metrics for review. State all assumptions.

เหมาะกับการยกระดับจาก “สรุปข้อมูล” เป็น “ข้อมูลเพื่อการตัดสินใจ” แต่ไม่ควรใช้แทนข้อมูลการเงินจริงหรือความเห็นผู้มีอำนาจอนุมัติ

### 4. `/viral` — ออกแบบคอนเทนต์ที่มีโอกาสถูกแชร์

> Create five Facebook post concepts about [topic] for [audience]. For each concept provide the hook, core value, emotional angle, suggested 4:5 visual, caption, and call to action. Avoid clickbait, unsupported claims, and guaranteed performance promises.

ไม่มี Prompt ใดรับประกันไวรัลได้ จึงควรขอหลายแนวคิดแล้วทดสอบจากข้อมูลจริง เช่น Reach, Saves, Shares และ Retention

### 5. `/seo` — วางบทความให้ตอบคำค้นหา

> Create an SEO content brief for the keyword [keyword] and audience [audience]. Include search intent, title options, outline, questions to answer, internal-link ideas, factual claims that require sources, meta description, and a final quality checklist. Write for readers first and avoid keyword stuffing.

SEO ที่ดีไม่ใช่การยัดคำค้นหา แต่คือการตอบเจตนาการค้นหาอย่างครบถ้วนและตรวจสอบข้อเท็จจริงได้

## 6–10: วิจารณ์ สอน อธิบาย สรุป และวางกลยุทธ์

### 6. `/critic` — วิจารณ์อย่างสร้างสรรค์

> Review [work] as a constructive critic. Evaluate it against [criteria]. Separate strengths, weaknesses, evidence, and high-impact revisions. Rank the three most important fixes and show one improved example. Do not change the core objective.

ควรกำหนดเกณฑ์ เช่น ความถูกต้อง ความชัดเจน หรือ Conversion เพื่อป้องกันคำวิจารณ์ตามรสนิยมล้วน ๆ

### 7. `/teacher` — สอนเป็นขั้นตอน

> Teach [topic] to [learner profile]. Start with the mental model, then explain the process step by step with one worked example, common mistakes, a short practice exercise, and an answer key. Use plain Thai and define technical terms.

เหมาะกับคู่มือและบทเรียน โดยระบุพื้นฐานเดิมของผู้เรียนเพื่อให้ระดับความยากเหมาะสม

### 8. `/eli5` — อธิบายเรื่องยากด้วยภาษาง่าย

> Explain [topic] in very simple Thai using one everyday analogy. Keep essential facts accurate, avoid jargon, and end with a section called “What this simple explanation leaves out” listing important nuances.

ELI5 ช่วยให้เริ่มเข้าใจ แต่เรื่องกฎหมาย การแพทย์ การเงิน หรือเทคนิคขั้นสูงต้องมีส่วนบอกข้อจำกัดของคำอธิบายแบบย่อ

### 9. `/brief` — สรุปสั้น กระชับ

> Summarize [content] for [reader] in no more than [length]. Include the main point, three key facts, decisions needed, and next action. Preserve dates, numbers, names, and warnings exactly. Mark uncertain information clearly.

คำว่า Brief ควรระบุความยาวและสิ่งที่ห้ามตกหล่น มิฉะนั้นข้อมูลสำคัญอาจถูกตัดออกพร้อมรายละเอียดรอง

### 10. `/strategy` — วางกลยุทธ์ระยะยาว

> Develop a [time period] strategy for [goal]. Include current situation, target audience, strategic choices, what not to do, phased initiatives, resources, risks, leading and lagging indicators, review cadence, and stop or pivot conditions.

Strategy ต้องมีทางเลือก สิ่งที่จะไม่ทำ ตัวชี้วัด และเงื่อนไขทบทวน ไม่ใช่เพียงรายการกิจกรรมยาว ๆ

## 11–15: การตลาด วิจัย ระดมไอเดีย ปรับ Prompt และสรุป

### 11. `/copywriter` — เขียนข้อความการตลาด

> Write three Facebook captions for [offer] aimed at [audience]. Use the brand voice [description]. Each version must include a clear benefit, credible proof or reason to believe, one call to action, and no exaggerated or unverifiable claims. Maximum [length].

เพิ่มข้อมูลสินค้า กลุ่มเป้าหมาย หลักฐาน และข้อห้ามของแบรนด์ เพื่อให้ข้อความโน้มน้าวโดยไม่เกินจริง

### 12. `/research` — วางแผนค้นคว้าอย่างมีหลักฐาน

> Research [question] using current primary and authoritative sources. Define the scope and cutoff date, compare at least [number] independent sources when appropriate, note contradictions, separate facts from inference, and provide direct links with access dates. Report evidence gaps instead of guessing.

คำว่า Research ไม่ได้ทำให้ข้อมูลสดโดยอัตโนมัติ ต้องเปิดใช้การค้นหา ระบุวันตัดข้อมูล และตรวจแหล่งอ้างอิงจริง

### 13. `/brainstorm` — ระดมไอเดียหลายทิศทาง

> Brainstorm 20 ideas for [goal] under these constraints: [constraints]. Group them into safe, bold, and experimental options. Make each idea meaningfully different, then score the top five by impact, effort, brand fit, and testability.

การจัดกลุ่มและให้เกณฑ์คัดเลือกช่วยลดปัญหาได้ไอเดียจำนวนมากแต่คล้ายกันและนำไปใช้ต่อไม่ได้

### 14. `/promptengineer` — ปรับ Prompt ให้ชัดขึ้น

> Improve the prompt below without changing its intended goal. Identify ambiguities and missing inputs, then produce a revised prompt containing role, objective, context, output format, constraints, quality checks, and a rule to ask questions when critical data is missing. Original prompt: [paste prompt]

Prompt Engineering ที่ดีคือการลดความกำกวม ไม่ใช่ทำ Prompt ให้ยาวที่สุด

### 15. `/summarize` — ย่อเนื้อหาโดยรักษาสาระ

> Summarize [document] for [purpose]. Produce: a 2-sentence overview, five key points, all decisions and owners, deadlines, unresolved questions, and exact figures. Do not add information that is absent from the source.

ต่างจาก `/brief` ตรงที่ Summarize มุ่งย่อแหล่งข้อมูล ส่วน Brief อาจจัดรูปใหม่เพื่อให้ผู้อ่านตัดสินใจได้เร็ว

## 16–20: แปล ปรับปรุง ทำให้ง่าย ขยาย และเปรียบเทียบ

### 16. `/translate` — แปลโดยรักษาความหมายและน้ำเสียง

> Translate the text from [source language] to [target language] for [audience]. Preserve names, dates, numbers, formatting, and brand terms. Use [formal/conversational] tone. List ambiguous phrases and translation choices separately. Text: [paste text]

ระบุภาษา กลุ่มผู้อ่าน และศัพท์ที่ต้องคงไว้ ช่วยลดการแปลตรงตัวหรือเปลี่ยนความหมายโดยไม่ตั้งใจ

### 17. `/improve` — ปรับคุณภาพด้วยเกณฑ์ที่วัดได้

> Improve [content] for clarity, accuracy, structure, and usefulness while preserving its meaning and factual claims. Show the revised version first, followed by a concise change log. Flag any claim that needs verification.

ควรกำหนดว่า “ดีขึ้น” หมายถึงอะไร และให้แสดง Change Log เพื่อเช็กว่า AI เปลี่ยนสาระหรือไม่

### 18. `/simplify` — ทำเรื่องยากให้เข้าใจง่าย

> Simplify [content] for [audience level]. Use short sentences, define necessary terms, keep every critical warning and number, and organize the answer into clear steps. Include a final accuracy check against the original.

Simplify ต้องรักษาข้อแม้ ตัวเลข และคำเตือน ไม่ใช่ตัดรายละเอียดจนความหมายผิด

### 19. `/expand` — ขยายเนื้อหาอย่างมีขอบเขต

> Expand [outline or draft] into [desired length and format]. Add examples, transitions, practical steps, and questions readers may ask. Keep the existing claims unchanged; mark any new claim that requires a source and avoid padding or repetition.

กำหนดหัวข้อ ความยาว และชนิดรายละเอียดที่ต้องการ เพื่อไม่ให้ได้ข้อความฟุ่มเฟือย

### 20. `/compare` — เปรียบเทียบด้วยเกณฑ์เดียวกัน

> Compare [option A] and [option B] for [user scenario]. Use the same criteria: cost, capabilities, limitations, learning curve, risk, and best-fit user. State the date and assumptions, cite current sources, and end with a conditional recommendation rather than a universal winner.

การเปรียบเทียบต้องใช้เกณฑ์เดียวกัน ระบุวันของข้อมูล และแนะนำแบบมีเงื่อนไข เพราะคำตอบอาจต่างกันตามผู้ใช้

## Prompt ที่ใช้สร้างโปสเตอร์ Facebook

งานนี้แยกเป็นสองขั้นเพื่อควบคุมคุณภาพข้อความ: ให้ AI สร้างพื้นหลังและตัวละครโดย **ไม่สร้างตัวอักษร** แล้ววางรายการ 20 Prompt, ชื่อแบรนด์ และโลโก้จริงภายหลัง

> Create a premium educational AI productivity poster background for Magic Success Thailand, vertical 4:5. Use a sophisticated navy, cream, metallic-gold and restrained teal palette. Place a polished semi-anime, semi-realistic Asian male executive mascot representing BOSS JACK at upper-right: smart natural black hair, mustard-gold polo shirt, black trousers and white sneakers, holding a tablet in a confident friendly pose. Reserve a large cream content panel with exactly 20 blank rounded rows arranged in two columns, ten per column, plus a blank headline area and a brand-seal area at bottom-right. Use warm gold rim light and subtle technology details. No text, letters, numbers, logos, pseudo-text, watermarks, Chinese characters, extra people, malformed hands or clutter.

หลังสร้างพื้นหลัง ให้วางข้อความ `20 PROMPT LABELS`, รายการ `/human` ถึง `/compare`, `BOSS JACK` และ `MAGIC SUCCESS THAILAND` ด้วยฟอนต์จริง พร้อมใช้โลโก้ Magic Success Thailand v2 เพื่อหลีกเลี่ยงตัวอักษรเพี้ยนและโลโก้ปลอม

## Checklist ก่อนนำ Prompt ไปใช้

1. ระบุเป้าหมายและผู้อ่านให้ชัด ไม่พึ่ง `/คำ` เพียงอย่างเดียว
2. กำหนดข้อมูลตั้งต้น รูปแบบ ความยาว น้ำเสียง และข้อห้าม
3. ขอแหล่งอ้างอิงเมื่อข้อมูลอาจเปลี่ยนแปลงหรือมีความเสี่ยงสูง
4. แยกข้อเท็จจริง สมมติฐาน และคำแนะนำออกจากกัน
5. ตรวจชื่อ วันที่ ตัวเลข ลิงก์ และข้อกล่าวอ้างก่อนนำไปเผยแพร่

## ภาพผลงานที่สร้างจาก Prompt

![โปสเตอร์ Facebook รวม 20 Prompt Labels พร้อม BOSS JACK และ Magic Success Thailand](assets/images/articles/chatgpt-20-prompt-labels-boss-jack.png)

โปสเตอร์สัดส่วน 4:5 สำหรับ Facebook ใช้ภาพพื้นหลังที่สร้างด้วย AI แล้ววางข้อความและโลโก้จริงภายหลัง จึงอ่านได้ชัดและรักษาเอกลักษณ์แบรนด์ได้ดีกว่าการขอให้โมเดลสร้างตัวอักษรทั้งหมดในครั้งเดียว

แหล่งอ้างอิง: [OpenAI — Images in ChatGPT](https://help.openai.com/en/articles/11084440-chatgpt-images)

เรียบเรียงและออกแบบโดย Magic Success Thailand · BOSS JACK · เผยแพร่และอัปเดตล่าสุด 4 กันยายน 2569 · มี AI ช่วยสร้างภาพพื้นหลังและจัดทำร่าง โดยผ่านการตรวจ Accuracy, Completeness, Clarity, Brand Consistency และ Usability ก่อนเผยแพร่
