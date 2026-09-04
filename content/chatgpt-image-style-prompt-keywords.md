# 20 คำศัพท์ Prompt สร้างภาพด้วย ChatGPT: ใช้อย่างไรให้ตรงกว่าพิมพ์ `/คำเดียว`

อินโฟกราฟิก “50 คำสั่ง Code ChatGPT ด้านการสร้างภาพ” ใช้เป็นคลังไอเดียได้ แต่ข้อความที่มองเห็นในภาพนี้มี **20 คำ** และคำเหล่านี้ไม่ใช่ Slash Command หรือโหมดลับอย่างเป็นทางการของ ChatGPT ส่วนใหญ่เป็นคำศัพท์บอก **ชนิดภาพ มุมมอง หรือสไตล์** ซึ่งโมเดลเข้าใจจากภาษาธรรมดา เครื่องหมาย `/` จึงไม่จำเป็น

ตัวอย่างเช่น `/Watercolor` อาจพอทำให้ระบบเดาว่าต้องการภาพสีน้ำ แต่คำสั่ง `Create a watercolor illustration of...` ชัดกว่า เพราะบอกทั้งการกระทำและสไตล์ หลักการที่ให้ผลสม่ำเสมอกว่าคือ **Subject + Purpose + Composition + Style + Lighting/Color + Aspect Ratio + Constraints**

## ซ้ำกับคู่มือเมื่อวานหรือไม่

ซ้ำเฉพาะข้อเท็จจริงพื้นฐานว่า Slash Label ที่แชร์กันในโซเชียลไม่ใช่คำสั่งระบบที่มีความหมายตายตัว แต่เนื้อหาไม่ซ้ำกัน คู่มือก่อนหน้าอธิบายคำย่อสำหรับงานทั่วไป เช่น `/brief`, `/translate` และ `/table` ส่วนบทความนี้เจาะคำศัพท์สำหรับกำกับผลลัพธ์ภาพ พร้อมตัวอย่างการเขียน Prompt เต็มประโยค

## 20 คำในภาพ แบ่งเป็น 4 กลุ่ม

### 1. โครงสร้างและมุมมอง

- **Exploded View** — ภาพแยกชิ้นส่วนของวัตถุให้เห็นตำแหน่งและความสัมพันธ์ ควรระบุว่าเป็นวัตถุอะไร ชิ้นส่วนเรียงตามแกนใด และต้องมี/ไม่มีป้ายกำกับ
- **Isometric** — มุมมองสามมิติแบบไอโซเมตริก นิยมใช้กับห้อง เมือง ระบบ และอินโฟกราฟิก ควรกำหนดความเรียบง่าย สี และพื้นหลัง
- **Infographic** — ภาพสื่อข้อมูล ควรให้ข้อมูล ลำดับความสำคัญ โครงหน้า และข้อความที่ต้องใช้จริง ไม่ควรหวังให้คำเดียวสร้างข้อมูลที่ถูกต้องขึ้นมาเอง
- **Visual Metaphor** — ภาพเปรียบเทียบเชิงแนวคิด เช่น บันไดแทนความก้าวหน้า ควรบอกแนวคิดต้นทาง สิ่งที่ใช้เปรียบ และอารมณ์ที่ต้องการ

### 2. ความสมจริง ตัวแบบ และการออกแบบ

- **Photorealistic** — ภาพสมจริง ควรเสริมชนิดกล้อง แสง วัสดุ ระยะภาพ และรายละเอียดที่ห้ามเพี้ยน
- **Portrait** — ภาพบุคคล ควรระบุบุคลิก เสื้อผ้า ท่าทาง ฉาก แสง และระยะภาพ
- **Character** — ออกแบบตัวละคร ควรกำหนดรูปลักษณ์ เสื้อผ้า บุคลิก สีประจำตัว และมุมที่ต้องการ
- **Mascot** — ออกแบบมาสคอต ควรบอกแบรนด์ กลุ่มเป้าหมาย รูปทรง สี และคุณสมบัติที่ต้องจำได้ง่าย
- **Cartoon** — ภาพการ์ตูน เป็นคำกว้าง ควรระบุเพิ่มว่าเรียบง่าย น่ารัก Editorial Comic หรือ 3D Cartoon
- **3D** — ภาพสามมิติ ควรระบุวัสดุ แสง มุมกล้อง ฉาก และระดับความสมจริง

### 3. สไตล์วัสดุและงานศิลป์

- **Pixar-style** — โดยทั่วไปหมายถึงแอนิเมชัน 3D ที่ดูอบอุ่นและแสดงอารมณ์ชัด แต่การอ้างชื่อสตูดิโอไม่ได้รับประกันผล คำอธิบายลักษณะภาพโดยตรง เช่น “stylized 3D animated character, expressive eyes, warm cinematic lighting” ควบคุมผลได้ดีกว่า
- **Clay Style** — ภาพเหมือนหุ่นดินปั้น ควรระบุพื้นผิวรอยปั้น แสงนุ่ม และฉากแบบ Stop-motion
- **Paper Cut** — ภาพตัดกระดาษซ้อนชั้น ควรระบุจำนวนชั้น ขอบกระดาษ เงา และชุดสี
- **Watercolor** — ภาพสีน้ำ ควรบอกความโปร่งใส การไหลของสี เนื้อกระดาษ และความละเอียดของเส้น
- **Oil Painting** — ภาพสีน้ำมัน ควรระบุฝีแปรง พื้นผิวผ้าใบ แสง และโทนสี
- **Sketch** — ภาพร่าง ควรเลือกดินสอ หมึก ถ่าน หรือเส้นก่อสร้าง และบอกระดับความหยาบ
- **Line Art** — ภาพเส้น ควรระบุความหนาเส้น สีเส้น พื้นหลัง และว่าจะใช้ระบายสีต่อหรือไม่

### 4. ชิ้นงานปลายทาง

- **Icon** — ไอคอน ควรกำหนดรูปทรง ระบบกริด สี ขนาดใช้งาน และพื้นหลังโปร่งใส
- **Sticker** — สติกเกอร์ ควรบอกท่าทาง ขอบไดคัต พื้นหลังโปร่งใส และเผื่อพื้นที่รอบตัวแบบ
- **Emoji** — อีโมจิ ควรใช้รูปทรงอ่านง่าย รายละเอียดน้อย สีชัด และตรวจความชัดเมื่อย่อเล็ก

## สูตร Prompt ที่ใช้ได้จริง

> Create a [deliverable] showing [subject and action] for [purpose/audience]. Use [composition or camera view] and a [visual style] treatment. Apply [lighting, palette, material, or texture]. Set the aspect ratio to [ratio]. Keep [critical details] consistent. Avoid [unwanted text, logos, distortions, extra objects, or background clutter].

การใช้ภาษาอังกฤษมักช่วยให้ชื่อสไตล์และศัพท์งานภาพไม่กำกวม แต่สามารถสั่งเป็นภาษาไทยได้เช่นกัน สิ่งสำคัญคืออธิบายภาพที่ต้องการ ไม่ใช่พึ่งชื่อ `/คำสั่ง` เพียงคำเดียว

## 6 ตัวอย่างพร้อมคัดลอก

### Exploded View สำหรับอธิบายสินค้า

> Create a clean exploded-view product illustration of a reusable water bottle. Separate the cap, silicone seal, filter, bottle body, and base vertically while preserving their correct order and proportions. Use a white background, soft studio shadows, navy and gold accents, and a 16:9 layout. Leave clear space on the right for Thai labels to be added later. Avoid invented components, random text, logos, and watermarks.

### Isometric Infographic สำหรับ Workflow

> Create an isometric infographic showing a four-step AI content workflow: plan, create, review, and publish. Use four connected workstations viewed from the same angle, a navy, cream, and gold palette, clean geometric shapes, and a 16:9 layout. Use simple numbered markers only. Avoid dense text, inconsistent perspective, extra steps, and brand logos.

### Visual Metaphor สำหรับกำลังใจ

> Create a visual metaphor for steady progress: a small golden staircase rising from a dark blue desk toward warm morning light. Place one notebook and one pencil at the first step. Use a refined editorial illustration style, strong negative space, and a calm hopeful mood. Vertical 4:5 composition. Avoid text, people, clichés, and clutter.

### Portrait แบบภาพถ่ายสมจริง

> Create a photorealistic business portrait of a confident Thai entrepreneur in a beige suit and black inner top, standing in a modern office. Use soft window light, natural skin texture, an 85mm portrait-lens look, shallow depth of field, and warm neutral colors. Vertical 4:5. Keep facial features, hands, clothing, and jewelry anatomically consistent. Avoid excessive skin smoothing, random text, logos, and watermarks.

### Paper Cut สำหรับ Social Post

> Create a layered paper-cut illustration of a crescent moon above a path leading toward a bright horizon. Use visible paper edges, five depth layers, soft cast shadows, and a navy, cream, and gold palette. Square 1:1 composition with open space at the top for a headline added later. Avoid generated text, gradients that look plastic, and excessive detail.

### Sticker แบบพื้นหลังโปร่งใส

> Create a cute 3D clay-style sticker of a cheerful office cat giving a thumbs-up beside a tiny laptop. Use soft clay texture, a bold cream die-cut outline, friendly proportions, and a transparent background. Centered square composition. Avoid words, logos, realistic fur, extra limbs, and cropped edges.

## วิธีตรวจภาพก่อนนำไปใช้

1. **ตรงวัตถุประสงค์หรือไม่** — เป็น Icon, Sticker, Infographic หรือภาพประกอบตามที่ต้องการจริงหรือไม่
2. **องค์ประกอบครบหรือไม่** — จำนวนชิ้นส่วน ขั้นตอน ตัวละคร และวัตถุตรงตาม Prompt
3. **รายละเอียดสำคัญคงที่หรือไม่** — ตรวจใบหน้า มือ รูปทรงสินค้า โลโก้ สี และวัสดุ
4. **ข้อความถูกต้องหรือไม่** — หากเป็นภาษาไทยหรือข้อมูลสำคัญ ควรสร้างพื้นหลังแล้ววางข้อความภายหลังเพื่อลดคำผิด
5. **พร้อมใช้ในช่องทางจริงหรือไม่** — ตรวจอัตราส่วน พื้นที่วางข้อความ ความโปร่งใส และความชัดเมื่อย่อขนาด

หากผลรอบแรกยังไม่ตรง ให้แก้ทีละตัวแปร เช่น เปลี่ยนเฉพาะมุมมองหรือแสง และบอกสิ่งที่ต้องคงเดิม อย่าโยนคำสไตล์หลายแบบที่ขัดกันลงใน Prompt เดียว เพราะระบบต้องเดาว่าอะไรสำคัญที่สุด

## ข้อสรุป

คำทั้ง 20 ใช้ได้ในฐานะ **Visual Vocabulary** หรือคลังคำศัพท์สำหรับอธิบายภาพ แต่ไม่ใช่ Code และไม่ใช่ Slash Command ที่เปิดความสามารถพิเศษ สูตรที่น่าเชื่อถือกว่าคือเลือกคำให้ตรงงาน แล้วเขียนเป็น Prompt เต็มโดยกำหนดวัตถุประสงค์ องค์ประกอบ สไตล์ แสง สี อัตราส่วน และข้อห้ามให้ครบ

แหล่งอ้างอิง: [OpenAI — Images in ChatGPT](https://help.openai.com/en/articles/11084440-chatgpt-images) อธิบายว่าผู้ใช้สร้างภาพโดยบรรยายภาพที่ต้องการ ระบุอัตราส่วน และอธิบายจุดที่ต้องแก้ไขได้โดยตรง

เนื้อหาที่เกี่ยวข้อง: [8 วลีภาษาอังกฤษสำหรับเขียน Prompt ให้ AI เข้าใจตรงใจ](/articles/english-daily-clear-ai-prompts/) · [8 วลีภาษาอังกฤษสำหรับเขียน Prompt ภาพหลายช่องและ Storyboard](/articles/english-daily-multi-panel-image-prompts/) · [8 วลีภาษาอังกฤษสำหรับ Portrait และ Fashion](/articles/english-daily-portrait-fashion-prompts/)

เรียบเรียงโดย MagicSuccess Thailand · เผยแพร่ ตรวจข้อเท็จจริง และอัปเดตล่าสุด 4 กันยายน 2569 · มี AI ช่วยจัดทำร่างและผ่านการตรวจ Accuracy, Completeness, Clarity, Safety และ Usability ก่อนเผยแพร่
